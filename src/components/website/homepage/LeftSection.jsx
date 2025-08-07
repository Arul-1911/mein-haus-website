import React from "react";
import HomeBanner from "./HomeBanner";
import ArticleCarousel from "./TopArticles";
import Feedback from "./Feedback";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Complimentary from "./Complimentary";
import Footer from "../layout/Footer";

const Leftsection = () => {
  const articleSlides = [
    {
      id: 1,
      image: "/website/home/engineerslide.png",
      title: "Tech Trends in 2025",
      description: "Explore what’s shaping the future of software.",
    },
    {
      id: 2,
      image: "/website/home/engineerslide.png",
      title: "AI & Developer Tools",
      description:
        "Whether it’s a small room makeover or a full-scale renovation, creating a space that reflects your vision is...Read more",
    },
    {
      id: 3,
      image: "/website/home/engineerslide.png",
      title: "Tailwind Best Practices",
      description:
        "Whether it’s a small room makeover or a full-scale renovation, creating a space that reflects your vision is...Read more",
    },
    {
      id: 4,
      image: "/website/home/engineerslide.png",
      title: "Next.js Routing Deep Dive",
      description: "Master nested layouts and parallel routes.",
    },
    {
      id: 5,
      image: "/website/home/engineerslide.png",
      title: "Next.js Routing Deep Dive",
      description:
        "Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.",
    },
  ];

  const carouselItems = [
    { id: 1, img: "/website/home/education.png" },
    { id: 2, img: "/website/home/lending-service.png" },
    { id: 3, img: "/website/home/paralelgal-service.png" },
    { id: 4, img: "/website/home/realty-network.png" },
  ];
  return (
    <main className="z-2">
      <div>
        <HomeBanner />
      </div>
      <div>
        <h2 className="text-center mt-8 font-secondary font-medium text-2xl md:text-4xl">
          Top Articles for You
        </h2>
        <ArticleCarousel slides={articleSlides} options={{ loop: false }} />
      </div>
      <div>
        <Feedback />
      </div>
      <div className="mx-6 my-10 rounded-xl p-5 bg-[#36C1B51A]">
        {/* INSURANCE CONTAINER  */}
        <div className="grid gap:2 mx-auto max-sm:text-center justify-center items-center md:grid-cols-2">
          {/* IMG SECTION  */}
          <div className="max-sm:mx-auto mb-5">
            <Image
              src="/website/home/insurance.png"
              alt="Insurance Logo"
              height={200}
              width={200}
            />
          </div>
          {/* TEXT SECTION  */}
          <div className="">
            {/* TOP  */}
            <div>
              <Image
                src="/website/home/insurance-header.png"
                alt="Insurance Heading"
                height={50}
                width={300}
              />
            </div>
            {/* DESC  */}
            <div className="mt-3 text-start">
              <h3 className="font-semibold text-black text-2xl">
                Don't have insurance?
              </h3>
              <p className="font-normal my-1 text-[#666666]">
                Starting at $19/month
              </p>
            </div>
            <Button className="mt-2 bg-[#3AC0B4] hover:bg-[#3AC0B4]/70 cursor-pointer text-lg py-4 px-7">
              Get Now
            </Button>
          </div>
        </div>
      </div>
      {/* ONE STOP SERVICE SECTION  */}
      <div className="my-5 relative p-5 overflow-hidden">
        <Image
          src="/website/home/one-stop-service.jpg"
          alt="Service background Image"
          layout="fill"
          // objectFit="contain"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        {/* CONTENT SECTION  */}
        <div className="relative max-w-xl mx-auto z-10 p-8 text-white text-center">
          <h3 className="font-bold text-2xl md:text-4xl text-center mb-2">
            Your one-stop destination for all the services you need.
          </h3>
          <p className="text-sm md:text-xl my-6 font-normal text-center mb-4">
            Manage all your essential tasks effortlessly with a single platform
            that brings together a wide range of services in one convenient
            place. From booking to tracking, everything you need is just a click
            away.
          </p>
          <Button className="bg-white text-black hover:bg-black hover:text-white text-lg py-5 px-8 mt-1">
            <Link href="/about">Get a Quote</Link>
          </Button>
        </div>
      </div>
      {/* COMPLIMENTARY SERVICES SECTION  */}
      <div>
        <h2 className="my-6 text-center font-secondary text-2xl md:text-4xl font-medium">
          Complimentary Services
        </h2>
        <Complimentary carouselItems={carouselItems} />
      </div>
      <Footer />
    </main>
  );
};

export default Leftsection;
