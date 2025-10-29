"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateEstimate from "../create-estimatemodal";

function BookEstimate() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="">
      <div className="">
        <Button onClick={() => setModalOpen(true)}>Convert to Estimate</Button>
        {modalOpen && (
          <CreateEstimate
            mode={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </section>
  );
}

export default BookEstimate;
