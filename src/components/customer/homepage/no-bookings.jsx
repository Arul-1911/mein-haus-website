"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import CreateEstimate from "../create-estimatemodal";

function NoBookingsFallback({ title, desc, content }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="my-6">
      <h2 className="font-bold text-4xl text-center">{title}</h2>
      <div className="justify-items-center my-6">
        <Image
          src="/customer/root/home/fallback-bookings.png"
          alt="fallback image"
          height={100}
          width={250}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="font-semibold text-md ">{desc}</h3>
        <p className="text-[#9D9D9D] text-sm font-medium px-2 text-center max-w-xl">
          {content}
        </p>
        <Button variant="black" onClick={() => setModalOpen(true)}>
          Create Estimate
        </Button>
      </div>
      {modalOpen && (
        <CreateEstimate mode={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

export default NoBookingsFallback;
