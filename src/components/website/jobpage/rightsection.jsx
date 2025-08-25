"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Clock,
  MapPin,
  Upload,
  Lock,
  Eye,
  EyeOff,
  X,
} from "lucide-react";
import Link from "next/link";

const JobRegisterForm = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  const timeOptions = [
    {
      value: "",
      label: "When would you like to have this done?",
      disabled: true,
    },
    { value: "ASAP", label: "ASAP" },
    { value: "Less than 1 week", label: "Less than 1 week" },
    { value: "Less than 1 month", label: "Less than 1 month" },
  ];

  const handleTimeSelect = (value) => {
    setSelectedTime(value);
    setIsDropdownOpen(false);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setPreviewImages((prev) => [...previewImages, ...newImages]);
  };

  const handleRemoveImages = (index) => {
    setPreviewImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index]?.url);
      updated.splice(index, 1);
      return updated;
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <form
        className="w-full space-y-4"
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

        {/* Project Title */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <FileText className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="project_title"
              name="title"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Title (e.g. Bathroom Renovation)"
            />
          </div>
          <span
            id="project_title-error"
            className="text-red-500 text-xs mt-1"
          ></span>
        </div>

        {/* Project Description */}
        <div className="relative">
          <div className="flex p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <MessageSquare className="w-5 h-5 text-gray-500 ml-3 mt-2" />
            <textarea
              id="project_description"
              name="description"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Description"
              rows="4"
            ></textarea>
          </div>
          <span
            id="project_description-error"
            className="text-red-500 text-xs mt-1"
          ></span>
        </div>

        {/* Time Dropdown */}
        <div className="relative">
          <div
            className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md cursor-pointer "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Clock className="w-5 h-5 text-gray-500 ml-3" />
            <span className="w-full p-2 pl-5 text-sm text-gray-500">
              {selectedTime || "When would you like to have this done?"}
            </span>
            <svg
              className={`w-5 h-5 mr-3 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          {isDropdownOpen && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {timeOptions.map((option) => (
                <li
                  key={option.value}
                  className={`p-2 text-sm hover:bg-gray-100 ${
                    option.disabled
                      ? "text-gray-400 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={() =>
                    !option.disabled && handleTimeSelect(option.value)
                  }
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
          <input
            type="hidden"
            id="selected-value"
            name="time"
            value={selectedTime}
          />
          <span
            id="selected-value-error"
            className="text-red-500 text-xs mt-1"
          ></span>
        </div>

        {/* Address */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <MapPin className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="new_address"
              name="address"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Enter location"
              autoComplete="off"
            />
          </div>
          <input type="hidden" id="line1" name="line1" />
          <input type="hidden" id="line2" name="line2" />
          <input type="hidden" id="city" name="city" />
          <input type="hidden" id="state" name="state" />
          <input type="hidden" id="country" name="country" />
          <input type="hidden" id="zip" name="zip" />
          <input type="hidden" id="latitude" name="latitude" />
          <input type="hidden" id="longitude" name="longitude" />
          <span
            id="new_address-error"
            className="text-red-500 text-xs mt-1"
          ></span>
        </div>

        {/* File Upload */}
        <div
          className="border-dashed
 bg-[#F6F6F6] rounded-md p-4 text-center"
        >
          <label htmlFor="file-input" className="cursor-pointer">
            <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
          </label>
          <p className="text-gray-500 text-sm font-medium">
            Upload clear photos of project area.
          </p>
          <p className="text-gray-400 text-xs mb-2">
            PNG, JPG, JPEG (10 MB maximum file size)
          </p>
          <label
            htmlFor="file-input"
            className="inline-block bg-[#262626]  text-white px-4 py-2 rounded-md cursor-pointer"
          >
            <Upload className="w-4 h-4 inline-block mr-2" />
            Upload
          </label>
          <input
            type="file"
            id="file-input"
            name="images[]"
            accept="image/png, image/gif, image/jpeg, image/jpg, image/svg+xml, image/webp"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <div id="image-preview" className="mt-2"></div>
          <span
            id="file-input-error"
            className="text-red-500 text-xs mt-1"
          ></span>
        </div>

        {/* {Image preview section } */}
        <div id="image-preview" className="mt-4 grid grid-cols-3 gap-3">
          {previewImages?.map((img, indx) => (
            <div key={indx} className="relative group">
              <img
                src={img.url}
                alt={`Image preview-${indx}`}
                className="w-full h-24 object-cover rounded-md border"
              />
              <button
                type="button"
                onClick={() => handleRemoveImages(indx)}
                className="absolute top-1 right-1 bg-black/80 text-red-500 rounded-full p-1 hover:bg-black/30 cursor-pointer"
              >
                <X size={10} />
              </button>
            </div>
          ))}
        </div>

        {/* Password */}
        <div className="relative">
          <div className="flex items-center  rounded-md hover:border-black focus-within:border-black">
            <Lock className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none "
              placeholder="Password"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-500" />
              ) : (
                <Eye className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
          <span
            id="password-error"
            className="text-red-500 text-xs mt-1"
          ></span>
        </div>

        {/* Google reCAPTCHA */}
        <div className="my-3">
          <div
            className="g-recaptcha"
            data-sitekey="6LdVLlMpAAAAANvMfowtwfeFHw91KUCzSsTdyXQU"
          ></div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#262626] cursor-pointer text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          Register
        </button>

        {/* {Already a customer here} */}
        <div>
          <p className="text-[#545454] font-normal text-center">
            Already a customer?{" "}
            <Link href="https://meinhaus.ca/customer/login">
              <span className="text-[#1E9BD0] font-medium">Click here</span>
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
            <p className="text-[#545454] font-normal">Continue with Google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobRegisterForm;
