import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const HomePage = () => {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Right Section (on top for mobile, fixed on desktop) */}
      <div className="block lg:hidden">
        <RightSection />
      </div>

      {/* Left Section (mobile) */}
      <div className="block lg:hidden">
        <LeftSection />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-1/2 overflow-y-auto">
        <LeftSection />
      </div>

      <div className="hidden lg:block w-1/2">
        <RightSection />
      </div>
    </main>
  );
};

export default HomePage;
