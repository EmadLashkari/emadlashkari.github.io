"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function Story() {
  useGSAP(() => {
    gsap.fromTo(
      ".story-text",
      {
        xPercent: 5,
      },
      {
        xPercent: -90,
        scrollTrigger: {
          trigger: ".story-container",
          pin: true,
          scrub: 2,
          end: "+=5000px",
        },
      }
    );
    const tl = gsap.timeline();
    tl.fromTo(
      ".sample",
      {
        y: -10,
      },
      {
        y: 0,
      }
    );
  });
  return (
    <section className="w-full h-screen bg-[#07090c] flex justify-start items-center story-container">
      <div className="story-text text-white font-agelia text-[15rem] inline-block text-nowrap">
        I TELL <span className="sample">EVERY</span> UNIQE STORY YOU HAVE NOT
        MATTER IS BIG SUCCESSFULL OR JUST A SIMPLE ONE.
      </div>
    </section>
  );
}
