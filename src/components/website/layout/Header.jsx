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
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contactus", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname()?.toLowerCase();

  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 w-full z-20 bg-[#F6F6F6]">
      <div className="flex items-center justify-between w-full shadow-xl px-3 md:px-4 lg:px-6 py-2 md:py-3">
        {/* MOBILE MENU */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger className="p-2">
              <Image
                src="/website/home/hamburger.png"
                width={30}
                height={20}
                alt="Mobile Menu"
              />
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <SheetHeader className="flex flex-col gap-6 mt-4">
                {navLinks.map((link) => (
                  <SheetTitle key={link.href}>
                    <Link
                      href={link.href}
                      className={`${
                        isActive(link.href)
                          ? "text-[#F88B36]"
                          : "text-gray-600 hover:text-black"
                      } text-base font-medium`}
                    >
                      {link.label}
                    </Link>
                  </SheetTitle>
                ))}
              </SheetHeader>

              {/* Contact Info */}
              <div className="mt-auto mb-32 px-3 space-y-3 text-base">
                <a
                  href="tel:+18447774287"
                  className="flex items-center gap-2 hover:text-[#F88B36] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm md:text-base">
                    Call us at +1 (844) 777-4287
                  </span>
                </a>
                <a
                  href="mailto:info@meinhaus.ca"
                  className="flex items-center gap-2 hover:text-[#F88B36] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm md:text-base">info@meinhaus.ca</span>
                </a>
              </div>

              {/* Footer */}
              <div className="bg-[#1E9BD00F] absolute bottom-0 right-0 left-0 p-4 flex flex-col items-center gap-2">
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/share/Dk57zGZtvTAut6Nu/?mibextid=dGKdO6"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src="/website/home/facebook.png"
                      alt="Facebook Logo"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/meinhaus.ca"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src="/website/home/instagram.png"
                      alt="Instagram Logo"
                      height={30}
                      width={30}
                    />
                  </Link>
                </div>
                <div className="text-center text-xs md:text-sm">
                  {new Date().getFullYear()} &copy; MeinHaus | All rights
                  reserved.
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* LOGO */}
        <div className="flex items-center justify-center lg:justify-start flex-1 lg:flex-initial">
          <Link href="/">
            <div className="relative w-[120px] h-[40px] sm:w-[150px] sm:h-[45px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[55px]">
              <Image
                src="/mein-haus-logo.png"
                alt="Mein Haus Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive(link.href)
                  ? "text-[#F88B36]"
                  : "text-gray-600 hover:text-black"
              } text-base xl:text-lg font-medium transition-colors whitespace-nowrap`}
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-sm xl:text-base px-4 xl:px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Login
                <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 text-base" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/customer/login" className="w-fit">
                    Login as Home Owner
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/professional/login" className="w-fit">
                    Login as Professional
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* MOBILE LOGIN BUTTON */}
        <div className="lg:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Login
                <ChevronDown className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 mt-2 text-sm" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/customer/login" className="w-fit">
                    Login as Home Owner
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="https://meinhaus.ca/professional/login"
                    className="w-fit"
                  >
                    Login as Professional
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
