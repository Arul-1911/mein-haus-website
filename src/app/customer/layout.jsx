import { Poppins } from "next/font/google";
import "../globals.css";
import { CustomerProviders } from "@/providers/storeProviders";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

export const metadata = {
  title: "MeinHaus | Online General Contractor",
  description:
    "Mein Haus is fastest growing on demand home service provider and offers various types of Repair, Maintenance and Renovation services at your doorstep. Booking Home Cleaning Services in Toronto with Mein Haus is quick, easy, and safe",
  icons: {
    icon: "/favicon.png",
  },
};

export default function CustomerRootLayout({ children }) {
  return (
    <div
      className={`${poppins.variable} antialiased customer-theme min-h-screen`}
    >
      <CustomerProviders>
        <NextTopLoader color="#1E9BD0" height={4} showSpinner={false} />
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      </CustomerProviders>
    </div>
  );
}
