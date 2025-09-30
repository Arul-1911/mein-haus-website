"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contactus", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname()?.toLowerCase();

  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 w-full z-20 bg-[#F6F6F6]">
      <div className="grid grid-cols-3 lg:grid-cols-2 items-center w-full shadow-xl">
        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="ml-3">
              <Image
                src="/website/home/hamburger.png"
                width={30}
                height={20}
                alt="Mobile Menu"
              />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="flex flex-col justify-between gap-10">
                {navLinks.map((link) => (
                  <SheetTitle key={link.href}>
                    <Link
                      href={link.href}
                      className={` ${
                        isActive(link.href)
                          ? "text-[#F88B36]"
                          : "text-[color:var(--color-gray)] hover:text-black"
                      } text-md`}
                    >
                      {link.label}
                    </Link>
                  </SheetTitle>
                ))}
              </SheetHeader>
              <div className="absolute bottom-30 text-lg">
                <a href="tel:+18447774287" className="flex gap-2 ml-3">
                  <Phone />
                  Call us at +1 (844) 777-4287
                </a>
                <a
                  href="mailto:info@meinhaus.ca"
                  className="flex gap-2 ml-3 my-2"
                >
                  <Mail /> info@meinhaus.ca
                </a>
              </div>
              <div className="bg-[#1E9BD00F] absolute bottom-0 right-0 left-0 p-4 flex flex-col items-center">
                <div className="flex gap-3">
                  <span className="">
                    <Link href="https://www.facebook.com/share/Dk57zGZtvTAut6Nu/?mibextid=dGKdO6">
                      <Image
                        src="/website/home/facebook.png"
                        alt="Facebook Logo"
                        height="10"
                        width="30"
                        className=""
                      />
                    </Link>
                  </span>
                  <span>
                    <Link href="https://www.instagram.com/meinhaus.ca">
                      <Image
                        src="/website/home/instagram.png"
                        alt="Instagram Logo"
                        height="10"
                        width="30"
                        className=""
                      />
                    </Link>
                  </span>
                </div>
                <div className="text-center mt-1">
                  {new Date().getFullYear()} &copy; MeinHaus | All rights
                  reserved.
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* LEFT LOGO */}
        <div>
          <Link href="/">
            <Image
              src="/mein-haus-logo.png"
              alt="Mein Haus Logo"
              height={100}
              width={280}
              className="my-3 lg:ml-5"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="flex items-center justify-end mr-3 lg:mr-8 gap-6">
          {navLinks?.map((link) => (
            <nav key={link.href} className="hidden lg:block">
              <Link
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "text-[#F88B36]"
                    : "text-[color:var(--color-gray)] hover:text-black"
                } text-lg`}
              >
                {link.label}
              </Link>
            </nav>
          ))}

          <nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="my-3 text-md lg:text-lg lg:px-4 cursor-pointer py-2 bg-black text-white rounded-4xl">
                  Login
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-50 mr-3 mt-2 text-lg"
                align="start"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="https://meinhaus.ca/customer/login">
                      Login as Home Owner
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="https://meinhaus.ca/professional/login">
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
}
