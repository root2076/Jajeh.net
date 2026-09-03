import React from 'react';
import { educationData, languagesData, interestsData } from '../data/portfolioData';
import { GraduationCap, Award, Languages, Heart, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { EducationItem, LanguageItem } from '../types';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="bildung"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Akademischer Hintergrund
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bildung, Sprachen & Interessen
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Fundierte Informatikausbildung mit wirtschaftswissenschaftlichem Fundament (BWL) an der Bergischen Universität Wuppertal sowie zertifizierte mehrsprachige Kommunikationsfähigkeit.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Higher Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Akademische Ausbildung & Zertifikate</span>
            </h3>

            <div className="space-y-6">
              {educationData.map((item: EducationItem, idx: number) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800 self-start sm:self-auto">
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {item.degree}
                    </h4>
                    <p className="text-sm text-cyan-300 font-medium mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages & Personal Interests (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Languages Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-blue-400" />
                <span>Sprachkompetenzen</span>
              </h3>

              <div className="space-y-4 pt-1">
                {languagesData.map((lang: LanguageItem) => (
                  <div key={lang.language} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{lang.language}</span>
                      <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <span>Interessen & Ausgleich</span>
              </h3>
              <p className="text-xs text-slate-400">
                Als Ergänzung zur intensiven Bildschirmarbeit und für analytischen Fokus:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {interestsData.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
