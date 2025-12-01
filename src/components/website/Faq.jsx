"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Faq({ data }) {
  const [open, setOpen] = useState(1);
  return (
    <div className="flex flex-col gap-2">
      {data?.map((item) => (
        <div key={item.id} className="my-1 bg-[#F8F8F8] p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold cursor-pointer">
              {item.question}
            </h3>

            {open === item.id ? (
              <Minus
                size={20}
                className="text-black cursor-pointer"
                onClick={() => setOpen(null)}
              />
            ) : (
              <Plus
                size={20}
                className="text-black cursor-pointer"
                onClick={() => setOpen(item.id)}
              />
            )}
          </div>
          {open === item.id && (
            <p className="text-sm text-[#ABABAB] mt-2">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
