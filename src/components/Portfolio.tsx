import React, { useState } from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Portfolio() {
  const { t } = useLang();
  const p = t.portfolio;
  const [activeIndex, setActiveIndex] = useState(0);

  const active = p.filters[activeIndex] || "All";
  const filtered =
    activeIndex === 0 || active === "All" || active === "الكل"
      ? p.projects
      : p.projects.filter(
          (proj) =>
            proj.category.toLowerCase().includes(active.toLowerCase()) ||
            active.toLowerCase().includes(proj.category.toLowerCase()) ||
            proj.tags.some((tag) => tag.toLowerCase().includes(active.toLowerCase()))
        );

  return (
    <section
      id="portfolio"
      className="py-28 relative"
      style={{
        background: "linear-gradient(180deg, #060d1a 0%, #040b16 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            {p.badge}
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            {p.title1}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {p.title2}
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {p.filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                activeIndex === i
                  ? "bg-cyan-500 text-slate-900 border-cyan-500 font-semibold shadow-lg shadow-cyan-500/20"
                  : "border-slate-700/60 text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 bg-slate-900/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden border border-slate-800/60 glow-border transition-all duration-300 flex flex-col justify-between"
              style={{ background: "rgba(6,18,40,0.6)" }}
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 35%, rgba(4,11,22,0.95) 100%)",
                    }}
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="https://github.com/root2076/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-slate-700/50 text-slate-300 hover:text-cyan-400"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-grotesk font-semibold text-white text-lg sm:text-xl mb-2 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2 border-t border-slate-800/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
