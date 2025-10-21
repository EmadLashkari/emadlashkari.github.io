"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const projects = [
  {
    title: "Pure Crust",
    bg: "bg-yellow-600",
    description: "A modern pizza delivery platform with real-time tracking",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/img/PureCrust-Desktop.png",
    link: "https://purecrust.com",
    github: "https://github.com/emadlashkari/purecrust",
  },
  {
    title: "Jewelry Shop",
    bg: "bg-yellow-100",
    description: "Elegant e-commerce platform for luxury jewelry",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/img/me.jpg", // placeholder
    link: "#",
    github: "#",
  },
  {
    title: "Jewelry Shop 1",
    bg: "bg-blue-100",
    description: "Advanced jewelry management system",
    tech: ["Vue.js", "Express", "MySQL"],
    image: "/img/me2.png", // placeholder
    link: "#",
    github: "#",
  },
  {
    title: "Jewelry Shop 2",
    bg: "bg-green-100",
    description: "Mobile-first jewelry marketplace",
    tech: ["React Native", "Firebase", "GraphQL"],
    image: "/img/me3.jpg", // placeholder
    link: "#",
    github: "#",
  },
];

export default function Stack() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");

    if (!cards.length) return;

    // Use the smooth wrapper as scroller if ScrollSmoother is active

    // Create a timeline for the stack animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${window.innerHeight * (cards.length - 1)}`,
        pin: true,
        pinSpacing: true,
        scrub: 1, // Use numeric scrub for better performance
        markers: false,
      },
    });
    console.log(window.innerHeight * (cards.length - 1));
    // Animate each card (except the last one) to slide up and out
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        tl.to(card, {
          yPercent: -100,
          ease: "none",
          duration: 1,
        });
      }
    });
  }, []);

  return (
    <div
      ref={container}
      className="w-full h-screen relative bg-slate-950 overflow-hidden"
    >
      <h1 className="text-4xl font-bold text-white">My Projects</h1>
      {projects.map((item, index) => (
        <div
          key={item.title}
          className={`project-card absolute inset-0 w-full h-full flex items-center justify-center rounded-xl shadow-xl bg-slate-950 overflow-hidden`}
          style={{
            zIndex: projects.length - index,
            willChange: "transform",
            contain: "layout style paint",
          }}
        >
          <div className="max-w-4xl w-full mx-auto p-8 flex flex-col md:flex-row items-center gap-8 bg-slate-900 rounded-xl backdrop-blur-lg border">
            {/* Project Image */}
            <div className="flex-1">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1 text-white space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {item.title}
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                {item.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 rounded-full text-sm font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={item.link}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  View Live
                </a>
                <a
                  href={item.github}
                  className="px-6 py-2 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
