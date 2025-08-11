"use client";

import { Send } from "lucide-react";
import React from "react";

const ContactusForm = () => {
  return (
    <section className="flex flex-col">
      <div>
        <h2 className="font-semibold text-3xl my-2 text-center">Contact Us</h2>
        <p className="text-[#9D9D9D] font-normal text-lg text-center">
          Get in touch with us for support or inquiries.
        </p>
      </div>
      <div>
        <form
          action="
         "
          className="flex flex-col items-center lg:items-baseline"
        >
          <input
            type="text"
            placeholder="Full Name *"
            className="bg-[#F6F6F6] w-[90%] my-2 mt-7 p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email *"
            className="bg-[#F6F6F6] w-[90%] my-2 p-3 rounded-md"
          />
          <textarea
            name=""
            placeholder="Message *"
            id=""
            className="bg-[#F6F6F6] w-[90%] my-2 p-3 rounded-md"
          ></textarea>
          <button className="bg-black text-white w-[90%] cursor-pointer rounded-md mt-4 p-3 text-center">
            <span className="flex justify-center gap-3">
              Send Message <Send />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactusForm;
