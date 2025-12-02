import RegisterForm from "@/components/customer/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomerRegisterPage = () => {
  return (
    <main>
      <section className="grid md:grid-cols-2 h-screen">
        {/* {Left section } */}
        <div className="h-full order-2 md:order-1 flex  items-center justify-center">
          <div className="w-full flex flex-col gap-7 px-4 mb-3 max-w-xl">
            <div className="">
              <h2 className="font-semibold text-center text-2xl mt-3 md:mt-1 md:text-4xl">
                Create a New Account
              </h2>
            </div>
            <div className="">
              <RegisterForm />
            </div>
            <div className="space-y-3">
              {/* Already a customer */}
              <div>
                <p className="text-[#545454] font-normal text-center">
                  Already have an account?{" "}
                  <Link href="/customer/login">
                    <span className="text-secondary font-medium">Login</span>
                  </Link>
                </p>
              </div>
              {/* {OR}  */}
              <div className="flex items-center justify-center gap-3">
                <hr className="text-[#E6E6E6]  w-[30%]" />
                <span className="text-[#ABABAB]">or</span>
                <hr className="text-[#E6E6E6] w-[30%]" />
              </div>

              {/* {Continue with google} */}
              <div className="flex justify-center bg-[#F6F6F6] p-2 rounded-md">
                <button className="flex justify-around gap-4 cursor-pointer">
                  <span>
                    <img
                      src="/website/job/icons_google.png"
                      alt="Google icon"
                      className="w-6 h-6"
                    />
                  </span>
                  <p className="text-[#545454] font-normal">
                    Continue with Google
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {Right section } */}
        <div className="bg-(--primary-light) order-1 md:order-2 h-full">
          <div className="mx-auto max-w-2xl flex flex-col items-center py-3 h-full w-full justify-center gap-1 md:gap-3">
            <div className="relative group w-40 h-10 md:w-90 md:h-17">
              <Image
                src="/mein-haus-logo.png"
                alt="Mein Haus Logo"
                // height={200}
                // width={370}
                fill
                className="my-1 object-contain"
                sizes="(max-width: 768px) 160px, 360px"
              />
            </div>
            <div className="my-2">
              <h1 className="font-primary text-primary px-1 my-3 font-bold text-xl text-center md:text-2xl">
                Any Reno. Any Size. Any Time.
              </h1>
            </div>
            <div className="mt-2 relative group h-[25dvh] w-[35dvh] md:w-[70%] md:h-[50%]">
              <Image
                alt="Register people image"
                // height={200}
                // width={450}
                fill
                src="/customer/auth/register-img.png"
                className="object-cover"
                priority
                sizes="(max-width: 768px) 160px, 360px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomerRegisterPage;
