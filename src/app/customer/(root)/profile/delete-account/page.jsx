import DeleteAccountButton from "@/components/customer/profile/delete-account";
import ProfileSideNav from "@/components/customer/profile/profile-side-nav";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

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
          <main className="bg-white rounded-xl p-4">
            <h2 className="font-semibold text-xl">Delete Account</h2>
            <p className="font-medium text-[#9D9D9D] text-sm">
              Permanently remove your account. This will remove your profile and
              you will not be able to login again.
            </p>
            <hr className="my-3" />
            <p className="font-medium text-[#F32E2E] text-lg mb-2">
              Before You Delete Your Account:
            </p>
            <p className="font-medium text-[#9D9D9D] text-sm mb-6">
              Please note the following important points before proceeding:
            </p>
            <ul className="list-disc pl-4">
              <li>Active projects will be canceled.</li>
              <li>Ongoing or booked services will be discontinued.</li>
              <li>Refunds, if applicable, will follow our refund policy.</li>
              <li>
                All personal data, preferences, and project history will be
                permanently removed.
              </li>
              <li>Clear any outstanding payments before proceeding.</li>
              <li>
                Need help? Contact support for assistance or alternative
                options.
              </li>
            </ul>
            <div className="mt-4">
              <DeleteAccountButton />
            </div>
          </main>
        </div>
      </section>
    </main>
  );
}

export default Page;
