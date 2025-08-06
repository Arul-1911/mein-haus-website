import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-secondary",
});

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
    <html
      lang="en"
      className={`${poppins.variable} ${ubuntu.variable} antialiased`}
    >
      <body className="font-primary">{children}</body>
    </html>
  );
}
