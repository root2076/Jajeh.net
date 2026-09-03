import React, { useState } from "react";
import {
  Code2,
  Terminal,
  FileCode,
  Layers,
  Cpu,
  CheckCircle2,
  Sparkles,
  Play,
} from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

interface HeroLaptopCodeProps {
  openToText: string;
}

const LAPTOP_STYLES = [
  {
    id: "vscode",
    name: "VS Code & C#",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    alt: "Laptop mit VS Code und C# .NET Entwicklung",
  },
  {
    id: "macbook",
    name: "MacBook Pro Setup",
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
    alt: "MacBook Pro mit Terminal und Cloud Code",
  },
  {
    id: "cyber",
    name: "Cyber Terminal",
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    alt: "Cyber Terminal Matrix Code",
  },
];

export default function HeroLaptopCode({ openToText }: HeroLaptopCodeProps) {
  const { lang } = useLang();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeCodeTab, setActiveCodeTab] = useState<"cs" | "terminal" | "json">("cs");

  const currentLaptop = LAPTOP_STYLES[activeImageIndex];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % LAPTOP_STYLES.length);
  };

  return (
    <div className="relative group select-none">
      {/* Laptop & IDE Window Frame */}
      <div
        className="w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-2xl relative overflow-hidden border border-cyan-500/40 glow-border shadow-2xl shadow-cyan-950/70 transition-all duration-500"
        style={{
          background:
            "linear-gradient(135deg, #030a16 0%, #06152a 50%, #020710 100%)",
        }}
      >
        {/* Background Ambient Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 25%, rgba(6,182,212,0.25) 0%, rgba(59,130,246,0.12) 50%, transparent 80%)",
          }}
        />

        {/* Laptop Photograph */}
        <img
          id="hero-laptop-main"
          src={currentLaptop.url}
          alt={currentLaptop.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.08] brightness-[0.88]"
        />

        {/* Cinematic Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(2,6,15,0.95) 0%, rgba(2,6,15,0.35) 45%, rgba(6,182,212,0.06) 75%, transparent 100%)",
          }}
        />

        {/* Interactive Code Window Overlay */}
        <div className="absolute inset-x-3 bottom-14 glass rounded-xl border border-cyan-500/40 p-3 shadow-2xl backdrop-blur-md font-mono text-[11px] leading-relaxed">
          {/* Editor Header / Tabs */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400/90 inline-block" />
              <span className="w-2 h-2 rounded-full bg-amber-400/90 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400/90 inline-block" />

              <div className="flex items-center gap-1 ml-2">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("cs")}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                    activeCodeTab === "cs"
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Code2 className="w-3 h-3 text-cyan-400" />
                  <span>AgentRunner.cs</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCodeTab("terminal")}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                    activeCodeTab === "terminal"
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  <span>Terminal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCodeTab("json")}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors hidden sm:flex items-center gap-1 ${
                    activeCodeTab === "json"
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <FileCode className="w-3 h-3 text-purple-400" />
                  <span>config.json</span>
                </button>
              </div>
            </div>

            <span className="text-slate-500 hidden md:inline text-[9px]">
              .NET 9.0
            </span>
          </div>

          {/* Tab 1: C# Agent Code */}
          {activeCodeTab === "cs" && (
            <div className="text-slate-300 space-y-0.5 overflow-hidden">
              <p>
                <span className="text-purple-400">using</span>{" "}
                <span className="text-slate-200">AutonomousAgents.Core;</span>
              </p>
              <p>
                <span className="text-purple-400">var</span> agent ={" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-cyan-300">HermesAgentWorker</span>();
              </p>
              <p>
                <span className="text-purple-400">await</span> agent.
                <span className="text-blue-400">ExecuteAutonomousLoopAsync</span>(
                <span className="text-amber-300">"Optimize.Net"</span>);
              </p>
              <p className="text-emerald-400 text-[10px] pt-1 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Build succeeded • 0 Errors • 0 Warnings</span>
              </p>
            </div>
          )}

          {/* Tab 2: Terminal Output */}
          {activeCodeTab === "terminal" && (
            <div className="text-slate-300 space-y-0.5 overflow-hidden text-[10px]">
              <p className="text-slate-400">
                $ dotnet run --project ./src/AgentEngine
              </p>
              <p className="text-cyan-300">
                [info] Loading model weights (Nous-Hermes-3-Llama-8B)...
              </p>
              <p className="text-emerald-400">
                [agent] Task plan generated: 4 steps • Inferenz 48 tok/s
              </p>
              <p className="text-amber-300">
                [status] Listening on http://localhost:5000
              </p>
            </div>
          )}

          {/* Tab 3: JSON Config */}
          {activeCodeTab === "json" && (
            <div className="text-slate-300 space-y-0.5 overflow-hidden text-[10px]">
              <p>
                {"{"} <span className="text-cyan-300">"runtime"</span>:{" "}
                <span className="text-amber-300">"dotnet9-linux-x64"</span>,
              </p>
              <p className="pl-3">
                <span className="text-cyan-300">"agentModel"</span>:{" "}
                <span className="text-amber-300">"Hermes-3-Ollama"</span>,
              </p>
              <p className="pl-3">
                <span className="text-cyan-300">"contextWindow"</span>:{" "}
                <span className="text-purple-400">128000</span> {"}"}
              </p>
            </div>
          )}
        </div>

        {/* Top Control Bar (Style Switcher) */}
        <div className="absolute top-3 right-3 left-3 z-20 flex items-center justify-between">
          <button
            type="button"
            onClick={handleNextImage}
            className="px-2.5 py-1 glass rounded-lg border border-cyan-500/40 text-cyan-300 hover:text-white flex items-center gap-1 text-[11px] font-mono shadow-lg backdrop-blur-md cursor-pointer transition-all hover:bg-cyan-500/20"
            title="Anderes Laptop-Bild wählen"
          >
            <Layers className="w-3 h-3 text-cyan-400" />
            <span>Setup wechseln ({currentLaptop.name})</span>
          </button>

          <div className="px-2 py-0.5 rounded bg-black/70 border border-cyan-500/30 text-[10px] text-cyan-300 font-mono flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>LIVE_DEV</span>
          </div>
        </div>

        {/* Bottom Persistent Availability Strip */}
        <div className="absolute bottom-3 left-3 right-3 glass rounded-xl p-2.5 border border-cyan-500/30 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-xs text-slate-200 font-medium truncate">
                {openToText}
              </span>
            </div>
            <span className="text-[10px] text-cyan-400/90 font-mono shrink-0 ml-2">
              C# / .NET 9
            </span>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 border border-cyan-500/30 text-center shadow-lg backdrop-blur-md">
        <div className="font-grotesk font-bold text-lg text-cyan-400 leading-none">
          3+
        </div>
        <div className="text-[10px] text-slate-400 mt-0.5">Jahre Erf.</div>
      </div>

      <div className="absolute -bottom-3 -left-3 glass rounded-xl px-3 py-2 border border-cyan-500/30 text-center shadow-lg backdrop-blur-md">
        <div className="font-grotesk font-bold text-sm text-cyan-400 leading-none">
          .NET 8/9
        </div>
        <div className="text-[10px] text-slate-400 mt-0.5">C# & Blazor</div>
      </div>
    </div>
  );
}
