"use client";

const projects: {
  title: string;
  src: string;
  tools: string[];
  description: string;
}[] = [
  {
    title: "Pure Crust",
    src: "/video/PureCrust.mp4",
    tools: ["Next.js", "GSAP"],
    description:
      "Pure Crust is a amazing bakery shop that made their products with love and care.",
  },
  {
    title: "Jewelry shop",
    src: "/video/JweleryShop.mp4",
    tools: ["Next.js", "GSAP"],
    description:
      "Every piece of jewelry tells a story, and we're here to help you tell yours.",
  },
];

export default function Projects() {
  return (
    <>
      <h1 id="Projects" className="text-white pl-2 md:pl-10 text-4xl">
        My Projects
      </h1>
      <div className="w-full flex flex-col lg:flex-row justify-center items-start p-3 md:px-5 md:py-5 gap-5 overflow-scroll">
        {projects.map((item, index) => (
          <div
            key={item.title}
            className="w-full h-full flex flex-col md:p-5 rounded-xl  border-slate-900"
          >
            <video
              onMouseEnter={(e) => {
                console.log("hovered");
                e.currentTarget.play();
              }}
              muted
              className="w-full rounded-lg"
              src={item.src}
            />
            <section className="text-white flex flex-col">
              <div className="flex flex-row justify-between items-center py-3">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <div className="flex gap-1">
                  {item.tools.map((tool, i) => (
                    <span
                      key={tool}
                      className="text-sm border-2 px-3 py-1 rounded-full border-slate-900"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-slate-400">{item.description}</p>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}
