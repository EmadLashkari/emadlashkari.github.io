"use client";

import { FlipWords } from "@/components/atoms/FlipWord";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

export function AnimatedBackground() {
  return (
    <AuroraBackground>
      <div className="w-full h-full flex flex-col justify-around items-center pt-20 ">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-8 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-white text-center">
            Hi 👋 This Emad Lashkari
          </div>
          <div className="text-base font-light flex flex-col justify-center items-center gap-3 md:text-4xl text-neutral-200 py-4">
            <span>Creative Developer That Love</span>
            <FlipWords words={["Beautifull", "Responsive", "Easy To Use"]} />
            <span>Apps</span>
          </div>
        </motion.div>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="text-white z-[10000] w-14 h-14"
        >
          <source src="/anim/MouseScroll.webm" type="video/webm" />
        </video>
      </div>
    </AuroraBackground>
  );
}
