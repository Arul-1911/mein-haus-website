import Header from "@/components/website/layout/Header";
import Footer from "@/components/website/layout/Footer";

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
      {children}
      <Footer />
    </>
  );
}
