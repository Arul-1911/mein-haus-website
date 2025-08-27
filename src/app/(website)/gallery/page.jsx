"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// --- Static Data ---
const mockData = {
  data: [
    {
      id: 1,
      service_id: 18,
      service_name: "Roofing, Siding, and Trim",
      title: "Eavestrough Repair and Replacement",
      price_range: "$2000 - $3000",
      before: [
        "https://meinhaus.ca/images/service_gallery/w9a4AalIUZDs0sPFfVtha1Kkau5BjFVIYRrkyF5W.png",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/gDFQr7rScnuIWkeGUVdyW4gErcmpUnip4DClim6A.png",
        "https://meinhaus.ca/images/service_gallery/UXgWWThZAaale8cej55IORn38VxZkkCXTNDXih9s.png",
        "https://meinhaus.ca/images/service_gallery/SL1yrvXyI1N099maJVtwxR2tSC7RLBA7QqqkhPfk.png",
        "https://meinhaus.ca/images/service_gallery/zQJHAypvmu0HNMsgUWTxwCFti541WDGLRwPrhRvp.png",
      ],
    },
    {
      id: 2,
      service_id: 14,
      service_name: "Flooring & Tile Services",
      title: "Mississauga Shower Renewal",
      price_range: "$3000 - $4000",
      before: [
        "https://meinhaus.ca/images/service_gallery/r4t9czzRnRdaKduxv9avSLDGY3j54Xh61qbmGOGc.jpg",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/MkkvUBnMONwiIxA0yVC70IpOnBAVBdd76fKc9Odj.jpg",
        "https://meinhaus.ca/images/service_gallery/3ybuHcTCJPhllH5OKmdUx3ib5PSnqlksLNpO99os.jpg",
        "https://meinhaus.ca/images/service_gallery/clFL3jQcF6lFasTENwgmgsAg4Yqk1hftq7fJFYHt.jpg",
      ],
    },
    {
      id: 3,
      service_id: 14,
      service_name: "Flooring & Tile Services",
      title: "bathroom renos",
      price_range: "$4000 - $6500",
      before: [
        "https://meinhaus.ca/images/service_gallery/kCj0AyHPMeABxdqYSfkIMcldQhnctkCJILYRu1WE.png",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/TsOiNvLGtNTPOoDgUM3xC9R9ooArqQRaQXEJTSgi.png",
        "https://meinhaus.ca/images/service_gallery/JBkaqLX7x1fOAa5tDK1D6RMnf5YVghBMvhmO7gym.png",
        "https://meinhaus.ca/images/service_gallery/soviVK7C1syITBDtMG69VPzUyN3RQk5q1ANe8SMT.png",
        "https://meinhaus.ca/images/service_gallery/wevfjUj9fxKgGSqBJDU3A9il4JM0VypacdZRW2mG.png",
        "https://meinhaus.ca/images/service_gallery/4ymtaEalfce6EZgeXmMAIhmyv6Qozvdl96xdrdc0.png",
        "https://meinhaus.ca/images/service_gallery/vaI73M7TrTs70zGqPATHHxqHIH8Q6jsgxwZ88q1v.png",
        "https://meinhaus.ca/images/service_gallery/TonM04THHSLhIGUnEvbdz8me9OuXqAcTngRZiQF0.png",
        "https://meinhaus.ca/images/service_gallery/lAP9DoXBEJnQrYF8M0HKIEa7Kjc90S5OpTFtdG1y.png",
      ],
    },
    {
      id: 4,
      service_id: 28,
      service_name: "Painting",
      title: "Exterior home painting",
      price_range: "$1000 - $7500",
      before: [
        "https://meinhaus.ca/images/service_gallery/pWKeN45UEvHZ0RRbk07RlIvuPoYh1Uyw6G9Qt37Y.png",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/N8hRjLa5sAvA3ALZwJXKHhZwBMCJ6VfYWQbypV9w.png",
      ],
    },
    {
      id: 5,
      service_id: 21,
      service_name: "Stone, Masonry, & Asphalt",
      title: "concrete projects",
      price_range: "$1500 - $10000",
      before: [
        "https://meinhaus.ca/images/service_gallery/kCj0AyHPMeABxdqYSfkIMcldQhnctkCJILYRu1WE.png",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/xnUya8CRTb8DxgK2WfsB5fkSeVIBrNUNsQjKEXCP.png",
        "https://meinhaus.ca/images/service_gallery/LAfmht0JA6N34ORQM6MhoZGbsqrP1p2rrfZYwKom.png",
        "https://meinhaus.ca/images/service_gallery/Xi8Tc47MStich7bs1O9ReRq2KQ0XJ476v0MwgjRU.png",
        "https://meinhaus.ca/images/service_gallery/k1Xy3RqEDBJjZhkPen3FwqpKg5GMksXIax2q9f9Q.png",
      ],
    },
    {
      id: 6,
      service_id: 37,
      service_name: "Demolition",
      title: "Home Demolition",
      price_range: "$1000 - $5000",
      before: [
        "https://meinhaus.ca/images/service_gallery/kCj0AyHPMeABxdqYSfkIMcldQhnctkCJILYRu1WE.png",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/V1Ppp40i8OkjaU8OJVl8kEC2uVvhM02NZkDmDhWh.png",
        "https://meinhaus.ca/images/service_gallery/edF7legFsSUdX5wb6E4Mpjcb3vRRPnznPsM8Njx4.png",
        "https://meinhaus.ca/images/service_gallery/WIlvVQUuUdj33srSSHP26PPw4CjVI2SXt7pN5NE7.png",
      ],
    },
  ],
  current_page: 1,
  last_page: 1,
  total: 2,
};

const Gallery = () => {
  const [items, setItems] = useState([]);
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
    setItems(mockData.data);
    setSelectedItem(mockData.data[0]); // first item as default
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section → Only Selected Item */}
        <div className="space-y-6">
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
            <div className="overflow-hidden" ref={emblaRef}>
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
