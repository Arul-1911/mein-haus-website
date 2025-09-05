import ExploreArticleCarousel from "@/components/website/articles/ExploreMore";
import { fetchArticles, fetchSingleArticle } from "@/serverCalls/website";
import { formatDate } from "@/utils/website/formatDate";
import { Calendar, CircleChevronLeft, CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleArticle = async ({ params }) => {
  const articleId = await params.id;

  //Single Article API
  const article = await fetchSingleArticle(articleId);

  //Fetch All Article API
  const allArticles = await fetchArticles();

  const exploreArticles = allArticles.filter((a) => a.id !== articleId);

  // console.log(exploreArticles);

  return (
    <main>
      <section className="max-w-4xl px-5 mx-auto mt-7">
        <div className="flex gap-3">
          <Link href="/articles">
            <CircleChevronLeft />
          </Link>
          <Link href="/">Home Page</Link> / Article
        </div>
        <div>
          <div className="my-3">
            <Image
              src={`https://dev-carenest.s3.ap-south-1.amazonaws.com${article?.picPath}`}
              alt="Article Image"
              width={400}
              height={100}
              className="w-full h-[40dvh] md:h-[60dvh] object-cover rounded-md mt-4"
            />
            <div className="flex gap-3 my-4">
              <span className="flex items-center gap-2">
                <CircleUser /> {article?.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar /> {formatDate(article?.createdAt)}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#262626] font-semibold text-2xl">
              {article?.title}
            </p>
            <div>
              <div
                className="editor-content"
                dangerouslySetInnerHTML={{ __html: article?.content || "" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F6F6F6] mt-4">
        <ExploreArticleCarousel slides={exploreArticles} />
      </section>
    </main>
  );
};

export default SingleArticle;
