"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { renderStars } from "@/utils/website/renderStars";

const AboutFeedBack = ({ feedbacks, options = {} }) => {
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
    <section className="w-full py-8">
      <div className="p-8 md:p-12 bg-[#F88B36]">
        {/* Header & Controls */}
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between px-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold font-secondary text-white">
            What Clients Are Saying
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={prevDisabled}
              className="p-1 rounded hover:bg-gray-300 disabled:opacity-40 cursor-pointer text-white"
            >
              <Image
                src="/website/home/left-arrow.png"
                height={20}
                width={40}
                alt="Previous"
              />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextDisabled}
              className="p-1 rounded hover:bg-gray-300 disabled:opacity-40 cursor-pointer text-white"
            >
              <Image
                src="/website/home/right-arrow.png"
                height={20}
                width={40}
                alt="Next"
              />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mt-8" ref={emblaRef}>
          <div className="flex gap-4  px-4">
            {feedbacks?.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] justify-center md:flex-[0_0_33%] md:max-w-[100%] bg-white rounded-lg shadow-md p-4"
              >
                {/*Dynamic Stars */}
                {renderStars(item?.rating)}

                {/* Description */}
                <p className="text-sm text-black text-center font-medium mb-3">
                  {item.review}
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <span className="text-base font-semibold">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeedBack;
