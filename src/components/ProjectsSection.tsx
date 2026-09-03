import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Sparkles, Layers, Smartphone, Globe, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ai-web-app':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'microservices':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'mobile-chat':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'web-projects':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="projekte"
      className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/80 text-purple-400 border border-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Praxis & Eigenentwicklungen
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ausgewählte Projekte & Referenzen
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Einblick in selbst realisierte Softwareprojekte, moderne Cloud-Deployments und praktische Implementierungen generativer KI-Schnittstellen.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project: ProjectItem) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Architektur- & Umsetzungsmerkmale:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
