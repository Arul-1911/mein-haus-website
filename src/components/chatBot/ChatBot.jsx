"use client";

import { useChatWithAIMutation } from "@/features/website/apiWebsite";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { History, Loader2 } from "lucide-react";

export default function Chatbot({ userId = null }) {
  const [open, setOpen] = useState(false);
  const [chatId, setChatId] = useState("");
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const fileRef = useRef(null);
  const bottomRef = useRef(null);

  const [chatWithAssistant, { isLoading: isChatLoading }] =
    useChatWithAIMutation();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //Clear error messages while user enters input
  useEffect(() => {
    if (error && (query.trim() || images?.length > 0)) {
      setError("");
    }
  }, [query, images, error]);

  //Submit handler
  const validateAndSend = async () => {
    setError("");

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
      //updating the user message state
      if (query.trim() || images.length > 0) {
        setMessages((prev) => [...prev, userMessage]);
      }

      //Loading state details
      const loadingMessage = {
        id: Date.now() + 1,
        role: "bot",
        content: "AI is thinking...",
        isLoading: true,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, loadingMessage]);

      const currentQuery = query;
      const currentImages = [...images];
      setQuery("");
      setImages([]);

      //Resetting the file input
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
      // appropriate error messages
      if (error?.status === 429) {
        setError("Too many requests. Please wait a moment and try again.");
      } else if (error?.status >= 500) {
        setError("Server error. Please try again later.");
      } else if (!navigator.onLine) {
        setError("No internet connection. Please check your connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      setQuery(currentQuery);
      setImages(currentImages);
    }
  };

  //Enter key handler
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
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-5 right-6 z-50 flex items-center justify-center w-15 h-15 rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer text-2xl"
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
        <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary/70 text-white p-3">
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
          <div className="flex items-center ">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-primary/20 mr-1 cursor-pointer"
              aria-label="Chat history"
            >
              <History size={20} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-primary/30 text-md font-bold cursor-pointer"
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
          <div className="bg-[#fef3c7] text-yellow-700 text-center text-xs p-2">
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
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 min-h-[200px] custom-scrollbar">
          {messages?.length === 0 && (
            <div className="text-center text-gray-500 text-sm mt-8">
              <div className="text-3xl mb-2">👋</div>
              <p>Hello! How can I assist you today?</p>
            </div>
          )}

          {messages?.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] p-3 rounded-2xl shadow-sm whitespace-pre-wrap break-words",
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : msg.isLoading
                    ? "bg-gray-200 text-gray-600 rounded-bl-md animate-pulse"
                    : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                )}
              >
                <div className="flex items-center gap-2">
                  {/* {msg.isLoading && (
                    <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                  )} */}
                  <span className={cn(msg.isLoading && "italic")}>
                    {msg.content}
                  </span>
                </div>

                {msg.images && msg.images.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
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

                {!msg.isLoading && (
                  <div className="text-xs opacity-70 mt-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
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
    </>
  );
}
