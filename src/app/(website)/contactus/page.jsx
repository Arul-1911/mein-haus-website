import ContactusForm from "@/components/website/contactuspage/ContactusForm";
import {
  Facebook,
  Instagram,
  Locate,
  LocateIcon,
  LocationEdit,
  Mail,
  Phone,
  SeparatorVertical,
  Share,
  Share2,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main className="my-7">
      <div className="grid lg:grid-cols-2">
        {/* Left Section  */}
        <div className="flex flex-col max-lg:items-center gap-7 p-3 lg:px-20 lg:py-10">
          <h2 className="font-semibold text-2xl max-sm:text-center lg:text-3xl">
            Feel free to contact us we&apos;re always ready to assist you.
          </h2>
          <div>
            {/* Top div  */}
            <div className="grid lg:grid-cols-2  mt-6">
              <div className="flex flex-col">
                <span className="font-semibold flex items-center gap-2 text-xl">
                  <Phone />
                  Contact Number
                </span>
                <a
                  href="tel:+1 (844) 777-4287"
                  className="hover-black text-[#9D9D9D] my-2 font-normal text-md"
                >
                  +1 (844) 777-4287
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold flex items-center gap-2 text-xl">
                  <LocationEdit />
                  Location
                </span>
                <span className="hover-black text-[#9D9D9D] my-2 font-normal text-md">
                  Ontario, Toronto, Canada
                </span>
              </div>
            </div>
            {/* Bottom div  */}
            <div className="grid lg:grid-cols-2  mb-6">
              <div className="flex flex-col my-2">
                <span className="font-semibold flex my-1 gap-2 items-center text-xl">
                  <Mail />
                  Email Address
                </span>
                <span>
                  <a
                    href="mailto:info@meinhaus.ca"
                    className="hover-black text-[#9D9D9D]  font-normal text-md"
                  >
                    info@meinhaus.ca
                  </a>
                </span>
              </div>
              <div className="flex flex-col justify-baseline">
                <span className="font-semibold flex items-center gap-2 text-xl my-1">
                  <Share2 />
                  Social Media
                </span>
                <span className="flex items-center my-2 gap-4">
                  <span>
                    <Facebook
                      size={35}
                      className="bg-gray-300 p-2 rounded-full"
                    />
                  </span>
                  <span>
                    <Instagram
                      size={35}
                      className="bg-gray-300 p-2 rounded-full"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section  */}
        <div className="my-5">
          <ContactusForm />
        </div>
      </div>
    </main>
  );
};

export default page;
