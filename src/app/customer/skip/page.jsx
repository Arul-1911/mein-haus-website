import SkipCreateProject from "@/components/customer/Skip";
import { CustomerProviders } from "@/providers/storeProviders";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomerSkipPage = () => {
  return (
    <main>
      <CustomerProviders>
        <section className="grid md:grid-cols-2 h-screen">
          {/* {Left section } */}
          <div className="h-full order-2 md:order-1 flex  items-center justify-center">
            <div className="w-full flex flex-col gap-7 px-4 mb-3 max-w-xl">
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="font-semibold text-center text-2xl mt-3 md:mt-1 md:text-4xl">
                  Create the project
                </h2>
                <p className="text-[var(--gray)] max-w-sm text-center">
                  You will receive a precise and customizable quote via email.
                </p>
              </div>
              <div className="">
                <SkipCreateProject />
              </div>
              <div className="space-y-3">
                <Link
                  href="/customer"
                  className="flex gap-2 items-center justify-end text-[var(--secondary)] font-medium"
                >
                  <span>Skip</span>
                  <span>
                    <MoveRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* {Right section } */}
          <div className="bg-[var(--primary-light)] order-1 md:order-2 h-full">
            <div className="mx-auto max-w-2xl flex flex-col items-center py-3 h-full w-full justify-center gap-1 md:gap-3">
              <div className="relative group w-40 h-10 md:w-90 md:h-17">
                <Image
                  src="/mein-haus-logo.png"
                  alt="Mein Haus Logo"
                  // height={200}
                  // width={370}
                  fill
                  className="my-1 object-contain"
                  sizes="(max-width: 768px) 160px, 360px"
                />
              </div>
              <div className="my-2">
                <h1 className="font-primary text-[var(--primary)] px-1 my-3 font-bold text-xl text-center md:text-2xl">
                  Any Reno. Any Size. Any Time.
                </h1>
              </div>
              <div className="mt-2 relative group h-[25dvh] w-[35dvh] md:w-[100%] md:h-[50%]">
                <Image
                  alt="Register people image"
                  // height={200}
                  // width={450}
                  fill
                  src="/customer/root/skip-img.png"
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 160px, 360px"
                />
              </div>
            </div>
          </div>
        </section>
      </CustomerProviders>
    </main>
  );
};

export default CustomerSkipPage;
