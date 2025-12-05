import Trades from "@/components/professional/root/intreseted-trades/Trades";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/professional/root/trades/img-1.png",
    title: "Furniture Assembly",
  },
  {
    id: 2,
    img: "/professional/root/trades/img-2.png",
    title: "Cleaning Services",
  },
  {
    id: 3,
    img: "/professional/root/trades/img-3.png",
    title: "Decks and fences",
  },
  {
    id: 4,
    img: "/professional/root/trades/img-4.png",
    title: "Winddow and gutter cleaning",
  },
  {
    id: 5,
    img: "/professional/root/trades/img-5.png",
    title: "Eavestrough & Trim Repair/Replacements",
  },
  {
    id: 6,
    img: "/professional/root/trades/img-6.png",
    title: "Flooring Installation",
  },
  {
    id: 7,
    img: "/professional/root/trades/img-2.png",
    title: "Smart Home Installation",
  },
  {
    id: 8,
    img: "/professional/root/trades/img-2.png",
    title: "HVAC Installation",
  },
  {
    id: 9,
    img: "/professional/root/trades/img-4.png",
    title: "Basements, Planning & Design",
  },
  {
    id: 10,
    img: "/professional/root/trades/img-2.png",
    title: "Kitchen & Bath Cabinetry",
  },
  {
    id: 11,
    img: "/professional/root/trades/img-2.png",
    title: "Bath Fixtures",
  },
  {
    id: 12,
    img: "/professional/root/trades/img-2.png",
    title: "Bath Fixtures",
  },
];

function Page() {
  return (
    <main className="bg-white">
      <section className="flex px-3 flex-col items-center gap-6 py-6 justify-center max-w-5xl mx-auto">
        {/* Logo section  */}
        <div className="relative w-[300px] h-[60px]">
          <Image
            src="/professional/pro-logo.png"
            alt="logo"
            fill
            className=""
          />
        </div>
        {/* Heading section  */}
        <div className="space-y-1">
          <h2 className="font-semibold  text-[#262626] text-xl text-center">
            Interested Trades
          </h2>
          <p className="text-[#9D9D9D] font-medium text-center">
            Please select all categories you wish to receive job opportunities
            for.
          </p>
        </div>
        {/* Trades section  */}
        <div className="w-full">
          <Trades data={data} />
        </div>
      </section>
    </main>
  );
}

export default Page;
