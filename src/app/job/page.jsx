import Projectphotos from "@/components/website/jobpage/projectphotos";
import JobRegisterForm from "@/components/website/jobpage/rightsection";
import { fetchGallerySection } from "@/serverCalls/website";
import Image from "next/image";

const JobPage = async () => {
  // const mockData = {
  //   data: [
  //     {
  //       id: 1,
  //       service_id: 18,
  //       service_name: "Roofing, Siding, and Trim",
  //       title: "Eavestrough Repair and Replacement",
  //       price_range: "$2000 - $3000",
  //       before: [
  //         "https://meinhaus.ca/images/service_gallery/w9a4AalIUZDs0sPFfVtha1Kkau5BjFVIYRrkyF5W.png",
  //       ],
  //       after: [
  //         "https://meinhaus.ca/images/service_gallery/gDFQr7rScnuIWkeGUVdyW4gErcmpUnip4DClim6A.png",
  //         "https://meinhaus.ca/images/service_gallery/UXgWWThZAaale8cej55IORn38VxZkkCXTNDXih9s.png",
  //         "https://meinhaus.ca/images/service_gallery/SL1yrvXyI1N099maJVtwxR2tSC7RLBA7QqqkhPfk.png",
  //         "https://meinhaus.ca/images/service_gallery/zQJHAypvmu0HNMsgUWTxwCFti541WDGLRwPrhRvp.png",
  //       ],
  //     },
  //     {
  //       id: 2,
  //       service_id: 14,
  //       service_name: "Flooring & Tile Services",
  //       title: "Mississauga Shower Renewal",
  //       price_range: "$3000 - $4000",
  //       before: [
  //         "https://meinhaus.ca/images/service_gallery/r4t9czzRnRdaKduxv9avSLDGY3j54Xh61qbmGOGc.jpg",
  //       ],
  //       after: [
  //         "https://meinhaus.ca/images/service_gallery/clFL3jQcF6lFasTENwgmgsAg4Yqk1hftq7fJFYHt.jpg",
  //         "https://meinhaus.ca/images/service_gallery/3ybuHcTCJPhllH5OKmdUx3ib5PSnqlksLNpO99os.jpg",
  //         "https://meinhaus.ca/images/service_gallery/MkkvUBnMONwiIxA0yVC70IpOnBAVBdd76fKc9Odj.jpg",
  //       ],
  //     },
  //     {
  //       id: 3,
  //       service_id: 14,
  //       service_name: "Flooring & Tile Services",
  //       title: "bathroom renos",
  //       price_range: "$4000 - $6500",
  //       before: [
  //         "https://meinhaus.ca/images/service_gallery/pWKeN45UEvHZ0RRbk07RlIvuPoYh1Uyw6G9Qt37Y.png",
  //       ],
  //       after: [
  //         "https://meinhaus.ca/images/service_gallery/TsOiNvLGtNTPOoDgUM3xC9R9ooArqQRaQXEJTSgi.png",
  //         "https://meinhaus.ca/images/service_gallery/JBkaqLX7x1fOAa5tDK1D6RMnf5YVghBMvhmO7gym.png",
  //         "https://meinhaus.ca/images/service_gallery/soviVK7C1syITBDtMG69VPzUyN3RQk5q1ANe8SMT.png",
  //         "https://meinhaus.ca/images/service_gallery/wevfjUj9fxKgGSqBJDU3A9il4JM0VypacdZRW2mG.png",
  //         "https://meinhaus.ca/images/service_gallery/4ymtaEalfce6EZgeXmMAIhmyv6Qozvdl96xdrdc0.png",
  //         "https://meinhaus.ca/images/service_gallery/vaI73M7TrTs70zGqPATHHxqHIH8Q6jsgxwZ88q1v.png",
  //         "https://meinhaus.ca/images/service_gallery/TonM04THHSLhIGUnEvbdz8me9OuXqAcTngRZiQF0.png",
  //         "https://meinhaus.ca/images/service_gallery/lAP9DoXBEJnQrYF8M0HKIEa7Kjc90S5OpTFtdG1y.png",
  //       ],
  //     },
  //     {
  //       id: 4,
  //       service_id: 28,
  //       service_name: "Painting",
  //       title: "Exterior home painting",
  //       price_range: "$1000 - $7500",
  //       before: [
  //         "https://meinhaus.ca/images/service_gallery/pWKeN45UEvHZ0RRbk07RlIvuPoYh1Uyw6G9Qt37Y.png",
  //       ],
  //       after: [
  //         "https://meinhaus.ca/images/service_gallery/N8hRjLa5sAvA3ALZwJXKHhZwBMCJ6VfYWQbypV9w.png",
  //       ],
  //     },
  //     {
  //       id: 5,
  //       service_id: 21,
  //       service_name: "Stone, Masonry, & Asphalt",
  //       title: "concrete projects",
  //       price_range: "$1500 - $10000",
  //       before: [
  //         "https://meinhaus.ca/images/service_gallery/pWKeN45UEvHZ0RRbk07RlIvuPoYh1Uyw6G9Qt37Y.png",
  //       ],
  //       after: [
  //         "https://meinhaus.ca/images/service_gallery/xnUya8CRTb8DxgK2WfsB5fkSeVIBrNUNsQjKEXCP.png",
  //         "https://meinhaus.ca/images/service_gallery/LAfmht0JA6N34ORQM6MhoZGbsqrP1p2rrfZYwKom.png",
  //         "https://meinhaus.ca/images/service_gallery/Xi8Tc47MStich7bs1O9ReRq2KQ0XJ476v0MwgjRU.png",
  //         "https://meinhaus.ca/images/service_gallery/k1Xy3RqEDBJjZhkPen3FwqpKg5GMksXIax2q9f9Q.png",
  //       ],
  //     },
  //     {
  //       id: 6,
  //       service_id: 37,
  //       service_name: "Demolition",
  //       title: "Home Demolition",
  //       price_range: "$1000 - $5000",
  //       before: [
  //         "https://meinhaus.ca/images/service_gallery/pWKeN45UEvHZ0RRbk07RlIvuPoYh1Uyw6G9Qt37Y.png",
  //       ],
  //       after: [
  //         "https://meinhaus.ca/images/service_gallery/V1Ppp40i8OkjaU8OJVl8kEC2uVvhM02NZkDmDhWh.png",
  //         "https://meinhaus.ca/images/service_gallery/edF7legFsSUdX5wb6E4Mpjcb3vRRPnznPsM8Njx4.png",
  //         "https://meinhaus.ca/images/service_gallery/WIlvVQUuUdj33srSSHP26PPw4CjVI2SXt7pN5NE7.png",
  //         "https://meinhaus.ca/images/service_gallery/kCj0AyHPMeABxdqYSfkIMcldQhnctkCJILYRu1WE.png",
  //       ],
  //     },
  //   ],
  //   current_page: 1,
  //   last_page: 1,
  //   total: 2,
  // };

  const data = await fetchGallerySection();

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
          <section className="mx-auto max-w-xl">
            <h3 className="font-semibold text-xl">Project photos</h3>
            <Projectphotos data={data} />
          </section>
        </div>
        <div>
          <div>
            <h2 className="font-semibold text-3xl text-center my-2">
              Kickstart Your Dream Project Today!
            </h2>
            <p className="font-medium texxt-sm text-center text-[#262626] my-2">
              Please complete the form below to proceed with your request.
            </p>
            <JobRegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobPage;
