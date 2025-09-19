"use client";

import { useCreateServiceRequestMutation } from "@/features/website/apiWebsite";
import {
  Building,
  Globe,
  Mail,
  MapPin,
  MapPinHouse,
  MessageSquare,
  Phone,
  Pin,
  Send,
  Telescope,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { use, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("Name is required !")
    .min(2, "Full name must be at least 2 characters long"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required !"),
  mobile: yup
    .string()
    .required("Phone number is required")
    .matches(/^(\+?\d{10,15})$/, "Enter a valid phone number !"),
  address: yup.string().required("Address is required !"),
  city: yup.string().required("City is required !"),
  state: yup.string().required("State is required !"),
  country: yup.string().required("Country is required !"),
  zip: yup.string().required("Zip code is required !"),
  notes: yup.string(),
});

const RightSection = ({ service }) => {
  // const [createServiceRequest, { isLoading, isError, isSuccess }] =
  //   useCreateServiceRequestMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const { id } = useParams();
  // console.log("Service ID:", id);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  // const onSubmit = async (data) => {
  //   const formData = new URLSearchParams();

  //   formData.append("comp_service_id", id);
  //   formData.append("name", data.fullname);
  //   formData.append("email", data.email);
  //   formData.append("mobile", data.mobile);
  //   formData.append("address", data.address || "");
  //   formData.append("notes", data.notes || "");

  //   try {
  //     const res = await createServiceRequest(formData.toString()).unwrap();
  //     if (res.success) {
  //       toast.success("Service request sent!");
  //       reset();
  //     }
  //   } catch (error) {
  //     toast.error("Failed to submit service request");
  //     console.log(error);
  //   }
  // };

  const onSubmit = async (data) => {
    const payload = {
      name: data.fullname,
      email: data.email,
      phone: data.mobile,
      message: data.message,
      address: data.address || "",
      city: data.city || "",
      state: data.state || "",
      country: data.country || "",
      zip: data.zip || "",
      notes: data.notes,
      service,
    };

    // console.log("Payload:", payload);

    setIsLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PHP_API_URL}/admin/complimentary`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.status == 204) {
        toast.success("Request sent!");
        reset();
        setIsAgreed(false);
      } else {
        let errorMsg = "Failed to send request!";
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
    <div>
      <form
        className="px-4 md:w-[70%] mx-auto mt-5 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Full Name */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <User className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="fullname"
              {...register("fullname")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Full Name *"
              disabled={isLoading}
            />
          </div>
          {errors.fullname && (
            <span className="text-red-500 text-md mt-1">
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
              {...register("email")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Mail ID *"
              disabled={isLoading}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-md mt-1">
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
              {...register("mobile")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Phone Number *"
              autoComplete="tel"
              disabled={isLoading}
            />
          </div>
          {errors.mobile && (
            <span id="phone-error" className="text-red-500 text-md mt-1">
              {errors.mobile.message}
            </span>
          )}
        </div>

        {/* Address */}
        <div>
          <div className="relative flex p-1 hover:border bg-[#F6F6F6] items-center">
            <MapPin className="w-5 h-5  text-gray-500 ml-3" />
            <input
              type="text"
              id="new_address"
              {...register("address")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Enter location *"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>
          {errors.address && (
            <span id="phone-error" className="text-red-500 text-md mt-1">
              {errors.address.message}
            </span>
          )}
        </div>

        {/* City */}
        <div className="">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Building className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              id="city"
              {...register("city")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="City *"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>
          {errors.city && (
            <span className="text-red-500 text-md mt-1">
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
              {...register("state")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="State *"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>
          {errors.state && (
            <span className="text-red-500 text-md mt-1">
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
              {...register("country")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Country *"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>
          {errors.country && (
            <span className="text-red-500 text-md mt-1">
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
              {...register("zip")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Zip code *"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>
          {errors.zip && (
            <span className="text-red-500 text-md mt-1">
              {errors.zip.message}
            </span>
          )}
        </div>

        {/* Project Description */}
        <div className="relative">
          <div className="flex p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <MessageSquare className="w-5 h-5 text-gray-500 ml-3 mt-2" />
            <textarea
              id="notes"
              {...register("notes")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Notes"
              rows="3"
              disabled={isLoading}
            ></textarea>
          </div>
          <span id="notes-error" className="text-red-500 text-xs mt-1"></span>
        </div>

        {/* Check Box  */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={isAgreed}
            onChange={() => setIsAgreed((prev) => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="terms" className="text-[#545454] font-normal">
            I agree to the{" "}
            <Link href="/terms&conditions" target="_blank">
              <span className="text-[#1E9BD0] font-medium">
                Terms and Conditions
              </span>
            </Link>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full flex justify-center items-center gap-2 bg-[#262626] text-white py-2 rounded-md font-semibold transition 
    ${
      isLoading || !isAgreed
        ? "cursor-not-allowed opacity-50"
        : "cursor-pointer hover:bg-gray-900"
    }`}
          disabled={isLoading || !isAgreed}
        >
          {isLoading ? (
            "Sending..."
          ) : (
            <>
              Send
              <span>
                <Send size={20} />
              </span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default RightSection;
