import React from 'react';
import { Phone, Mail, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sparkles, Server, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { AudienceMode } from '../types';

interface HeroSectionProps {
  audienceMode: AudienceMode;
  setAudienceMode: (mode: AudienceMode) => void;
  onSelectContactTab: (tab: 'client' | 'recruiter') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  audienceMode,
  setAudienceMode,
  onSelectContactTab,
}) => {
  return (
    <section
      id="profil"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-900"
    >
      {/* Subtle tech background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Verfügbar für IT-Aufträge & Festanstellung
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>45279 Essen (NRW) & Remote</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 hidden md:inline-flex">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Praxiserfahrung WaysOfSolutions</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-sm sm:text-base font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                Full-Stack Softwareentwicklung • KI-Agenten • IT-Support
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                C# & Blazor Entwicklung,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  KI-Agenten
                </span>{' '}
                & Mac/Windows Support.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              Willkommen auf <strong className="text-white font-semibold">jajeh.net</strong>. Mein Name ist{' '}
              <strong className="text-white font-semibold">{personalInfo.name}</strong>. Ich entwickle moderne Softwarelösungen mit <strong className="text-cyan-300 font-semibold">C# / .NET 8/9 & Blazor</strong>, installiere und konfiguriere <strong className="text-cyan-300 font-semibold">lokale KI-Agenten (Nous Hermes, Open Code)</strong>, integriere Cloud- & KI-Systeme und biete zuverlässigen <strong className="text-cyan-300 font-semibold">Mac- & Windows-Support</strong> sowie Netzwerktechnik im Ruhrgebiet und Remote.
            </p>

            {/* Value Highlights Pill List */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong className="text-white">C# & Blazor Anwendungen</strong> (.NET 8/9, React, APIs)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong className="text-white">KI-Agenten installieren</strong>: Hermes & Open Code</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong className="text-white">Mac & Windows Support</strong>, AD & Fernwartung</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong className="text-white">Cloud & KI-Integration</strong> (AWS, GCP, Gemini API, Docker)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                id="hero-primary-cta"
                href="#kontakt"
                onClick={() => onSelectContactTab('client')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base transition shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>Projekt anfragen / KI & Support</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-recruiter-cta"
                href="#erfahrung"
                onClick={() => setAudienceMode('recruiters')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm sm:text-base transition flex items-center gap-2"
              >
                <span>Bewerberprofil & Werdegang</span>
              </a>

              <a
                id="hero-phone-cta"
                href={`tel:${personalInfo.phoneTel}`}
                className="px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{personalInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Profile & Verification Card (mg4it-style quick facts) */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-base font-bold text-white">Profil im Überblick</h2>
                  <p className="text-xs text-slate-400">Verifizierte Kernkompetenzen</p>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800/80 text-xs font-mono font-semibold">
                  Essen & Remote
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">C# & Blazor Entwicklung</span>
                    <span>.NET 8/9, Blazor Server/WASM, React, SQL Server, Clean Architecture</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">KI-Agenten & Lokale KI</span>
                    <span>Nous Hermes, Open Code, Ollama, vLLM, RAG & private Inferenz</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Mac & Windows IT-Support</span>
                    <span>macOS Support, Windows 10/11 & Server, Active Directory, Fernwartung</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Cloud & IT-Infrastruktur</span>
                    <span>AWS, Google Cloud, Gemini API, Docker, TeamCity & Netzwerktechnik</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Boxes */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Direkter E-Mail-Kontakt:
                </div>
                <a
                  href={`mailto:${personalInfo.emailClient}`}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-xs text-slate-300 hover:text-white transition group"
                >
                  <div>
                    <span className="text-[10px] text-cyan-400 block font-medium">Für Projektanfragen & IT-Support</span>
                    <span className="font-mono text-xs">{personalInfo.emailClient}</span>
                  </div>
                  <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition" />
                </a>

                <a
                  href={`mailto:${personalInfo.emailRecruiter}`}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-xs text-slate-300 hover:text-white transition group"
                >
                  <div>
                    <span className="text-[10px] text-blue-400 block font-medium">Für Recruiter & Arbeitgeber</span>
                    <span className="font-mono text-xs">{personalInfo.emailRecruiter}</span>
                  </div>
                  <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats / Proof Bar (mg4it style) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">C# / Blazor</div>
            <p className="text-xs text-slate-400">.NET 8 & 9 Web- & Backend-Entwicklung</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">KI-Agenten</div>
            <p className="text-xs text-slate-400">Hermes, Open Code & lokale Inferenz</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">Mac & Windows</div>
            <p className="text-xs text-slate-400">Cross-Platform IT-Support & Active Directory</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">Cloud & Vor-Ort</div>
            <p className="text-xs text-slate-400">AWS, GCP, Gemini API & Essen / Remote</p>
          </div>
        </div>
      </div>
    </section>
  );
};
