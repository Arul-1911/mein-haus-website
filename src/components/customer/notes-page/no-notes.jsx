import Image from "next/image";
import AddNotes from "./add-notes";

function NoNotes({ addNotes = true }) {
  return (
    <main className="flex flex-col mt-6 items-center space-y-5 h-[50dvh] w-full">
      <div className="relative h-40 w-40">
        <Image
          src="/customer/root/notes/fallback.png"
          alt="Fallback image"
          fill
        />
      </div>
      <p className="text-[#9D9D9D] text-center">
        There are no notes. Click the Add button to add notes.
      </p>
      <div>{addNotes && <AddNotes />}</div>
    </main>
  );
}

export default NoNotes;
