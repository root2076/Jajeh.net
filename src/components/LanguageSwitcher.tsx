import React from "react";
import { useLang } from "@/lib/LanguageContext";

const langs = [
  { code: "en", label: "EN", full: "English" },
  { code: "de", label: "DE", full: "Deutsch" },
  { code: "ar", label: "AR", full: "العربية" },
] as const;

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 bg-slate-800/60 rounded-lg p-1 border border-slate-700/50">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
            lang === l.code
              ? "bg-cyan-500 text-slate-900"
              : "text-slate-400 hover:text-cyan-400"
          }`}
          title={l.full}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
