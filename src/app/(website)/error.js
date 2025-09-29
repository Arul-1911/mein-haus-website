"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import errorImg from "../../../public/website/error-img.png";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div>
        <Image src={errorImg} alt="Error Image" height="200" width="300" />
      </div>
      <div className="flex flex-col my-4 px-1">
        <h2 className="text-center font-semibold text-3xl">
          Uh-oh! Something Went Wrong
        </h2>
        <p className="text-center text-[#9D9D9D] my-2">
          We're experiencing a technical issue on our end. Please try again in a
          few moments.
        </p>
      </div>
      <Button style={{ marginTop: "1rem" }}>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
