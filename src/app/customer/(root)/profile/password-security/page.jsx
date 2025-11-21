import ProfileSideNav from "@/components/customer/profile/profile-side-nav";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

function Page() {
  return (
    <main className="p-3 bg-[#F9F9F9]">
      {/* back  */}
      <div className="block md:hidden">
        <Link href="/customer/profile" className="flex gap-2 my-4">
          <span>
            <MoveLeftIcon />
          </span>
          <span>Back</span>
        </Link>
      </div>
      <section className="grid grid-cols-12 gap-8 my-5 mx-auto max-w-7xl">
        {/* left  */}
        <div className="hidden md:block md:col-span-3">
          <ProfileSideNav />
        </div>
        {/* right  */}
        <div className="col-span-12 md:col-span-9">Password security Page</div>
      </section>
    </main>
  );
}

export default Page;
