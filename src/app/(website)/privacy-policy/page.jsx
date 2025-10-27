import NoContent from "@/components/website/no-content";
import { fetchPrivacyPolicy } from "@/serverCalls/website";
import React from "react";

const PrivacyPolicy = async () => {
  let privacyContent = await fetchPrivacyPolicy();

  if (!privacyContent) {
    return (
      <>
        <NoContent />
      </>
    );
  }

  return (
    <>
      <main>
        <h2 className="text-[#262626] my-5 text-center font-semibold text-3xl">
          {privacyContent?.title || ""}
        </h2>
        <h3 className="font-semibold text-[#262626] text-center my-2 text-2xl">
          Online Privacy Notice
        </h3>
        <div className="max-w-7xl mt-10 mb-5 px-3 mx-auto">
          <div
            className="editor-content"
            dangerouslySetInnerHTML={{ __html: privacyContent?.content || "" }}
          />
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
