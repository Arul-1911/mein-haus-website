"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleUserRound, MessageSquareText, X } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

const messages = [
  {
    id: 1,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Home Renovation",
    personName: "John Doe",
    role: "professional",
    message:
      "Hi there! I've reviewed your project requirements and would like to discuss the timeline.",
    timestamp: "2025-12-15T10:30:00Z",
    status: "unread",
  },
  {
    id: 2,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Customer Support",
    personName: "Sarah Wilson",
    role: "support",
    message:
      "Your recent payment has been processed successfully. Thank you for your business!",
    timestamp: "2025-12-15T09:15:00Z",
    status: "unread",
  },
  {
    id: 3,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Bathroom Remodeling",
    personName: "Mike Johnson",
    role: "professional",
    message:
      "The materials have arrived and we're ready to start tomorrow as scheduled.",
    timestamp: "2025-12-14T16:45:00Z",
    status: "read",
  },
  {
    id: 4,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Interior Design",
    personName: "Emma Davis",
    role: "professional",
    message:
      "I've sent you three design concepts for your living room. Let me know which one you prefer.",
    timestamp: "2025-12-14T14:20:00Z",
    status: "read",
  },
  {
    id: 5,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Technical Support",
    personName: "Alex Chen",
    role: "support",
    message:
      "We've resolved the issue with your account settings. Everything should be working now.",
    timestamp: "2025-12-13T11:10:00Z",
    status: "read",
  },
  {
    id: 6,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Plumbing Services",
    personName: "David Brown",
    role: "professional",
    message:
      "The replacement parts are on backorder. Expected delivery is next Tuesday.",
    timestamp: "2025-12-12T13:25:00Z",
    status: "read",
  },
  {
    id: 7,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Electrical Work",
    personName: "Lisa Garcia",
    role: "professional",
    message: "Safety inspection completed. All circuits are now up to code.",
    timestamp: "2025-12-11T10:05:00Z",
    status: "read",
  },
  {
    id: 8,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Billing Department",
    personName: "Robert Taylor",
    role: "support",
    message:
      "Your invoice #INV-2024-001 has been generated and is available in your account.",
    timestamp: "2025-12-10T17:30:00Z",
    status: "read",
  },
  {
    id: 9,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Landscaping",
    personName: "Carlos Martinez",
    role: "professional",
    message:
      "The plants you selected are now in stock. Should we proceed with the installation?",
    timestamp: "2024-12-09T14:15:00Z",
    status: "read",
  },
  {
    id: 10,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Deep Cleaning",
    personName: "Anna Kowalski",
    role: "professional",
    message:
      "Confirming our appointment for this Friday at 2 PM. See you then!",
    timestamp: "2024-12-08T12:00:00Z",
    status: "read",
  },
  {
    id: 11,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Account Support",
    personName: "Jennifer Lee",
    role: "support",
    message: "Your profile verification has been completed successfully.",
    timestamp: "2024-12-07T09:45:00Z",
    status: "read",
  },
  {
    id: 12,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Custom Carpentry",
    personName: "Tom Anderson",
    role: "professional",
    message:
      "The custom cabinet design is ready for your review. When would you like to see it?",
    timestamp: "2024-12-06T16:20:00Z",
    status: "read",
  },
  {
    id: 13,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Painting Services",
    personName: "Maria Rodriguez",
    role: "professional",
    message:
      "The paint samples are ready for you to view. Would tomorrow work for you?",
    timestamp: "2024-12-05T11:30:00Z",
    status: "read",
  },
  {
    id: 14,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Platform Support",
    personName: "Kevin Smith",
    role: "support",
    message:
      "We've updated our terms of service. Please review when you have a moment.",
    timestamp: "2024-12-04T15:10:00Z",
    status: "read",
  },
  {
    id: 15,
    profilePic: "/customer/root/home/message-dp.jpg",
    serviceName: "Roof Repair",
    personName: "James Wilson",
    role: "professional",
    message:
      "The weather looks good for next week. We can start the roof repairs on Monday.",
    timestamp: "2024-12-03T10:25:00Z",
    status: "read",
  },
];

export default function MessageDropdown({ open, setOpen }) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          onClick={() => setOpen(!open)}
          className="relative focus:outline-none hover:opacity-80 transition"
        >
          <MessageSquareText className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-[var(--primary)] rounded-full">
            {messages.length}
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={15}
        className="w-90 max-w-[90vw] p-2 shadow-xl rounded-xl bg-white border border-gray-100"
      >
        <div className="flex justify-between items-center mb-2 p-1">
          <h3 className="font-semibold text-md text-[#262626]">Messages</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-[#262626] hover:text-gray-700"
          >
            <X />
          </button>
        </div>

        <hr />

        {messages?.length > 0 ? (
          <ul
            className="space-y-4   text-sm text-gray-700 max-h-100 overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {messages?.map((n) => (
              // Grid div
              <div
                key={n.id}
                className="grid grid-cols-6 gap-6  md:gap-3 w-full p-3 last:pb-0 hover:bg-[#1E9BD01F] cursor-pointer  last:border-none rounded-2xl "
              >
                {/* profile div  */}
                <div className="col-span-1 place-items-center">
                  <Avatar className="place-items-center h-12 w-12 rounded-full">
                    <AvatarImage src={n.profilePic} className="object-cover" />
                    <AvatarFallback>
                      <CircleUserRound size={30} className="text-gray-600" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                {/* Message div  */}
                <div className="col-span-3 place-items-center">
                  <div className="flex">
                    {/* left side  */}
                    <div className="flex flex-col justify-baseline gap-1 w-full">
                      <p className="font-semibold">
                        {n.serviceName.slice(0, 17)}
                        {n.serviceName.length > 17 ? "..." : ""}
                      </p>
                      <div className="flex flex-row gap-2 items-center">
                        <p className="font-medium text-[#262626] text-xs">
                          {n.personName.slice(0, 30)}
                        </p>
                        <p
                          className={cn(
                            n.role === "support"
                              ? "bg-[#1E9BD01F] text-[#1E9BD0]"
                              : "bg-[#FD760D1F] text-[#FD760D]",
                            "rounded-2xl px-2 py-1 text-[10px]"
                          )}
                        >
                          {n.role}
                        </p>
                      </div>
                      <p className="text-xs font-normal text-[#9D9D9D]">
                        {n.message.slice(0, 20)}...
                      </p>
                    </div>
                  </div>
                </div>
                {/* right side  */}
                <div className="col-span-2 flex flex-col justify-between space-y-1 place-items-end">
                  <div>
                    {new Date(n.timestamp).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                  {n.status === "unread" && (
                    <p className="bg-[#1E9BD0] text-white px-1 text-center rounded-4xl h-5 w-5">
                      1
                    </p>
                  )}
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <div className="text-sm text-gray-500 min-h-80 flex flex-col justify-center items-center">
            <div>
              <Image
                src="/customer/root/empty-message.png"
                alt="No Messages Image"
                height={150}
                width={150}
              />
            </div>
            <p className="text-[#9D9D9D] mt-4 px-2 text-center">
              No messages yet. Check back later for updates!
            </p>
          </div>
        )}

        {/* <Link
          href="/customer/messages"
          onClick={() => setOpen(false)}
          className="block text-xs text-[var(--primary)] mt-3 text-right hover:underline"
        >
          View all →
        </Link> */}
      </PopoverContent>
    </Popover>
  );
}
