import Header from "@/components/website/layout/Header";
import Footer from "@/components/website/layout/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "MeinHaus | Online General Contractor",
  description:
    "Mein Haus is fastest growing on demand home service provider and offers various types of Repair, Maintenance and Renovation services at your doorstep. Booking Home Cleaning Services in Toronto with Mein Haus is quick, easy, and safe",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <NextTopLoader
        color="#F88B36"
        // initialPosition={0.08}
        // crawlSpeed={600}
        height={6}
        showSpinner={false}
        // zIndex={1600}
      />
      {children}
      <Footer />
    </>
  );
}
