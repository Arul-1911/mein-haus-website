"use client";

import {
  useChatWithAIMutation,
  useLazyGetChatHistoryQuery,
} from "@/features/website/apiWebsite";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import Link from "next/link";
import { History, Loader2, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

export default function Chatbot({ userId = null }) {
  const [open, setOpen] = useState(false);
  const [chatId, setChatId] = useState("");
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const fileRef = useRef(null);
  const bottomRef = useRef(null);

  const [chatWithAssistant, { isLoading: isChatLoading }] =
    useChatWithAIMutation();
  const [getChatHistory, { isLoading: isHistoryQueryLoading }] =
    useLazyGetChatHistoryQuery();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Clear error messages while user enters input
  useEffect(() => {
    if (error && (query.trim() || images?.length > 0)) {
      setError("");
    }
  }, [query, images, error]);

  // Load chat history
  const loadChatHistory = async () => {
    if (!chatId || historyLoaded || isLoadingHistory) return;

    setIsLoadingHistory(true);
    setError("");

    try {
      const result = await getChatHistory(chatId).unwrap();

      if (result?.status && result?.details?.history) {
        const historyMessages = result.details.history.map((msg, index) => {
          const isHuman = msg.type === "human";

          // Process content and extract images for human messages
          let processedContent = "";
          let images = null;

          if (isHuman && Array.isArray(msg.content)) {
            // Handle array content format
            const textParts = [];
            const imageParts = [];

            msg.content.forEach((item) => {
              if (item.type === "text") {
                textParts.push(item.text);
              } else if (item.type === "image") {
                // Convert base64 image data to blob for display
                try {
                  const base64Data =
                    item.source_type === "base64"
                      ? item.data
                      : item.source?.data;
                  if (base64Data) {
                    const mimeType = item.mime_type || "image/jpeg";
                    const blob = new Blob(
                      [
                        Uint8Array.from(atob(base64Data), (c) =>
                          c.charCodeAt(0)
                        ),
                      ],
                      { type: mimeType }
                    );
                    imageParts.push(blob);
                  }
                } catch (e) {
                  console.warn("Failed to process history image:", e);
                }
              }
            });

            processedContent = textParts.join(" ").trim();
            images = imageParts.length > 0 ? imageParts : null;
          } else {
            // Handle string content or AI messages
            processedContent = isHuman
              ? Array.isArray(msg.content)
                ? msg.content.map((c) => c.text || c).join(" ")
                : msg.content
              : msg.content;
          }

          return {
            id: `history_${index}_${Date.now()}`,
            role: isHuman ? "user" : "bot",
            content: processedContent,
            images: images,
            timestamp: new Date().toISOString(),
            isHistory: true,
            agent: !isHuman ? msg.name || "virtual_assistant" : null,
          };
        });

        // Add history loaded indicator message
        const historyLoadedMsg = {
          id: `history_loaded_${Date.now()}`,
          role: "system",
          content: "Chat history loaded...",
          timestamp: new Date().toISOString(),
          isSystemMessage: true,
        };

        setMessages([...historyMessages, historyLoadedMsg]);
        setHistoryLoaded(true);
      } else {
        setError("No chat history found for this conversation.");
      }
    } catch (error) {
      console.error("Error loading chat history:", error);

      // Handle different error scenarios
      if (error?.status === 404) {
        setError("Chat history not found.");
      } else if (error?.status === 403) {
        setError("Access denied. You don't have permission to view this chat.");
      } else if (error?.status >= 500) {
        setError("Server error while loading history. Please try again.");
      } else if (!navigator.onLine) {
        setError("No internet connection. Please check your connection.");
      } else {
        setError("Failed to load chat history. Please try again.");
      }
    } finally {
      setIsLoadingHistory(false);
    }
  };

  // Reset history state when chatId changes
  useEffect(() => {
    if (chatId) {
      setHistoryLoaded(false);
    }
  }, [chatId]);

  // Parse markdown links and convert to JSX
  const parseMessageContent = (content) => {
    if (!content || typeof content !== "string") return content;

    // Regex to match markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      const [fullMatch, linkText, url] = match;

      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }

      // Add the parsed link
      parts.push(
        <a
          key={`link-${match.index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline font-medium"
        >
          {linkText}
          <ExternalLink size={12} />
        </a>
      );

      lastIndex = match.index + fullMatch.length;
    }

    // Add remaining text after the last link
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    // If no links found, return original content
    return parts.length > 0 ? parts : content;
  };

  // Submit handler
  const validateAndSend = async () => {
    setError("");

    let currentQuery = "";
    let currentImages = [];

    if (!query.trim() && images.length === 0) {
      setError("Please type a message or upload a jpg image.");
      return;
    }

    if (images.length > 2) {
      setError("You can upload a maximum of 2 images per message.");
      return;
    }

    for (let f of images) {
      if (!f || f.size == undefined) {
        setError("Invalid file detected. please try again.");
        return;
      }
      if (f.size > 2 * 1024 * 1024) {
        setError("Image size must be less than 2MB");
        return;
      }
    }

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: query.trim(),
      timestamp: new Date().toISOString(),
      images: images.length > 0 ? [...images] : null,
    };

    try {
      // Updating the user message state
      if (query.trim() || images.length > 0) {
        setMessages((prev) => [...prev, userMessage]);
      }

      // Loading state details
      const loadingMessage = {
        id: Date.now() + 1,
        role: "bot",
        content: "AI is thinking...",
        isLoading: true,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, loadingMessage]);

      currentQuery = query;
      currentImages = [...images];
      setQuery("");
      setImages([]);

      // Resetting the file input
      if (fileRef.current) {
        fileRef.current.value = "";
      }

      const res = await chatWithAssistant({
        userId,
        chatId,
        query: currentQuery,
        images: currentImages,
      }).unwrap();

      const newChatId = res.details?.chat_id || chatId;
      if (!chatId && newChatId) {
        setChatId(newChatId);
      }

      setMessages((prev) => {
        const filteredMessages = prev.filter((msg) => !msg.isLoading);

        if (res.status) {
          const aiMessage = {
            id: Date.now() + 2,
            role: "bot",
            content: res?.details?.response,
            timestamp: new Date().toISOString(),
            agent: res.details?.agent || null,
          };

          return [...filteredMessages, aiMessage];
        }

        return filteredMessages;
      });
    } catch (error) {
      console.error("chat error", error);
      setMessages((prev) => prev.filter((msg) => !msg.isLoading));

      // Appropriate error messages
      if (error?.status === 429) {
        setError("Too many requests. Please wait a moment and try again.");
      } else if (error?.status >= 500) {
        setError("I'm having trouble connecting. Please try again shortly.");
      } else if (!navigator.onLine) {
        setError("No internet connection. Please check your connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      if (!query) setQuery(currentQuery);
      if (images.length === 0) setImages(currentImages);
    }
  };

  // Enter key handler
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isChatLoading) {
        validateAndSend();
      }
    }
  };

  const handleFileChange = (e) => {
    try {
      const files = Array.from(e.target.files || []);

      const validFiles = files.filter((file) => {
        return (
          file.type === "image/jpeg" ||
          file.name.toLowerCase().endsWith(".jpg") ||
          file.name.toLowerCase().endsWith(".jpeg")
        );
      });

      if (validFiles.length !== files.length) {
        setError("Only JPG/JPEG images are allowed.");
      }

      setImages((prev) => [...prev, ...validFiles].slice(0, 2));
    } catch (error) {
      console.error("File selection error:", error);
      setError("Error selecting files. Please try again.");
    }
  };

  const removeImage = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <main>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-5 right-6  z-50 flex items-center justify-center w-17 h-17 rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer text-3xl"
        aria-label="Open chat"
      >
        🤖
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-29 lg:bottom-25 right-5 z-50 w-80 md:w-96 max-h-[70vh] flex flex-col rounded-2xl shadow-xl bg-white overflow-hidden transition-all duration-300 ease-in-out",
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary/75 text-white p-3">
          {/* <div className="flex items-center justify-between bg-[linear-gradient(90deg,rgba(18,168,227,1)_0%,rgba(87,199,133,1)_50%,rgba(237,209,83,1)_100%)] text-white p-3"> */}
          {/* <div className="flex items-center justify-between bg-[linear-gradient(90deg,rgba(30,155,208,1)_0%,rgba(61,219,167,1)_36%,rgba(237,205,59,1)_63%,rgba(253,118,13,1)_100%)] text-white p-3"> */}
          {/* <div className="flex items-center justify-between bg-[linear-gradient(90deg,rgba(47,171,224,1)_0%,rgba(147,60,230,1)_100%)] text-white p-3"> */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">🤖</div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <div className="text-xs flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1" />
                Online
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                "text-white hover:bg-primary/20 hover:text-white mr-1 cursor-pointer",
                (historyLoaded || !chatId || isLoadingHistory) &&
                  "opacity-50 cursor-not-allowed"
              )}
              onClick={loadChatHistory}
              disabled={historyLoaded || !chatId || isLoadingHistory}
              aria-label="Load chat history"
            >
              {isLoadingHistory ? (
                <Loader2 size={22} className="animate-spin" />
              ) : (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button>
                        <History size={22} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="mb-3">
                      <p>Load Chat History</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-primary/30 hover:text-white text-md font-bold cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </Button>
          </div>
        </div>

        {/* Banner */}
        {userId && (
          <div className="bg-green-50 text-green-700 text-center text-sm p-2">
            <strong>Hello !</strong> Your conversations are automatically saved.
          </div>
        )}
        {!userId && (
          <div className="bg-[#fef3c7] text-yellow-700 text-center text-xs p-3">
            <strong>Guest Mode: </strong> Your chats won't be saved.{" "}
            <Link
              href="https://meinhaus.ca/customer/login"
              className="underline"
            >
              Login to save
            </Link>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 min-h-[200px] scrollbar-hide">
          {messages?.length === 0 && (
            <div className="text-center text-gray-500 text-sm mt-8">
              <div className="text-3xl mb-2">👋</div>
              <p>Hello! How can I assist you today?</p>
              {chatId && !historyLoaded && (
                <p className="text-xs mt-2 text-blue-600">
                  Click the history button to load previous messages
                </p>
              )}
            </div>
          )}

          {messages?.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex",
                msg.role === "user"
                  ? "justify-end"
                  : msg.role === "system"
                  ? "justify-center"
                  : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] p-3 rounded-2xl shadow-sm whitespace-pre-wrap break-words",
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : msg.role === "system"
                    ? "bg-gray-100 text-gray-600 text-sm border border-gray-300 rounded-full px-4 py-2 max-w-none"
                    : msg.isLoading
                    ? "bg-gray-200 text-gray-600 rounded-bl-md animate-pulse"
                    : cn(
                        "bg-white text-gray-800 border border-gray-200 rounded-bl-md",
                        msg.isHistory && "bg-gray-50 border-gray-300"
                      )
                )}
              >
                <div className="flex items-center gap-2">
                  <span className={cn(msg.isLoading && "italic")}>
                    {msg.isLoading
                      ? msg.content
                      : parseMessageContent(msg.content)}
                  </span>
                </div>

                {msg.images && msg.images.length > 0 && (
                  <div className="flex gap-2 mt-2 mb-1 flex-wrap">
                    {msg.images.map((img, i) => (
                      <img
                        key={i}
                        src={URL.createObjectURL(img)}
                        className="w-16 h-16 rounded border object-cover"
                        alt="Uploaded img"
                      />
                    ))}
                  </div>
                )}

                {!msg.isLoading && !msg.isSystemMessage && (
                  <div className="flex gap-1 items-center text-xs opacity-70 mt-2">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    {msg.isHistory && !msg.isSystemMessage && (
                      <span className="text-xs text-black opacity-75">
                        <History size={17} />
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-600 text-sm p-3 border-t bg-red-50 border-red-200">
            <div className="flex items-center justify-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Image preview */}
        {images?.length > 0 && (
          <div className="border-t p-3 bg-white">
            <div className="text-xs text-gray-600 mb-2 font-medium">
              Selected Images:({images.length}/2)
            </div>
            <div className="flex gap-2 flex-wrap">
              {images?.map((img, i) => (
                <div key={i} className="relative group">
                  <img
                    key={i}
                    src={URL.createObjectURL(img)}
                    className="w-12 h-12 rounded border object-cover"
                    alt="preview"
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 cursor-pointer"
                    aria-label="Remove image"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="border-t bg-white p-3">
          <div className="flex items-end gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => fileRef.current?.click()}
              disabled={isChatLoading}
              className="flex-shrink-0 cursor-pointer"
            >
              📎
            </Button>
            <Input
              type="file"
              ref={fileRef}
              accept=".jpg,.jpeg,image/jpeg"
              multiple
              hidden
              onChange={handleFileChange}
            />
            <Input
              placeholder="Type your message..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isChatLoading}
              rows={1}
              className="flex-1 resize-none"
            />
            <Button
              onClick={validateAndSend}
              disabled={isChatLoading}
              className="flex-shrink-0 cursor-pointer"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
