import { CustomerProviders } from "@/providers/storeProviders";
import "@/styles/globals.css";

export default function CustomerLayout({ children }) {
  return (
    <CustomerProviders>
      <div className="customer-theme min-h-screen bg-secondary text-primary">
        {children}
      </div>
    </CustomerProviders>
  );
}
