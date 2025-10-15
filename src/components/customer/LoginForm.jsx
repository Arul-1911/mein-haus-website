"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required !"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({});
  return (
    <section className="flex flex-col gap-4">
      <div className="space-y-6">
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
      <div className="flex items-center px-1 flex-wrap justify-between">
        <div className="flex gap-1 items-center">
          <div className="mt-1 ">
            <Checkbox className="cursor-pointer" />
          </div>
          <div className="text-[#545454]">Remember me</div>
        </div>
        <div>
          <Link href="/customer/reset-mail" className="text-[#545454]">
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="cursor-pointer">
        <Link href="/customer/skip">
          <Button className="w-full text-[#FFFFFF] text-lg font-semibold cursor-pointer">
            Login
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
