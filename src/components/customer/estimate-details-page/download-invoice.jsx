"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

function DownloadInvoice() {
  return (
    <section className="">
      <div className="">
        <Button variant="black" className="">
          <div>
            <Download />
          </div>
          <div>Download Invoice PDF</div>
        </Button>
      </div>
    </section>
  );
}

export default DownloadInvoice;
