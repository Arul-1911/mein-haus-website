"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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
];

function ChatProfiles() {
  const params = useParams();
  const chatId = params.chatid;
  return (
    <main className="bg-white shadow mx-auto rounded-2xl">
      <div className="p-2 px-3">
        <h2 className="text-black font-semibold my-3 text-xl">Message</h2>
        <div className="flex justify-between items-center my-5 p-2 px-3 bg-[#F6F6F6] rounded-xl">
          <input
            type="text"
            className="outline-none text-sm"
            placeholder="Search here..."
          />
          <span>
            <Search size={18} />
          </span>
        </div>
        <div>
          {messages?.length > 0 ? (
            <ul
              className="space-y-6   text-sm text-gray-700 max-h-100 overflow-y-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {messages?.map((n) => (
                <Link href={`/customer/all-messages/${n.id}`} key={n.id}>
                  {/* Grid div */}
                  <div
                    key={n.id}
                    className={`grid grid-cols-6 gap-6  md:gap-3 w-full p-3 last:pb-0 ${
                      Number(chatId) === Number(n.id) ? "bg-[#e5e5e5]" : ""
                    } hover:bg-[#F6F6F6] cursor-pointer  last:border-none rounded-2xl my-4`}
                  >
                    {/* profile div  */}
                    <div className="col-span-1 place-items-center">
                      <Avatar className="place-items-center h-12 w-12 rounded-full">
                        <AvatarImage
                          src={n.profilePic}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          <CircleUserRound
                            size={30}
                            className="text-gray-600"
                          />
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
                          </div>
                          <p className="text-xs font-normal pb-3 text-[#9D9D9D]">
                            {n.message.slice(0, 20)}...
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* right side  */}
                    <div className="col-span-2 flex flex-col justify-between py-1 place-items-end">
                      <div className="text-[#9D9D9D] text-xs">
                        {new Date(n.timestamp).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </div>
                      {n.status === "unread" && (
                        <p className="bg-[#F2A307] text-white px-1 text-center rounded-4xl h-5 w-5">
                          1
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
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
        </div>
      </div>
    </main>
  );
}

export default ChatProfiles;
