import React from 'react';
import { networkInstallationServices, personalInfo } from '../data/portfolioData';
import { NetworkInstallationService } from '../types';
import {
  Cable,
  Wifi,
  Shield,
  Server,
  Database,
  Radio,
  CheckCircle2,
  ArrowRight,
  Phone,
  Layers,
  Sparkles,
} from 'lucide-react';

interface NetworkInstallationSectionProps {
  onSelectNetworkService: (serviceTitle: string) => void;
}

export const NetworkInstallationSection: React.FC<NetworkInstallationSectionProps> = ({
  onSelectNetworkService,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cable':
        return <Cable className="w-6 h-6 text-cyan-400" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-blue-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-emerald-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-purple-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-amber-400" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-rose-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      id="netzwerk"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950/90 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cable className="w-3.5 h-3.5 text-blue-400" />
            Netzwerktechnik & Installation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Netzwerkinstallation für Zuhause & Büro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Stabiles Internet im ganzen Haus oder performante Firmenverkabelung: Wir planen, verlegen und konfigurieren Ihre gesamte Netzwerkinfrastruktur – sauber, zukunftssicher und auf maximale Geschwindigkeit ausgelegt.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
            {['Cat.7 Verlegekabel', 'Keystone RJ45', 'AVM FRITZ!Mesh', 'Ubiquiti UniFi', '19" Netzwerkschrank', 'PoE Switch', 'Synology NAS'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Network Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {networkInstallationServices.map((service: NetworkInstallationService) => (
            <div
              key={service.id}
              id={`network-service-${service.id}`}
              className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Details list */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Kernleistungen:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquire Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  id={`network-inquire-btn-${service.id}`}
                  type="button"
                  onClick={() => onSelectNetworkService(`Netzwerk: ${service.title}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-blue-600 text-white border border-slate-700 hover:border-blue-500 transition flex items-center justify-center gap-2 group/btn"
                >
                  <span>Projekt unverbindlich anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Network Consultation Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 shrink-0">
              <Cable className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                Planen Sie einen Neubau, eine Renovierung oder Büro-Erweiterung?
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Eine saubere Netzwerkverkabelung spart Jahre an Ärger mit instabilen Verbindungen. Ich berate Sie vor Ort in Essen und dem Ruhrgebiet zur optimalen Verlegung, Router-Positionierung und Hardwareauswahl.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              id="network-consult-call-btn"
              href={`tel:${personalInfo.phoneTel}`}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm transition shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Beratungstermin vereinbaren</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
