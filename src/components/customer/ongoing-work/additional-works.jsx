"use client";

import { Button } from "@/components/ui/button";
import Description from "../description";
import Photos from "../photos";
import { cn } from "@/lib/utils";
import PhotoGallery from "./light-gallery";

function AdditionalWorks({ additionalWork = [] }) {
  return (
    <section>
      {additionalWork?.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl p-3 capitalize my-6">
          {/* {status } */}
          <p
            className={cn("px-2 text-sm py-1 rounded-xl w-fit my-2", {
              "bg-[#FD760D1F] text-[#FD760D]": item.status === "pending",
              "bg-[#67A90B1F] text-[#67A90B]": item.status === "approved",
              "bg-[#F32E2E1F] text-[#F32E2E]": item.status === "declined",
            })}
          >
            {item.status}
          </p>
          {/* desc  */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              {item.amount && (
                <p className="font-bold text-[#FD760D]">${item.amount}</p>
              )}
            </div>
            <div className="flex justify-between gap-4 items-center">
              <div className="max-w-[90%]">
                <Description description={item.desc} textsize="text-sm" />
              </div>
              <div>
                <PhotoGallery photos={item.photos} />
              </div>
            </div>
          </div>
          {/* buttons  */}
          {item.showButton && (
            <div className="flex flex-row gap-3 mt-3 items-center">
              <Button className="bg-[#F32E2E] hover:bg-[#F32E2E]/80  text-white py-2 px-4 cursor-pointer">
                Disapprove
              </Button>
              <Button className="bg-[#67A90B] hover:bg-[#67A90B]/80  text-white py-2 px-4 cursor-pointer">
                Approve
              </Button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default AdditionalWorks;
