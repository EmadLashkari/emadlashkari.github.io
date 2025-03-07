"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils/cn";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/web-dev">Products</HoveredLink>
        <HoveredLink href="/interface-design">About</HoveredLink>
        <HoveredLink href="/seo">Prices</HoveredLink>
        <HoveredLink href="/branding">ContactMe</HoveredLink>
      </Menu>
    </div>
  );
}
