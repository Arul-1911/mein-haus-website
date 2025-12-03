import { Poppins } from "next/font/google";
import "../globals.css";
import { ProfessionalProviders } from "@/providers/storeProviders";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: "MeinHaus | Online General Contractor",
  description:
    "Mein Haus is fastest growing on demand home service provider and offers various types of Repair, Maintenance and Renovation services at your doorstep. Booking Home Cleaning Services in Toronto with Mein Haus is quick, easy, and safe",
  icons: {
    icon: "/favicon.png",
  },
};

export default function ProfessionalRootLayout({ children }) {
  return (
    <div
      className={`${poppins.variable} antialiase professional-theme min-h-screen`}
    >
      <ProfessionalProviders>
        <NextTopLoader color="#FD760D" height={4} showSpinner={false} />
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      </ProfessionalProviders>
    </div>
  );
}
