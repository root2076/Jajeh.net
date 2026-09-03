import React from 'react';
import { AudienceMode } from '../types';
import { Briefcase, UserCheck, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AudienceBannerProps {
  audienceMode: AudienceMode;
  setAudienceMode: (mode: AudienceMode) => void;
  onSelectContactTab: (tab: 'client' | 'recruiter') => void;
}

export const AudienceBanner: React.FC<AudienceBannerProps> = ({
  audienceMode,
  setAudienceMode,
  onSelectContactTab,
}) => {
  return (
    <section className="bg-slate-900/40 border-b border-slate-900 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          {/* Label and description */}
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider font-mono block">
              Duale Ausrichtung der Webseite (jajeh.net)
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {audienceMode === 'clients'
                ? 'Fokus: IT-Dienstleistungen, Webentwicklung & Support'
                : audienceMode === 'recruiters'
                ? 'Fokus: Bewerberprofil, Zeugnisse & Software Engineering'
                : 'Gesamtübersicht: Dienstleistungsangebot & Bewerberprofil'}
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl">
              {audienceMode === 'clients'
                ? 'Sie suchen zuverlässige Unterstützung für Ihre Website, Software oder IT-Infrastruktur? Hier finden Sie alle Services und Konditionen.'
                : audienceMode === 'recruiters'
                ? 'Sie prüfen Kandidaten für Festanstellungen oder Projektvergaben? Hier finden Sie den verifizierten Werdegang, Qualifikationen und Zeugnisdaten.'
                : 'Wechseln Sie nach Bedarf zwischen Kunden- und Recruiter-Ansicht oder scrollen Sie durch die vollständige Präsentation.'}
            </p>
          </div>

          {/* Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setAudienceMode('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                audienceMode === 'all'
                  ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-850'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Alles anzeigen</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAudienceMode('clients');
                onSelectContactTab('client');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                audienceMode === 'clients'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800 shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-850'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Für Kunden / Services</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAudienceMode('recruiters');
                onSelectContactTab('recruiter');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                audienceMode === 'recruiters'
                  ? 'bg-blue-950 text-blue-300 border border-blue-800 shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-850'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Für Recruiter / HR</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
