"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell, Mail, MessageSquareText, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileNavLinks = [
  { href: "/customer", label: "Home" },
  { href: "/customer/estimated-work", label: "Estimated Work" },
  { href: "/customer/ongoing-work", label: "Ongoing Work" },
  { href: "/customer/completed-work", label: "Completed Work" },
  { href: "/customer/profile", label: "Profile" },
];

function Header() {
  const pathname = usePathname()?.toLowerCase();

  const isActive = (href) =>
    pathname === href || (href !== "/customer" && pathname.startsWith(href));
  return (
    <header className="sticky top-0 z-20 bg-white shadow">
      <nav className="  flex justify-between items-center mx-4  lg:mx-8 h-fit">
        {/* Hamburger menu */}
        <div className="lg:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger className="m-auto mt-2">
              <Image
                src="/website/home/hamburger.png"
                width={25}
                height={20}
                alt="Mobile Menu"
              />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="flex flex-col justify-between gap-3">
                {mobileNavLinks.map((link) => (
                  <SheetTitle key={link.href}>
                    <Link
                      href={link.href}
                      className={` ${
                        isActive(link.href)
                          ? "text-[var(--primary)]"
                          : "text-[color:var(--color-gray)] hover:text-black"
                      } text-md`}
                    >
                      {link.label}
                    </Link>
                  </SheetTitle>
                ))}
              </SheetHeader>

              <div className=" absolute bottom-0 right-0 left-0 p-4 flex flex-col items-start">
                <div className="flex mb-2 gap-3">
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
                <div className="text-start text-xs mt-3">
                  {new Date().getFullYear()} &copy; MeinHaus | All rights
                  reserved.
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* {Logo section } */}
        <div className="relative w-40 h-12 sm:w-48 sm:h-20 md:w-46 md:h-14 lg:w-54 lg:h-18 xl:w-52 xl:h-15">
          <Link href="/customer">
            <Image
              src="/mein-haus-logo.png"
              alt="Mein Haus logo"
              fill
              priority
              sizes="(max-width: 640px) 160px,
            (max-width: 768px) 200px,
            (max-width: 1024px) 250px,
            300px"
              className="object-contain"
            />
          </Link>
        </div>
        {/* Mid Section  */}
        <div className="hidden  lg:flex justify-around w-full md:max-w-sm lg:max-w-lg items-center">
          <Link href="/customer">
            <p>Home</p>
          </Link>
          <Link href="/customer/estimated-work">
            <p>Estimated work</p>
          </Link>
          <Link href="/customer/ongoing-work">
            <p>Ongoing work</p>
          </Link>
          <Link href="/customer/completed-work">
            <p>Completed work</p>
          </Link>
        </div>
        {/* profile section */}
        <div className="max-md:mr-1 flex items-center justify-center gap-5 md:gap-6 relative">
          {/* Notification Icon */}
          <div className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-[var(--primary)] rounded-full">
              9
            </span>
          </div>

          {/* Message Icon */}
          <div className="relative">
            <MessageSquareText className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-[var(--primary)] rounded-full">
              5
            </span>
          </div>

          {/* Avatar */}
          <div className="max-lg:hidden">
            <Link href="/customer/profile">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
