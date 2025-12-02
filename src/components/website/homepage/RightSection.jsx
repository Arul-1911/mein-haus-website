import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  title,
  description,
  image,
  peopleImage,
  peopleText,
  buttonText,
  buttonLink,
  buttonClass,
}) => (
  <div className="relative">
    <Image
      src={image}
      alt={title}
      height={100}
      width={500}
      className="max-sm:w-[60dvh] max-sm:h-[30dvh]"
    />
    <div className="absolute top-2 md:top-3 text-start ml-3">
      <h2 className="font-semibold text-md md:text-2xl mt-1">{title}</h2>
      <p className="mt-1 text-[#545454] text-sm  max-w-sm lg:text-sm font-medium text-wrap md:max-w-md">
        {description}
      </p>
      <div className="flex items-center my-4 gap-2">
        <Image
          src={peopleImage}
          alt="People"
          height={30}
          width={70}
          className="max-md:w-10"
        />
        <p className="font-medium text-sm">{peopleText}</p>
      </div>
      <Button className={buttonClass}>
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  </div>
);

const RightSection = () => {
  const cards = [
    {
      title: "Home Owner",
      description:
        "Instant custom quotes for any job. Buy & book on your schedule.",
      image: "/website/home/customer-bg.png",
      peopleImage: "/website/home/customer-people.png",
      peopleText: "120k+ Home Owner",
      buttonText: "Get a Quote",
      buttonLink: "/job",
      buttonClass:
        "bg-[#1E9BD0] hover:bg-[#1E9BD0]/80 py-1  md:text-lg md:py-5",
    },
    {
      title: "Trade Professional",
      description:
        "Sold Jobs sent directly to your phone! No more marketing & selling.",
      image: "/website/home/professional-bg.png",
      peopleImage: "/website/home/professional-people.png",
      peopleText: "120k+ Pro Registered",
      buttonText: "Pro Registration",
      buttonLink: "https://meinhaus.ca/professional/register",
      buttonClass:
        "bg-[#F88B36] hover:bg-[#F88B36]/80 py-1  md:text-lg md:py-5",
    },
  ];

  return (
    <section className="bg-[#F0F0F0] flex flex-col justify-center items-center max-2xl:px-4 w-full lg:fixed text-center lg:top-0 lg:right-0 lg:w-1/2 h-auto max-lg:pb-2 lg:h-dvh lg:overflow-y-auto z-4 pt-2 scrollbar-hide">
      <div className="mx-auto md:mt-1">
        <h1 className="font-secondary mb-7 font-bold text-xl text-center md:text-4xl">
          Any Reno. Any Size. Any Time.
        </h1>
      </div>
      {/* <div className="my-2 md:font-medium mx-auto text-[#9D9D9D] max-w-xl text-center">
        Manage all your essential tasks effortlessly with a single platform that
        brings together a wide range of services in one convenient place.
      </div> */}

      <div className="flex flex-col justify-center items-center max-sm:px-3 mb-2 gap-5">
        {cards?.map((card, index) => (
          <Card key={index} {...card} className="" />
        ))}
      </div>
    </section>
  );
};

export default RightSection;
