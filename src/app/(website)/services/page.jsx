import { Button } from "@/components/ui/button";
import NoContent from "@/components/website/no-content";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ourServices = [
  {
    id: 1,
    label: "Appliance Install",
    description:
      "From new appliances to old ones, we handle it all. Whether it's a dishwasher, refrigerator, or washing machine, we ensure it's installed correctly and works like a charm.",
    img: "/customer/root/home/service-1.jpg",
    price: "450 - 450",
  },
  {
    id: 2,
    label: "Tiles and Flooring Services",
    description:
      "From new tiles to old ones, we handle it all. Whether it's a dishwasher, refrigerator, or washing machine, we ensure it's installed correctly and works like a charm.",
    img: "/customer/root/home/service-2.jpg",
    price: "450 - 750",
  },
  {
    id: 3,
    label: "Kitchen & Bathroom Renovation",
    description:
      "From new tiles to old ones, we handle it all. Whether it's a dishwasher, refrigerator, or washing machine, we ensure it's installed correctly and works like a charm.",
    img: "/customer/root/home/service-3.jpg",
    price: "750 - 1250",
  },
  {
    id: 4,
    label: "Kitchen & Bathroom Renovation",
    description:
      "From new tiles to old ones, we handle it all. Whether it's a dishwasher, refrigerator, or washing machine, we ensure it's installed correctly and works like a charm.",
    img: "/customer/root/home/service-4.jpg",
    price: "750 - 1250",
  },
  {
    id: 5,
    label: "Bathroom Renovation",
    description:
      "From new tiles to old ones, we handle it all. Whether it's a dishwasher, refrigerator, or washing machine, we ensure it's installed correctly and works like a charm.",
    img: "/customer/root/home/service-2.jpg",
    price: "250 - 400",
  },
];

function Page() {
  if (!ourServices || ourServices.length === 0) {
    return (
      <div>
        <NoContent />
      </div>
    );
  }
  return (
    <section className="w-full mt-8 mb-14 md:px-4 lg:px-2 max-w-7xl mx-auto">
      <h2 className="md:text-3xl text-2xl text-center my-4 font-semibold mb-4">
        Services We Provide
      </h2>
      {/* Card Viewport */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-6 px-2">
          {ourServices?.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] bg-[#F2F2F2] rounded-2xl shadow-sm px-4 py-4 relative"
            >
              <div className="relative aspect-square w-full h-50 rounded-3xl">
                <Image
                  src={item.img}
                  alt={item.label}
                  // height={50}
                  // width={150}
                  sizes="(max-width: 640px) 160px,
                 (max-width: 768px) 200px,
                 (max-width: 1024px) 250px,
                 300px"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="px-2 min-h-[4vh] text-center my-3">
                <h3 className="text-lg font-semibold mb-1">
                  {item.label.slice(0, 22)}...
                </h3>
              </div>
              <div>
                <p className="text-sm text-[#ABABAB]">
                  {item.description.slice(0, 80)}...
                </p>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between items-center">
                <div>
                  <p className="flex flex-col">
                    Price Range:
                    <span className="font-semibold text-[#F88B36]">
                      $ {item.price}
                    </span>
                  </p>
                </div>

                <div>
                  <Link href={`/services/${item.id}`}>
                    <Button variant="black" className="rounded-full">
                      <ArrowUpRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
