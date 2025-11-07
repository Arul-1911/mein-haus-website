import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

function OngoingWorkServicesCard({ estimate }) {
  return (
    <section className="px-4">
      <Card className="bg-white rounded-3xl border-none shadow-none">
        <CardHeader className="flex justify-between flex-wrap">
          <div>
            <h2>{estimate.serviceName.slice(0, 30)}</h2>
          </div>
        </CardHeader>
        <CardHeader className="-my-2">
          <div className="border-b-3 border-dashed" />
        </CardHeader>
        <CardContent className="flex justify-between gap-3">
          {/* left  */}
          <div className="flex flex-col gap-3">
            <div>
              <div>
                <p className="text-[#9D9D9D] font-normal text-md">
                  Assigned Date
                </p>
                <p>{estimate.assignedDate}</p>
              </div>
            </div>
            <div>
              <p className="text-[#9D9D9D] font-normal text-md">Assigned pro</p>
              <p>
                {estimate.assignedProName ? (
                  estimate.assignedProName
                ) : (
                  <p className="text-[#FD760D] font-medium">Not assigned yet</p>
                )}
              </p>
            </div>
          </div>
          {/* right  */}
          <div className="space-y-4">
            <div className="">
              <p className="text-[#9D9D9D] font-normal text-md">Service cost</p>
              ${estimate.projectCost}
            </div>
            {estimate.assignedProName && (
              <div>
                <Link href={`/customer/ongoing-work/service/${estimate?.id}`}>
                  <Button variant="" className="py-5 text-md">
                    <span>View More</span>{" "}
                    <span>
                      <ChevronRight className="text-lg" />
                    </span>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default OngoingWorkServicesCard;
