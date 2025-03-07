"use client";
import React, { ReactElement } from "react";
import { motion, useScroll, useSpring } from "motion/react";

function ScrollWraper({ children }: { children: ReactElement[] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      {children}
    </div>
  );
}

export default ScrollWraper;
