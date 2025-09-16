import Gallery from "@/components/website/gallerypage/gallerysection";
import { fetchGallerySection } from "@/serverCalls/website";
import React from "react";

const GalleryPage = async () => {
  const Data = await fetchGallerySection();
  return (
    <>
      <div>
        <Gallery mockData={Data} />
      </div>
    </>
  );
};

export default GalleryPage;
