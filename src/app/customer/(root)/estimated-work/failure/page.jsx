"use client";

import { Card } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function PaymentFailurePage() {
  return (
    <section>
      <div className="h-[70dvh] flex justify-center items-center px-3">
        <Card className="border-none">
          <div className="justify-items-center">
            {/* <div className="relative w-30 h-22">
              <Image
                src="/customer/root/estimate/success-bg.png"
                alt="green bg"
                fill
                className="object-contain"
              />
            </div> */}
            <div className="h-40">
              <DotLottieReact
                src="https://lottie.host/1e8d81cd-983e-4fde-93fc-484cd44cdd0d/X0IYAGVH2F.lottie"
                loop={false}
                autoplay
              />
            </div>
            {/* <div>
              <Check />
            </div> */}
          </div>
          <div>
            <h2 className="font-semibold text-center">
              Your payment has failed
            </h2>
            <p className="text-center font-medium text-[#9D9D9D] px-3 max-w-md">
              Issue with payment , please try again later
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
    </section>
  );
}

export default PaymentFailurePage;
