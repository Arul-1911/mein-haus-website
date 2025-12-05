"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);
  const router = useRouter();

  // Timer countdown for resend OTP
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every((digit) => digit !== "") && index === 5) {
      handleSubmit(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    // Handle left arrow
    else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    // Handle right arrow
    else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, 6);

    if (!/^\d+$/.test(pastedData)) {
      setError("Please paste only numbers");
      return;
    }

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);

    // Focus last filled input or next empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();

    // Auto-submit if all 6 digits are pasted
    // if (pastedData.length === 6) {
    //   handleSubmit(pastedData);
    // }
  };

  const handleSubmit = (otpValue) => {
    const otpString = otpValue || otp.join("");

    if (otpString.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    // On success, redirect to next page
    router.push("/professional/trades");
  };

  const handleResendOtp = () => {
    if (!canResend) return;

    // Reset timer and OTP fields
    setResendTimer(30);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <div className="text-center flex items-center gap-2 justify-center mb-5">
        <span>6379556813</span>
        <span>
          <Link className="text-secondary" href="/professional/phone-number">
            Change
          </Link>
        </span>
      </div>
      <form onSubmit={handleManualSubmit}>
        <div className="space-y-6">
          {/* OTP Input Fields */}
          <div className="space-y-2">
            <div className="flex justify-center gap-2 md:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className={`w-12 h-12 md:w-14 md:h-14 text-center text-xl md:text-2xl font-semibold rounded-md bg-[#F6F6F6] border-2 transition-all duration-200 focus:outline-none focus:border-black hover:border-gray-400 ${
                    error
                      ? "border-red-500"
                      : digit
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  autoComplete="off"
                />
              ))}
            </div>
            {error && (
              <p className="text-red-500 text-xs text-center mt-2">{error}</p>
            )}
          </div>

          {/* Resend OTP Section */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the OTP?{" "}
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-primary font-semibold hover:underline cursor-pointer"
                >
                  Resend OTP
                </button>
              ) : (
                <span className="text-gray-400">Resend in {resendTimer}s</span>
              )}
            </p>
          </div>

          {/* Verify Button */}
          <div className="cursor-pointer">
            <Button
              type="submit"
              className="w-full text-[#FFFFFF] text-lg font-semibold cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              Verify OTP
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VerifyOtp;
