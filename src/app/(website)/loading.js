"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";
// import loaderAnimation from "../../../public/loader.json";
// import Lottie from "lottie-react";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-[85dvh]">
      <div>
        <Spinner className="text-[#FD760D]" size={30} />
      </div>
    </div>
    // <div className="flex items-center justify-center min-h-screen">
    //   <Lottie
    //     animationData={loaderAnimation}
    //     loop={true}
    //     className="w-40 h-40 bg-white"
    //   />
    // </div>
  );
}
