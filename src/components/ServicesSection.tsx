import React from 'react';
import { servicesData, personalInfo } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, Code2, Server, Cloud, Cpu, Sparkles, Laptop, Bot, Headphones } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'csharp-blazor-dev':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'ai-agents-setup':
        return <Bot className="w-6 h-6 text-purple-400" />;
      case 'mac-windows-support':
        return <Laptop className="w-6 h-6 text-blue-400" />;
      case 'cloud-devops-infr':
        return <Cloud className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      id="geschaeftskunden"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            Software, KI-Agenten & IT-Infrastruktur
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            C# & Blazor, KI-Agenten (Hermes / Open Code) & Mac/Windows
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Hochmoderne Softwarearchitektur mit C#/.NET 8/9 und Blazor, Installation lokaler KI-Agenten ohne Datenabfluss, skalierbare Cloud-Deployments sowie professioneller Support für Apple macOS und Windows.
          </p>
        </div>

        {/* Services Grid (2x2 generous layout) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 relative group ${
                service.highlight
                  ? 'bg-slate-900/90 border-2 border-cyan-500/60 shadow-xl shadow-cyan-950/20'
                  : 'bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wide shadow-md">
                  Kernkompetenz
                </div>
              )}

              {/* Top part: Number, Icon, Title */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 transition">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-700 group-hover:text-slate-500 transition">
                    {service.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-cyan-400/90 mt-1">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Leistungsumfang & Details:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom part: Tags and Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-950 text-cyan-300/90 border border-slate-800 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  id={`service-inquire-btn-${service.id}`}
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
                    service.highlight
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Jetzt unverbindlich anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Remote Support Callout (mg4it-style quick remote support info) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                Schnelle IT-Hilfe via Fernwartung (TeamViewer)
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Dringendes Computerproblem, Server-Störung oder Windows-Fehler? Ich unterstütze Sie unkompliziert und direkt per gesicherter Fernwartung – ohne Anfahrtskosten im gesamten DACH-Raum.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              id="remote-support-call-btn"
              href={`tel:${personalInfo.phoneTel}`}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition shadow-md flex items-center gap-2"
            >
              <span>Sofort anrufen</span>
            </a>
            <a
              id="remote-support-mail-btn"
              href={`mailto:${personalInfo.emailClient}?subject=Anfrage%20IT-Support%20Fernwartung`}
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold transition"
            >
              E-Mail senden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
