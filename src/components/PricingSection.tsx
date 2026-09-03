import React from 'react';
import { pricingData, personalInfo } from '../data/portfolioData';
import { PriceItem } from '../types';
import { CheckCircle2, ArrowRight, ShieldCheck, Tag, Info, Phone, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPriceItem: (serviceTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPriceItem }) => {
  return (
    <section
      id="preisliste"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            Transparente Preisliste
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Faire & transparente Preise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Keine versteckten Gebühren oder bösen Überraschungen. Sie erfahren immer vor Beginn der Arbeiten den voraussichtlichen Aufwand oder wählen einen transparenten Festpreis.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingData.map((item: PriceItem) => (
            <div
              key={item.id}
              id={`pricing-card-${item.id}`}
              className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 relative group ${
                item.popular
                  ? 'bg-slate-900/90 border-2 border-cyan-500/80 shadow-xl shadow-cyan-950/30'
                  : 'bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {item.popular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wide">
                  Häufig gewählt
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition">
                    {item.service}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-3 pb-2 border-y border-slate-800/80 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    {item.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.billingUnit}
                  </span>
                </div>

                {/* Features */}
                {item.features && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Inbegriffene Leistungen:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  id={`pricing-book-btn-${item.id}`}
                  type="button"
                  onClick={() => onSelectPriceItem(item.service)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
                    item.popular
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Dienstleistung anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Footnotes & Anfahrt info */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-200">
                Anfahrtskosten & Transparenz-Garantie:
              </p>
              <p>
                • Essen Stadtgebiet: Pauschal 15,00 € Anfahrt | Angrenzende Ruhrgebietsstädte (Bochum, Mülheim, Gelsenkirchen, Oberhausen): Pauschal 25,00 € Anfahrt.
              </p>
              <p>
                • Bei Fernwartung via TeamViewer entfallen Anfahrtskosten komplett. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerstatus) bzw. alle Preise verstehen sich transparent als Endpreise.
              </p>
            </div>
          </div>

          <a
            id="pricing-questions-call"
            href={`tel:${personalInfo.phoneTel}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold whitespace-nowrap shrink-0 border border-slate-700 transition"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frage zu Preisen? Anrufen</span>
          </a>
        </div>
      </div>
    </section>
  );
};
