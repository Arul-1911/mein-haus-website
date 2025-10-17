import EstiamtedCard from "@/components/customer/homepage/estiamtedcard";

function EstimatedWorkPage() {
  const estiamtedWorkData = [
    {
      id: 1,
      projectid: "#DS-654321",
      status: "pending",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
    },
    {
      id: 2,
      estimatedDate: "20 Sep 2025",
      projectid: "#DS-466",
      status: "estiamted",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
    },
    {
      id: 3,
      projectid: "#DS-654321",
      status: "pending",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
    },
    {
      id: 4,
      estimatedDate: "20 Sep 2025",
      projectid: "#DS-466",
      status: "estiamted",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
    },
    {
      id: 5,
      projectid: "#DS-654321",
      status: "pending",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
    },
    {
      id: 6,
      estimatedDate: "20 Sep 2025",
      projectid: "#DS-466",
      status: "estiamted",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
    },
  ];
  return (
    <main>
      <section className="my-8">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl text-center">
            Estimated work
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
            {estiamtedWorkData?.map((data) => (
              <EstiamtedCard key={data.id} estimate={data} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default EstimatedWorkPage;
