"use client";
import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Complimentary = ({ carouselItems }) => {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  return (
    <div className="mx-6 my-10">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="w-full max-w-5xl mx-auto"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className="">
          {carouselItems?.map((data, index) => (
            <CarouselItem key={index} className="md:basis-3/4 my-2 mx-2">
              <a
                target="_blank"
                href={`/complimentary/${encodeURIComponent(data?.id)}`}
                className="block"
              >
                <div className="relative rounded-xl shadow-md overflow-hidden">
                  <Image
                    src={`https://dev-carenest.s3.ap-south-1.amazonaws.com${data.picPath}`}
                    alt={data.name}
                    width={200}
                    height={200}
                    className="object-cover w-[100%] h-[40dvh]"
                  />
                  <div className="absolute inset-0" />
                  <div className="flex gap-2 my-2 justify-center items-center">
                    <div>
                      <Image
                        src="/website/complimentary/logo.png"
                        alt="Meinhaus logo"
                        width={60}
                        height={40}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h2 className="text-[#FD760D] text-3xl">
                        <span className="font-extrabold">MEIN</span>HAUS
                      </h2>
                      <p className="-my-1 text-[#1E9BD0]">{data.name}</p>
                    </div>
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Complimentary;
