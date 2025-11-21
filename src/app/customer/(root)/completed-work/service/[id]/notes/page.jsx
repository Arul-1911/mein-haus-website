import Notes from "@/app/customer/(root)/ongoing-work/service/[serviceid]/notes/page";

function Page() {
  return (
    <main>
      <div>
        <Notes
          addNotes={false}
          title={"Completed Project"}
          url="completed-work"
        />
      </div>
    </main>
  );
}

export default Page;
