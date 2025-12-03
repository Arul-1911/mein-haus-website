import OtpPhoneNumber from "@/components/customer/otp-phone-number";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main>
      <section className="grid md:grid-cols-2 h-screen">
        {/* {Left section } */}
        <div className="bg-(--primary-light) h-full">
          <div className="mx-auto max-w-2xl flex flex-col items-center py-3 h-full w-full justify-center gap-1 md:gap-3">
            <div className="relative group w-40 h-10 md:w-90 md:h-17">
              <Image
                src="/mein-haus-logo.png"
                alt="Mein Haus Logo"
                // height={200}
                // width={370}
                fill
                className="my-1 object-contain"
                priority
                sizes="(max-width: 768px) 160px, 360px"
              />
            </div>
            <div className="my-2">
              <h1 className="font-primary text-primary px-1 my-3 font-bold text-xl text-center md:text-2xl">
                Any Reno. Any Size. Any Time.
              </h1>
            </div>
            <div className="mt-2 relative group h-[25dvh] w-[35dvh] md:w-[70%] md:h-[50%]">
              <Image
                alt="Login people image"
                // height={200}
                // width={450}
                fill
                src="/customer/auth/phone-no.png"
                className="object-contain"
                priority
                sizes="(max-width: 768px) 160px, 360px"
              />
            </div>
          </div>
        </div>
        {/* {Right section } */}
        <div className="h-full flex max-w-md w-full mx-auto  items-center justify-center">
          <div className="w-full flex flex-col gap-7 px-4 mb-3 max-w-xl">
            <div className="">
              <h2 className="font-semibold text-center text-2xl mt-3 md:mt-1 md:text-4xl">
                Enter Mobile Number
              </h2>
              <p className="text-center text-[#9D9D9D] my-2 text-sm font-medium">
                Please provide your mobile number to receive an OTP
              </p>
            </div>
            <div className="">
              <OtpPhoneNumber />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
