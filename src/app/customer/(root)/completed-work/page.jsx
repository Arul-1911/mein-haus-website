import CompletedWorkCard from "@/components/customer/homepage/completedworkcard";

function CompletedWorkPage() {
  const completedworkWorkData = [
    {
      id: 1,
      projectid: "#DS-654321",
      totalCost: "2500",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
      services: 3,
    },
    {
      id: 2,
      createdAt: "20 Sep 2025",
      projectid: "#DS-466",
      totalCost: "2500",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
      services: 2,
    },
    {
      id: 3,
      projectid: "#DS-654321",
      totalCost: "2500",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
      services: 3,
    },
    {
      id: 4,
      createdAt: "20 Sep 2025",
      projectid: "#DS-466",
      totalCost: "2500",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
      services: 2,
    },
    {
      id: 5,
      projectid: "#DS-654321",
      totalCost: "2500",
      title: "Kitchen and Bathroom renovation for my house",
      createdAt: "20 Sep 2025",
      deadline: "Less than 2 week",
      images: [],
      services: 3,
    },
    {
      id: 6,
      createdAt: "20 Sep 2025",
      projectid: "#DS-466",
      totalCost: "2500",
      title: " Bathroom renovation for my house",
      deadline: "Less than a week",
      estiamtedAmount: "2500",
      images: [],
      services: 2,
    },
  ];
  return (
    <main>
      <section className="my-8">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl text-center">
            Completed work
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
          {completedworkWorkData?.map((data) => (
            <CompletedWorkCard key={data.id} estimate={data} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default CompletedWorkPage;
