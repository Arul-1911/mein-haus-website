import Image from "next/image";
import React from "react";

const LeftSection = ({ heading, description }) => {
  const carouselItems = [
    {
      id: 1,
      img: "/website/complimentary/education.png",
      title: "education-services",
      desc: "MEINHAUS is dedicated to the ongoing education of home owners, trades and complimentary service providers. We are working diligently on online courses and in person training for a wide variety of topics. Including Tradespeople safety and proficiency training including obtaining licenses for various trades. Business Development training and resources for people to understand home construction, legal practices and lending criteria. Everything you need to learn about home ownership experience under one roof. Powered by MEINHAUS AI and AR technologies.",
      heading: "Educational Platform",
    },
    {
      id: 2,
      img: "/website/complimentary/lending-services.png",
      title: "lending-services",
      desc: "In MEINHAUS' commitment to be all in one platform for home services we have developed the most efficient and trustworthy network of professional Lenders and Brokers across the nation. Reach out with us today and our professionals will carefully review your unique circumstances and present custom lending solutions to meet your needs.",
      heading: "Lending Services",
    },
    {
      id: 3,
      img: "/website/complimentary/real-estate.png",
      title: "paralelgal-services",
      desc: "In MEINHAUS' commitment to be all in one platform for home services we have built a network of the most efficient and trustworthy paralegals and lawyer associates. When dealing with Real estate contracts, Large Renovation contracts or any other form of civil cases it is important to know that you have efficient and incredibly cost effective legal services on your side. We are dedicated to implementing the most effective software and AI technologies in this endeavour.",
      heading: "Legal Services",
    },
    {
      id: 4,
      img: "/website/complimentary/real-estate.png",
      title: "realty-network",
      desc: "In MEINHAUS' commitment to be all in one platform for home services we have developed the most efficient and trustworthy network of professional brokerages and salespeople across the nation. Reach out with us today and we will refer you the top local professional for your needs. This typically includes special offers for home services when combined with a real estate transaction.",
      heading: "Real Estate Services",
    },
  ];

  const image = carouselItems[Math.floor(Math.random() * carouselItems.length)];

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
            src={image.img}
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
