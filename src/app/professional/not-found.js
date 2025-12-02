import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {/* <h2>404 - Page Not Found</h2> */}
      <p>The requested resource could not be found.</p>
      <Link href="/professional/dashboard">Return Home</Link>
    </div>
  );
}
