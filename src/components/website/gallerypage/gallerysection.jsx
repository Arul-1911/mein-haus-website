"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Gallery = ({ mockData }) => {
  const [items, setItems] = useState([]);
  //   console.log(mockData, "client resp");
  const [selectedItem, setSelectedItem] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel();
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

  // Initialize static data
  useEffect(() => {
    setItems(mockData);
    setSelectedItem(mockData[0]); // first item as default
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section → Only Selected Item */}
        <div className="space-y-6" data-aos="zoom-in-up">
          {selectedItem && <GalleryCard item={selectedItem} />}
        </div>

        {/* Right Section */}
        <div className="w-full h-full justify-between p-4 flex flex-col">
          {/* top section */}
          <div className="text-start  mb-4">
            <h2 className="text-[#262626] font-semibold my-3 text-2xl md:text-4xl">
              {selectedItem?.service_name}
            </h2>
            <p className="text-[#9D9D9D] font-normal">{selectedItem?.title}</p>
          </div>

          {/* bottom section */}
          <div className="w-full mt-0">
            {/* Arrows */}
            <div className="flex max-sm:justify-center justify-end gap-1 mb-6">
              <button
                onClick={scrollPrev}
                disabled={prevDisabled}
                className="px-2 rounded hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
              >
                <Image
                  src="/website/home/left-arrow.png"
                  height={24}
                  width={44}
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
                  width={44}
                  alt="Right Arrow"
                />
              </button>
            </div>

            {/* Carousel */}
            <div
              className="overflow-hidden"
              data-aos="zoom-in-up"
              ref={emblaRef}
            >
              <div className="flex">
                {items?.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex-[0_0_100%]  md:flex-[0_0_30%] cursor-pointer rounded overflow-hidden"
                    onClick={() => handleItemClick(item)}
                  >
                    {/* {after text}  */}
                    <span className="absolute bg-[#282A2C] text-white p-2 rounded-md right-10 md:right-8 top-4 z-1">
                      After
                    </span>
                    {item.after?.length > 0 && (
                      <Image
                        src={item.after[0]}
                        alt={item.title || "Project Image"}
                        width={150}
                        height={150}
                        className="w-[90%] h-80 object-cover rounded-2xl"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Component
const GalleryCard = ({ item }) => {
  const beforeImage = item.before[0];
  const afterImage = item.after[0];

  if (!beforeImage || !afterImage) return null;

  return (
    <Card className="h-[80dvh] bg-transparent shadow-none border-none relative">
      <CardContent className="p-1 relative">
        {/* {Content}  */}
        <span className="absolute bg-[#282A2C] text-white p-2 rounded-md left-4 top-4 z-1">
          Before
        </span>
        <span className="absolute bg-[#282A2C] text-white p-2 rounded-md right-4 top-4 z-1">
          After
        </span>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={beforeImage}
              alt={`${item.title} - Before`}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterImage}
              alt={`${item.title} - After`}
            />
          }
          style={{ width: "100%", height: "75dvh", borderRadius: "15px" }}
        />
      </CardContent>
    </Card>
  );
};

export default Gallery;
