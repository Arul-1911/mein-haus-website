"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OurServicesCarousel = ({ slides = [], options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = useCallback((embla) => {
    setPrevDisabled(!embla.canScrollPrev());
    setNextDisabled(!embla.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full md:px-4 lg:px-2 max-w-7xl mx-auto">
      {/* Carousel Viewport */}
      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex gap-10 px-2">
          {slides?.map((item, index) => (
            <div
              key={index}
              className="
                flex-[0_0_100%] 
                md:flex-[0_0_calc(33%-1rem)] 
                lg:flex-[0_0_calc(20%-1rem)] 
                bg-[#F2F2F2] rounded-2xl shadow-sm px-4 py-4
                relative
              "
            >
              <div className="px-2 min-h-[9vh]">
                <h3 className="text-lg font-semibold mb-1">
                  {item.label.slice(0, 30)}
                </h3>
              </div>
              <div className="relative aspect-square w-full h-50 rounded-3xl">
                <Image
                  src={item.img}
                  alt={item.label}
                  // height={50}
                  // width={150}
                  sizes="(max-width: 640px) 160px,
                 (max-width: 768px) 200px,
                 (max-width: 1024px) 250px,
                 300px"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute bottom-7 right-6">
                <Link href={`/customer/service-details/${item.id}`}>
                  <Button variant="black" className="rounded-full">
                    <ArrowUpRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-2 justify-center mt-7">
        <button
          onClick={scrollPrev}
          disabled={prevDisabled}
          className="p-1 rounded hover:bg-gray-300 disabled:opacity-40 cursor-pointer"
        >
          <Image
            src="/website/home/left-arrow.png"
            height={20}
            width={40}
            alt="Left Arrow"
          />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextDisabled}
          className="p-1 rounded hover:bg-gray-300 disabled:opacity-40 cursor-pointer"
        >
          <Image
            src="/website/home/right-arrow.png"
            height={20}
            width={40}
            alt="Right Arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default OurServicesCarousel;
