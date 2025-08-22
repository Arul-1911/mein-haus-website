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
      height={200}
      width={500}
      className="max-sm:w-[60dvh] max-sm:h-[30dvh]"
    />
    <div className="absolute top-2 md:top-3 text-start ml-3">
      <h2 className="font-semibold text-sm md:text-2xl mt:mt-2">{title}</h2>
      <p className="mt-2 text-[#545454] max-w-sm text-[10px] lg:text-sm font-medium text-wrap md:max-w-md">
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
      buttonClass: "bg-[#1E9BD0] py-1  md:text-lg md:py-5",
    },
    {
      title: "Trade Professional",
      description:
        "Sold Jobs sent directly to your phone! No more marketing & selling.",
      image: "/website/home/professional-bg.png",
      peopleImage: "/website/home/professional-people.png",
      peopleText: "120k+ Pro Registered",
      buttonText: "Pro Registration",
      buttonLink: "/",
      buttonClass: "bg-[#F88B36] py-1  md:text-lg md:py-5",
    },
  ];

  return (
    <section className="bg-[#F0F0F0] w-full lg:fixed text-center lg:top-0 lg:right-0 lg:w-1/2 h-auto max-lg:pb-2 lg:h-screen lg:overflow-y-auto z-4 pt-2  lg:pt-22">
      <div className="mx-auto">
        <h1 className="font-secondary font-bold text-2xl text-center md:text-4xl">
          Any Reno. Any Size. Any Time.
        </h1>
      </div>
      <div className="my-3 md:font-medium mx-auto text-[#9D9D9D] max-w-lg text-center">
        Manage all your essential tasks effortlessly with a single platform that
        brings together a wide range of services in one convenient place.
      </div>

      <div className="flex flex-col justify-center items-center m-7 gap-5">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default RightSection;
