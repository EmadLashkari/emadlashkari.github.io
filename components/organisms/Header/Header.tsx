"use client";
import LinkItem from "@/components/atoms/LinkItem";
import Link from "next/link";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CardNav from "./Mobile";
import logo from "@/public/EmadWebsiteLogo.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [{ label: "Me", ariaLabel: "About Me", href: "#AboutMe" }],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      {
        label: "Case Studies",
        ariaLabel: "Project Case Studies",
        href: "#Projects",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      {
        label: "Email",
        href: "mailto:emadlashkari.82@gmail.com",
        ariaLabel: "Email us",
      },
      {
        label: "Github",
        href: "https://github.com/emadlashkari",
        ariaLabel: "Github",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/emadlashkari",
        ariaLabel: "LinkedIn",
      },
      {
        label: "Telegram",
        href: "https://t.me/Emad_Lashkari_82",
        ariaLabel: "Telegram",
      },
    ],
  },
];

export default function Header() {
  const isMobile = useMediaQuery({
    query: "(max-width : 1224px)",
  });

  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".main-menu",
      start: "top -50",
      end: 99999,
      onUpdate: (self) => {
        if (headerRef.current) {
          if (self.direction === -1) {
            gsap.to(headerRef.current, {
              y: 0,
            });
          }
          if (self.direction === 1) {
            gsap.to(headerRef.current, {
              y: -100,
            });
          }
        }
      },
    });
  });

  return (
    <nav ref={headerRef} className="fixed left-0 right-0 top-0 z-50">
      <CardNav
        logo={logo}
        logoAlt="Emad Lashkari"
        items={items}
        baseColor="#06b6d4"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </nav>
  );
}
