import { ProfessionalProviders } from "@/providers/storeProviders";

export default function CustomerLayout({ children }) {
  return (
    <ProfessionalProviders>
      <div className="professional-theme min-h-screen bg-primary text-primary">
        {children}
      </div>
    </ProfessionalProviders>
  );
}
