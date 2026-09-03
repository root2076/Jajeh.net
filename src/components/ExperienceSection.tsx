import React, { useState } from 'react';
import { experiencesData, personalInfo } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Mail, FileText, Check, ExternalLink } from 'lucide-react';
import { ExperienceItem } from '../types';

export const ExperienceSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySummary = (item: ExperienceItem) => {
    const text = `${item.role} bei ${item.company} (${item.period})\n${item.summary}\nKernaufgaben:\n${item.bulletPoints.map((b) => `• ${b}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section
      id="erfahrung"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
              Für Recruiter & Arbeitgeber
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Berufserfahrung & Werdegang
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Praxisorientierter Werdegang mit Schwerpunkt auf Softwareentwicklung (.NET/C#, React), Systemadministration und Kundenbetreuung. Vollständige Arbeits- und Zwischenzeugnisse liegen vor.
            </p>
          </div>

          <a
            id="request-cv-documents-btn"
            href={`mailto:${personalInfo.emailRecruiter}?subject=Anforderung%20Bewerbungsunterlagen%20(Lebenslauf%20%26%20Zeugnisse)&body=Guten%20Tag%20Herr%20Jajeh,%0A%0Awir%20haben%20Ihr%20Profil%20auf%20jajeh.net%20gesehen%20und%20m%C3%B6chten%20gerne%20Ihre%20vollst%C3%A4ndigen%20Bewerbungsunterlagen%20anfordern.`}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm font-semibold transition flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Unterlagen / Zeugnisse anfordern</span>
          </a>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {experiencesData.map((item: ExperienceItem, index: number) => (
            <div
              key={item.id}
              id={`experience-item-${item.id}`}
              className={`rounded-2xl p-6 sm:p-8 transition-all ${
                item.certificateVerified
                  ? 'bg-slate-900/80 border-2 border-slate-700 shadow-xl'
                  : 'bg-slate-900/40 border border-slate-800/80'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    {item.certificateVerified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Zwischenzeugnis verifiziert
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mt-1.5">
                    <span className="font-semibold text-cyan-400 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                      {item.company}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>

              {/* Note if available */}
              {item.note && (
                <p className="text-xs text-slate-400 italic pt-3">
                  {item.note}
                </p>
              )}

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                {item.summary}
              </p>

              {/* Bullet Points */}
              <div className="mt-5 space-y-2.5">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Verifizierte Aufgaben & Verantwortlichkeiten:
                </span>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  {item.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags & Copy Summary Button */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleCopySummary(item)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition self-end sm:self-auto"
                  title="Station als Text kopieren"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">In Zwischenablage kopiert</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-3.5 h-3.5" />
                      <span>Station als Kurztext kopieren</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reference & Interview Note */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Sie planen ein Bewerbungsgespräch oder suchen Unterstützung für Ihr Entwicklerteam?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Gerne stehe ich kurzfristig für ein persönliches Kennenlernen vor Ort in Essen/NRW oder via Microsoft Teams / Google Meet zur Verfügung.
            </p>
          </div>

          <a
            id="schedule-interview-btn"
            href={`mailto:${personalInfo.emailRecruiter}?subject=Einladung%20zum%20Gespr%C3%A4ch%20%7C%20Bewerbung%20Abduljabar%20Jajeh`}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition shadow-md shadow-cyan-500/20 shrink-0"
          >
            Gespräch vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
};
