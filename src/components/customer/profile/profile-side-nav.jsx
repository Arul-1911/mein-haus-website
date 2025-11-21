"use client";

import Link from "next/link";
import Logout from "./logout";
import ProfilePic from "./profile-pic";
import { GlobeLock, LockKeyhole, Trash, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function ProfileSideNav() {
  const pathName = usePathname();
  return (
    <main className="mx-auto">
      <div className="bg-white flex flex-col items-center gap-5 rounded-xl py-3">
        {/* Profile  */}
        <ProfilePic />
        <div className="space-y-1.5">
          {/* Personal Information  */}
          <Link
            href="/customer/profile/personal-information"
            className={cn(
              "flex items-center justify-start gap-3 rounded p-2 hover:bg-[#F6F6F6]",
              pathName === "/customer/profile/personal-information" &&
                "bg-[#F6F6F6] text-black"
            )}
          >
            <span>
              <UserRound
                className={cn(
                  "text-[#9D9D9D]",
                  pathName === "/customer/profile/personal-information" &&
                    " text-black"
                )}
                size={19}
              />
            </span>
            <span
              className={cn(
                "text-[#9D9D9D] font-medium",
                pathName === "/customer/profile/personal-information" &&
                  "text-black"
              )}
            >
              Personal Information
            </span>
          </Link>
          {/* Password and security  */}
          <Link
            href="/customer/profile/password-security"
            className={cn(
              "flex items-center justify-start gap-3 rounded p-2 hover:bg-[#F6F6F6]",
              pathName === "/customer/profile/password-security" &&
                "bg-[#F6F6F6] text-black"
            )}
          >
            <span>
              <LockKeyhole
                className={cn(
                  "text-[#9D9D9D]",
                  pathName === "/customer/profile/password-security" &&
                    " text-black"
                )}
                size={19}
              />
            </span>
            <span
              className={cn(
                "text-[#9D9D9D] font-medium",
                pathName === "/customer/profile/password-security" &&
                  "text-black"
              )}
            >
              Password and Security
            </span>
          </Link>
          {/* Browser sessions  */}
          <Link
            href="/customer/profile/browser-sessions"
            className={cn(
              "flex items-center justify-start gap-3 rounded p-2 hover:bg-[#F6F6F6]",
              pathName === "/customer/profile/browser-sessions" &&
                "bg-[#F6F6F6] text-black"
            )}
          >
            <span>
              <GlobeLock
                className={cn(
                  "text-[#9D9D9D]",
                  pathName === "/customer/profile/browser-sessions" &&
                    " text-black"
                )}
                size={19}
              />
            </span>
            <span
              className={cn(
                "text-[#9D9D9D] font-medium",
                pathName === "/customer/profile/browser-sessions" &&
                  "text-black"
              )}
            >
              Browser Sessions
            </span>
          </Link>
          {/* Delete Account */}
          <Link
            href="/customer/profile/delete-account"
            className={cn(
              "flex items-center justify-start gap-3 rounded p-2 hover:bg-[#F6F6F6]",
              pathName === "/customer/profile/delete-account" &&
                "bg-[#F6F6F6] text-black"
            )}
          >
            <span>
              <Trash
                className={cn(
                  "text-[#9D9D9D]",
                  pathName === "/customer/profile/delete-account" &&
                    " text-black"
                )}
                size={19}
              />
            </span>
            <span
              className={cn(
                "text-[#9D9D9D] font-medium",
                pathName === "/customer/profile/delete-account" && "text-black"
              )}
            >
              Delete Account
            </span>
          </Link>
          {/* Logout  */}
          <Logout />
        </div>
      </div>
    </main>
  );
}

export default ProfileSideNav;
