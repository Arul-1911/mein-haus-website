"use client";

import { useRef } from "react";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function PhotoGallery({ photos = [] }) {
  const galleryRef = useRef(null);

  const openGallery = () => {
    if (!photos.length) return;

    const instance = lightGallery(galleryRef.current, {
      dynamic: true,
      plugins: [lgZoom, lgThumbnail],
      dynamicEl: photos.map((src) => ({
        src,
        thumb: src,
      })),
    });

    instance.openGallery();
  };

  if (!photos.length) return null;

  return (
    <div>
      <div className="text-black">
        <img
          src={photos[0]}
          alt="preview"
          className="w-75 h-20 object-cover md:w-20 md:h-14  rounded cursor-pointer hover:text-black"
          onClick={openGallery}
        />
      </div>

      <div ref={galleryRef} style={{ display: "none" }} />
    </div>
  );
}
