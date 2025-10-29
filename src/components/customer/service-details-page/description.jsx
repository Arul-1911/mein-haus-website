"use client";

import { useState } from "react";

function Description({ description, limit = 200 }) {
  if (!description) return null;
  const [expanded, setIsExpanded] = useState(false);

  const isLong = description.length > limit;
  const displayText = expanded ? description : description.slice(0, limit);

  return (
    <section className="my-2">
      <div className="font-normal text-[#ABABAB]">
        {displayText}

        {isLong && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="text-[var(--primary)] hover:underline font-medium mx-1"
          >
            {expanded ? "Read Less" : "Read More..."}
          </button>
        )}
      </div>
    </section>
  );
}

export default Description;
