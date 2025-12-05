"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required !"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

const NewPassword = () => {
  const [linkSent, setLinkSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
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
        {/*New Password */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Lock className="w-5 h-5 text-black ml-3 cursor-pointer" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("newPassword")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="New Password *"
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
          {errors.newPassword && (
            <span className="text-red-500 text-xs mt-1">
              {errors.newPassword.message}
            </span>
          )}
        </div>
        {/* Confirm Password */}
        <div className="relative">
          <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
            <Lock className="w-5 h-5 text-black ml-3 cursor-pointer" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="password"
              {...register("confirmPassword")}
              className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
              placeholder="Confirm Password *"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5 text-gray-500 cursor-pointer" />
              ) : (
                <Eye className="w-5 h-5 text-gray-500 cursor-pointer" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>

      <div className="cursor-pointer">
        <Link href="/professional/reset-password">
          <Button className="w-full text-[#FFFFFF] text-lg  font-semibold cursor-pointer">
            Reset Password
          </Button>
        </Link>
      </div>
      <div>
        {linkSent && (
          <div className="bg-(--primary-light) rounded-md p-3 mt-3">
            <p className="text-xs text-center text-primary font-medium">
              Your password has been successfully reset. You can now{" "}
              <span className="text-black">
                <Link href="/professional/login">login</Link>
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewPassword;
