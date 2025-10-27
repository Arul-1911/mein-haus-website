import Gallery from "@/components/website/gallerypage/gallerysection";
import NoContent from "@/components/website/no-content";
import { fetchGallerySection } from "@/serverCalls/website";
import React from "react";

const GalleryPage = async () => {
  const Data = await fetchGallerySection();

  if (!Data) {
    return (
      <>
        <NoContent />
      </>
    );
  }

  return (
    <>
      <div>
        <Gallery mockData={Data} />
      </div>
    </>
  );
};

export default GalleryPage;
