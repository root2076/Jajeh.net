import React from "react";
import { Globe, AppWindow, Code2, Smartphone, Cloud, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const icons = [Code2, Bot, AppWindow, Cloud, Globe, Smartphone];

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="services" className="py-28 relative" style={{ background: "#060d1a" }}>
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            {s.badge}
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            {s.title1}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {s.title2}
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-7 border border-slate-800/60 glow-border transition-all duration-300 cursor-default flex flex-col justify-between"
                style={{ background: "rgba(6,18,40,0.6)" }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-grotesk text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6,182,212,0.06) 0%, transparent 60%)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
