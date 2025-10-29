"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function Album({ slides, options = {} }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [albumsPopup, setAlbumsPopup] = useState(false);
  const [album, setAlbum] = useState({});

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

  const handleAlbum = (data) => {
    setAlbumsPopup(true);
    setAlbum(data);
  };

  return (
    <section>
      {/* Carousel Viewport */}
      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex gap-4">
          {slides?.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_98%] md:flex-[0_0_41%] lg:flex-[0_0_21%] md:max-w-[100%] bg-white rounded"
            >
              <Image
                src={`${item?.afterImages[0]}`}
                alt={item.albumName}
                height={100}
                width={300}
                className="w-full h-30 md:h-40  rounded-t-2xl"
              />
              <div className="py-4 bg-[#F6F6F6] rounded-b-2xl -mt-2">
                <h3 className="text-sm md:text-lg text-[#363636] px-1 text-center font-medium mb-1 md:min-h-12 lg:min-h-8">
                  {item.albumName.slice(0, 13)}...
                </h3>
                <p className="text-sm text-center w-full mt-2 text-[#545454] font-medium">
                  <Button
                    className="rounded-4xl"
                    onClick={() => handleAlbum(item)}
                  >
                    View Details
                  </Button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav Arrows   */}
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

      {console.log(album)}

      {/* Modal */}
      <Dialog
        open={!!albumsPopup}
        onOpenChange={() => setAlbumsPopup(false)}
        className="p-1"
      >
        <DialogContent
          className="
          w-[95%] max-w-lg sm:max-w-md md:max-w-lg
          sm:rounded-lg rounded-2xl
          max-h-[95dvh] overflow-y-auto
          outline-none sm:px-6 py-6 border-none
        "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {albumsPopup && (
            <>
              <DialogHeader className="-mt-4">
                <DialogTitle>
                  <div className="my-1 flex justify-between items-center w-[92%]">
                    <h2 className="text-xl max-w-[70%] text-left font-semibold">
                      {album?.albumName}
                    </h2>
                    <div className="text-sm flex flex-col items-end">
                      <div className="flex items-center gap-1">
                        <Star className="text-[#1E9BD0]" size={17} />
                        {album?.customerRating} / 5
                      </div>
                      <div className="text-muted-foreground text-right text-xs">
                        Customer Ratings
                      </div>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <Separator />

              {/* Customer review  */}
              <div>
                <p className="font-semibold">Customer Review:</p>
                <p className="text-[#545454] font-normal text-sm my-1">
                  {album.customerReview}
                </p>
              </div>
              <div className="grid mt-2 grid-cols-2 gap-6">
                {/* Before Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Before</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {album?.beforeImages?.slice(0, 4).map((url, i) => (
                      <Image
                        height={100}
                        width={100}
                        key={i}
                        src={url}
                        alt="Before"
                        className="rounded-lg w-full max-w-[400px] h-38 object-cover"
                      />
                    ))}
                  </div>
                </div>
                {/* After Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">After</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {album?.afterImages?.slice(0, 4).map((url, i) => (
                      <Image
                        height={100}
                        width={100}
                        key={i}
                        src={url}
                        alt="After"
                        className="rounded-lg w-full max-w-[400px] h-38 object-cover"
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
}

export default Album;
