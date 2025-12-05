"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required !"),
});

const ResetMail = () => {
  const [linkSent, setLinkSent] = useState(false);
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
      </div>

      <div className="cursor-pointer">
        <Link href="/professional/reset-password">
          <Button className="w-full text-[#FFFFFF] text-lg font-semibold cursor-pointer">
            Send Password Reset Link
          </Button>
        </Link>
      </div>
      <div>
        {linkSent && (
          <div className="bg-[#F88B361F] rounded-md p-3 mt-3">
            <p className="text-xs text-center text-primary font-medium">
              Please check your email. We've sent you a reset link - follow it
              to reset your password.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResetMail;
