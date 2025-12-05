import Image from "next/image";

function Trades({ data }) {
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item) => (
          <div key={item.id} className="max-w-[150px]">
            <div>
              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={50}
                className="rounded-2xl max-h-[90px]"
              />
            </div>
            <p className="text-center mt-2 font-medium text-[#9D9D9D] wrap-break-word">
              {item.title.slice(0, 25)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trades;
