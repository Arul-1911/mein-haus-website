import { ChevronLeft } from "lucide-react";
import { estiamtedWorkData } from "../../page";
import Link from "next/link";
import Description from "@/components/customer/description";
import Photos from "@/components/customer/photos";

async function EstimatePendingDetailsPage({ params }) {
  const { id } = await params;
  const data = estiamtedWorkData.find((item) => item.id == id);
  return (
    <main className="bg-[#F9F9F9]">
      <section className="max-w-5xl py-8 px-3 mx-auto">
        {/* top section  */}
        <div className="flex gap-3 flex-wrap justify-between  items-center">
          <div className="flex items-center  gap-1">
            <Link href="/customer/estimated-work">
              <ChevronLeft />
            </Link>
            <Link href="/customer/estimated-work">Estimate Details</Link> /{" "}
            {data.title || "N/A"}
          </div>
        </div>
        {/* Estimate details section  */}
        <div className="bg-white p-5 flex flex-col  justify-between  my-6 items-start gap-5 rounded-2xl">
          <h2 className="font-semibold text-2xl items-center  md:max-w-[60%]">
            {data?.title || "N/A"}
          </h2>
          <div className="border-1 border-dashed  w-full" />
          <div className="grid grid-cols-2 md:grid-cols-4 font-medium gap-5 items-center w-full">
            {data.EstimateNo && (
              <div>
                <p className="text-[#ABABAB] font-medium">Estimate No.</p>
                <p>{data.EstimateNo}</p>
              </div>
            )}
            {data.createdAt && (
              <div>
                <p className="text-[#ABABAB] font-medium">
                  Estimate Created At
                </p>
                <p>{data.createdAt}</p>
              </div>
            )}
            {data.deadline && (
              <div>
                <p className="text-[#ABABAB] font-medium">Project Deadline</p>
                <p>{data.deadline}</p>
              </div>
            )}
            {data.status && (
              <div className="">
                <p className="text-[#ABABAB] font-medium ml-3">Status</p>
                <p className="bg-[#FD760D1F] text-center text-[var(--secondary)] px-2 py-1 w-fit rounded-2xl">
                  {data.status}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Address section  */}
        {data?.address && (
          <div className="p-5 bg-white rounded-2xl my-5">
            <p className="font-semibold text-xl">Address</p>
            <p className="font-normal text-[#ABABAB] my-2">{data?.address}</p>
          </div>
        )}
        {/* description section  */}
        {data?.description && (
          <div className="p-5 bg-white rounded-2xl">
            <p className="font-semibold text-xl">Description</p>
            <div>
              <Description description={data?.description} />
            </div>
          </div>
        )}
        {/* Photos section  */}
        {data?.images?.length > 0 && (
          <div className="p-5 bg-white rounded-2xl my-6">
            <h2 className="font-semibold text-xl">Photos</h2>
            <div className="my-6">
              <Photos photos={data.images || []} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default EstimatePendingDetailsPage;
