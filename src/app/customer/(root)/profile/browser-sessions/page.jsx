import ProfileSideNav from "@/components/customer/profile/profile-side-nav";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import BrowserSession from "@/components/customer/profile/browser-session";

function Page() {
  return (
    <main className="p-3 bg-[#F9F9F9]">
      {/* back  */}
      <div className="block lg:hidden">
        <Link href="/customer/profile" className="flex gap-2 my-4">
          <span>
            <MoveLeftIcon />
          </span>
          <span>Back</span>
        </Link>
      </div>
      <section className="grid grid-cols-12 gap-8 my-5 mx-auto max-w-7xl">
        {/* left  */}
        <div className="hidden lg:block lg:col-span-3">
          <ProfileSideNav />
        </div>
        {/* right  */}
        <div className="col-span-12 lg:col-span-9">
          <BrowserSession />
        </div>
      </section>
    </main>
  );
}

export default Page;
