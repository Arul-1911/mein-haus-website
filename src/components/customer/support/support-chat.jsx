"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { CheckCheck, EllipsisVertical, Link, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import KeepOpenButton from "./close-ticket";
import CloseTicketButton from "./deny-ticket-close";
import CancelTicketButton from "./cancel-ticket";

// Chat support component
function ChatWithSupport({ chat, status }) {
  const [image, setImage] = useState(null);

  const imgUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    setImage(URL.createObjectURL(file));
  };

  const imgRemove = () => {
    if (image) {
      setImage(null);
    }
  };

  return (
    <main className="bg-white shadow border py-3 px-6 rounded-xl">
      {/* top section  */}
      <div className="flex flex-wrap justify-between gap-5 items-center">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={chat.pro.profileImage} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-medium text-[#233D4D]">{chat.pro.name || "N/A"}</p>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold">{chat.projectName}</p>
            <div className="space-x-2">
              <span className="font-medium text-[#FD760D]">
                {chat.projectId}
              </span>
              <span className="font-medium text-[#9D9D9D]">|</span>
              <span className="font-medium text-[#9D9D9D]">
                {chat.serviceName}
              </span>
            </div>
          </div>
          {status !== "Cancelled" && status !== "Resolved" && (
            <div className="justify-items-center">
              {/* three dots  */}
              <CancelTicketButton />
            </div>
          )}
        </div>
      </div>
      <hr className="my-3" />
      {/* Chat close request section  */}
      {status === "Active" && (
        <div className="bg-[#F8F8F8] flex flex-wrap gap-3 items-center justify-between p-4 my-4">
          <p className="font-medium">
            Support is requesting to close the ticket
          </p>
          <div className="flex justify-between gap-4">
            <KeepOpenButton />
            <CloseTicketButton />
          </div>
        </div>
      )}
      {/* chat section  */}
      <div className="my-3 mt-6">
        <div
          className="max-h-[60dvh] overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          {chat?.chat?.length > 0 ? (
            <section>
              {chat?.chat?.map((chat) => (
                <div
                  key={chat.id}
                  className={cn(
                    "flex items-start gap-3",
                    chat.from === "customer" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "md:max-w-[50%] flex gap-3 items-center",
                      chat.from === "support" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div className={cn("flex flex-col p-2")}>
                      <div>
                        <p
                          className={cn(
                            "font-normal rounded-xl p-3",
                            chat.from === "customer"
                              ? "text-[#FFFFFF] bg-[#1E9BD0]"
                              : "text-[#9D9D9D] bg-[#F6F6F6]"
                          )}
                        >
                          {chat.message}
                        </p>
                        {chat?.images && (
                          <div
                            className={cn(
                              "font-normal my-3 flex rounded-xl p-3",
                              chat.from === "customer"
                                ? "text-[#FFFFFF] justify-end"
                                : "text-[#9D9D9D] bg-[#F6F6F6] justify-start w-fit"
                            )}
                          >
                            <Image
                              src="/customer/root/ongoing-work/no-message.png"
                              alt="Fallback image"
                              height={100}
                              width={100}
                            />
                          </div>
                        )}
                      </div>
                      <div
                        className={`font-normal flex items-center gap-1 text-[#9D9D9D] mt-2 mx-1 ${
                          chat.from === "customer" && "justify-end"
                        }`}
                      >
                        <span className="text-sm">{chat.time} </span>
                        <span>
                          {chat.from === "customer" && (
                            <CheckCheck size={16} className="text-[#9D9D9D]" />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section className="flex flex-col h-[50dvh] justify-center items-center">
              <Image
                src="/customer/root/ongoing-work/no-message.png"
                alt="Fallback image"
                height={200}
                width={200}
              />
              <p className="font-medium text-center mt-3 text-[#9D9D9D]">
                Start the conversation by saying hello!
              </p>
            </section>
          )}
        </div>
      </div>
      {/* type message section */}
      <div
        className={cn(
          (status === "Resolved" || status === "Cancelled") &&
            "cursor-not-allowed"
        )}
      >
        {image && (
          <div className="my-4 w-fit relative">
            <Image
              src={image}
              height={202}
              width={200}
              alt="uploaded image"
              className="h-30 w-30 rounded-xl"
            />
            <button
              className="absolute top-1 right-2 text-red-600 cursor-pointer"
              onClick={imgRemove}
            >
              X
            </button>
          </div>
        )}
        <div className="flex items-center w-full py-1 px-1 border-t gap-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          {/* Left: 10% */}
          <div className="w-[15%] md:w-[5%] flex justify-center">
            <label
              htmlFor="image"
              className={
                (cn(
                  (status === "Resolved" || status === "Cancelled") &&
                    "cursor-not-allowed"
                ),
                "text-primary cursor-pointer")
              }
            >
              <input type="file" hidden id="image" onChange={imgUpload} />
              <Link className="text-gray-600" />
            </label>
          </div>

          {/* Middle: full */}
          <div className="flex-1">
            {(status === "Active" || status === "Not yet started") && (
              <input
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 outline-none"
              />
            )}
            {status === "Cancelled" && (
              <p className="text-[#ABABAB] font-medium w-full px-3 py-2 outline-none">
                This query has been marked as cancelled.
              </p>
            )}
            {status === "Resolved" && (
              <p className="text-[#ABABAB] font-medium w-full px-3 py-2 outline-none">
                This query has been marked as Resolved.
              </p>
            )}
          </div>

          {/* Right: 10% */}
          <div className="w-[15%] md:w-[5%] flex justify-center">
            <Send
              className={
                (cn(
                  (status === "Resolved" || status === "Cancelled") &&
                    "cursor-not-allowed"
                ),
                "text-primary cursor-pointer")
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChatWithSupport;
