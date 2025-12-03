import Chatbot from "@/components/website/chatBot/ChatBot";
import HomePage from "@/components/website/homepage/HomePage";
import Header from "@/components/website/layout/Header";
import { WebsiteProviders } from "@/providers/storeProviders";
import { Poppins, Ubuntu } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-secondary",
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${poppins.variable} ${ubuntu.variable} antialiased`}>
      <WebsiteProviders>
        <Header />
        <HomePage />
        <Chatbot />
      </WebsiteProviders>
    </main>
  );
}
