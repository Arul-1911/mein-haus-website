import { ProfessionalProviders } from "@/providers/storeProviders";
import "@/styles/globals.css";

export default function CustomerLayout({ children }) {
  return (
    <ProfessionalProviders>
      <div className="customer-theme min-h-screen bg-secondary text-primary">
        {children}
      </div>
    </ProfessionalProviders>
  );
}
