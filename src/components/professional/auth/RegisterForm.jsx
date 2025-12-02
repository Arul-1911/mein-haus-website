"use client";

import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required !"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^(?!1)[0-9]{10}$/, {
      message: "Enter a valid 10-digit number (cannot start with 1)",
    }),
  fullname: yup
    .string()
    .required("Name is required !")
    .min(2, "name must be at least 2 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <section className="flex flex-col gap-4">
      <form onSubmit={handleSubmit()}>
        <div className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
              <User className="w-5 h-5 text-black ml-3" />
              <input
                type="text"
                id="fullname"
                {...register("fullname")}
                className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
                placeholder="Full Name *"
              />
            </div>
            {errors.fullname && (
              <span className="text-red-500 text-xs mt-1">
                {errors.fullname.message}
              </span>
            )}
          </div>
          {/* Phone Number */}
          <div className="relative">
            <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
              <Phone className="w-5 h-5 text-black ml-3" />
              <span className="ml-3 text-gray-500 select-none">+1</span>
              {/* <span className="text-gray-500 ml-3 ">|</span> */}
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="w-full p-2  text-sm rounded-md focus:outline-none"
                placeholder="Phone No (without country code) *"
                autoComplete="tel"
                maxLength={10}
                minLength={10}
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </span>
            )}
          </div>
          {/* Email */}
          <div className="relative">
            <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
              <Mail className="w-5 h-5 text-black ml-3" />
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
                placeholder="Mail ID *"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Password */}
          <div className="relative">
            <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
              <Lock className="w-5 h-5 text-black ml-3 cursor-pointer" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
                placeholder="Password *"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500 cursor-pointer" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500 cursor-pointer" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <Checkbox checked={checked} onCheckedChange={setChecked} />
          <p className="text-black font-normal text-start my-3">
            I authorize{" "}
            <Link href="/">
              <span className="text-primary font-medium">MeinHaus.ca</span>
            </Link>{" "}
            to contact me for opportunities
          </p>
        </div>

        <div
          className={`${
            isValid && checked ? "cursor-pointer" : "cursor-not-allowed"
          } mt-5`}
        >
          <Button
            className={`w-full text-[#FFFFFF] text-lg font-semibold ${
              isValid && checked ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            disabled={!isValid || isSubmitting || !checked}
          >
            Register
          </Button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
