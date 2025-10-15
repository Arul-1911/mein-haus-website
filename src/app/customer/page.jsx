import EstiamtedCard from "@/components/customer/homepage/estiamtedcard";
import HeroSection from "@/components/customer/homepage/hero";
import OngoingCard from "@/components/customer/homepage/ongoingcard";
import OurServicesCarousel from "@/components/customer/homepage/servicescarousel";
import Footer from "@/components/customer/layout/Footer";
import Header from "@/components/customer/layout/Header";
import { ChevronRight } from "lucide-react";
import React from "react";

const Page = () => {
  const estiamtedWorkData = [
    {
      id: 1,
      projectid: "#DS-654321",
      status: "pending",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
    },
    {
      id: 2,
      estimatedDate: "20 Sep 2025",
      projectid: "#DS-466",
      status: "estiamted",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
    },
  ];

  const ongoingworkWorkData = [
    {
      id: 1,
      projectid: "#DS-654321",
      totalCost: "2500",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
      services: 3,
    },
    {
      id: 2,
      createdAt: "20 Sep 2025",
      projectid: "#DS-466",
      totalCost: "2500",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
      services: 2,
    },
  ];

  const ourServices = [
    {
      id: 1,
      label: "Appliance Install",
      img: "/customer/root/home/service-1.jpg",
    },
    {
      id: 2,
      label: "Tiles and Flooring Services",
      img: "/customer/root/home/service-2.jpg",
    },
    {
      id: 3,
      label: "Kitchen & Bathroom Renovation",
      img: "/customer/root/home/service-3.jpg",
    },
    {
      id: 4,
      label: "Kitchen & Bathroom Renovation",
      img: "/customer/root/home/service-4.jpg",
    },
    {
      id: 5,
      label: "Bathroom Renovation",
      img: "/customer/root/home/service-2.jpg",
    },
    {
      id: 6,
      label: "Kitchen Renovation",
      img: "/customer/root/home/service-3.jpg",
    },
  ];

  return (
    <main>
      <Header />
      <div>
        <HeroSection />
      </div>
      {/* Estimated work  */}
      <div className="mx-auto max-w-7xl mt-8">
        <div className="flex mx-4 justify-center md:justify-between items-center px-2 flex-wrap">
          <h2 className="font-bold text-center text-3xl md:text-4xl">
            Estimated work
          </h2>
          <p className="hidden md:flex justify-between gap-1 items-center font-medium text-lg">
            View all{" "}
            <span>
              <ChevronRight />
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-7">
          {estiamtedWorkData?.map((data) => (
            <EstiamtedCard key={data.id} estimate={data} />
          ))}
        </div>
        <p className="text-center md:hidden my-5 flex justify-center gap-1 items-center font-medium text-lg">
          View all{" "}
          <span>
            <ChevronRight />
          </span>
        </p>
      </div>

      {/* ongoing work  */}
      <div className="mx-auto max-w-7xl mt-8">
        <div className="flex mx-4 justify-center md:justify-between items-center px-2 flex-wrap">
          <h2 className="font-bold text-center text-3xl md:text-4xl">
            Ongoing work
          </h2>
          <p className="hidden md:flex justify-between gap-1 items-center font-medium text-lg">
            View all{" "}
            <span>
              <ChevronRight />
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-7">
          {ongoingworkWorkData?.map((data) => (
            <OngoingCard key={data.id} estimate={data} />
          ))}
        </div>
        <p className="text-center md:hidden my-5 flex justify-center gap-1 items-center font-medium text-lg">
          View all{" "}
          <span>
            <ChevronRight />
          </span>
        </p>
      </div>

      {/* {Services}  */}
      <div className="bg-[#FAFAFA] py-8 my-7">
        <div className="flex justify-between max-lg:flex-wrap max-sm:gap-4  mx-auto items-center  max-w-7xl px-3 md:px-5 lg:6">
          <div className="max-sm:text-center w-[100%] md:w-[30%]">
            <h2 className="text-[#1E9BD0] font-medium text-md my-2">
              Our Services
            </h2>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
              Services We Provide
            </h1>
          </div>
          <div className="w-[100%] md:w-[70%]">
            <p className="text-[#545454] max-sm:text-center px-2 font-medium max-w-4xl">
              From full-scale renovations to everyday plumbing fixes, we offer a
              wide range of home services tailored to your needs. Whether you're
              upgrading your kitchen, remodeling your bathroom, or repairing a
              leaky faucet, our trusted professionals deliver quality
              workmanship with transparent pricing and quick turnaround.
            </p>
          </div>
        </div>
        {/* services carousel  */}
        <div className="mt-15">
          <OurServicesCarousel slides={ourServices} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
