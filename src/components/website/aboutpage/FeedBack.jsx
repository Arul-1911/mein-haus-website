"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const feedbacks = [
  {
    id: 1,
    description:
      "This platform has completely changed how I manage my projects. The intuitive dashboard and real-time collaboration tools have boosted our team's productivity by at least 40%. I can easily track progress, assign tasks, and communicate with my team without switching between multiple apps.",
    user: "Jane",
    location: "Canada",
    starImage: "/website/home/star-rating.png",
  },
  {
    id: 2,
    description:
      "Excellent service, responsive team, and user-friendly UI. Every feature feels thoughtfully designed, and the support team resolves queries almost instantly. We've streamlined our workflows and reduced project delays significantly since adopting this platform.",
    user: "Jane Doe",
    location: "Canada",
    starImage: "/website/home/star-rating.png",
  },
  {
    id: 3,
    description:
      "I was skeptical at first, but this tool exceeded all my expectations. The customization options are fantastic, and the analytics dashboard provides deep insights that have helped us make data-driven decisions faster than ever before.",
    user: "Mark Peterson",
    location: "United States",
    starImage: "/website/home/star-rating.png",
  },
  {
    id: 4,
    description:
      "Our team operates remotely across several time zones, and this platform has been a game changer. The seamless integrations with our existing tools and the ability to collaborate in real-time has cut down our email communication by over 60%.",
    user: "Sophia Lee",
    location: "Australia",
    starImage: "/website/home/star-rating.png",
  },
  {
    id: 5,
    description:
      "The onboarding process was smooth, and the learning curve was minimal. Even team members who aren’t tech-savvy quickly became comfortable using the system. I especially appreciate the frequent updates and new features that keep improving the experience.",
    user: "Carlos Ramirez",
    location: "Spain",
    starImage: "/website/home/star-rating.png",
  },
  {
    id: 6,
    description:
      "From scheduling tasks to tracking deadlines, everything is now in one place. The mobile app is just as powerful as the desktop version, so I can manage work while traveling. This platform has saved me countless hours and headaches.",
    user: "Emily Wong",
    location: "Singapore",
    starImage: "/website/home/star-rating.png",
  },
];

const AboutFeedBack = ({ slides = feedbacks, options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

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

  return (
    <section className="w-full py-8">
      <div className="p-8 md:p-12 bg-[#F88B36]">
        {/* Header & Controls */}
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between px-4 mb-4">
          <button className="text-2xl md:text-3xl font-bold font-secondary text-white hover:underline">
            What Clients Are Saying
          </button>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={prevDisabled}
              className="p-1 rounded hover:bg-gray-300 disabled:opacity-40 cursor-pointer text-white"
            >
              <Image
                src="/website/home/left-arrow.png"
                height={20}
                width={40}
                alt="Previous"
              />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextDisabled}
              className="p-1 rounded hover:bg-gray-300 disabled:opacity-40 cursor-pointer text-white"
            >
              <Image
                src="/website/home/right-arrow.png"
                height={20}
                width={40}
                alt="Next"
              />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mt-8" ref={emblaRef}>
          <div className="flex gap-4  px-4">
            {slides?.map((item, index) => (
              <div
                key={item.id || index}
                className="flex-[0_0_100%] justify-center md:flex-[0_0_33%] md:max-w-[100%] bg-white rounded-lg shadow-md p-4"
              >
                {/* Star Rating Image */}
                {item.starImage && (
                  <Image
                    src={item.starImage}
                    alt="Star Rating"
                    height={20}
                    width={130}
                    className="mb-3 mx-auto"
                  />
                )}

                {/* Description */}
                <p className="text-sm text-black text-center font-medium mb-3">
                  {item.description}
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <span className="text-base font-semibold">{item.user}</span>
                  <span className="text-sm text-gray-500">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeedBack;
