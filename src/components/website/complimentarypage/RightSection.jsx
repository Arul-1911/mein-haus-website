"use client";

import {
  Clock,
  Eye,
  EyeOff,
  FileText,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Telescope,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const RightSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form
        className="px-4 md:w-[70%] mx-auto mt-5 space-y-4"
        id="job-register-form"
        method="POST"
        action="https://meinhaus.ca/customer-landing-post"
        encType="multipart/form-data"
        noValidate
      >
        <input
          type="hidden"
          name="_token"
          value="SmYJ8UFuQH8ytsKpH135RzJhLjQ5ujmgygRQLvaP"
        />

        {/* Full Name */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <User className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Full Name"
            />
          </div>
          <span
            id="fullname-error"
            className="text-red-500 text-xs mt-1"
          ></span>
        </div>

        {/* Email */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Mail className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Mail ID"
            />
          </div>
          <span id="email-error" className="text-red-500 text-xs mt-1"></span>
        </div>

        {/* Phone Number */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Phone className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Phone Number"
              autoComplete="tel"
            />
          </div>
          <span id="phone-error" className="text-red-500 text-xs mt-1"></span>
        </div>

        {/* Address */}
        <div className="relative flex p-1 hover:border bg-[#F6F6F6] items-center">
          <MapPin className="w-5 h-5  text-gray-500 ml-3" />
          <input
            type="text"
            id="new_address"
            name="address"
            className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
            placeholder="Enter location"
            autoComplete="off"
          />
        </div>

        {/* Project Description */}
        <div className="relative">
          <div className="flex p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <MessageSquare className="w-5 h-5 text-gray-500 ml-3 mt-2" />
            <textarea
              id="notes"
              name="notes"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Notes"
              rows="6"
            ></textarea>
          </div>
          <span id="notes-error" className="text-red-500 text-xs mt-1"></span>
        </div>

        <div>
          <p className="text-[#545454] font-normal text-start">
            <input type="checkbox" className="mr-2 justify-items-center" />I
            agree to the{" "}
            <Link href="https://meinhaus.ca/customer/login">
              <span className="text-[#1E9BD0] font-medium">
                Terms and Conditions
              </span>
            </Link>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-[#262626] cursor-pointer text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          Send{" "}
          <span>
            <Send size={20} />
          </span>
        </button>
      </form>
    </div>
  );
};

export default RightSection;
