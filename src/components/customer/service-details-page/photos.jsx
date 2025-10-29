"use client";
import Image from "next/image";
import { useState } from "react";

function Photos({ photos }) {
  const [limit, setLimit] = useState(8);
  return (
    <section>
      <div className="grid gap-6 items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {photos.slice(0, limit)?.map((url, i) => (
          <div className="relative h-42 w-full md:w-50">
            <Image
              src={url}
              key={i}
              alt="Photos"
              fill
              className="rounded-2xl object-cover"
            />
            {i === 7 && limit !== photos.length && (
              <>
                {/* Hover Overlay */}
                <span
                  className="text-white text-lg font-semibold  text-center opacity-100 transition"
                  onClick={() => setLimit(photos.length)}
                >
                  <div className="absolute cursor-pointer inset-0 w-[100%] bg-black/65  hover:bg-opacity-50 transition-all flex items-center justify-center rounded-2xl px-3">
                    {`View more ${photos.length - limit - 1 || 2}+`}
                  </div>
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Photos;
