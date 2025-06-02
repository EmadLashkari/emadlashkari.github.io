"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: "2020",
    title: "Started Web Development",
    description: "Began learning HTML, CSS, and JavaScript.",
    side: "left",
  },
  {
    year: "2021",
    title: "Built First Portfolio",
    description: "Created a personal portfolio using React.",
    side: "right",
  },
  {
    year: "2022",
    title: "Joined Open Source",
    description: "Contributed to open-source projects on GitHub.",
    side: "left",
  },
  {
    year: "2023",
    title: "Mastered Next.js",
    description: "Built production-ready apps with Next.js and TypeScript.",
    side: "right",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const events = eventRefs.current;
    const nextSection = nextSectionRef.current;

    // Timeline for line animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "50% end",
          scrub: 2,
        },
      })
      .to(line, {
        height: "100%",
        duration: 1,
        ease: "linear",
      })
      .to(
        line,
        {
          width: "100vw",
          duration: 0.2,
          ease: "linear",
        },
        "-=0.2"
      );

    // Timeline for events
    events.forEach((event, index) => {
      gsap.fromTo(
        event,
        {
          opacity: 0,
          x: timelineEvents[index].side === "left" ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "linear",
          scrollTrigger: {
            trigger: event,
            start: `top+=${index * 150} 80%`,
            end: `top+=${(index + 1) * 150} 100%`,
            scrub: 2,
          },
        }
      );
    });

    // Animation for "What's Next?" section
    gsap.fromTo(
      nextSection,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "linear",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% start",
          end: "50% end",
          scrub: 2,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-auto bg-slate-950 "
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-300">
          Whats my story ?
        </h2>
        <div className="relative min-h-[220vh]">
          {/* Vertical Line Container */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div
              ref={lineRef}
              className="bg-blue-500 origin-top"
              style={{ width: "1px" }}
            />
          </div>
          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={(el) => {
                  eventRefs.current[index] = el;
                }}
                className={cn(
                  "flex items-center justify-between md:w-3/4 mx-auto relative",
                  event.side === "left" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "w-full md:w-5/12 p-4",
                    event.side === "left" ? "text-right" : "text-left"
                  )}
                >
                  <h3 className="text-2xl font-semibold">{event.year}</h3>
                  <h4 className="text-xl font-medium">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2" />
                <div className="w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
          {/* New Screen Section */}
          <div
            ref={nextSectionRef}
            style={{ opacity: "0" }}
            className="text-center  text-white absolute bottom-1/4 left-0 right-0"
          >
            <h2 className="text-4xl font-bold mb-4">What's Next?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Excited to take on new challenges and build innovative projects.
              Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
