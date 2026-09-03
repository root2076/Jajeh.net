import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Copy,
  Download,
  Briefcase,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Eye,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ContactSectionProps {
  initialTab?: 'client' | 'recruiter';
  preselectedService?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialTab = 'client',
  preselectedService,
}) => {
  const [activeTab, setActiveTab] = useState<'client' | 'recruiter'>(initialTab);
  const [purpose, setPurpose] = useState<string>(
    preselectedService
      ? `Projekt: ${preselectedService}`
      : 'Privatkunden: PC- & Notebook-Service'
  );
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(true);

  // Form submission states
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    purpose: string;
  } | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setActiveTab('client');
      setPurpose(`Anfrage: ${preselectedService}`);
    }
  }, [preselectedService]);

  const currentEmail = activeTab === 'client' ? personalInfo.emailClient : personalInfo.emailRecruiter;

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`[jajeh.net] ${purpose} - ${name || 'Anfrage'}`);
    const bodyText = `Guten Tag Herr Jajeh,\n\nName: ${name || 'Nicht angegeben'}\nUnternehmen / Organisation: ${company || (activeTab === 'client' ? 'Privat' : 'Nicht angegeben')}\nE-Mail: ${email || 'Nicht angegeben'}\nTelefon: ${phone || 'Nicht angegeben'}\nBetreff: ${purpose}\n\nNachricht:\n${message || 'Ich freue mich über Ihre Rückmeldung.'}\n\nFreundliche Grüße`;
    const body = encodeURIComponent(bodyText);
    return `mailto:${currentEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyMessage = () => {
    const fullText = `An: ${currentEmail}\nBetreff: [jajeh.net] ${purpose}\n\nName: ${name || 'Nicht angegeben'}\nUnternehmen: ${company || (activeTab === 'client' ? 'Privat' : '-')}\nE-Mail: ${email || '-'}\nTelefon: ${phone || '-'}\n\nNachricht:\n${message || 'Anfrage via jajeh.net'}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOnlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Validation
    if (!name.trim()) {
      setValidationError('Bitte geben Sie Ihren Namen an.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setValidationError('Bitte geben Sie eine gültige E-Mail-Adresse an, damit ich Ihnen antworten kann.');
      return;
    }
    if (!message.trim()) {
      setValidationError('Bitte beschreiben Sie kurz Ihr Vorhaben oder Anliegen.');
      return;
    }
    if (!privacyConsent) {
      setValidationError('Bitte stimmen Sie der Verarbeitung Ihrer Kontaktdaten zur Beantwortung der Anfrage zu.');
      return;
    }

    setSubmitStatus('loading');

    try {
      // Free online form submission using FormSubmit AJAX API
      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || 'Nicht angegeben',
        organisation: company.trim() || (activeTab === 'client' ? 'Privatperson / Heimanwender' : 'Unternehmen / HR'),
        bereich: activeTab === 'client' ? 'Privat- & Geschäftskunden' : 'Recruiter & Karriere',
        betreff: purpose,
        nachricht: message.trim(),
        subject: `[jajeh.net Anfrage] ${purpose} von ${name.trim()}`,
        from_name: `${name.trim()} via jajeh.net`,
        access_key: '26d9fb0c-e6f1-424a-b569-7a430d0f0833',
        botcheck: '',
      };

      // Destination: Web3Forms API endpoint
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmittedData({
          name: name.trim(),
          email: email.trim(),
          purpose: purpose,
        });
        setSubmitStatus('success');
        // Clear input form
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error(`Server returned status ${res.status}`);
      }
    } catch (error) {
      console.warn('Online form submission error, offering fallback:', error);
      setSubmitStatus('error');
    }
  };

  const handleDownloadVCard = () => {
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:Abduljabar Jajeh
N:Jajeh;Abduljabar;;;
TITLE:Softwareentwickler & IT-Dienstleister
ORG:jajeh.net
TEL;TYPE=CELL,VOICE:${personalInfo.phoneTel}
EMAIL;TYPE=INTERNET,WORK:${personalInfo.emailClient}
EMAIL;TYPE=INTERNET,HOME:${personalInfo.emailRecruiter}
URL:https://jajeh.net
ADR;TYPE=WORK:;;45279 Essen;Nordrhein-Westfalen;;Deutschland
NOTE:Softwareentwicklung (.NET/C#, React), IT-Infrastruktur, Vor-Ort-Service & Netzwerkinstallation
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Abduljabar_Jajeh.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="kontakt"
      className="py-16 sm:py-24 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Direkter Kontakt
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Treten Sie mit mir in Kontakt
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ob konkretes Software-Projekt, kurzfristiger IT-Support via Fernwartung oder ein Angebot für eine Festanstellung: Ich antworte verlässlich und zügig.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Dedicated Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Telefonischer Direktkontakt</span>
                  <a
                    id="contact-phone-direct-link"
                    href={`tel:${personalInfo.phoneTel}`}
                    className="text-lg sm:text-xl font-bold text-white hover:text-cyan-400 transition font-mono"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Mo–Fr tagsüber erreichbar. Bei verpasstem Anruf erfolgt schnellstmöglich ein Rückruf.
              </p>
            </div>

            {/* Client Email Card */}
            <div
              className={`p-6 rounded-2xl transition-all border ${
                activeTab === 'client'
                  ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/20'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800 shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block">
                      Für Kunden & Dienstleistungen
                    </span>
                    <a
                      id="client-email-direct-link"
                      href={`mailto:${personalInfo.emailClient}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition font-mono"
                    >
                      {personalInfo.emailClient}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('client')}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition ${
                    activeTab === 'client'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Auswählen
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Für Projektanfragen, Website-Aufträge, IT-Administration und Fernwartung.
              </p>
            </div>

            {/* Recruiter Email Card */}
            <div
              className={`p-6 rounded-2xl transition-all border ${
                activeTab === 'recruiter'
                  ? 'bg-slate-900 border-blue-500/60 shadow-lg shadow-blue-950/20'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block">
                      Für Recruiter & Arbeitgeber
                    </span>
                    <a
                      id="recruiter-email-direct-link"
                      href={`mailto:${personalInfo.emailRecruiter}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition font-mono"
                    >
                      {personalInfo.emailRecruiter}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('recruiter')}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition ${
                    activeTab === 'recruiter'
                      ? 'bg-blue-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Auswählen
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Für Stellenangebote, Zeugnis- & Lebenslauf-Anforderungen sowie Interviewtermine.
              </p>
            </div>

            {/* Location & vCard Bar */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <button
                id="download-vcard-btn"
                type="button"
                onClick={handleDownloadVCard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-medium transition"
                title="Digitale Kontaktkarte für Smartphone & Outlook herunterladen"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Visitenkarte (.vcf)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              {submitStatus === 'success' ? (
                /* Success Confirmation Screen */
                <div className="py-8 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      Erfolgreich online übermittelt
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Vielen Dank, {submittedData?.name || 'für Ihre Anfrage'}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                      Ihre Nachricht zum Thema <strong className="text-cyan-400 font-medium">„{submittedData?.purpose}“</strong> wurde erfolgreich und kostenlos an mich übertragen.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-left max-w-md mx-auto space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Absender:</span>
                      <span className="font-semibold text-white">{submittedData?.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Antwort-E-Mail:</span>
                      <span className="font-mono text-cyan-400">{submittedData?.email}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Bearbeitungsstatus:</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Eingegangen & in Bearbeitung
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 pt-1">
                      Ich prüfe Ihr Anliegen umgehend und melde mich schnellstmöglich bei Ihnen zurück.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      id="contact-new-message-btn"
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Weitere Nachricht senden</span>
                    </button>

                    <a
                      id="contact-success-call-btn"
                      href={`tel:${personalInfo.phoneTel}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Bei Dringlichkeit direkt anrufen</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Form Composer */
                <form onSubmit={handleOnlineSubmit} className="space-y-5">
                  {/* Tab Selector inside the composer */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>Nachricht vorbereiten & absenden</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                          Online-Formular
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400">
                        Wählen Sie den Zweck für eine optimierte Kontaktanfrage
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('client');
                          setPurpose('Privatkunden: PC- & Notebook-Service');
                        }}
                        className={`px-3 py-1 rounded-md font-medium transition ${
                          activeTab === 'client'
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Kunden
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('recruiter');
                          setPurpose('Bewerbungsunterlagen anfordern (Lebenslauf & Zeugnisse)');
                        }}
                        className={`px-3 py-1 rounded-md font-medium transition ${
                          activeTab === 'recruiter'
                            ? 'bg-blue-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Recruiting
                      </button>
                    </div>
                  </div>

                  {/* Validation Error Banner */}
                  {validationError && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                      <div className="flex-1">
                        <strong className="font-semibold block">Bitte Eingabe prüfen:</strong>
                        <span>{validationError}</span>
                      </div>
                    </div>
                  )}

                  {/* Submission Failure / Fallback Banner */}
                  {submitStatus === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                      <div className="flex-1 space-y-1">
                        <strong className="font-semibold block">Übertragung nicht möglich:</strong>
                        <p>
                          Der Online-Dienst konnte vorübergehend nicht erreicht werden (evtl. Adblocker oder temporäre Verbindungstrennung).
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Nutzen Sie bitte die Schaltfläche <strong>„In E-Mail-Programm öffnen“</strong> oder kopieren Sie den Text mit einem Klick.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Purpose Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-purpose-select" className="text-xs font-semibold text-slate-300">
                      Anfrage-Thema / Zweck: <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="inquiry-purpose-select"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    >
                      {activeTab === 'client' ? (
                        <>
                          <optgroup label="Privatkunden & Heimanwender">
                            <option value="Privatkunden: PC- & Notebook-Service">
                              PC- & Notebook-Service (Reparatur, Aufrüstung, Reinigung)
                            </option>
                            <option value="Privatkunden: WLAN & Heimnetzwerk">
                              WLAN & Heimnetzwerk (Mesh, Router, Empfangsoptimierung)
                            </option>
                            <option value="Privatkunden: Smart Home">
                              Smart Home (Licht, Heizung, Sicherheit)
                            </option>
                            <option value="Privatkunden: Datensicherung & Datenrettung">
                              Datensicherung & Datenrettung (Backup, Datenwiederherstellung)
                            </option>
                            <option value="Privatkunden: Virenentfernung">
                              Virenentfernung & Systembereinigung (Trojaner, Adware)
                            </option>
                            <option value="Privatkunden: Vor-Ort-Service">
                              Vor-Ort-Service (Essen & Ruhrgebiet)
                            </option>
                            <option value="Privatkunden: Frage zur Preisliste / Festpreis">
                              Frage zur Preisliste / Festpreise
                            </option>
                          </optgroup>
                          <optgroup label="Netzwerktechnik & Verkabelung">
                            <option value="Netzwerkinstallation: LAN-Kabel & Dosen (Cat.7)">
                              LAN-Kabelverlegung, Dosen & Patchpanel
                            </option>
                            <option value="Netzwerkinstallation: Mesh-WLAN & Access Points">
                              WLAN-Mesh, FRITZ!Box & UniFi Access Points
                            </option>
                            <option value="Netzwerkinstallation: NAS & Netzwerkspeicher">
                              NAS-Server (Synology / QNAP) & Datensicherung
                            </option>
                          </optgroup>
                          <optgroup label="Geschäftskunden & Unternehmen">
                            <option value="Geschäftskunden: Software- & Webentwicklung">
                              Software- & Webentwicklung (.NET, Blazor, React, WordPress)
                            </option>
                            <option value="Geschäftskunden: IT-Infrastruktur & Support">
                              IT-Infrastruktur, Active Directory & Fernwartung
                            </option>
                            <option value="Geschäftskunden: Cloud & KI-Lösungen">
                              Cloud (AWS, Google Cloud) & KI-Integration (Vertex AI / Gemini)
                            </option>
                            <option value="Unverbindliches Beratungsgespräch">
                              Unverbindliches Beratungsgespräch
                            </option>
                            <option value="Sonstige Dienstleistungsanfrage">Sonstiges</option>
                          </optgroup>
                        </>
                      ) : (
                        <>
                          <option value="Bewerbungsunterlagen anfordern (Lebenslauf & Zeugnisse)">
                            Bewerbungsunterlagen anfordern (Lebenslauf & Zeugnisse)
                          </option>
                          <option value="Einladung zum Vorstellungsgespräch / Kennenlernen">
                            Einladung zum Vorstellungsgespräch / Kennenlernen
                          </option>
                          <option value="Stellenangebot: Softwareentwicklung (.NET / Full-Stack)">
                            Stellenangebot: Softwareentwicklung (.NET / Full-Stack)
                          </option>
                          <option value="Stellenangebot: IT-Infrastruktur & Cloud">
                            Stellenangebot: IT-Infrastruktur & Cloud
                          </option>
                          <option value="Allgemeine HR- / Recruiter-Anfrage">
                            Allgemeine Recruiter-Anfrage
                          </option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* Sender Info Inputs */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name-input" className="text-xs font-semibold text-slate-300">
                        Ihr Name: <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="z. B. Michael Schmidt"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-company-input" className="text-xs font-semibold text-slate-300">
                        {activeTab === 'client' ? 'Unternehmen (optional / privat):' : 'Unternehmen / Kanzlei:'}
                      </label>
                      <input
                        id="contact-company-input"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={activeTab === 'client' ? 'Privat oder Firmenname' : 'z. B. Tech GmbH'}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email-input" className="text-xs font-semibold text-slate-300">
                        Ihre E-Mail-Adresse: <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ihre.adresse@beispiel.de"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone-input" className="text-xs font-semibold text-slate-300">
                        Ihre Telefonnummer (optional für Rückruf):
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+49 170 1234567"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                  </div>

                  {/* Message Box */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message-textarea" className="text-xs font-semibold text-slate-300">
                      Ihre Nachricht oder Problembeschreibung: <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message-textarea"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen (z. B. Windows startet nicht mehr, neues WLAN-Mesh im Haus einrichten, Website-Projekt, Terminvereinbarung...)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition resize-y"
                    />
                  </div>

                  {/* Live Message Preview Toggle */}
                  <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 overflow-hidden text-xs">
                    <button
                      type="button"
                      onClick={() => setShowPreview(!showPreview)}
                      className="w-full px-3.5 py-2 flex items-center justify-between text-slate-400 hover:text-slate-200 transition"
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Vorschau der vorbereiteten Nachricht ansehen</span>
                      </div>
                      {showPreview ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {showPreview && (
                      <div className="p-3.5 border-t border-slate-800/80 bg-slate-950 text-slate-300 font-mono text-[11px] leading-relaxed whitespace-pre-wrap select-all">
                        {`Empfänger: ${personalInfo.emailClient} (bzw. online Übertragung)
Betreff: [jajeh.net] ${purpose} - ${name || '[Ihr Name]'}
Absender: ${name || '[Ihr Name]'} (${email || '[Ihre E-Mail]'}, Tel: ${phone || 'Nicht angegeben'})
Organisation / Typ: ${company || (activeTab === 'client' ? 'Privatkunde' : 'Unternehmen')}

Nachricht:
${message || '[Ihre Nachricht erscheint hier]'}`}
                      </div>
                    )}
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <label className="flex items-start gap-2.5 text-xs text-slate-400 cursor-pointer pt-1">
                    <input
                      id="contact-privacy-checkbox"
                      type="checkbox"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-950 cursor-pointer"
                    />
                    <span className="leading-relaxed">
                      Ich willige ein, dass meine Daten zur Bearbeitung der Anfrage und Kontaktaufnahme verarbeitet werden. Die Übertragung erfolgt kostenlos, verschlüsselt und unverbindlich.
                    </span>
                  </label>

                  {/* Action Buttons */}
                  <div className="pt-2 space-y-3">
                    <button
                      id="contact-submit-online-btn"
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-60 text-slate-950 font-bold text-sm sm:text-base transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Anfrage wird online übermittelt...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Nachricht vorbereiten & absenden</span>
                        </>
                      )}
                    </button>

                    {/* Secondary Fallbacks */}
                    <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1 text-xs">
                      <a
                        id="contact-send-mail-btn"
                        href={generateMailtoUrl()}
                        className="w-full sm:w-auto flex-1 py-2 px-3.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                        title="Öffnet Ihr Standard-Mailprogramm mit dem vorgefertigten Text"
                      >
                        <Mail className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Alternativ: In E-Mail-Programm öffnen</span>
                      </a>

                      <button
                        id="contact-copy-text-btn"
                        type="button"
                        onClick={handleCopyMessage}
                        className="w-full sm:w-auto py-2 px-3.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Kopiert!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Text kopieren</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1 text-emerald-400/90 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Kostenlose & direkte Online-Übermittlung
                    </span>
                    <span className="font-mono text-slate-400">
                      Ziel: {personalInfo.emailClient}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
