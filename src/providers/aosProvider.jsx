"use client";

import { useEffect } from "react";
import "@reimujs/aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    import("@reimujs/aos").then(({ default: AOS }) => {
      AOS.init();
    });
  }, []);

  return <>{children}</>;
}
