"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linkedin from "@/components/icons/Linkedin";
import Github from "@/components/icons/Github";
import X from "@/components/icons/X";
import Instagram from "@/components/icons/Instagram";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/EmadLashkari",
    icon: <Github />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/emad-lashkari-865081248/",
    icon: <Linkedin />,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>(
    []
  );

  useEffect(() => {
    const socials = socialRefs.current;
    const inputs = inputRefs.current;

    // Animate social media links
    socials.forEach((social, index) => {
      gsap.fromTo(
        social,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    // Animate form inputs
    inputs.forEach((input, index) => {
      gsap.fromTo(
        input,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:emadlashkari.82@gmail.com?subject=Contact%20Form%20Submission%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-slate-950 py-16"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-300">
          Get in Touch
        </h2>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                socialRefs.current[index] = el;
              }}
              className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300"
            >
              Name
            </label>
            <input
              ref={(el) => {
                inputRefs.current[0] = el;
              }}
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 bg-slate-800 text-slate-300 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              ref={(el) => {
                inputRefs.current[1] = el;
              }}
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 bg-slate-800 text-slate-300 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300"
            >
              Message
            </label>
            <textarea
              ref={(el) => {
                inputRefs.current[2] = el;
              }}
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-2 bg-slate-800 text-slate-300 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
