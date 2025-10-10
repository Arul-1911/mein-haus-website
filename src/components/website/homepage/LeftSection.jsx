import React from "react";
import HomeBanner from "./HomeBanner";
import ArticleCarousel from "./TopArticles";
import Feedback from "./Feedback";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Complimentary from "./Complimentary";
import Footer from "../layout/Footer";
import {
  fetchArticles,
  fetchBanners,
  fetchFeedbacks,
  fetchServices,
} from "@/serverCalls/website";

const Leftsection = async () => {
  const [banners, articleSlides, feedbacks, services] =
    await Promise.allSettled([
      fetchBanners(),
      fetchArticles(),
      fetchFeedbacks(),
      fetchServices(),
    ]);

  // API responses
  const bannerImages = banners.status === "fulfilled" ? banners.value : [];
  const articles =
    articleSlides.status === "fulfilled" ? articleSlides.value : [];
  const reviews = feedbacks.status === "fulfilled" ? feedbacks.value : [];
  const complimentaryServices =
    services.status === "fulfilled" ? services.value : [];

  return (
    <main className="z-2">
      <div>
        <HomeBanner images={bannerImages} />
      </div>
      <div>
        <h2 className="text-center mt-10 font-secondary font-medium text-2xl md:text-4xl">
          Top Articles for You
        </h2>
        <ArticleCarousel slides={articles} options={{ loop: false }} />
      </div>
      <div>
        <Feedback feedbacks={reviews} />
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
              <p className="font-normal my-1 text-[#666666] text-md">
                Starting at <span className="font-bold">$19/month</span>
              </p>
            </div>
            <Button className="mt-2 bg-[#3AC0B4] hover:bg-[#3AC0B4]/70 cursor-pointer text-lg py-4 px-7">
              <Link href="https://app.zensurance.com/quote?utm_source=meinhaus&utm_medium=referral&utm_campaign=partner&qid=68a7f5b6293295094d36cbb3&token=d6e69709-4862-48fb-a21e-cb8076fc5058">
                Get now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* ONE STOP SERVICE SECTION  */}
      <div className="my-5 relative p-5 overflow-hidden">
        <Image
          src="/website/home/one-stop-service.jpg"
          alt="Service background Image"
          fill
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* CONTENT SECTION  */}
        <div className="relative max-w-2xl mx-auto z-10 p-8 text-white text-center">
          <h3 className="font-bold text-2xl md:text-4xl text-center mb-2">
            Your one-stop destination for all the services you need.
          </h3>
          <p className="text-sm md:text-2xl my-6 font-normal text-center mb-4">
            Manage all your essential tasks effortlessly with a single platform
            that brings together a wide range of services in one convenient
            place. From booking to tracking, everything you need is just a click
            away.
          </p>
          <Button className="bg-white text-black hover:bg-black hover:text-white text-xl py-5 px-8 mt-1">
            <Link href="/job">Get a Quote</Link>
          </Button>
        </div>
      </div>
      {/* COMPLIMENTARY SERVICES SECTION  */}
      <div>
        <h2 className="my-6 text-center font-secondary text-2xl md:text-4xl font-medium">
          Complimentary Services
        </h2>
        <Complimentary carouselItems={complimentaryServices} />
      </div>
      <Footer />
      {/* MOBILE VIEW OF GET QUTOE AND PRO REG  */}
      <div className="grid grid-cols-2 w-full fixed  bottom-0   z-11 lg:hidden">
        <Link href="/job">
          <div className="bg-[#1E9BD0] w-full text-white mx-auto">
            <p className="text-center py-2 font-medium text-md">Get a Quote</p>
          </div>
        </Link>
        <Link href="https://meinhaus.ca/professional/register">
          <div className="bg-[#F88B36] w-full text-white m-auto">
            <p className="text-center py-2 font-medium text-md">
              Pro Registration
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Leftsection;
