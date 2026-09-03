import React, { useState, useEffect, useRef, useCallback } from "react";
import { Terminal, RefreshCw } from "lucide-react";

interface HackerHeadlineProps {
  title1: string; // e.g. "Modernes"
  title2: string; // e.g. "C# & Software Engineering"
  title3: string; // e.g. "mit autonomen KI-Agenten."
}

// Calm, readable cyber glyph set without jarring width variations
const GLYPHS = "01#_<>*/+[]X$@";

export default function HackerHeadline({
  title1,
  title2,
  title3,
}: HackerHeadlineProps) {
  // Combine into tracked segments to decode in a calm, unified sequence
  const line1Full = `${title1} ${title2}`;
  const line2Full = title3;

  const [line1Display, setLine1Display] = useState(line1Full);
  const [line2Display, setLine2Display] = useState(line2Full);
  const [isDecoding, setIsDecoding] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const runCalmDecrypt = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsDecoding(true);
    let step = 0;
    const totalLine1 = line1Full.length;
    const totalLine2 = line2Full.length;
    const maxSteps = totalLine1 + totalLine2 + 4;

    // Steady, smooth 40ms interval — smooth and calm, never crazy
    intervalRef.current = setInterval(() => {
      step += 1;

      // Line 1 reveal
      const newLine1 = line1Full
        .split("")
        .map((char, idx) => {
          if (char === " ") return " ";
          if (idx < step) return char;
          if (idx < step + 2) {
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          return char;
        })
        .join("");

      // Line 2 starts decoding after Line 1 is partially revealed
      const line2Offset = Math.max(0, step - Math.floor(totalLine1 * 0.45));
      const newLine2 = line2Full
        .split("")
        .map((char, idx) => {
          if (char === " ") return " ";
          if (idx < line2Offset) return char;
          if (idx < line2Offset + 2) {
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          return char;
        })
        .join("");

      setLine1Display(newLine1);
      setLine2Display(newLine2);

      if (step >= maxSteps) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setLine1Display(line1Full);
        setLine2Display(line2Full);
        setIsDecoding(false);
      }
    }, 38);
  }, [line1Full, line2Full]);

  // Run calmly once on mount or when language changes
  useEffect(() => {
    runCalmDecrypt();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [runCalmDecrypt]);

  // Split line 1 display into title1 and title2 portions for styling
  const splitIndex = title1.length;
  const part1 = line1Display.slice(0, splitIndex);
  const part2 = line1Display.slice(splitIndex + 1);

  return (
    <div className="select-none mb-5">
      {/* Terminal Indicator bar with quiet, controlled decrypt trigger */}
      <div className="flex items-center gap-2 text-xs font-mono mb-3 justify-center lg:justify-start">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider text-[11px]">
            {isDecoding ? "[DECRYPTING...]" : "[TERMINAL_READY]"}
          </span>
        </span>

        <button
          type="button"
          onClick={() => {
            if (!isDecoding) runCalmDecrypt();
          }}
          disabled={isDecoding}
          className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-[11px] transition-all cursor-pointer ${
            isDecoding
              ? "opacity-50 border-slate-800 text-slate-500 cursor-not-allowed"
              : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40"
          }`}
          title="Text neu entschlüsseln"
        >
          <RefreshCw
            className={`w-3 h-3 ${isDecoding ? "animate-spin text-cyan-400" : ""}`}
          />
          <span>Replay</span>
        </button>
      </div>

      {/* Main Headline */}
      <h1
        className="font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.12] tracking-tight cursor-default"
        onClick={() => {
          if (!isDecoding) runCalmDecrypt();
        }}
        title="Klicken für ruhige Entschlüsselung"
      >
        <span className="inline-block">{part1}</span>{" "}
        <span
          className="inline-block"
          style={{
            background: "linear-gradient(90deg, #22d3ee, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {part2}
        </span>
        <br />
        <span className="text-cyan-300 font-mono tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-3">
          <span className="text-cyan-500/50 font-mono mr-2">&gt;</span>
          <span>{line2Display}</span>
          <span className="inline-block w-2.5 h-6 md:h-8 bg-cyan-400 ml-2 animate-pulse align-middle" />
        </span>
      </h1>
    </div>
  );
}
