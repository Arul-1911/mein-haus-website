import ChatProfiles from "@/components/customer/messages/chat-profiles";

function MessagesPage() {
  return (
    <main className="bg-[#F9F9F9]">
      <div>
        <div className="py-8 px-4 w-full md:max-w-sm mx-auto">
          <ChatProfiles />
        </div>
      </div>
    </main>
  );
}

export default MessagesPage;
