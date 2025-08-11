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
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-20 bg-[#F6F6F6]">
      <div className="grid grid-cols-3 lg:grid-cols-2 items-center w-full shadow-xl">
        {/* MOBILE HAMBURGER MENU  */}
        <div className="lg:hidden ">
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
                <SheetTitle>
                  <Link
                    href="/"
                    className="text-[color:var(--color-gray)] hover:text-black"
                  >
                    Home
                  </Link>
                </SheetTitle>
                <SheetTitle>
                  <Link
                    href="/about"
                    className="text-[color:var(--color-gray)] hover:text-black"
                  >
                    About
                  </Link>
                </SheetTitle>
                <SheetTitle>
                  <Link
                    href="/"
                    className="text-[color:var(--color-gray)] hover:text-black"
                  >
                    Education
                  </Link>
                </SheetTitle>
                <SheetTitle>
                  <Link
                    href="/"
                    className="text-[color:var(--color-gray)] hover:text-black"
                  >
                    Gallery
                  </Link>
                </SheetTitle>
                <SheetTitle>
                  <Link
                    href="/contactus"
                    className="text-[color:var(--color-gray)] hover:text-black"
                  >
                    Contact Us
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="absolute bottom-30">
                <a href="tel:+18447774287" className="flex gap-2 ml-3">
                  <Phone />
                  Call us at +1 (844) 777-4287
                </a>
                <a
                  href="mailto:info@meinhaus.ca"
                  className="flex gap-1 ml-3 my-2"
                >
                  <Mail /> info@meinhaus.ca
                </a>
              </div>
              <div className="bg-[#1E9BD00F] absolute bottom-0 right-0 left-0 p-4 flex flex-col justify-center items-center">
                {/* TOP SECTION  */}
                <div className="flex justify-around gap-3">
                  <span className="">
                    <Image
                      src="/website/home/facebook.png"
                      alt="Facebook Logo"
                      height="10"
                      width="30"
                      className=""
                    />
                  </span>
                  <span>
                    <Image
                      src="/website/home/instagram.png"
                      alt="Instagram Logo"
                      height="10"
                      width="30"
                      className=""
                    />
                  </span>
                </div>
                {/* BOTTOM SECTION  */}
                <div className="text-center mt-1">
                  {new Date().getFullYear()} &copy; MeinHaus | All rights
                  reserved.
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* LEFT SIDE  */}
        <div>
          <Link href="/">
            <Image
              src="/mein-haus-logo.png"
              alt="Mein Haus Logo"
              height={100}
              width={200}
              className="my-3 lg:ml-5"
            />
          </Link>
        </div>
        {/* RIGHT SIDE  */}
        <div className="flex items-center justify-end mr-3 lg:mr-8 gap-6">
          <nav className="hidden lg:block cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            <Link href="/"> Home</Link>
          </nav>
          <nav className="hidden lg:block cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            <Link href="/about"> About</Link>
          </nav>
          <nav className="hidden lg:block cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            <Link href="/"> Education</Link>
          </nav>
          <nav className="hidden lg:block cursor-pointer text-[color:var(--color-gray)] hover:text-black">
            <Link href="/"> Gallery</Link>
          </nav>
          <nav className="hidden lg:block cursor-pointer text-[color:var(--color-gray)] hover:text-black line-clamp-1">
            <Link href="/contactus"> Contact Us</Link>
          </nav>
          <nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="cursor-pointer my-3 text-sm lg:text-md lg:px-4 py-2 bg-black text-white rounded-4xl">
                  Login
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 mr-3 mt-2" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {" "}
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
};

export default Header;
