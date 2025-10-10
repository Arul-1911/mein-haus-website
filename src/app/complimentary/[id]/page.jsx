import LeftSection from "@/components/website/complimentarypage/LeftSection";
import RightSection from "@/components/website/complimentarypage/RightSection";
import { WebsiteProviders } from "@/providers/storeProviders";
import { fetchSingleServices } from "@/serverCalls/website";
import React from "react";

const ComplimentarypageContent = ({ selectedItem }) => {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#F6F6F6] h-full">
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
          <RightSection service={selectedItem?.name} />
        </div>
      </div>
    </>
  );
};

const Complimentarypage = async ({ params }) => {
  const { id } = await params;
  let selectedItem = await fetchSingleServices(id);
  return (
    <WebsiteProviders>
      <ComplimentarypageContent selectedItem={selectedItem} />
    </WebsiteProviders>
  );
};

export default Complimentarypage;
