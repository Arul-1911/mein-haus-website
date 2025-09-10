"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6500, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

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
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images?.map((src, i) => (
            <div key={src.id} className="flex-[0_0_100%] relative">
              <Image
                src={`https://dev-carenest.s3.ap-south-1.amazonaws.com${src.imagePath}`}
                alt={src.title}
                height={200}
                width={300}
                className="w-full h-[30dvh] md:h-[45dvh] lg:h-[60dvh]"
              />

              {/* Centered CTA on slide 3 (index 3) */}
              {i === 3 ||
                (i === 0 && (
                  <div className="absolute bg-black/30 inset-0 flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-3 text-lg rounded-lg shadow hover:bg-black hover:text-white transition">
                      <Link href="/job">Book Now</Link>
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-3 w-3 cursor-pointer rounded-full border border-white ${
              selectedIndex === i ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
