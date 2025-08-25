import Image from "next/image";
import React from "react";

const LeftSection = ({ heading, description, image }) => {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="mx-auto">
        <div className="p-6 flex flex-col justify-center items-center gap-4">
          <Image
            src="/mein-haus-logo.png"
            alt="Meinhaus Logo"
            height={200}
            width={300}
          />
          <h2 className="text-2xl font-bold my-4">{heading}</h2>
          <Image
            src={image}
            alt={heading}
            height={200}
            width={350}
            className="rounded-lg my-3"
          />
          <p className="text-[#9D9D9D] mb-4">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
