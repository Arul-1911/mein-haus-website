import { CustomerProviders } from "@/providers/storeProviders";
// import "@/globals.css";

export default function CustomerLayout({ children }) {
  return (
    <CustomerProviders>
      <div className="customer-theme min-h-screen bg-primary text-primary">
        customer header
        {children}
        customer footer
      </div>
    </CustomerProviders>
  );
}
