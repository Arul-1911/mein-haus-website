import Image from "next/image";

const DownloadPage = () => {
  return (
    <main>
      <section className="my-6 mx-4">
        <div className="grid lg:grid-cols-2">
          {/* left section  */}
          <div className="mx-auto max-w-xl flex flex-col justify-center">
            <h1 className="text-[#262626] font-bold text-2xl md:text-5xl">
              Download Our Professional App
            </h1>
            <p className=" text-[#9D9D9D] my-6 font-medium">
              With our Pro App, you get access to{" "}
              <span className="text-[#FD760D]">
                {" "}
                pre-sold home service jobs
              </span>
              —from renovations to repairs. Accept tasks with a tap, get paid
              seamlessly, and let us handle the marketing, sales, scheduling,
              and invoicing.
            </p>
            <div className="flex max-md:flex-col mx-auto max-md:mb-5 gap-3">
              <button className="bg-[#262626] text-white flex items-center p-2 rounded-md cursor-pointer gap-3">
                <Image
                  src="/website/apps/apple.png"
                  alt="App Store Icon"
                  height={20}
                  width={20}
                />
                <a href="https://apps.apple.com/in/app/meinhaus-pro/id6474660404">
                  Download for Apple
                </a>
              </button>
              <button className="bg-[white] text-black border border-black flex items-center p-2 rounded-md cursor-pointer gap-3">
                <Image
                  src="/website/apps/playstore.png"
                  alt="App Store Icon"
                  height={20}
                  width={20}
                />
                <a
                  href="
                https://play.google.com/store/apps/details?id=ca.meinhaus.app.pro"
                >
                  Download for Android
                </a>
              </button>
            </div>
          </div>
          {/* right section  */}
          <div className="mx-auto">
            <Image
              src="/website/apps/pro-app.png"
              alt="Proffessional App"
              height={200}
              width={360}
            />
          </div>
        </div>
        <div className="grid mt-8 lg:grid-cols-2">
          {/* left section  */}
          <div className="mx-auto">
            <Image
              src="/website/apps/customer-app.png"
              alt="Proffessional App"
              height={200}
              width={360}
            />
          </div>
          {/* Right section  */}
          <div className="mx-auto flex flex-col justify-center max-w-xl">
            <h1 className="text-[#262626] font-bold text-2xl md:text-5xl">
              Download Our Customer App
            </h1>
            <p className=" text-[#9D9D9D] my-6 font-medium">
              With our customer app, you can easily create detailed estimates
              for your home project, make secure payments, and leave the rest to
              trusted professionals.
            </p>
            <div className="flex max-md:flex-col mx-auto gap-3">
              <button className="bg-[#262626] text-white flex  items-center p-2 rounded-md cursor-pointer gap-3">
                <Image
                  src="/website/apps/apple.png"
                  alt="App Store Icon"
                  height={20}
                  width={20}
                />
                <a href="https://apps.apple.com/in/app/meinhaus/id6473602794">
                  Download for Apple
                </a>
              </button>
              <button className="bg-[white] text-black border border-black flex items-center p-2 rounded-md cursor-pointer gap-3">
                <Image
                  src="/website/apps/playstore.png"
                  alt="App Store Icon"
                  height={20}
                  width={20}
                />
                <a href="https://play.google.com/store/apps/details?id=ca.meinhaus.app.user">
                  Download for Android
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DownloadPage;
