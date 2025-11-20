import AddQueryButton from "@/components/customer/support/add-query";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const query = [
  {
    id: 1,
    queryNumber: "Q-1001",
    status: "Resolved",
    time: "10:25AM",
    description: "Customer unable to reset account password.",
    chat: [
      {
        from: "customer",
        message: "I can't reset my password, link isn't working.",
      },
      {
        from: "support",
        message: "Please confirm if you're using the latest reset link.",
      },
      { from: "customer", message: "Yes, it still shows error." },
      { from: "support", message: "We've regenerated a new link. Try now." },
      { from: "customer", message: "It worked. Thanks!" },
    ],
  },
  {
    id: 2,
    queryNumber: "Q-1002",
    status: "Resolved",
    time: "11:03AM",
    description: "Payment failed but amount deducted.",
    chat: [
      { from: "customer", message: "My payment failed but money was taken." },
      {
        from: "support",
        message: "We're verifying the transaction with billing team.",
      },
      { from: "customer", message: "Any update?" },
      { from: "support", message: "Refund will be initiated within 24 hours." },
    ],
  },
  {
    id: 3,
    queryNumber: "Q-1003",
    status: "Cancelled",
    time: "12:47PM",
    description: "App keeps crashing on login.",
    chat: [
      {
        from: "customer",
        message: "The app closes every time I try to log in.",
      },
      {
        from: "support",
        message: "Please share your OS version and app version.",
      },
      { from: "customer", message: "I'll check and send shortly." },
    ],
  },
  {
    id: 4,
    queryNumber: "Q-1003",
    status: "Resolved",
    time: "12:47PM",
    description: "App keeps crashing on login.",
    chat: [],
  },
];

const serviceid = 1;

function Page() {
  return (
    <main className="bg-[#F9F9F9]">
      <div className="p-2">
        <div className="mx-3 md:mx-auto py-8 max-w-3xl">
          {query?.length > 0 ? (
            <>
              {/* Query list section  */}
              <section className="bg-white p-3 rounded-2xl shadow">
                {query?.map((data) => (
                  <Link
                    href={`/customer/completed-work/service/${serviceid}/support/${data.id}`}
                    key={data.id}
                    className="my-4"
                  >
                    <div className="hover:bg-black/4 rounded-2xl p-3">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">{data.description || ""}</p>
                        <p className="text-[#9D9D9D] text-sm">{data.time}</p>
                      </div>
                      <p
                        className={cn(
                          data.status === "Resolved" && "text-primary",
                          data.status === "Active" && "text-[#8CC507]",
                          data.status === "Cancelled" && "text-[#EF0E46]",
                          data.status === "Not yet started" && "text-[#ABABAB]",
                          "font-medium text-sm"
                        )}
                      >
                        {data.status}
                      </p>
                    </div>
                  </Link>
                ))}
              </section>
            </>
          ) : (
            <>
              {/* Fallback section  */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <Image
                  src="/customer/root/support/support-fallback.png"
                  alt="No Query Image"
                  height={300}
                  width={300}
                />
                <p className="text-[#9D9D9D] mt-5 text-2xl max-w-md text-center">
                  No queries found
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Page;
