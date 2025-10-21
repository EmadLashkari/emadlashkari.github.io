"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);

export default function LinkItem({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const element = useRef(null);
  const { contextSafe } = useGSAP(() => {});

  const onHover = contextSafe(() => {
    gsap.to(element.current, {
      scrambleText: {
        text: `&#60;${children}&#47;&#62;`,
        chars: `&#60;${children}&#47;&#62;`,
      },
    });
  });
  return (
    <Link
      ref={element}
      href={href}
      onMouseEnter={onHover}
      className="flex flex-row justify-center items-center"
    >
      <span>&#60;</span>
      <span>{children}</span>
      <span>&#47;</span>
      <span>&#62;</span>
    </Link>
  );
}
