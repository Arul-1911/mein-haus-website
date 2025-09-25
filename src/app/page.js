import Chatbot from "@/components/chatBot/ChatBot";
import HomePage from "@/components/website/homepage/HomePage";
import Footer from "@/components/website/layout/Footer";
import Header from "@/components/website/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
      <Chatbot />
    </main>
  );
}
