import React from "react";
import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import HeroLaptopCode from "./HeroLaptopCode";
import HackerHeadline from "./HackerHeadline";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%), #060d1a",
      }}
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              {h.badge}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <HackerHeadline
              title1={h.title1}
              title2={h.title2}
              title3={h.title3}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg lg:text-xl mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
          >
            {h.roles.map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm bg-cyan-500 text-slate-900 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              {h.cta1} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all"
            >
              {h.cta2}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/root2076/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile root2076"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg border border-slate-700/60 bg-slate-900/50 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all font-mono text-xs group"
            >
              <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>github.com/root2076</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 relative"
        >
          <HeroLaptopCode openToText={h.openTo} />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs pointer-events-none">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>
    </section>
  );
}
