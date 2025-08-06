"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const feedbacks = [
  {
    id: 1,
    description:
      "This platform has completely changed how I manage my projects.",
    user: "jane",
    location: "Canada",
    starImage: "/website/home/star-rating.png",
  },
  {
    id: 2,
    description: "Excellent service, responsive team, and user-friendly UI.",
    user: "Jane Doe",
    location: "Canada",
    starImage: "/website/home/star-rating.png",
  },
];

const Feedback = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
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
    <section className="bg-[#F6F6F6] py-7">
      <div>
        <h2 className="font-secondary text-center text-3xl">
          What Clients are Saying
        </h2>
      </div>
      <div className="max-w-xl mx-auto py-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {feedbacks.map((item) => (
              <div
                key={item.id}
                className="min-w-full flex flex-col items-center p-6 text-center"
              >
                <Image
                  src={item.starImage}
                  alt="Star"
                  width={132}
                  height={132}
                  className="mb-4"
                />
                <p className="text-lg text-gray-800 my-2">{item.description}</p>
                <p className="font-semibold text-gray-600">{item.user}</p>
                <p className="text-[#9D9D9D] text-sm font-thin">
                  {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {feedbacks.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex
                  ? "bg-[var(--color-orange)]"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
