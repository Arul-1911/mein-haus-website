"use client";
import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

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
        <CarouselContent className="-ml-2">
          {carouselItems?.map((data, index) => (
            <CarouselItem key={index} className="basis-2/3  pl-2">
              <Link href={`/feature-${index + 1}`} className="block">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={data.img}
                    alt={`Feature ${index + 1}`}
                    width={500}
                    height={400}
                  />
                  <div className="absolute inset-0 " />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Complimentary;
