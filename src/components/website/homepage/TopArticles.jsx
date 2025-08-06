"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ArticleCarousel = ({ slides = [], options = {} }) => {
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
      {/* Header Controls */}
      <div className="flex flex-row-reverse items-center justify-between px-4 mb-4">
        <button className="to-blackext text-lg font-medium  hover:underline">
          View All
        </button>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            disabled={prevDisabled}
            className="bg-gray-200 p-2 rounded hover:bg-gray-300 disabled:opacity-40"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="black" strokeWidth="2" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={nextDisabled}
            className="bg-gray-200 p-2 rounded hover:bg-gray-300 disabled:opacity-40"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Viewport */}
      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex gap-4 px-4">
          {slides.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] md:max-w-[50%] bg-white rounded "
            >
              <Image
                src={item.image}
                alt={item.title}
                height={200}
                width={300}
                className="w-full h-78 object-cover rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[#545454] font-light">
                  {item.description}...{" "}
                  <span>
                    <Link href="/" className="text-black">
                      Read More
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleCarousel;
