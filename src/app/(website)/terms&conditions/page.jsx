import { fetchTermsAndConditions } from "@/serverCalls/website";

const TermsAndConditions = async () => {
  let TermsContent = await fetchTermsAndConditions();
  return (
    <main>
      <h2 className="text-[#262626] my-5 text-center font-semibold text-3xl">
        {TermsContent?.title || ""}
      </h2>
      <div>
        <h3 className="font-semibold text-[#262626] text-center my-2 text-2xl">
          Website Legal Terms and Conditions
        </h3>
        <div className="max-w-7xl mt-15 mb-5  mx-auto px-4">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: TermsContent?.content || "" }}
          />
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
