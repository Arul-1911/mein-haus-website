import AllMessagesWithPro from "@/components/customer/messages/all-messages";
import ChatProfiles from "@/components/customer/messages/chat-profiles";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

export const chats = [
  {
    id: 1,
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
    ],
  },

  {
    id: 2,
    projectId: "PRJ-84320",
    projectName: "Bathroom Upgrade",
    serviceName: "Plumbing",
    pro: {
      id: "PRO-9912",
      name: "Daniel Martinez",
      profileImage: "/images/pro/daniel.png",
    },
    customer: {
      id: "CUS-8841",
      name: "Emily Carter",
      profileImage: "/images/customers/emily.jpg",
    },
    messages: [
      {
        id: "MSG-1",
        sender: "customer",
        timestamp: "09:05AM",
        text: "Hey Daniel, I need a shower replacement.",
      },
      {
        id: "MSG-2",
        sender: "pro",
        timestamp: "09:08AM",
        text: "Sure Emily, any preferred design?",
      },
      {
        id: "MSG-3",
        sender: "customer",
        timestamp: "09:10AM",
        text: "Modern glass panel if possible.",
      },
    ],
  },

  {
    id: 3,
    projectId: "PRJ-56291",
    projectName: "Garden Lighting",
    serviceName: "Electrical Work",
    pro: {
      id: "PRO-1452",
      name: "Michael Chen",
      profileImage: "/images/pro/michael.jpg",
    },
    customer: {
      id: "CUS-6634",
      name: "Robert Brown",
      profileImage: "/images/customers/robert.jpg",
    },
    messages: [
      {
        id: "MSG-1",
        sender: "customer",
        timestamp: "12:40PM",
        text: "Need garden lights installed.",
      },
      {
        id: "MSG-2",
        sender: "pro",
        timestamp: "12:42PM",
        text: "Solar or wired setup?",
      },
      {
        id: "MSG-3",
        sender: "customer",
        timestamp: "12:45PM",
        text: "Prefer wired.",
      },
    ],
  },

  {
    id: 4,
    projectId: "PRJ-99214",
    projectName: "Roof Fix",
    serviceName: "Roofing",
    pro: {
      id: "PRO-7611",
      name: "John Williams",
      profileImage: "/images/pro/john.png",
    },
    customer: {
      id: "CUS-2291",
      name: "Olivia Davis",
      profileImage: "/images/customers/olivia.png",
    },
    messages: [
      {
        id: "MSG-1",
        sender: "customer",
        timestamp: "8:05AM",
        text: "My roof is leaking. Can you inspect?",
      },
      {
        id: "MSG-2",
        sender: "pro",
        timestamp: "8:07AM",
        text: "Yes, I can come today afternoon.",
      },
    ],
  },

  {
    id: 5,
    projectId: "PRJ-22991",
    projectName: "Full House Painting",
    serviceName: "Painting",
    pro: {
      id: "PRO-5531",
      name: "Samantha Green",
      profileImage: "/images/pro/samantha.jpg",
    },
    customer: {
      id: "CUS-9921",
      name: "James White",
      profileImage: "/images/customers/james.jpg",
    },
    messages: [
      {
        id: "MSG-1",
        sender: "customer",
        timestamp: "11:10AM",
        text: "Need paint estimate for 3BHK.",
      },
      {
        id: "MSG-2",
        sender: "pro",
        timestamp: "11:12AM",
        text: "Interior + exterior?",
      },
      {
        id: "MSG-3",
        sender: "customer",
        timestamp: "11:15AM",
        text: "Only interior.",
      },
    ],
  },

  {
    id: 6,
    projectId: "PRJ-90911",
    projectName: "Modular Wardrobe",
    serviceName: "Carpentry",
    pro: {
      id: "PRO-1122",
      name: "Kevin Brooks",
      profileImage: "/images/pro/kevin.jpg",
    },
    customer: {
      id: "CUS-4422",
      name: "Sophia Taylor",
      profileImage: "/images/customers/sophia.jpg",
    },
    messages: [
      {
        id: "MSG-1",
        sender: "customer",
        timestamp: "2:00PM",
        text: "Looking for a sliding wardrobe design.",
      },
      {
        id: "MSG-2",
        sender: "pro",
        timestamp: "2:05PM",
        text: "Material preference?",
      },
      {
        id: "MSG-3",
        sender: "customer",
        timestamp: "2:08PM",
        text: "Plywood with laminate.",
      },
    ],
  },

  {
    id: 7,
    projectId: "PRJ-77123",
    projectName: "Floor Polishing",
    serviceName: "Woodwork",
    pro: {
      id: "PRO-6611",
      name: "Henry Scott",
      profileImage: "/images/pro/henry.png",
    },
    customer: {
      id: "CUS-1911",
      name: "Mia Johnson",
      profileImage: "/images/customers/mia.jpg",
    },
    messages: [],
  },
];

async function Page({ params }) {
  const { chatid } = await params;
  const chat = chats.find((item) => Number(chatid) === Number(item.id));
  return (
    <main>
      <div
        className="text-start md:hidden mt-6
      mx-5"
      >
        <Link href="/customer/all-messages" className="flex items-center gap-2">
          <span>
            <MoveLeftIcon />
          </span>
          <span>Back</span>
        </Link>
      </div>
      <div className="my-8 flex w-full justify-center">
        <div className="grid grid-cols-12 gap-6 px-3">
          <div className="hidden md:block col-span-12 md:col-span-5 lg:col-span-4">
            <ChatProfiles />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-8 md:block">
            <AllMessagesWithPro chat={chat} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
