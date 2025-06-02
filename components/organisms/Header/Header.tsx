import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="p-3 fixed w-full z-50 flex flex-row justify-between  items-center text-white gap-5  font-bold">
      <h1 className="font-stacker text-white">Emad Lashkari</h1>
    </header>
  );
}
