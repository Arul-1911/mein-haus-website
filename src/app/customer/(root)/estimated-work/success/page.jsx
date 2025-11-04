"use client";

import { Card } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function PaymentSuccessPage({ id }) {
  return (
    <main>
      <div className="h-[70dvh] flex justify-center items-center px-3">
        <Card className="border-none shadow">
          <div className="justify-items-center">
            <div className="h-40">
              <DotLottieReact
                src="https://lottie.host/fdf93c1b-105d-43ca-bb05-723e903af698/5fossIRodR.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <div className="-mt-5">
            <h2 className="font-semibold text-center">Payment Successful</h2>
            <p className="text-center font-medium text-[#9D9D9D] px-3 max-w-md">
              Thank you! Your payment has been successfully processed.
            </p>
          </div>
          <div>
            <Link
              href="/customer/estimated-work"
              className="flex items-center gap-3 text-primary justify-center"
            >
              <span>
                <ArrowLeft />
              </span>
              <span>Go back to home</span>
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default PaymentSuccessPage;
