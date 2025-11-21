import ProfileSideNav from "@/components/customer/profile/profile-side-nav";

function Page() {
  return (
    <main className="p-5 bg-[#F9F9F9]">
      <div className="block mx-5 md:hidden">
        <ProfileSideNav />
      </div>
    </main>
  );
}

export default Page;
