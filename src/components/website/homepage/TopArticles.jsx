"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const ArticleCarousel = ({ slides, options = {} }) => {
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
          <Link href="/articles">View All</Link>
        </button>
        <div className="flex gap-2">
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
      </div>

      {/* Carousel Viewport */}
      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex gap-4 px-4">
          {slides?.map((item, index) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] md:flex-[0_0_50%] md:max-w-[50%] bg-white rounded lg:pr-3"
            >
              <Image
                src={`https://dev-carenest.s3.ap-south-1.amazonaws.com${item.picPath}`}
                alt={item.title}
                height={200}
                width={300}
                className="w-full h-78  rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {item.title.slice(0, 30)}
                </h3>
                <p className="text-md text-[#545454] font-medium">
                  {item.description.slice(0, 50)}...{" "}
                  <span>
                    <Link
                      href={`/articles/${item.id}`}
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
    </section>
  );
};

export default ArticleCarousel;
