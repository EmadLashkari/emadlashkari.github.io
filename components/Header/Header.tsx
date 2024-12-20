import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-center items-center text-white gap-10 text-xl p-5 font-josefin font-bold">
      <Link href={""}>Home</Link>
      <Link href={""}>About Me</Link>
      <Link href={""}>Projects</Link>
      <Link href={""}>Blog</Link>{" "}
    </header>
  );
}
