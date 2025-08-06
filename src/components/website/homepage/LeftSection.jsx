import React from "react";
import HomeBanner from "./HomeBanner";
import ArticleCarousel from "./TopArticles";
import Feedback from "./Feedback";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        "Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.",
    },
    {
      id: 3,
      image: "/website/home/engineerslide.png",
      title: "Tailwind Best Practices",
      description:
        "Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.Learn how to keep your styles clean and scalable.",
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
  return (
    <main>
      <div>
        <HomeBanner />
      </div>
      <div>
        <h2 className="text-center mt-8 font-secondary text-4xl">
          Top Articles for You
        </h2>
        <ArticleCarousel slides={articleSlides} options={{ loop: false }} />
      </div>
      <div>
        <Feedback />
      </div>
      <div className="mx-6 my-10 rounded-xl p-5 bg-[#36C1B51A]">
        {/* INSURANCE CONTAINER  */}
        <div className="grid grid-cols-2">
          {/* IMG SECTION  */}
          <div>
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
    </main>
  );
};

export default Leftsection;
