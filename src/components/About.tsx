import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const techs = [
  "C#",
  ".NET 8 / 9",
  "Blazor (WASM/Server)",
  "Nous Hermes",
  "Open Code",
  "Ollama & vLLM",
  "macOS Support",
  "Windows 11 / AD",
  "React",
  "TypeScript",
  "Entity Framework Core",
  "SQL Server",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Google Cloud Platform",
  "Gemini 2.5 API",
  "TeamCity CI/CD",
  "TeamViewer",
  "Linux / SSH",
  "Tailwind CSS",
];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-28 relative" style={{ background: "#060d1a" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              {a.badge}
            </span>
            <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {a.title1}{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {a.title2}
              </span>{" "}
              {a.title3}
            </h2>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>{a.bio1}</p>
              <p>{a.bio2}</p>
              <p>{a.bio3}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80">
              {a.stats.map(([num, label]) => (
                <div key={label} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="font-grotesk font-bold text-2xl text-cyan-400">{num}</div>
                  <div className="text-xs text-slate-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-950/60"
          >
            <div className="space-y-5 mb-10">
              {a.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800/80 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-2 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-slate-300 font-semibold mb-4 text-xs uppercase tracking-widest">
              {a.techLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700/60 text-slate-300 bg-slate-800/40 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
