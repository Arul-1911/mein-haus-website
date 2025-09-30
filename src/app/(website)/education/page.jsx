import { fetchEducationSection } from "@/serverCalls/website";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = async () => {
  const data = await fetchEducationSection();
  return (
    <main>
      <div className="">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-20 text-center md:text-left">
          <div className="max-w-4xl">
            <h2 className="font-bold mt-3 text-2xl lg:text-3xl mb-4">
              {data?.title || "Welcome to Meinhaus Education"}
            </h2>
            <p className="text-[#9D9D9D] max-w-xl p-2">
              {data?.heading ||
                `At Meinhaus, we&apos;re committed to empowering trades
              professionals with the tools and knowledge they need to succeed.
              That&apos;s why we&apos;re excited to announce the upcoming launch
              of Meinhaus Education, a platform designed for the continuing
              education and growth of our trades community.`}
            </p>
          </div>
          <div className="" data-aos="flip-up">
            <Image
              src="/website/education/right-section.png"
              alt="Education Image"
              height={300}
              width={350}
            />
          </div>
        </div>

        {/* {second Section}  */}
        <div className="flex flex-col-reverse mt-6 md:flex-row items-center justify-center  gap-20 text-center md:text-left">
          <div data-aos="flip-up">
            <Image
              src="/website/education/left-section.png"
              alt="Tutorial Image"
              height={30}
              width={300}
            />
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">What&apos;s Coming?</h2>
            <h3 className="font-semibold">Online Tutorials and Courses</h3>
            <p className="text-[#ABABAB] p-2">
              Expand your skills with courses covering a wide range of topics
              and services, including:
            </p>
            <div className="flex flex-col max-sm:p-3 md:flex-row mdjustify-start gap-10 mt-5">
              <div>
                <ul>
                  {data?.onlineCourseNames &&
                    data?.onlineCourseNames?.map((dt) => (
                      <li className="flex gap-1 my-1">
                        {/* <Ticket /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="#48B02C"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-icon lucide-circle-check"
                        >
                          <circle cx="12" cy="12" r="10" fill="#48B02C" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>

                        <span>{dt}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third content section  */}
        <div className="bg-[#FAFAFA] py-8 flex flex-col items-center lg:flex-row text-center justify-center gap-6 lg:items-start">
          <div className="max-w-sm flex flex-col items-center">
            <Image
              src="/website/education/paid-content.png"
              alt="Education Image"
              height={20}
              width={90}
            />
            <h3 className="font-semibold text-lg my-1 text-[#262626]">
              Free & Paid Content
            </h3>
            <p className="font-normal text-[#9D9D9D] text-sm p-2">
              Access a mix of free resources and premium, in-depth training
              tailored to your career needs.
            </p>
          </div>
          <div className="max-w-sm flex flex-col items-center">
            <Image
              src="/website/education/safety-first.png"
              alt="Safety Image"
              height={20}
              width={90}
            />
            <h3 className="font-semibold my-1 text-lg text-[#262626]">
              Safety First
            </h3>
            <p className="font-normal text-[#9D9D9D] text-sm p-2">
              We&apos;re offering essential safety training, including First
              Aid, CPR, and compliance with regulatory standards.
            </p>
          </div>
          <div className="max-w-sm flex flex-col items-center">
            <Image
              src="/website/education/badges.png"
              alt="badges Image"
              height={20}
              width={90}
            />
            <h3 className="font-semibold my-1 text-lg text-[#262626]">
              Earn Badges & Get Recognized
            </h3>
            <p className="font-normal text-[#9D9D9D] text-sm p-2">
              Showcase your expertise! Completing courses earns you badges that
              reflect your skills and qualifications. These badges also
              translate to higher ratings and improved visibility on the
              Meinhaus platform.
            </p>
          </div>
        </div>

        {/* Partnerships section  */}
        <div className="grid md:grid-cols-2 mx-7 m-auto place-items-center my-5">
          {/* Left  */}
          <div className="max-w-lg max-md:text-center">
            <h2 className="font-semibold text-2xl lg:text-3xl my-2 text-[#262626]">
              {data?.partnershipTitle ||
                "Partnerships with Colleges & Government"}
            </h2>
            <p className="text-[#9D9D9D] font-normal text-md my-2">
              {/* We&apos;re building partnerships to provide comprehensive learning
              opportunities and help you achieve mandatory licenses for trades
              like: */}
              {data?.description ||
                `We&apos;re building partnerships to provide comprehensive learning
              opportunities and help you achieve mandatory licenses for trades
              like`}
            </p>
            {/* <p className="text-[#9D9D9D] font-normal text-md">
              By working together, we aim to simplify the licensing process and
              help you meet industry requirements while advancing your career.
            </p> */}
          </div>
          {/* right  */}
          <div
            className="max-md:mt-5 relative
          "
            data-aos="flip-up"
          >
            <Image
              src="/website/education/bottom-right-3.png"
              alt="People Image"
              height={100}
              width={450}
              className=""
            />
            <div className="absolute w-40 max-sm:text-xs bottom-15 left-12 right-12 max-sm:left-8 max-sm:w-30 max-sm:bottom-10 text-wrap">
              {data?.services?.slice(0, 3).map((dt) => (
                <li className="flex items-start gap-1 my-1">
                  {/* <Ticket /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="#48B02C"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-icon lucide-circle-check"
                  >
                    <circle cx="12" cy="12" r="10" fill="#48B02C" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  <span>{dt}</span>
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* Join us section  */}
        <div className="grid lg:grid-cols-2">
          {/* left  */}
          <div className="bg-[#F88B36] text-[#FFFFFF] px-6 py-8">
            <h2 className="font-bold text-2xl">
              Are you an educator, trades expert, or institution interested in
              joining this initiative?
            </h2>
            <p className="font-medium text-md my-5">
              We&apos;d love to collaborate and create something remarkable for
              the trades community.
            </p>
            <div>
              <span className="flex gap-2 items-center mt-8">
                <Phone />
                <a
                  href={`tel:${data?.mobile}`}
                >{`Call us at ${data?.mobile}`}</a>
              </span>
              <span className="flex gap-2 items-center my-1">
                <Mail />
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
              </span>
            </div>
            <p className="mt-8 font-semibold text-md">
              Stay tuned for the launch of Meinhaus Education! Together,
              we&apos;ll set new standards for quality, safety, and expertise in
              the trades industry.
            </p>
          </div>
          {/* Right  */}
          <div className="relative max-lg:h-[50vh] ">
            <Image
              alt="Group of Professionals"
              src="/website/education/people.png"
              layout="fill"
              objectFit="cover"
              className="group"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
