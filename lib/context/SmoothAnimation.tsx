"use client";
import { createContext } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import ScrollSmoother from "gsap/src/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const SmoothAnimationContext = createContext(null);

export function SmoothAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
    });
  }, {});
  return (
    <SmoothAnimationContext.Provider value={null}>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </SmoothAnimationContext.Provider>
  );
}
