"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { renderStars } from "@/utils/website/renderStars";

const Reviews = ({ feedbacks = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-7 rounded-2xl">
      <div>
        <h2 className="font-semibold text-center text-2xl mt-4">
          What Our Customers Are Saying
        </h2>
      </div>
      <div className="max-w-2xl mx-auto py-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex w-full md:w-[50%]">
            {feedbacks?.map((item) => (
              <div
                key={item?.id}
                className="min-w-full flex flex-col items-center p-6 text-center"
              >
                {/*Dynamic Stars */}
                {renderStars(item?.rating)}

                <p className="font-semibold text-gray-600">{item?.name}</p>
                <p className="text-[#9D9D9D] text-sm font-thin">
                  {item?.country}
                </p>
                <p className="text-lg text-gray-800 my-2">"{item?.review}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {feedbacks?.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === selectedIndex ? "bg-(--color-orange)" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
