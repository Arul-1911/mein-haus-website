"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function Photos({ photos }) {
  const [limit, setLimit] = useState(8);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const gallery = lightGallery(galleryRef.current, {
      selector: "a[data-allow-lightgallery='true']",
      plugins: [lgThumbnail, lgZoom],
      speed: 100,
      download: true,
      mobileSettings: { controls: true, showCloseIcon: true },
    });

    return () => gallery.destroy(true);
  }, [photos, limit]);

  return (
    <section>
      <div
        ref={galleryRef}
        className="grid gap-6 items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
      >
        {photos.slice(0, limit).map((url, i) => {
          const isLastVisible = i === 7 && limit !== photos.length;

          return (
            <a
              href={url}
              key={i}
              data-lg-size="1406-1390"
              data-allow-lightgallery={isLastVisible ? "false" : "true"}
              className="relative block h-32 w-full md:w-50"
              onClick={(e) => {
                if (isLastVisible) {
                  e.preventDefault();
                  setLimit(photos.length);
                }
              }}
            >
              <Image
                src={url}
                alt="Project Photo"
                fill
                className="rounded-2xl object-cover"
              />

              {isLastVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/65 hover:bg-black/50 transition-all rounded-2xl px-3 cursor-pointer">
                  <span className="text-white text-lg font-semibold text-center">
                    {`View more ${photos.length - limit - 1 || 2}+`}
                  </span>
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
