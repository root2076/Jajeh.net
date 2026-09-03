import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Github } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-cyan-500/10 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-all">
            <Code2 className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="font-grotesk font-bold text-white text-lg">
            Jajeh<span className="text-cyan-400">.net</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://github.com/root2076/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile root2076"
            className="w-9 h-9 rounded-lg border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
          >
            {t.nav.hire}
          </a>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-cyan-500/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="https://github.com/root2076/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile root2076"
                className="w-9 h-9 rounded-lg border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-sm font-semibold text-center"
            >
              {t.nav.hire}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
