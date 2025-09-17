import AboutFeedBack from "@/components/website/aboutpage/FeedBack";
import { fetchAboutSection, fetchFeedbacks } from "@/serverCalls/website";
import { Quote } from "lucide-react";
import Image from "next/image";

export default async function Page() {
  const feedbacks = await fetchFeedbacks();
  const aboutContent = await fetchAboutSection();
  return (
    <main className="mx-1 mt-4 lg:mt-8">
      {/* Our Story Section */}
      <section className="flex flex-col px-5 lg:px-20 lg:flex-row items-center gap-6 mb-12">
        <div className="lg:w-7/12">
          {/* <h2 className="text-3xl font-semibold mb-3">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Welcome to MEINHAUS, where innovation meets trust in the world of
            home renovations.
          </p>
          <p className="text-muted-foreground mb-4">
            We founded MEINHAUS with a simple yet profound philosophy: to bridge
            the gap between homeowners and trade professionals, ensuring a
            seamless, secure, and reliable renovation experience for all.
          </p>
          <h3 className="text-3xl font-semibold mt-6 mb-3">Why MEINHAUS?</h3>
          <p className="text-muted-foreground">
            As homeowners, we know that embarking on a renovation journey can be
            overwhelming. From finding the right professionals to ensuring the
            work is done to perfection, the process is often fraught with
            uncertainty. At the same time, we understand the challenges faced by
            skilled tradespeople in building trust, managing workloads, and
            showcasing their craftsmanship.
          </p> */}
          <div>
            <div
              className="editor-content"
              dangerouslySetInnerHTML={{
                __html: aboutContent?.content || "",
              }}
            />
          </div>
        </div>

        <div className="lg:w-5/12 text-center lg:text-right relative">
          <div className="inline-block relative">
            <Image
              src="/website/about/pic-right.png"
              alt="Construction Worker"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col-reverse px-5 lg:px-20 lg:flex-row items-center gap-6 mb-12">
        <div className="lg:w-5/12 text-center lg:text-left relative">
          <div className="inline-block relative">
            <Image
              src="/website/about/pic-left.png"
              alt="Construction Worker"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="lg:w-7/12 text-lg">
          <p className="text-muted-foreground mb-4">
            We don't just pair clients with great local subcontractors, we
            oversee and guarantee all our projects and effectively arbitrate,
            negotiate and manage the work flow from start to finish in a manner
            that is efficient, transparent and fair for all parties.
          </p>
          <p className="text-muted-foreground mb-4">
            That's why we built MEINHAUS—to be the trusted partner for both
            homeowners and professionals, creating a platform where everyone can
            thrive:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-3">
            <li>
              <span className="font-bold">For Homeowners:</span> We provide
              access to verified, insured, and skilled professionals who deliver
              high-quality results. From kitchens and bathrooms to basements and
              beyond, your dream home is our priority.
            </li>
            <li>
              <span className="font-bold">For Professionals:</span> We empower
              tradespeople with opportunities to grow their businesses, secure
              consistent work, and connect with clients who value their
              expertise.
            </li>
          </ul>
        </div>
      </section>

      {/* Our Philosophy  */}
      <section className="bg-[#F6F6F6] flex flex-col items-center p-10 text-center">
        <h2 className="font-semibold text-3xl lg:text-4xl text-center">
          Our Philosophy
        </h2>
        <div>
          <p className=" flex font-bold text-2xl lg:text-5xl text-center justify-center my-8">
            <sup>
              <Image
                src="/website/about/right-quote.png"
                alt="Left Quote"
                height={20}
                width={30}
                className="text-[#D6D6D6]"
              />
            </sup>
            <span className="text-[#F88B36] ">Any Reno,</span>
            <span className="text-[#1E9BD0]"> Any Size,</span>
            <span className="text-[#F88B36]"> Any Time.</span>
            <sup>
              <Image
                src="/website/about/left-quote.png"
                alt="Left Quote"
                height={20}
                width={30}
                className="text-[#D6D6D6]"
              />
            </sup>
          </p>
        </div>
        <p className="text-center font-normal text-sm text-[#5B5B5B] max-w-3xl">
          This mantra embodies our commitment to flexibility and excellence.
          Whether you're planning a small update or a large-scale remodel,
          MEINHAUS ensures your renovation experience is smooth, transparent,
          and tailored to your needs.
        </p>
      </section>

      {/* {Our Mission } */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="my-7 font-semibold text-4xl">Our Mission</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center mb-7">
          <div className="text-center max-w-xs">
            <div>
              <Image
                src="/website/about/secure.png"
                alt="Trust Icon"
                height={25}
                width={40}
                className="mx-auto"
              />
            </div>
            <h4 className="text-[#363636] font-medium text-xl my-2">
              Secure Trust
            </h4>
            <p className="text-[#9D9D9D] text-md">
              By rigorously vetting and insuring all our professionals, we
              ensure that every project is handled by capable hands.
            </p>
          </div>

          <div className="text-center max-w-xs">
            <div className="text-center w-full">
              <Image
                src="/website/about/renovation.png"
                alt="Renovation Icon"
                height={25}
                width={40}
                className="mx-auto"
              />
            </div>
            <h4 className="text-[#363636] font-medium text-xl my-2">
              Simplify Renovations
            </h4>
            <p className="text-[#9D9D9D] text-md">
              From the first inquiry to the final nail, we streamline the
              renovation process for homeowners and professionals alike.
            </p>
          </div>

          <div className="text-center max-w-xs">
            <div>
              <Image
                src="/website/about/standards.png"
                alt="Trust Icon"
                height={25}
                width={35}
                className="mx-auto"
              />
            </div>
            <h4 className="text-[#363636] font-medium text-xl my-2">
              Elevate Standards
            </h4>
            <p className="text-[#9D9D9D] text-md">
              Through education, innovative tools, and accountability, we are
              raising the bar for quality and professionalism in the renovation
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Client Feedbacks  */}
      <AboutFeedBack feedbacks={feedbacks} />
    </main>
  );
}
