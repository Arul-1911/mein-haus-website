import Chatbot from "@/components/website/chatBot/ChatBot";
import HomePage from "@/components/website/homepage/HomePage";
import Header from "@/components/website/layout/Header";
import { WebsiteProviders } from "@/providers/storeProviders";

export default function Home() {
  return (
    <main>
      <WebsiteProviders>
        <Header />
        <HomePage />
        <Chatbot />
      </WebsiteProviders>
    </main>
  );
}
