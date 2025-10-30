import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function EstiamtedCard({ estimate }) {
  const navLink =
    estimate.status === "pending"
      ? `pending/${estimate.id}`
      : `estimated/${estimate.id}`;
  return (
    <section className="px-4">
      <Card className="bg-[#F8F8F8] rounded-3xl border-none shadow">
        <CardHeader className="flex justify-between flex-wrap">
          <div>
            <p className="text-[#9D9D9D] font-normal text-sm">
              {estimate.projectid}
            </p>
            <h2>{estimate.title.slice(0, 20)}...</h2>
          </div>
          <div
            className={cn(
              "px-4 py-2 rounded-full text-white text-sm",
              estimate.status === "pending" ? "bg-[#FD760D]" : "bg-[#67A90B]"
            )}
          >
            {estimate.status}
          </div>
        </CardHeader>
        <CardHeader>
          <div className="border-b-3 border-dashed" />
        </CardHeader>
        <CardContent className="flex justify-between">
          {/* left  */}
          <div className="flex flex-col gap-3">
            <div>
              {estimate.createdAt && (
                <div>
                  <p className="text-[#9D9D9D] font-normal text-md">
                    Estimate Created At
                  </p>
                  <p>{estimate.createdAt}</p>
                </div>
              )}
              {estimate.estimatedDate && (
                <div>
                  <p className="text-[#9D9D9D] font-normal text-md">
                    Estimated Date
                  </p>
                  <p>{estimate.estimatedDate}</p>
                </div>
              )}
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
            <div>
              {estimate.status === "pending" && (
                <div>
                  <p className="text-[#9D9D9D] font-normal text-md">
                    Project Deadline
                  </p>
                  <p>${estimate.deadline || "N/A"}</p>
                </div>
              )}
              {estimate.status === "estiamted" && (
                <div>
                  <p className="text-[#9D9D9D] font-normal text-md">
                    Estimated Amount
                  </p>
                  <p>${estimate.estiamtedAmount || "N/A"}</p>
                </div>
              )}
            </div>
            <div>
              <Link href={`/customer/estimated-work/${navLink}`}>
                <Button variant="black">
                  <span>View Details</span>{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default EstiamtedCard;
