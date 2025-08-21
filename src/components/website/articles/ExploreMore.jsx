"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const ExploreArticleCarousel = ({ slides = [], options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const AUTOPLAY_INTERVAL = 4000;

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

    let autoplay = setInterval(() => {
      if (!emblaApi) return;
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, AUTOPLAY_INTERVAL);

    // Clear on unmount or user interaction
    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full px-8 py-8">
      {/* Header Controls */}
      <div className="flex flex-row items-center justify-between md:px-4 mb-4">
        <div className="font-secondary font-bold text-xl md:text-3xl">
          Explore more articles
        </div>
        <button className="to-blackext text-lg font-medium  hover:underline">
          <Link href="/articles">View All</Link>
        </button>
      </div>

      {/* Carousel Viewport */}
      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex gap-4 px-4">
          {slides?.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_31%] md:max-w-[100%] bg-white rounded"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={200}
                width={300}
                className="w-full h-78  rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {item.title.slice(0, 30)}
                </h3>
                <p className="text-sm text-[#545454] font-medium">
                  {item.description.slice(0, 90)}...{" "}
                  <span>
                    <Link
                      href={`/articles/${slugify(item.title, {
                        lower: true,
                      })}`}
                      className="text-black font-bold"
                    >
                      Read More
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center mt-7">
        <button
          onClick={scrollPrev}
          disabled={prevDisabled}
          className=" p-1 rounded hover:bg-gray-300 disabled:opacity-40 cursor-pointer"
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
            alt="Left Arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default ExploreArticleCarousel;
