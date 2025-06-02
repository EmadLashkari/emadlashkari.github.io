"use client";
import { cn } from "@/lib/utils/cn";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

export const LampContainerGsap = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 768 });
  const lampRef1 = useRef<HTMLDivElement>(null);
  const lampRef2 = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: lampRef1.current,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
      },
    });

    // Animation for the first lamp (left conic gradient)
    tl.fromTo(
      lampRef1.current,
      { opacity: 0.5, width: "15rem" },
      {
        opacity: 1,
        width: isMobileDevice ? "20rem" : "35rem",
        duration: 0.8,
        ease: "power2.inOut",
      }
    );

    // Animation for the second lamp (right conic gradient)
    tl.fromTo(
      lampRef2.current,
      { opacity: 0.5, width: "15rem" },
      {
        opacity: 1,
        width: isMobileDevice ? "20rem" : "35rem",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.8"
    );

    // Animation for the glow effect
    tl.fromTo(
      glowRef.current,
      { width: "8rem" },
      { width: "16rem", duration: 0.8, ease: "power2.inOut" },
      "-=0.8"
    );

    // Animation for the line effect
    tl.fromTo(
      lineRef.current,
      { width: "15rem" },
      {
        width: isMobileDevice ? "20rem" : "35rem",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.8"
    );
  }, [isMobileDevice]);

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full  z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <div
          ref={lampRef1}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <div
          ref={lampRef2}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <div
          ref={glowRef}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></div>
        <div
          ref={lineRef}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
