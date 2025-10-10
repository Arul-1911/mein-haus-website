"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-[85dvh]">
      <div>
        <Spinner className="text-[#1E9BD0]" size={30} />
      </div>
    </div>
  );
}
