import Projectphotos from "@/components/website/jobpage/projectphotos";
import JobRegisterForm from "@/components/website/jobpage/rightsection";
import { WebsiteProviders } from "@/providers/storeProviders";
import { fetchGallerySection } from "@/serverCalls/website";
import Image from "next/image";

const JobPageContent = ({ data }) => {
  return (
    <main>
      <div className="grid mx-auto px-3 pt-1 grid-cols-1 md:grid-cols-2">
        <div className="bg-[#F6F6F6] h-full">
          <section className="mx-auto max-w-xl">
            <div className="flex justify-center">
              <Image
                src="/mein-haus-logo.png"
                alt="Mein Haus Logo"
                height={200}
                width={400}
                className="my-3 lg:ml-5"
              />
            </div>
            <div>
              <h1 className="font-secondary my-3 font-bold text-2xl text-center md:text-3xl">
                Any Reno. Any Size. Any Time.
              </h1>
            </div>
            <div className="flex justify-center">
              <Image
                src="/website/job/job.png"
                alt="People Logo"
                height={100}
                width={400}
                className="my-3 lg:ml-5"
              />
            </div>
          </section>
          <section className="max-w-xl mx-auto my-5">
            <h2 className="font-semibold text-2xl">
              Transform Your Kitchen & Bathroom - Starting at Just $4,999!
            </h2>
            <p className="text-[#9D9D9D] text-sm font-normal my-3">
              Upgrade your home with expert kitchen and bathroom remodeling
              services at unbeatable prices! Whether you're looking for a modern
              kitchen makeover or a luxurious bathroom refresh, our skilled
              professionals bring quality craftsmanship and stunning designs to
              every project. Whether you're looking for a modern kitchen
              makeover or a luxurious bathroom refresh
            </p>
          </section>
          {data?.length > 0 && (
            <section className="mx-auto max-w-xl">
              <h3 className="font-semibold text-xl">Project photos</h3>
              <Projectphotos data={data} />
            </section>
          )}
        </div>
        <div>
          <div>
            <h2 className="font-semibold text-3xl text-center my-2">
              Kickstart Your Dream Project Today!
            </h2>
            <p className="font-medium text-sm text-center text-[#262626] my-2">
              Please complete the form below to proceed with your request.
            </p>
            <JobRegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
};

const JobPage = async () => {
  const data = await fetchGallerySection();
  return (
    <WebsiteProviders>
      <JobPageContent data={data} />
    </WebsiteProviders>
  );
};

export default JobPage;
