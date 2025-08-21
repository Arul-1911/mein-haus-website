import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="z-2">
      <div className="mt-2 flex flex-col justify-center">
        {/* CONTENT SECTION  */}
        <div className="flex flex-col justify-center items-center  lg:flex-row lg:justify-between flex-wrap mx-1 p-6 lg:items-center bg-[#F6F6F6] gap-3">
          <div className="items-center justify-center">
            <Image
              src="/mein-haus-logo.png"
              alt="Mein Haus Logo"
              height={100}
              width={300}
              className="my-3 max-sm:w-[30dvh] lg:ml-5"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-12">
            {/* LEFT SIDE  */}
            <div className="">
              <p>
                <Link href="/">Home</Link>
              </p>
              <p>
                <Link href="/about">About</Link>
              </p>
              <p>
                <Link href="/gallery">Gallery</Link>
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="">
              <p>
                <Link href="/education">Education</Link>
              </p>
              <p>
                <Link href="/contact">Contact Us</Link>
              </p>

              <p>
                <Link href="/terms&conditions">Terms & Conditions</Link>
              </p>
              <p>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </p>
            </div>
          </div>
          <div className="flex justify-around gap-4 items-center">
            {/* APP STORE  */}
            <div>
              <Image
                src="/website/home/app-store.png"
                alt="Apple store Logo"
                height="100"
                width="120"
                className=""
              />
            </div>
            {/* PLAY STORE  */}
            <div>
              <Image
                src="/website/home/play-store.png"
                alt="Play Store Logo"
                height="100"
                width="120"
                className=""
              />
            </div>
          </div>
        </div>
        {/* SOCIAL SECTION  */}
        <div className="bg-[#1E9BD00F] p-4 flex flex-col justify-center items-center">
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
              <Link href="/about">
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
          {/* BOTTOM SECTION  */}
          <div className="text-center mt-1">
            {new Date().getFullYear()} &copy; MeinHaus | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
