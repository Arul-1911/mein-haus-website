"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-[80dvh]">
      <div>
        <Spinner className="text-[#FD760D]" size={30} />
      </div>
    </div>
  );
}
