import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function NoContent() {
  return (
    <main>
      <section className="h-[70dvh] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <span>
            <Image
              src="/website/no-contents.png"
              alt="No content Image"
              height={200}
              width={300}
            />
          </span>
          <h1 className="text-center my-5 font-semibold text-2xl">
            No Content Available
          </h1>
          <Link href="/">
            <Button>Go back to the home page</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NoContent;
