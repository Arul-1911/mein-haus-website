import { CustomerProviders } from "@/providers/storeProviders";
import NextTopLoader from "nextjs-toploader";

export default function CustomerLayout({ children }) {
  return (
    <>
      <CustomerProviders>
        <NextTopLoader color="#1E9BD0" height={4} showSpinner={false} />
        {children}
      </CustomerProviders>
    </>
  );
}
