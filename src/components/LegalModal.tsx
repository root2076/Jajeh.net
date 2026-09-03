import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="legal-modal-container"
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-slate-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'impressum' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
              <FileText className="w-4 h-4" />
              <span>Rechtliche Angaben</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Impressum</h3>

            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">Angaben gemäß § 5 TMG:</p>
              <p>
                Abduljabar Jajeh<br />
                Softwareentwicklung & IT-Dienstleistungen<br />
                45279 Essen<br />
                Deutschland
              </p>
            </div>

            <div className="space-y-2 text-sm pt-2 border-t border-slate-800">
              <p className="font-semibold text-white">Kontakt:</p>
              <p>
                Telefon: {personalInfo.phoneDisplay}<br />
                E-Mail (Dienstleistung): {personalInfo.emailClient}<br />
                E-Mail (Bewerbung): {personalInfo.emailRecruiter}<br />
                Internet: https://jajeh.net
              </p>
            </div>

            <div className="space-y-2 text-sm pt-2 border-t border-slate-800">
              <p className="font-semibold text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
              <p>
                Abduljabar Jajeh<br />
                45279 Essen
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <p className="font-semibold text-slate-300">Haftungsausschluss:</p>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
              <Shield className="w-4 h-4" />
              <span>Datenschutzinformationen</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Datenschutzerklärung</h3>

            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">1. Datenschutz auf einen Blick</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div className="space-y-2 text-sm pt-2 border-t border-slate-800">
              <p className="font-semibold text-white">2. Verantwortliche Stelle</p>
              <p className="text-xs sm:text-sm text-slate-300">
                Abduljabar Jajeh<br />
                45279 Essen<br />
                E-Mail: {personalInfo.emailClient}<br />
                Telefon: {personalInfo.phoneDisplay}
              </p>
            </div>

            <div className="space-y-2 text-sm pt-2 border-t border-slate-800">
              <p className="font-semibold text-white">3. Datenerfassung auf dieser Website</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Wenn Sie uns per E-Mail oder Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div className="space-y-2 text-sm pt-2 border-t border-slate-800">
              <p className="font-semibold text-white">4. Ihre Rechte</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
