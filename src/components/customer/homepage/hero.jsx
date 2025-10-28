"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CreateEstimate from "../create-estimatemodal";

function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="bg-[#F9F9F9]  justify-items-center px-3 md:px-10 md:py-1">
      <div className="grid grid-cols-1 justify-center lg:grid-cols-2 mx-1">
        {/* left section  */}
        <div className="flex flex-col  max-sm:text-center gap-6 justify-start pt-2 md:pt-4 items-center md:items-start w-full md:max-w-xl my-8 md:mx-6">
          <h1 className="font-bold leading-10 md:leading-14 lg:leading-18 text-3xl md:text-5xl lg:text-6xl">
            Get an <span className="text-[var(--primary)]"> Instant Quote</span>{" "}
            for Any Project—Anytime.
          </h1>
          <p className="text-[var(--gray)] font-medium text-lg">
            From renovations to repairs, we make it easy to plan your next home
            upgrade with confidence.
          </p>
          <div>
            <Button
              variant="black"
              className="flex gap-2 p-5 items-center"
              onClick={(prev) => setModalOpen(true)}
            >
              <span>Create Estimate</span>
              <MoveRight />
            </Button>
          </div>
        </div>
        {/* right section  */}
        <div className="relative my-8 min-h-[50dvh] md:min-h-[70dvh] lg:min-h-[60dvh] max-sm:mt-5 max-w-xl">
          <div className="absolute -right-6 top-20 z-3">
            <div className="relative w-40 h-12 sm:w-48 sm:h-20 md:w-46 md:h-26 lg:w-54 lg:h-28 xl:w-72 xl:h-20">
              <Image
                src="/customer/root/home/hero-reviews.png"
                alt="Google reviews"
                //  height={100}
                //  width={200}
                fill
                priority
                sizes="(max-width: 640px) 160px,
                 (max-width: 768px) 200px,
                 (max-width: 1024px) 250px,
                 300px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute right-1 z-2">
            <Image
              src="/customer/root/home/hero-people.png"
              alt="Person Image"
              height={300}
              width={500}
            />
          </div>
          <div className="absolute bottom-10 -left-8 md:bottom-5 md:left-4 lg:bottom-25 xl:bottom-2 lg:left-2 lg:mt-2 z-4">
            <div className="relative w-40 h-20 sm:w-48 sm:h-20 md:w-56 md:h-30 lg:w-44 lg:h-30 xl:w-72 xl:h-30">
              <Image
                src="/customer/root/home/hero.png"
                alt="home owners"
                //  height={100}
                //  width={200}
                sizes="(max-width: 640px) 160px,
                 (max-width: 768px) 200px,
                 (max-width: 1024px) 250px,
                 300px"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <CreateEstimate mode={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

export default HeroSection;
