import NextTopLoader from "nextjs-toploader";

export default function CustomerAuthLayout({ children }) {
  return (
    <>
      <NextTopLoader color="#1E9BD0" height={4} showSpinner={false} />
      {children}
    </>
  );
}
