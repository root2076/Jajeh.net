import React from 'react';
import { privateClientServices, personalInfo } from '../data/portfolioData';
import {
  Laptop,
  Wifi,
  Home,
  HardDrive,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Phone,
  Tag,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PrivateClientService } from '../types';

interface PrivatkundenSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onNavigateToPricing?: () => void;
}

export const PrivatkundenSection: React.FC<PrivatkundenSectionProps> = ({
  onSelectService,
  onNavigateToPricing,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-cyan-400" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-blue-400" />;
      case 'Home':
        return <Home className="w-6 h-6 text-emerald-400" />;
      case 'HardDrive':
        return <HardDrive className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      id="privatkunden"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Privatkunden & Heimanwender
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Unsere Leistungen für Privatkunden
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Wir bieten Ihnen umfassenden IT-Service – verständlich, zuverlässig und individuell auf Ihre Bedürfnisse abgestimmt. Ohne unverständliches Fachchinesisch, dafür mit transparenter Beratung und zügiger Hilfe.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <a
              href="#preisliste"
              onClick={onNavigateToPricing}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500/60 text-slate-200 hover:text-cyan-300 font-medium transition"
            >
              <Tag className="w-4 h-4 text-cyan-400" />
              <span>Direkt zur transparenten Preisliste</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Schnelle Termine in Essen & Ruhrgebiet
            </span>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {privateClientServices.map((service: PrivateClientService) => (
            <div
              key={service.id}
              id={`privatkunden-card-${service.id}`}
              className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 group relative"
            >
              {service.badge && (
                <div className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-medium font-mono">
                  {service.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-xs font-semibold text-cyan-400/90 mt-0.5">
                      {service.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Vorteile & Details:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  id={`privatkunden-btn-${service.id}`}
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 hover:border-cyan-400 transition duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Anfrage für {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Vor-Ort & Fernwartung Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                Brauchen Sie sofort Hilfe bei einem akuten PC-Problem?
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Rufen Sie mich direkt an. Viele Probleme lassen sich innerhalb von 15 bis 30 Minuten direkt per Fernwartung (TeamViewer) lösen. Bei Hardware-Ausfällen oder Netzwerkproblemen komme ich direkt zu Ihnen nach Hause.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              id="privat-call-now-btn"
              href={`tel:${personalInfo.phoneTel}`}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phoneDisplay}</span>
            </a>
            <button
              id="privat-inquire-btn"
              type="button"
              onClick={() => onSelectService('Privatkunden Support')}
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold transition"
            >
              Online anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
