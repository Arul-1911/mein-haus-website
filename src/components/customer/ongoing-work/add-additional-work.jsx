"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import CreateAdditionalWork from "./add-additional-modal";
import Image from "next/image";

function AddAdditionalWork() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section>
      <div className="bg-[#F6E1F4] p-4 rounded-2xl flex justify-between items-center">
        <div>
          <p className="font-semibold">
            Would you like to add any additional work?
          </p>
          <Button
            className="bg-[#EC7BE1] hover:bg-[#EC7BE1]/80 text-white rounded-3xl mt-3"
            onClick={(prev) => setModalOpen(true)}
          >
            Add it now
          </Button>
        </div>
        <div className="relative h-25 w-35 object-contain">
          <Image
            src="/customer/root/ongoing-work/pro-img.png"
            alt=""
            fill
            sizes="(max-width: 768px) 160px, 360px"
          />
        </div>
      </div>

      {modalOpen && (
        <CreateAdditionalWork
          mode={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}

export default AddAdditionalWork;
