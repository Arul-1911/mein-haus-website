"use client";

import { useCreateServiceRequestMutation } from "@/features/website/apiWebsite";
import {
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
import { useParams } from "next/navigation";
import { use } from "react";
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
  notes: yup.string(),
});

const RightSection = () => {
  const [createServiceRequest, { isLoading, isError, isSuccess }] =
    useCreateServiceRequestMutation();
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

  const onSubmit = async (data) => {
    const formData = new URLSearchParams();

    formData.append("comp_service_id", id);
    formData.append("name", data.fullname);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("address", data.address || "");
    formData.append("notes", data.notes || "");

    try {
      const res = await createServiceRequest(formData.toString()).unwrap();
      if (res.success) {
        toast.success("Service request sent!");
        reset();
      }
    } catch (error) {
      toast.error("Failed to submit service request");
      console.log(error);
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

        {/* Project Description */}
        <div className="relative">
          <div className="flex p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <MessageSquare className="w-5 h-5 text-gray-500 ml-3 mt-2" />
            <textarea
              id="notes"
              {...register("notes")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Notes"
              rows="6"
              disabled={isLoading}
            ></textarea>
          </div>
          <span id="notes-error" className="text-red-500 text-xs mt-1"></span>
        </div>

        <div>
          <p className="text-[#545454] font-normal text-start">
            {/* <input type="checkbox" className="mr-2 justify-items-center" /> */}
            I agree to the{" "}
            <Link href="/terms&conditions" target="_blank">
              <span className="text-[#1E9BD0] font-medium">
                Terms and Conditions
              </span>
            </Link>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full flex justify-center items-center gap-2 bg-[#262626] text-white py-2 rounded-md font-semibold transition 
    ${
      isLoading
        ? "cursor-not-allowed opacity-50"
        : "cursor-pointer hover:bg-gray-900"
    }`}
          disabled={isLoading}
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
