import React from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div
      id="mobile-bottom-action-bar"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl flex items-center gap-2.5"
    >
      <a
        id="mobile-sticky-call-btn"
        href={`tel:${personalInfo.phoneTel}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-cyan-400 font-bold text-xs flex items-center justify-center gap-2 transition"
      >
        <Phone className="w-4 h-4" />
        <span>Anrufen</span>
      </a>

      <a
        id="mobile-sticky-mail-btn"
        href="#kontakt"
        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
      >
        <Mail className="w-4 h-4" />
        <span>Kontakt / Mail</span>
      </a>
    </div>
  );
};
