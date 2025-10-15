import Footer from "@/components/customer/layout/Footer";
import Header from "@/components/customer/layout/Header";
import { CustomerProviders } from "@/providers/storeProviders";
import NextTopLoader from "nextjs-toploader";

export default function CustomerLayout({ children }) {
  return (
    <main>
      <CustomerProviders>
        <NextTopLoader color="#1E9BD0" height={4} showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </CustomerProviders>
    </main>
  );
}
