import React from "react";
import Leftsection from "./LeftSection";
import RightSection from "./RightSection";

const HomePage = () => {
  return (
    <main className="grid grid-cols-1  lg:grid-cols-2">
      <div className="">
        <Leftsection />
      </div>
      <div>
        <RightSection />
      </div>
    </main>
  );
};

export default HomePage;
