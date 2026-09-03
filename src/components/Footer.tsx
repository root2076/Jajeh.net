import React from "react";
import { Code2, Github, ArrowUp } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

interface FooterProps {
  onOpenLegal?: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const { t } = useLang();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-slate-800/60 py-10"
      style={{ background: "#040b16" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="font-grotesk font-bold text-white text-base">
            Jajeh<span className="text-cyan-400">.net</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {t.footer.copy}</p>
          {onOpenLegal && (
            <div className="flex items-center gap-3 text-slate-500">
              <span className="hidden sm:inline">•</span>
              <button
                type="button"
                onClick={() => onOpenLegal('impressum')}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                Impressum
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenLegal('datenschutz')}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                Datenschutz
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/root2076/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile root2076"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/60 bg-slate-900/50 hover:bg-cyan-950/40 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-xs font-mono group"
          >
            <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all ml-2 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
