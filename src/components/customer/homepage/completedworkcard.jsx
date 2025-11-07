import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function CompletedWorkCard({ estimate }) {
  return (
    <section className="px-4">
      <Card className="bg-[#F8F8F8] rounded-3xl border-none shadow">
        <CardHeader className="flex justify-between gap-1 flex-wrap">
          <div>
            <p className="text-[#9D9D9D] font-normal text-md">
              {estimate.projectid}
            </p>
            <h2>{estimate.title.slice(0, 20)}...</h2>
          </div>
          <div className="flex flex-col">
            <span className="text-[#9D9D9D] font-normal text-md">
              Total Project Cost
            </span>
            <span>${estimate.totalCost}</span>
          </div>
        </CardHeader>
        <CardHeader>
          <div className="border-b-3 border-dashed" />
        </CardHeader>
        <CardContent className="flex justify-between gap-3">
          {/* left  */}
          <div className="flex flex-col gap-3">
            <div>
              <div>
                <p className="text-[#9D9D9D] font-normal text-md">
                  Completed Date
                </p>
                <p>{estimate.createdAt}</p>
              </div>
            </div>
            <div>
              <Image
                src="/customer/root/home/card-img.png"
                alt="cards image"
                height={30}
                width={80}
              />
            </div>
          </div>
          {/* right  */}
          <div className="space-y-4">
            <div className="">
              <p className="text-[#9D9D9D] font-normal text-md">
                No.of Services
              </p>
              {estimate.services}
            </div>
            <div>
              <Button variant="black">
                <span>View Details</span>{" "}
                <span>
                  <ArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default CompletedWorkCard;
