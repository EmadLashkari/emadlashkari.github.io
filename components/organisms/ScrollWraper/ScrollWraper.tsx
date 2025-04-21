"use client";
import React, { ReactElement } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ScrollWraper({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  useGSAP(() => {
    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-page",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        pinSpacing: false,
        markers: true, // Set to true for debugging
      },
    });

    // Timeline animations
    tl.to(".half-circle", {
      height: "100vh",
      yPercent: -100,
      width: "100%",
      ease: "power2.out",
      duration: 1,
    }).to(
      ".second-page-text",
      {
        scaleY: 1,
        y: 1,
        height: 10,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
      },
      "-=0.3"
    );
  }, []);

  return <div className="w-full h-full ">{children}</div>;
}

export default ScrollWraper;
