"use client";

import { Progress } from "@/components/ui/progress";

export default function Ratings({ items = [] }) {
  //   console.log(items);

  return (
    <div className="space-y-4">
      {items?.map((item, i) => {
        const value = (Math.round(item.rating) / 6) * 100; // converting to %
        //   console.log(value);

        return (
          <div
            key={i}
            className="space-y-1 flex justify-between my-4 items-center"
          >
            <div className="text-sm font-medium">
              <span className="font-normal">{item.title}</span>
            </div>
            <div className="flex flex-col gap-1 w-[50%] -mt-3">
              <p className="text-end text-[#ABABAB] text-xs">{item.rating}/5</p>

              <Progress value={value} className="h-2 text-primary w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
