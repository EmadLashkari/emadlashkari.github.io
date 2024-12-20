import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between  items-center text-white gap-5 text-2xl font-bold">
      <div className="flex flex-row justify-end px-10 items-center text-white gap-5 text-2xl font-bold">
        <Link href={""}>Home</Link>
        <Link href={""}>About Me</Link>
        <Link href={""}>Projects</Link>
        <Link href={""}>Blog</Link>{" "}
      </div>
    </header>
  );
}
