import React, { useState } from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import { Code2, Cloud, Cpu, Server, Database, Search, Sparkles, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 3:
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = skillCategoriesData.filter((cat) => {
    if (activeCategory !== 'all' && cat.title !== activeCategory) {
      return false;
    }
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();
    const matchesCat = cat.title.toLowerCase().includes(term);
    const matchesSkill = cat.skills.some((s) => s.name.toLowerCase().includes(term));
    return matchesCat || matchesSkill;
  });

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
              Qualifikationsprofil
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tech-Stack & IT-Fachkompetenzen
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Strukturiertes technologisches Profil mit starkem Fokus auf C#/.NET Entwicklung, moderne Web-Frontends, Cloud-Deployments und bewährte IT-Supportwerkzeuge.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skill-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Technologie suchen (z. B. .NET, Docker)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Alle Kategorien ({skillCategoriesData.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategoriesData.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setActiveCategory(cat.title)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activeCategory === cat.title
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills
                    .filter((skill) =>
                      searchTerm.trim()
                        ? skill.name.toLowerCase().includes(searchTerm.toLowerCase())
                        : true
                    )
                    .map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                          skill.highlight
                            ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/80 font-semibold'
                            : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500">
                <span>{cat.skills.length} Technologien</span>
                {cat.skills.some((s) => s.highlight) && (
                  <span className="text-cyan-400/80 font-medium">• Fokus-Kompetenzen markiert</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
