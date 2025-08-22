"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ProjectPhotos = ({ data = [], options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

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

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="w-full py-8">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data?.map((item, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] md:flex-[0_0_30%]  rounded overflow-hidden"
              onClick={() => handleItemClick(item)}
            >
              {item.after?.length > 0 && (
                <Image
                  src={item.after[0]}
                  alt={item.title || "Project Image"}
                  width={100}
                  height={100}
                  className="w-[90%] h-30 object-cover rounded-2xl"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute cursor-pointer inset-0 w-[90%] hover:bg-black/65  hover:bg-opacity-50 transition-all flex items-center justify-center rounded-2xl px-3">
                <span className="text-white text-lg font-semibold  text-center opacity-0 hover:opacity-100 transition">
                  Tap to preview
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows at Bottom */}
      <div className="flex justify-center gap-1 mt-6">
        <button
          onClick={scrollPrev}
          disabled={prevDisabled}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
        >
          <Image
            src="/website/home/left-arrow.png"
            height={24}
            width={34}
            alt="Left Arrow"
          />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextDisabled}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
        >
          <Image
            src="/website/home/right-arrow.png"
            height={24}
            width={34}
            alt="Right Arrow"
          />
        </button>
      </div>

      {/* Modal */}
      <Dialog open={!!activeItem} onOpenChange={() => setActiveItem(null)}>
        <DialogContent className="w-[90vw] max-w-[1200px]">
          {activeItem && (
            <>
              <div className="my-1">
                <h2 className="text-2xl font-semibold">{activeItem.title}</h2>
                <p className="text-sm text-muted-foreground">
                  Price Range: {activeItem.price_range}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Before Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Before</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeItem.before.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt="Before"
                        className="rounded-lg w-full max-w-[400px] h-48 object-cover"
                      />
                    ))}
                  </div>
                </div>
                {/* After Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">After</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeItem.after.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt="After"
                        className="rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectPhotos;
