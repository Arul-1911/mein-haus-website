import { fetchArticles } from "@/serverCalls/website";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const Articles = async () => {
  // const articleSlides = [
  //   {
  //     id: 1,
  //     image: "/website/home/engineerslide.png",
  //     title: "Why Hiring a Verified Contractor Saves You Time, Money & Stress",
  //     description:
  //       "When it comes to home renovations, remodeling, or repairs, finding the right contractor can be difficult.  Many homeowners have learned the hard way that the cheapest quote is not always the best option. Hiring an unverified or inexperienced contractor can lead to costly mistakes, delays, and endless frustration.",
  //   },
  //   {
  //     id: 2,
  //     image: "/website/home/engineerslide.png",
  //     title:
  //       "How Meinhaus is Revolutionizing Home Renovations with AI and Augmented Reality",
  //     description:
  //       "At Meinhaus.ca, we believe every homeowner deserves peace of mind. That’s why we connect you with verified contractors — professionals vetted for quality, reliability, and trustworthiness. In this article, we’ll explain what being a “verified contractor” means, how it protects your investment, and why choosing verified contractors saves you time, money, and stress.",
  //   },
  //   {
  //     id: 3,
  //     image: "/website/home/engineerslide.png",
  //     title:
  //       "How Meinhaus is Revolutionizing Home Renovations with AI and Augmented Reality",
  //     description:
  //       "Whether it’s a small room makeover or a full-scale renovation, creating a space that reflects your vision is...Read more",
  //   },
  //   {
  //     id: 4,
  //     image: "/website/home/engineerslide.png",
  //     title: "The Meinhaus Advantage: Transform Your Bathroom with Confidence",
  //     description:
  //       "At Meinhaus.ca, we believe every homeowner deserves peace of mind. That’s why we connect you with verified contractors — professionals vetted for quality, reliability, and trustworthiness. In this article, we’ll explain what being a “verified contractor” means, how it protects your investment, and why choosing verified contractors saves you time, money, and stress.",
  //   },
  //   {
  //     id: 5,
  //     image: "/website/home/engineerslide.png",
  //     title:
  //       "How Meinhaus is Revolutionizing Home Renovations with AI and Augmented Reality",
  //     description:
  //       "When it comes to home renovations, remodeling, or repairs, finding the right contractor can be difficult.  Many homeowners have learned the hard way that the cheapest quote isn’t always the best option. Hiring an unverified or inexperienced contractor can lead to costly mistakes, delays, and endless frustration.",
  //   },
  //   {
  //     id: 6,
  //     image: "/website/home/engineerslide.png",
  //     title: "Why Hiring a Verified Contractor Saves You Time, Money & Stress",
  //     description:
  //       "When it comes to home renovations, remodeling, or repairs, finding the right contractor can be difficult.  Many homeowners have learned the hard way that the cheapest quote isn’t always the best option. Hiring an unverified or inexperienced contractor can lead to costly mistakes, delays, and endless frustration.",
  //   },
  // ];

  let articleSlides = await fetchArticles();

  return (
    <main>
      <h2 className="text-[#262626] font-semibold text-3xl text-center my-4">
        Articles
      </h2>
      <div>
        {/* Carousel Viewport */}
        <div className="overflow-hidden  my-8">
          <div
            className="flex flex-wrap justify-center  gap-4 px-4"
            data-aos="zoom-in-up"
          >
            {articleSlides?.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_31%]  bg-white rounded lg:pr-3"
              >
                <Image
                  src={`https://dev-carenest.s3.ap-south-1.amazonaws.com${item.picPath}`}
                  alt={item.title}
                  height={200}
                  width={200}
                  className="w-full h-80  rounded-2xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title.slice(0, 70)}...{" "}
                  </h3>
                  <p className="text-sm text-[#545454] font-medium">
                    {item.description.slice(0, 150)}...{" "}
                    <span>
                      <Link
                        href={`/articles/${item.id}`}
                        className="text-black font-bold"
                      >
                        Read More
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Articles;
