"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const schema = yup.object({
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
});

function OtpPhoneNumber() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
    router.push("/customer/verify-otp");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* Phone Number */}
          <div className="space-y-1">
            <div
              className={`flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black ${
                errors.phone ? "border border-red-500" : ""
              }`}
            >
              <Phone className="w-5 h-5 text-black ml-3" />
              <span className="ml-3 text-gray-500 select-none">+1</span>
              {/* <span className="text-gray-500 ml-3 ">|</span> */}
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="w-full p-2 text-sm rounded-md focus:outline-none bg-transparent"
                placeholder="Phone No (without country code) *"
                autoComplete="tel"
                maxLength={10}
                minLength={10}
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-xs block">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>
        <div className="cursor-pointer my-4">
          <Button className="w-full text-[#FFFFFF] text-lg font-semibold cursor-pointer">
            Send OTP
          </Button>
        </div>
      </form>
    </div>
  );
}

export default OtpPhoneNumber;
