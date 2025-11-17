import MessageWithPro from "@/components/customer/message-pro";

const chat = {
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

  messages: [
    {
      id: "MSG-1",
      sender: "customer",
      timestamp: "10:15AM",
      text: "Hi Alex, I want to renovate my kitchen. Can you share an estimate?",
    },
    {
      id: "MSG-2",
      sender: "pro",
      timestamp: "10:18AM",
      text: "Hi Sarah! Sure. Can you share a few photos of the current layout?",
    },
    {
      id: "MSG-3",
      sender: "customer",
      timestamp: "10:20AM",
      text: "Yes, I'll send them shortly.",
    },
    {
      id: "MSG-4",
      sender: "pro",
      timestamp: "10:21AM",
      text: "Great. Once I see them, I can give you a detailed quote and timeline.",
    },
    {
      id: "MSG-5",
      sender: "customer",
      timestamp: "10:25AM",
      text: "Here are the pictures. Let me know your thoughts.",
    },
    {
      id: "MSG-6",
      sender: "pro",
      timestamp: "10:21AM",
      text: "Great. Once I see them, I can give you a detailed quote and timeline.",
    },
    {
      id: "MSG-7",
      sender: "customer",
      timestamp: "10:25AM",
      text: "Here are the pictures. Let me know your thoughts.",
    },
    {
      id: "MSG-8",
      sender: "pro",
      timestamp: "10:21AM",
      text: "Great. Once I see them, I can give you a detailed quote and timeline.",
    },
    {
      id: "MSG-9",
      sender: "customer",
      timestamp: "10:25AM",
      text: "Here are the pictures. Let me know your thoughts.",
    },
  ],
};

function Page() {
  return (
    <main className="bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <MessageWithPro chat={chat} />
      </div>
    </main>
  );
}

export default Page;
