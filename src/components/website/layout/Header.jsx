import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-20 bg-white">
      <div className="grid grid-cols-2 items-center w-full shadow-xl">
        {/* LEFT SIDE  */}
        <div>
          <Link href="/">
            <Image
              src="/mein-haus-logo.png"
              alt="Mein Haus Logo"
              height={100}
              width={250}
              className="my-3 ml-5"
            />
          </Link>
        </div>
        {/* RIGHT SIDE  */}
        <div className="flex items-center justify-end mr-8 gap-6">
          <nav className="cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            Home
          </nav>
          <nav className="cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            About
          </nav>
          <nav className="cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            Education
          </nav>
          <nav className="cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            Gallery
          </nav>
          <nav className="cursor-pointer text-[color:var(--color-gray)] hover:text-black line-clamp-1">
            Contact Us
          </nav>
          <nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="cursor-pointer text-md px-4 py-2 bg-black text-white rounded-4xl">
                  Login
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 mr-3 mt-2" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {" "}
                    <Link href="/customer/login">Login as Home Owner</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/professional/login">
                      Login as Professional
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
