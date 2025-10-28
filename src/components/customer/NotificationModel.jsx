"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BadgeCheck, Bell, Briefcase, FileText, X } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

export default function NotificationDropdown({ open, setOpen }) {
  const notifications = [
    {
      id: 1,
      text: "Your project has been marked as completed by the pro",
      read: false,
      icon: <Briefcase />,
      timestamp: "2025-12-15T10:30:00Z",
    },
    {
      id: 2,
      text: "Your estimation has been successfully created. Review and proceed with the next steps.",
      read: false,
      icon: <FileText />,
      timestamp: "2025-12-15T09:15:00Z",
    },
    {
      id: 3,
      text: "Your payment was successful!",
      read: true,
      icon: <BadgeCheck />,
      timestamp: "2025-12-14T16:45:00Z",
    },
    {
      id: 4,
      text: "Your booking has been confirmed!",
      read: true,
      icon: <Briefcase />,
      timestamp: "2025-12-14T14:20:00Z",
    },
    {
      id: 5,
      text: "Your project has been marked as completed by the pro",
      read: true,
      icon: <FileText />,
      timestamp: "2025-12-13T11:10:00Z",
    },
    {
      id: 6,
      text: "Your estimation has been successfully created. Review and proceed with the next steps.",
      read: true,
      icon: <Briefcase />,
      timestamp: "2025-12-12T13:25:00Z",
    },
    {
      id: 7,
      text: "Your payment was successful!",
      read: true,
      icon: <BadgeCheck />,
      timestamp: "2025-12-11T10:05:00Z",
    },
    {
      id: 8,
      text: "Your booking has been confirmed!",
      read: true,
      icon: <FileText />,
      timestamp: "2025-12-10T17:30:00Z",
    },
    {
      id: 9,
      text: "Your project has been marked as completed by the pro",
      read: true,
      icon: <FileText />,
      timestamp: "2024-12-09T14:15:00Z",
    },
    {
      id: 10,
      text: "Your estimation has been successfully created. Review and proceed with the next steps.",
      read: true,
      icon: <Briefcase />,
      timestamp: "2024-12-08T12:00:00Z",
    },
    {
      id: 11,
      text: "Your payment was successful!",
      read: true,
      icon: <BadgeCheck />,
      timestamp: "2024-12-07T09:45:00Z",
    },
    {
      id: 12,
      text: "Your booking has been confirmed!",
      read: true,
      icon: <FileText />,
      timestamp: "2024-12-06T16:20:00Z",
    },
    {
      id: 13,
      text: "Your project has been marked as completed by the pro",
      read: true,
      icon: <Briefcase />,
      timestamp: "2024-12-05T11:30:00Z",
    },
    {
      id: 14,
      text: "Your estimation has been successfully created. Review and proceed with the next steps.",
      read: true,
      icon: <Briefcase />,
      timestamp: "2024-12-04T15:10:00Z",
    },
    {
      id: 15,
      text: "Your payment was successful!",
      read: true,
      icon: <BadgeCheck />,
      timestamp: "2024-12-03T10:25:00Z",
    },
    {
      id: 16,
      text: "Your booking has been confirmed!",
      read: true,
      icon: <FileText />,
      timestamp: "2024-12-02T14:50:00Z",
    },
    {
      id: 17,
      text: "Your project has been marked as completed by the pro",
      read: true,
      icon: <Briefcase />,
      timestamp: "2024-12-01T08:15:00Z",
    },
    {
      id: 18,
      text: "Your estimation has been successfully created. Review and proceed with the next steps.",
      read: true,
      icon: <Briefcase />,
      timestamp: "2024-11-30T13:40:00Z",
    },
    {
      id: 19,
      text: "Your payment was successful!",
      read: true,
      icon: <BadgeCheck />,
      timestamp: "2024-11-29T11:20:00Z",
    },
    {
      id: 20,
      text: "Your booking has been confirmed!",
      read: true,
      icon: <FileText />,
      timestamp: "2024-11-28T15:35:00Z",
    },
    {
      id: 21,
      text: "Your project has been marked as completed by the pro",
      read: true,
      icon: <Briefcase />,
      timestamp: "2024-11-27T09:50:00Z",
    },
    {
      id: 22,
      text: "Your estimation has been successfully created. Review and proceed with the next steps.",
      read: true,
      icon: <Briefcase />,
      timestamp: "2024-11-26T14:10:00Z",
    },
    {
      id: 23,
      text: "Your payment was successful!",
      read: true,
      icon: <BadgeCheck />,
      timestamp: "2024-11-25T16:45:00Z",
    },
    {
      id: 24,
      text: "Your booking has been confirmed!",
      read: true,
      icon: <FileText />,
      timestamp: "2024-11-24T10:30:00Z",
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          onClick={() => setOpen(!open)}
          className="relative focus:outline-none hover:opacity-80 transition"
        >
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-[var(--primary)] rounded-full">
            {notifications.length}
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={15}
        className="w-90 max-w-[90vw] p-2 shadow-xl rounded-xl bg-white border border-gray-100"
      >
        <div className="flex justify-between items-center mb-2 p-1">
          <h3 className="font-semibold text-md text-[#262626]">
            Notifications
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-[#262626] hover:text-gray-700"
          >
            <X />
          </button>
        </div>

        <hr />

        {notifications?.length > 0 ? (
          <ul
            className="space-y-4 p-2 text-sm text-gray-700 max-h-100 overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {notifications?.map((n) => (
              <div
                key={n.id}
                className="grid grid-cols-8 place-items-center gap-7 w-full p-2 last:pb-0 hover:bg-[#1E9BD01F] cursor-pointer  last:border-none rounded-2xl"
              >
                {/* Blue dot indicator */}
                <div className="flex justify-center col-span-1 items-center">
                  {!n.read && (
                    <span className="w-2 h-2 bg-[#1E9BD0] rounded-full inline-block"></span>
                  )}
                </div>

                {/* Icon */}
                <div className="bg-[#1E9BD01F] col-span-1 p-2 rounded-full flex justify-center items-center">
                  <div className="text-[#1E9BD0] text-xl">{n.icon}</div>
                </div>

                {/* Text + Time */}
                <div className="col-span-6">
                  <li className="list-none pb-1 hover:text-[var(--primary)] cursor-pointer font-medium transition">
                    {n.text.length > 60 ? `${n.text.slice(0, 60)}...` : n.text}
                  </li>
                  <span className="text-[#9D9D9D] text-xs">
                    {formatDistanceToNow(new Date(n.timestamp), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <div className="text-sm text-gray-500 min-h-80 flex flex-col justify-center items-center">
            <div>
              <Image
                src="/customer/root/no-notification.png"
                alt="No Notification Image"
                height={150}
                width={150}
              />
            </div>
            <p className="text-[#9D9D9D] mt-4 text-center">
              There are no notifications at the moment.
            </p>
          </div>
        )}

        {/* <Link
          href="/customer/notifications"
          onClick={() => setOpen(false)}
          className="block text-xs text-[var(--primary)] mt-3 text-right hover:underline"
        >
          View all →
        </Link> */}
      </PopoverContent>
    </Popover>
  );
}
