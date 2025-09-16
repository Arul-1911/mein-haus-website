"use client";

import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Clock,
  Upload,
  Lock,
  Eye,
  EyeOff,
  X,
  Globe,
  MapPinHouse,
  Building,
  Pin,
  BookUser,
} from "lucide-react";
import Link from "next/link";
// import { useCreateJobRegisterMutation } from "@/features/website/apiWebsite";
import toast from "react-hot-toast";

const JobRegisterForm = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
  });

  // const [createJobRegister, { isLoading, isError, isSuccess }] =
  //   useCreateJobRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      title: "",
      description: "",
      time: "",
      address: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      password: "",
      password_confirmation: "",
      images: null,
    },
  });

  const password = watch("password", "");

  // Sync line1/line2 whenever address changes
  useEffect(() => {
    setValue("line1", address);
    setValue("line2", address);
  }, [address, setValue]);

  // Sync hidden password_confirmation to password
  useEffect(() => {
    setValue("password_confirmation", password);
  }, [password, setValue]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        () => {
          alert("Location permsission is required");
        }
      );
    }
  }, []);

  useEffect(() => {
    if (coords.latitude && coords.longitude) {
      setValue("latitude", coords.latitude);
      setValue("longitude", coords.longitude);
    }
  }, [coords, setValue]);

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
    setValue("time", value, { shouldValidate: true });
    setIsDropdownOpen(false);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    const allImages = [...previewImages, ...newImages];
    setPreviewImages(allImages);
    setValue(
      "images",
      allImages.map((img) => img.file),
      { shouldValidate: true }
    );
  };

  const handleRemoveImages = (index) => {
    setPreviewImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index]?.url);
      updated.splice(index, 1);
      setValue(
        "images",
        updated.map((img) => img.file)
      );
      return updated;
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all text fields
    Object.entries({
      fullname: data.fullname,
      phone: data.phone,
      email: data.email,
      title: data.title,
      description: data.description,
      time: data.time,
      address: data.address || address,
      line1: data.address || address,
      line2: data.address || address,
      city: data.city,
      state: data.state,
      country: data.country,
      zip: data.zip,
      password: data.password,
      password_confirmation: data.password_confirmation,
      latitude: coords.latitude ?? "",
      longitude: coords.longitude ?? "",
    }).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        formData.append(key, value);
      }
    });

    // Append files as images[]
    previewImages.forEach((img) => {
      formData.append("images[]", img.file);
    });

    setIsLoading(true);

    try {
      const res = await fetch("https://test.meinhaus.ca/api/v2/admin/job", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.status == 204) {
        toast.success("Job request sent!");
        reset();
        setPreviewImages([]);
      } else {
        let errorMsg = "Failed to send job request!";
        try {
          const errData = await res.json();

          if (errData.errors) {
            // Flatten all error messages
            errorMsg = Object.values(errData.errors).flat().join("\n");
          } else if (errData.message) {
            errorMsg = errData.message;
          }
        } catch {
          // If backend sent non-JSON
        }

        toast.error(errorMsg);
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4"
        id="job-register-form"
        encType="multipart/form-data"
      >
        {/* Full Name */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <User className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="fullname"
              {...register("fullname", {
                required: "Full name is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Full Name"
            />
          </div>
          {errors.fullname && (
            <span className="text-red-500 text-xs mt-1">
              {errors.fullname.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Mail className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Mail ID"
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Phone className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s-]{8,}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Phone Number"
              autoComplete="tel"
            />
          </div>
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Project Title */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <FileText className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="project_title"
              {...register("title", {
                required: "Project title is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Title (e.g. Bathroom Renovation)"
            />
          </div>
          {errors.title && (
            <span className="text-red-500 text-xs mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        {/* Project Description */}
        <div className="relative">
          <div className="flex p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <MessageSquare className="w-5 h-5 text-gray-500 ml-3 mt-2" />
            <textarea
              id="project_description"
              {...register("description", {
                required: "Project description is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Description"
              rows="4"
            ></textarea>
          </div>
          {errors.description && (
            <span className="text-red-500 text-xs mt-1">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Time Dropdown */}
        <div className="relative">
          <div
            className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md cursor-pointer"
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
            {...register("time", {
              required: "Please select a time option",
            })}
            value={selectedTime}
          />
          {errors.time && (
            <span className="text-red-500 text-xs mt-1">
              {errors.time.message}
            </span>
          )}
        </div>

        {/* Address */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <BookUser className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="new_address"
              {...register("address", {
                required: "Address is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Address"
              autoComplete="off"
              onChange={(e) => {
                setAddress(e.target.value);
                setValue("address", e.target.value, { shouldValidate: true });
              }}
            />
          </div>
          {errors.address && (
            <span className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </span>
          )}
        </div>

        {/* City */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Building className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="city"
              {...register("city", {
                required: "City is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="City"
              autoComplete="off"
            />
          </div>
          {errors.city && (
            <span className="text-red-500 text-xs mt-1">
              {errors.city.message}
            </span>
          )}
        </div>

        {/* State */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <MapPinHouse className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="state"
              {...register("state", {
                required: "State is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="State"
              autoComplete="off"
            />
          </div>
          {errors.state && (
            <span className="text-red-500 text-xs mt-1">
              {errors.state.message}
            </span>
          )}
        </div>

        {/* Country */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Globe className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="country"
              {...register("country", {
                required: "Country is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Country"
              autoComplete="off"
            />
          </div>
          {errors.country && (
            <span className="text-red-500 text-xs mt-1">
              {errors.country.message}
            </span>
          )}
        </div>

        {/* Zip code */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Pin className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="zip"
              {...register("zip", {
                required: "Zip code is required",
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Zip code"
              autoComplete="off"
            />
          </div>
          {errors.zip && (
            <span className="text-red-500 text-xs mt-1">
              {errors.zip.message}
            </span>
          )}
        </div>

        {/* File Upload */}
        <div className="border-dashed border-4 bg-[#F6F6F6] rounded-md p-4 text-center">
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
            className="inline-block bg-[#262626] text-white px-4 py-2 rounded-md cursor-pointer"
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
        </div>

        {/* Image preview section */}
        <div id="image-preview" className="mt-4 grid grid-cols-3 gap-3">
          {previewImages?.map((img, idx) => (
            <div key={idx} className="relative group">
              <img
                src={img.url}
                alt={`Image preview-${idx}`}
                className="w-full h-24 object-cover rounded-md border"
              />
              <button
                type="button"
                onClick={() => handleRemoveImages(idx)}
                className="absolute top-1 right-1 bg-black/80 text-red-500 rounded-full p-1 hover:bg-black/30 cursor-pointer"
              >
                <X size={10} />
              </button>
            </div>
          ))}
        </div>

        {/* Password */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Lock className="w-5 h-5 text-gray-500 ml-3 cursor-pointer" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
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
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </span>
          )}
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
          className={`w-full bg-[#262626] ${
            isLoading ? "cursor-not-allowed opacity-45" : "cursor-pointer"
          } text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Register"}
        </button>

        {/* Already a customer */}
        <div>
          <p className="text-[#545454] font-normal text-center">
            Already a customer?{" "}
            <Link href="https://meinhaus.ca/customer/login">
              <span className="text-[#1E9BD0] font-medium">Click here</span>
            </Link>
          </p>
        </div>
        {/* {OR}  */}
        {/* <div className="flex items-center justify-center gap-3">
          <hr className="text-[#E6E6E6]  w-[30%]" />
          <span className="text-[#ABABAB]">or</span>
          <hr className="text-[#E6E6E6] w-[30%]" />
        </div> */}

        {/* {Continue with google} */}
        {/* <div className="flex justify-center bg-[#F6F6F6] p-2 rounded-md">
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
        </div> */}
      </form>
    </div>
  );
};

export default JobRegisterForm;
