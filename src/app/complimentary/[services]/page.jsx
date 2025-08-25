import LeftSection from "@/components/website/complimentarypage/LeftSection";
import RightSection from "@/components/website/complimentarypage/RightSection";
import React from "react";

const Complimentarypage = ({ params }) => {
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

  const selectedItem = carouselItems.find(
    (item) => item.title === params?.services
  );
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#F6F6F6] h-screen">
          {selectedItem && (
            <>
              <LeftSection
                heading={selectedItem?.heading}
                description={selectedItem?.desc}
                image={selectedItem?.img}
              />
            </>
          )}
        </div>
        <div className="my-8">
          <h2 className="font-semibold text-3xl text-center my-2">
            Let’s work together
          </h2>
          <p className="font-medium text-sm text-center text-[#9D9D9D] mx-6 my-2">
            Share your details with us and let’s make it happen! For any
            questions or assistance, feel free to reach out — we’re always here
            to help.
          </p>
          <RightSection />
        </div>
      </div>
    </>
  );
};

export default Complimentarypage;
