import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="shadow bg-[#F6F6F6] py-1 md:py-2">
      <section className="flex max-lg:justify-center gap-5 my-7 justify-between mx-auto flex-wrap  items-start md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        {/* top  */}
        <div className="flex flex-col gap-4">
          <div>
            <Link href="/customer">
              <Image
                src="/mein-haus-logo.png"
                alt="Mein Haus Logo"
                height={100}
                width={280}
                className="my-3 max-sm:w-[30dvh] mx-auto"
              />
            </Link>
          </div>
          <div className="flex justify-around gap-4 items-center">
            {/* APP STORE  */}
            <div>
              <a href="https://apps.apple.com/in/app/meinhaus-pro/id6474660404">
                <Image
                  src="/website/home/app-store.png"
                  alt="Apple store Logo"
                  height={100}
                  width={120}
                  className=""
                />
              </a>
            </div>
            {/* PLAY STORE  */}
            <div>
              <a href="https://play.google.com/store/apps/details?id=ca.meinhaus.app.pro">
                <Image
                  src="/website/home/play-store.png"
                  alt="Play Store Logo"
                  height={100}
                  width={120}
                  className=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex font-normal text-md flex-col md:flex-row items-center justify-center lg:justify-end gap-1 md:gap-4">
            <Link href="/customer">
              <p>Home</p>
            </Link>
            <Link href="/customer/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/customer/terms&conditions">
              <p>Terms and Conditions</p>
            </Link>
          </div>
          <div>
            <h2 className="text-[#E6E6E6] font-bold text-4xl md:text-8xl tracking-widest">
              MEINHAUS
            </h2>
          </div>
        </div>
      </section>
      {/* bottom  */}
      <div>
        {/* SOCIAL SECTION  */}
        <div className="bg-[#1E9BD00F] pt-4 flex flex-col justify-center items-center">
          {/* TOP SECTION  */}
          <div className="flex justify-around gap-3">
            <span className="">
              <Link href="https://www.facebook.com/share/Dk57zGZtvTAut6Nu/?mibextid=dGKdO6">
                <Image
                  src="/website/home/facebook.png"
                  alt="Facebook Logo"
                  height="10"
                  width="30"
                  className=""
                />
              </Link>
            </span>
            <span>
              <Link href="https://www.instagram.com/meinhaus.ca">
                <Image
                  src="/website/home/instagram.png"
                  alt="Instagram Logo"
                  height="10"
                  width="30"
                  className=""
                />
              </Link>
            </span>
          </div>
          {/* BOTTOM SECTION  */}
          <div className="text-center mt-1">
            {new Date().getFullYear()} &copy; MeinHaus | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
