import ChatWithSupport from "@/components/customer/support/support-chat";

const query = [
  {
    id: 1,
    queryNumber: "Q-1001",
    status: "Resolved",
    description: "Customer unable to reset account password.",
    projectId: "PRJ-10239",
    projectName: "Kitchen Renovation",
    serviceName: "Home Renovation",
    pro: {
      id: "PRO-7781",
      name: "Alex Turner",
      profileImage: "/customer/root/ongoing-work/pro-img.png",
    },
    customer: {
      id: "CUS-5532",
      name: "Sarah Lee",
      profileImage: "/images/customers/sarah-lee.jpg",
    },
    chat: [
      {
        from: "customer",
        message: "I can't reset my password, link isn't working.",
        time: "10:25AM",
      },
      {
        from: "support",
        message: "Please confirm if you're using the latest reset link.",
        time: "10:25AM",
      },
      {
        from: "customer",
        message: "Yes, it still shows error.",
        time: "10:25AM",
      },
      {
        from: "support",
        message: "We've regenerated a new link. Try now.",
        time: "10:25AM",
      },
      { from: "customer", message: "It worked. Thanks!", time: "10:25AM" },
    ],
  },
  {
    id: 2,
    queryNumber: "Q-1002",
    status: "Resolved",
    time: "11:03AM",
    description: "Payment failed but amount deducted.",
    projectId: "PRJ-10239",
    projectName: "Kitchen Renovation",
    serviceName: "Home Renovation",
    pro: {
      id: "PRO-7781",
      name: "Alex Turner",
      profileImage: "/customer/root/ongoing-work/pro-img.png",
    },
    customer: {
      id: "CUS-5532",
      name: "Sarah Lee",
      profileImage: "/images/customers/sarah-lee.jpg",
    },
    chat: [
      {
        from: "customer",
        message: "My payment failed but money was taken.",
        time: "10:25AM",
      },
      {
        from: "support",
        message: "We're verifying the transaction with billing team.",
        time: "10:25AM",
      },
      { from: "customer", message: "Any update?", time: "10:25AM" },
      {
        from: "support",
        message: "Refund will be initiated within 24 hours.",
        time: "10:25AM",
      },
    ],
  },
  {
    id: 3,
    queryNumber: "Q-1003",
    status: "Cancelled",
    time: "12:47PM",
    description: "App keeps crashing on login.",
    projectId: "PRJ-10239",
    projectName: "Kitchen Renovation",
    serviceName: "Home Renovation",
    pro: {
      id: "PRO-7781",
      name: "Alex Turner",
      profileImage: "/customer/root/ongoing-work/pro-img.png",
    },
    customer: {
      id: "CUS-5532",
      name: "Sarah Lee",
      profileImage: "/images/customers/sarah-lee.jpg",
    },
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
    projectId: "PRJ-10239",
    projectName: "Kitchen Renovation",
    serviceName: "Home Renovation",
    pro: {
      id: "PRO-7781",
      name: "Alex Turner",
      profileImage: "/customer/root/ongoing-work/pro-img.png",
    },
    customer: {
      id: "CUS-5532",
      name: "Sarah Lee",
      profileImage: "/images/customers/sarah-lee.jpg",
    },
    chat: [],
  },
];

async function Page({ params }) {
  const { id } = await params;
  const data = query.find((item) => Number(item.id) === Number(id));
  return (
    <main>
      <div className="p-3">
        <div className="flex justify-between mt-4 mx-auto items-center max-w-7xl">
          <span>Completed Project / #HA-81923642 / Support</span>
        </div>
        <div className="max-w-7xl mx-auto my-8">
          <ChatWithSupport chat={data} status={data.status} />
        </div>
      </div>
    </main>
  );
}

export default Page;
