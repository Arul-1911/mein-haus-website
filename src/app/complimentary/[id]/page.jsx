import LeftSection from "@/components/website/complimentarypage/LeftSection";
import RightSection from "@/components/website/complimentarypage/RightSection";
import React from "react";

const Complimentarypage = async ({ params }) => {
  const { id } = await params;
  let selectedItem = null;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comp-services/${id}`,
      {
        next: { revalidate: 600 }, // Cache for 10 minutes
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch service data");
    }

    const data = await res.json();
    selectedItem = data?.data?.service;

    if (!selectedItem) {
      throw new Error("Service not found");
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#F6F6F6] h-screen">
          {selectedItem && (
            <>
              <LeftSection
                heading={selectedItem?.name}
                description={selectedItem?.description}
                // image={selectedItem?.picPath}
              />
            </>
          )}
        </div>
        <div className="my-3">
          <h2 className="font-semibold text-3xl text-center my-2">
            Let's work together
          </h2>
          <p className="font-medium text-sm text-center text-[#9D9D9D] mx-6 my-2">
            Share your details with us and let's make it happen! For any
            questions or assistance, feel free to reach out — we're always here
            to help.
          </p>
          <RightSection />
        </div>
      </div>
    </>
  );
};

export default Complimentarypage;
