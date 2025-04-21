"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* <Menu setActive={setActive}> */}
      {/* <HoveredLink href="/web-dev">Products</HoveredLink>
        <HoveredLink href="/interface-design">About</HoveredLink>
        <HoveredLink href="/seo">Prices</HoveredLink>
        <HoveredLink href="/branding">ContactMe</HoveredLink> */}
      <Link className="text-white" href="/web-dev">
        Products
      </Link>
      <Link href="/interface-design">About</Link>
      <Link href="/seo">Prices</Link>
      <Link href="/branding">ContactMe</Link>
      {/* </Menu> */}
    </div>
  );
}
