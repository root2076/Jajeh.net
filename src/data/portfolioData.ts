import {
  ServiceItem,
  PrivateClientService,
  PriceItem,
  NetworkInstallationService,
  ExperienceItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  LanguageItem,
} from '../types';

export const personalInfo = {
  name: 'Abduljabar Jajeh',
  domain: 'jajeh.net',
  title: 'Informatiker (B.Sc. i.A., Schwerpunkt BWL) & Softwareentwickler',
  headline: 'C# & Blazor Entwicklung • KI-Agenten (Hermes & Open Code) • Mac & Windows Support',
  subheadline: 'Full-Stack Softwareentwicklung mit C#/.NET 8/9 & Blazor, Installation lokaler KI-Agenten (Hermes, Open Code), Cloud-Infrastruktur sowie verlässlicher IT-Support für Mac & Windows im Ruhrgebiet & Remote.',
  phone: '+49 1520 8747323',
  phoneDisplay: '+49 1520 8747323',
  phoneTel: '+4915208747323',
  emailClient: 'kontakt@jajeh.net',
  emailRecruiter: 'abduljabar@jajeh.net',
  location: '45279 Essen, Deutschland',
  locationShort: 'Essen, NRW',
  status: 'Verfügbar für Softwareprojekte, KI-Installationen & IT-Support',
  summary:
    'Vielseitiger Softwareentwickler und Informatiker mit Schwerpunkt Betriebswirtschaftslehre (BWL). Mehrjährige Praxiserfahrung in C#/.NET (Versionen 8 & 9), Blazor- und React-Anwendungen, Installation von lokalen KI-Agenten (Nous Hermes, Open Code, Ollama), Cloud-Systemen (AWS & Google Cloud) sowie ganzheitlichem Mac- und Windows-Support für Unternehmen und anspruchsvolle Privatanwender.',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'csharp-blazor-dev',
    number: '01',
    title: 'C# & Blazor Softwareentwicklung',
    subtitle: 'Moderne Webanwendungen, Microservices & .NET 8/9 Architekturen',
    description:
      'Konzeption und Entwicklung moderner Full-Stack-Software mit C# und Microsoft .NET (8 & 9). Von reaktiven Blazor Webanwendungen bis zu hochperformanten RESTful APIs.',
    features: [
      'Entwicklung von Single-Page- & Enterprise-Apps mit Blazor (Server & WebAssembly) und React',
      'Hochperformante Backend-Architekturen, Microservices & REST-APIs mit C# / .NET 8 & 9',
      'Datenbankdesign & ORM mit Microsoft SQL Server, PostgreSQL und Entity Framework Core',
      'Saubere Code-Struktur (Clean Architecture), automatische Tests und CI/CD-Pipelines',
      'WordPress-Entwicklung, REST-Schnittstellen und individuelle Web-Portallösungen',
    ],
    tags: ['C#', '.NET 8/9', 'Blazor Server/WASM', 'React', 'REST APIs', 'SQL Server', 'EF Core'],
    targetAudience: 'both',
    highlight: true,
  },
  {
    id: 'ai-agents-setup',
    number: '02',
    title: 'KI-Agenten Installation & Lokale KI',
    subtitle: 'Hermes, Open Code & private Inferenz ohne Datenabfluss',
    description:
      'Installation, Konfiguration und nahtlose Einrichtung autonomer KI-Agenten und lokaler Sprachmodelle direkt auf Ihrer Hardware oder Ihrem Server – 100% datenschutzkonform.',
    features: [
      'Installation & Prompt-Tuning von Nous Hermes / Hermes Agent für autonome Aufgaben & Tool-Calling',
      'Einrichtung von Open Code / OpenCodeInterpreter & Continue.dev als intelligente Coding-Agenten',
      'Aufbau lokaler KI-Inferenz mit Ollama, vLLM & LM Studio (Open-Source LLMs auf Mac & Windows/Linux)',
      'Retrieval-Augmented Generation (RAG): KI-Abfragen auf Basis Ihrer eigenen Dokumente und Codebasen',
      'Integration von Cloud-KI-APIs: Google Vertex AI, Gemini 2.5 API und AWS Bedrock',
    ],
    tags: ['Hermes Agent', 'Open Code', 'Ollama / vLLM', 'Lokale KI', 'Gemini API', 'Vertex AI', 'RAG'],
    targetAudience: 'both',
    highlight: true,
  },
  {
    id: 'mac-windows-support',
    number: '03',
    title: 'Mac & Windows IT-Support',
    subtitle: 'Cross-Platform Administration, Active Directory & Vor-Ort-Hilfe',
    description:
      'Ganzheitliche Betreuung Ihrer heterogenen IT-Umgebung. Zuverlässiger Support für Apple macOS und Microsoft Windows – per schneller Fernwartung oder direkt vor Ort.',
    features: [
      'Umfassender Support für Apple Mac (macOS Sonoma/Sequoia) und Windows 10/11 Workstations',
      'Verwaltung von Windows Active Directory, Microsoft 365, Exchange & OneDrive Team Pages',
      'Sofortige Hilfe via gesicherter TeamViewer-Fernwartung oder Vor-Ort-Service in Essen & Ruhrgebiet',
      'Linux-Server-Administration via SSH (Debian, Ubuntu, Mint) & Netzwerksicherheit',
      'Hardware-Upgrades, Datenübernahme bei Neugeräten & verlässliche Backup-Strategien',
    ],
    tags: ['macOS / Apple', 'Windows 10/11', 'Active Directory', 'Microsoft 365', 'TeamViewer', 'Vor-Ort-Service'],
    targetAudience: 'both',
    highlight: false,
  },
  {
    id: 'cloud-devops-infr',
    number: '04',
    title: 'Cloud, DevOps & Infrastruktur',
    subtitle: 'AWS, Google Cloud, Docker Container & Automatisierung',
    description:
      'Skalierbare Cloud-Deployments, Containerisierung und automatisierte Deployment-Pipelines für ausfallsichere Systeme und moderne Entwickler-Workflows.',
    features: [
      'Bereitstellung, Monitoring & Wartung von AWS Cloud-Diensten (EC2, S3, RDS, Lambda)',
      'Google Cloud Platform (GCP) & Cloud Run Deployments mit Google CLI',
      'Containerisierung mit Docker & Docker Compose für konsistente Entwicklungs- und Produktivumgebungen',
      'CI/CD-Build-Pipelines mit TeamCity und GitHub Actions für automatisiertes Testen und Deployment',
      'Strukturierte Netzwerkanbindung, VPN-Zugänge und Firewall-Konfigurationen',
    ],
    tags: ['AWS', 'Google Cloud', 'Docker', 'TeamCity', 'CI/CD', 'Linux / SSH', 'PostgreSQL'],
    targetAudience: 'both',
    highlight: false,
  },
];

export const privateClientServices: PrivateClientService[] = [
  {
    id: 'pc-notebook',
    title: 'PC- & Notebook-Service',
    subtitle: 'Reparatur, Aufrüstung & Optimierung',
    description:
      'Reparatur, Reinigung, Aufrüstung und Einrichtung von PCs und Notebooks. Wir machen Ihre Geräte wieder schnell und zuverlässig.',
    features: [
      'Reparatur und fachgerechter Austausch defekter Hardware (SSD, RAM, Lüfter)',
      'Gründliche Innenreinigung gegen Überhitzung und laute Lüfter',
      'System-Optimierung & Geschwindigkeits-Tuning für ältere Rechner',
      'Windows 10 / 11 Neuinstallation inkl. Treibern und allen Updates',
      'Ersteinrichtung von Neugeräten & Umzug Ihrer persönlichen Daten',
    ],
    icon: 'Laptop',
    badge: 'Klassiker',
  },
  {
    id: 'wlan-heimnetzwerk',
    title: 'WLAN & Heimnetzwerk',
    subtitle: 'Stabiles High-Speed Internet im ganzen Haus',
    description:
      'Stabiles WLAN im ganzen Haus? Wir planen, optimieren und sichern Ihr Heimnetzwerk für maximale Leistung.',
    features: [
      'Beseitigung von WLAN-Funklöchern und Verbindungsabbrüchen',
      'Einrichtung von Mesh-WLAN-Systemen (z. B. AVM FRITZ!Mesh, Ubiquiti)',
      'Optimale Konfiguration von Router & Modem (FRITZ!Box, Telekom, Vodafone)',
      'Sichere Trennung von Gäste-WLAN und privatem Heimnetz',
      'Messung der tatsächlichen Signalstärke vor Ort in Ihren Räumen',
    ],
    icon: 'Wifi',
    badge: 'Sehr gefragt',
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    subtitle: 'Komfort, Sicherheit & Energieeffizienz',
    description:
      'Von smarter Beleuchtung bis zur Heizungssteuerung – wir integrieren Ihre Geräte und schaffen mehr Komfort und Sicherheit.',
    features: [
      'Vernetzung von smarter Beleuchtung (Philips Hue, Smart Plugs)',
      'Intelligente Heizkörperthermostate zur automatischen Energieeinsparung',
      'Sicherheitskameras, smarte Türklingeln & Bewegungsmelder',
      'Zentrale Steuerung via Smartphone, Tablet oder Sprachassistenten',
      'Herstellerunabhängige und datenschutzfreundliche Vernetzung',
    ],
    icon: 'Home',
    badge: 'Zukunftssicher',
  },
  {
    id: 'datensicherung-rettung',
    title: 'Datensicherung & Datenrettung',
    subtitle: 'Schutz vor Verlust & Notfall-Wiederherstellung',
    description:
      'Schützen Sie Ihre persönlichen Daten vor Verlust. Wir erstellen sichere Backups und zeigen Ihnen einfache Lösungen. Im Falle eines Datenverlusts helfen wir Ihnen gerne bei der Rettung.',
    features: [
      'Einrichtung automatisierter lokaler Backups (z. B. auf externe Festplatten / NAS)',
      'Sichere Cloud-Datensicherung für Dokumente und wertvolle Familienfotos',
      'Rettung gelöschter oder unlesbarer Dateien von Festplatten, SSDs und USB-Sticks',
      'Datenumzug beim Wechsel auf einen neuen PC oder Laptop',
      'Schulung und Erklärung einfacher Backup-Routinen für den Alltag',
    ],
    icon: 'HardDrive',
    badge: 'Essentiell',
  },
  {
    id: 'virenentfernung',
    title: 'Virenentfernung & Sicherheit',
    subtitle: 'Sicheres System & Schutz vor Schadsoftware',
    description:
      'Ihr PC ist langsam oder infiziert? Wir prüfen und entfernen Viren, Malware und unerwünschte Programme und sichern Ihr System.',
    features: [
      'Gründlicher Tiefenscan und rückstandslose Bereinigung von Viren und Trojanern',
      'Beseitigung von nerviger Adware, Browser-Hijackern und Pop-up-Werbung',
      'Installation und Konfiguration wirksamer Antiviren- und Firewall-Lösungen',
      'Schutz vor Phishing, Identitätsdiebstahl und Erpressungstrojanern (Ransomware)',
      'Überprüfung wichtiger Sicherheitsupdates des Betriebssystems',
    ],
    icon: 'ShieldCheck',
    badge: 'Soforthilfe',
  },
  {
    id: 'vor-ort-service',
    title: 'Vor-Ort-Service & Fernwartung',
    subtitle: 'Persönliche Hilfe direkt bei Ihnen zu Hause',
    description:
      'Wir kommen zu Ihnen nach Hause und lösen Ihr Problem bei Bedarf direkt vor Ort – schnell und unkompliziert. Alternativ schnelle Fernwartung.',
    features: [
      'Vor-Ort-Einsätze in Essen und dem gesamten Ruhrgebiet',
      'Anschluss und Konfiguration von Druckern, Scannern und Peripherie',
      'Direkte Fernwartung per TeamViewer bei Software- und Einstellungsproblemen',
      'Verständliche und geduldige Erklärung aller Schritte ohne Fachchinesisch',
      'Flexible Terminabsprachen – auch am späten Nachmittag oder Samstag',
    ],
    icon: 'MapPin',
    badge: 'Essen & Ruhrgebiet',
  },
];

export const networkInstallationServices: NetworkInstallationService[] = [
  {
    id: 'lan-cabling',
    title: 'Strukturierte LAN-Kabelverlegung',
    description:
      'Professionelle Verlegung hochwertiger Cat.6a- und Cat.7-Verlegekabel für unterbrechungsfreie Gigabit- und 10G-Verbindungen.',
    details: [
      'Montage und sauberes Auflegen von Netzwerkdosen (RJ45 Keystone / LSA)',
      'Verlegung in Kabelkanälen, Fußleisten oder Leerrohren',
      'Durchgangsmessung und normgerechtes Prüfprotokoll jeder Leitung',
    ],
    icon: 'Cable',
  },
  {
    id: 'mesh-wifi',
    title: 'WLAN-Planung & Mesh-Systeme',
    description:
      'Nahtlose WLAN-Abdeckung ohne lästige Funklöcher durch moderne Access Points und synchronisierte Mesh-Netzwerke.',
    details: [
      'Optimierung von Funkkanälen zur Vermeidung von Nachbarstörungen',
      'Installation von AVM FRITZ!Mesh oder professionellen UniFi Access Points',
      'Zentrales Management & Roaming für Smartphone, Tablet und Smart-TV',
    ],
    icon: 'Wifi',
  },
  {
    id: 'router-security',
    title: 'Router, Firewall & Kindersicherung',
    description:
      'Einrichtung Ihrer Internetverbindung und Absicherung gegen unerwünschte Zugriffe aus dem Internet.',
    details: [
      'Konfiguration aller gängigen Anbieter (Telekom, Vodafone, 1&1, O2, Deutsche Glasfaser)',
      'Portweiterleitungen, DynDNS und sichere VPN-Verbindungen für unterwegs',
      'Kindersicherung, Gerätesperrzeiten und Gastnetzwerk-Trennung',
    ],
    icon: 'Shield',
  },
  {
    id: 'rack-patchpanel',
    title: 'Patchpanel & Netzwerkschränke',
    description:
      'Saubere Organisation im Technikraum oder Keller – kein Kabelsalat, sondern übersichtliche und wartbare Schaltschränke.',
    details: [
      'Aufbau von 10-Zoll- und 19-Zoll-Netzwerkschränken (Wand- oder Standgehäuse)',
      'Sauberes Patching, Switch-Management (PoE für Access Points & Kameras)',
      'Übersichtliche Beschriftung aller Zuleitungen für spätere Erweiterungen',
    ],
    icon: 'Server',
  },
  {
    id: 'nas-storage',
    title: 'Zentraler Netzwerkspeicher (NAS)',
    description:
      'Eigene sichere Datenwolke zu Hause oder im Büro – vollständige Kontrolle über Ihre Fotos, Backups und Dokumente.',
    details: [
      'Einrichtung von Synology DiskStation oder QNAP NAS-Systemen',
      'Automatischer Foto-Upload vom Smartphone und Apple Time Machine Backups',
      'Gemeinsamer Zugriff für alle Familienmitglieder oder Teamkollegen',
    ],
    icon: 'Database',
  },
  {
    id: 'smart-iot',
    title: 'Smart Home Vernetzung & IoT',
    description:
      'Sichere Einbindung aller smarten Haushaltsgeräte in ein separates IoT-Netzwerk für maximale Cyber-Sicherheit.',
    details: [
      'Integration von Smart Plugs, Lampen, Thermostaten und IP-Kameras',
      'Trennung vom sensiblen Arbeits- und PC-Netzwerk mittels VLAN/Gastzugang',
      'Stabile Verbindung auch bei Dutzenden gleichzeitigen Smart-Geräten',
    ],
    icon: 'Radio',
  },
];

export const pricingData: PriceItem[] = [
  {
    id: 'fernwartung',
    service: 'Schnelle Fernwartung (TeamViewer)',
    price: '15 €',
    billingUnit: 'je angefangene 15 Min.',
    description: 'Sofortige Hilfe bei Softwareproblemen, E-Mail-Einrichtung oder Systemeinstellungen ohne Anfahrtskosten.',
    popular: true,
    features: [
      'Keine Anfahrtskosten – sofort startklar',
      'Abrechnung im fairen 15-Minuten-Takt',
      'Gesicherte Ende-zu-Ende-Verbindung',
      'Sie sehen live am Bildschirm jeden Klick mit',
    ],
  },
  {
    id: 'stundensatz-vorort',
    service: 'Vor-Ort-Service (Stundensatz)',
    price: '59 €',
    billingUnit: 'pro Stunde (nach der 1. Std. im 15-Min-Takt)',
    description: 'Persönliche IT-Unterstützung direkt bei Ihnen zu Hause oder im Home-Office in Essen und Umgebung.',
    features: [
      'Persönlicher Vor-Ort-Termin nach Vereinbarung',
      'Erste Stunde wird voll berechnet, danach minutengenau im 15-Min-Takt',
      'Verständliche Erklärung aller Maßnahmen',
      'Faire Anfahrtspauschale in Essen (15 €) bzw. Ruhrgebiet (25 €)',
    ],
  },
  {
    id: 'pc-neuinstallation',
    service: 'Festpreis: PC- & Windows-Neuinstallation',
    price: '79 €',
    billingUnit: 'Festpreis pro Gerät',
    description: 'Vollständige saubere Neuinstallation von Windows 10 oder 11 inklusive aller Treiber, Updates und Basis-Software.',
    features: [
      'Formatierung und frische Windows 10/11 Installation',
      'Installation aller aktuellen Mainboard- & Grafiktreiber',
      'Einrichtung wichtiger Freeware (Browser, PDF-Reader, VLC)',
      'Installation aller Windows-Sicherheitsupdates',
    ],
  },
  {
    id: 'viren-reinigung',
    service: 'Festpreis: Gründliche Virenentfernung',
    price: '69 €',
    billingUnit: 'Festpreis pro Gerät',
    description: 'Komplette Desinfektion und Beseitigung von Schadsoftware, Viren, Spyware und nervigen Werbe-Programmen.',
    features: [
      'Mehrstufiger Offline- & Online-Virenscan',
      'Bereinigung von Browser-Erweiterungen und Adware',
      'Reparatur beschädigter Windows-Systemdateien',
      'Aktivierung von Windows Defender oder Wunsch-Virenschutz',
    ],
  },
  {
    id: 'backup-einrichtung',
    service: 'Festpreis: Datensicherung & Backup-Setup',
    price: '59 €',
    billingUnit: 'Festpreis',
    description: 'Einrichtung eines automatischen und zuverlässigen Sicherungsplans für Ihre unersetzlichen Dokumente und Fotos.',
    features: [
      'Konfiguration automatischer Backups auf externe Festplatte oder Cloud',
      'Demonstration der Datenwiederherstellung im Testlauf',
      'Schutz vor plötzlichem Festplattendefekt oder Erpressungstrojanern',
      'Einfache Schritt-für-Schritt-Anleitung für den Alltag',
    ],
  },
  {
    id: 'netzwerk-projekt',
    service: 'Netzwerkinstallation & Großprojekte',
    price: 'Individuell',
    billingUnit: 'nach Vor-Ort-Besichtigung & Angebot',
    description: 'Planung und strukturierte Verkabelung für Einfamilienhäuser, Wohnungen, Kanzleien oder Büros.',
    features: [
      'Kostenlose Erstbesprechung und Bestandsaufnahme',
      'Detailliertes und transparentes Festpreis-Angebot',
      'Kabelverlegung, Dosen, Patchpanel, Switch & Mesh-WLAN',
      'Schlüsselfertige Übergabe inklusive Prüfmessung',
    ],
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    id: 'waysofsolutions',
    role: 'Werkstudent Softwareentwicklung & IT-Infrastruktur',
    company: 'WaysOfSolutions',
    location: 'Essen, NRW',
    period: 'Dezember 2023 – August 2026',
    note: 'Zuvor von Juni 2023 – November 2023 via Jobvalley im Unternehmen tätig',
    summary:
      'Verantwortlich für die Konzeption, Neu- und Weiterentwicklung von Unternehmenssoftware auf Basis modernster .NET-Technologien sowie die ganzheitliche Betreuung der IT-Systeme und Kundenumgebungen.',
    bulletPoints: [
      'Entwicklung und kontinuierliche Weiterentwicklung robuster Softwareanwendungen mit C# und .NET (Versionen 8 und 9).',
      'Entwicklung interaktiver Web-Frontends mit Blazor sowie modularer Frontend-Komponenten mit React.',
      'Arbeit mit Datenbanken, Optimierung von Abfragen und Betreuung datenbankgestützter Unternehmenslösungen.',
      'Administration und Verwaltung von Windows Active Directory, OneDrive Team Pages und AWS Cloud-Services.',
      'Direkter technischer Kundensupport, Diagnose und zügige Fehlerbehebung via Fernwartung (TeamViewer).',
      'Durchführung von Windows-Installationen sowie professionelle Server-Administration via SSH auf Linux-Systemen.',
      'Erstellung, funktionale Anpassung und laufende technische Pflege von Web-Projekten mittels WordPress.',
      'Schnelle und eigenständige Einarbeitung in komplexe bestehende Codebasen, Systemarchitekturen und neue Technologien.',
    ],
    skills: ['C#', '.NET 8/9', 'Blazor', 'React', 'SQL', 'Active Directory', 'AWS', 'TeamViewer', 'SSH / Linux', 'WordPress'],
    certificateVerified: true,
  },
  {
    id: 'simplex',
    role: 'Mathematik-Aushilfslehrer',
    company: 'Simplex Education',
    location: 'Essen / NRW',
    period: 'Oktober 2022 – April 2023',
    summary:
      'Vermittlung fundierter mathematischer Grundlagen, methodische Unterrichtsgestaltung und gezielte individuelle Förderung von Lernenden.',
    bulletPoints: [
      'Gezielte Unterstützung von Schülerinnen und Schülern bei der Verbesserung ihrer mathematischen und analytischen Fähigkeiten durch didaktisch aufbereitete Vorlesungen und Übungen.',
      'Flexible Anpassung von Lernstrategien an individuelle Wissensstände und Schaffung einer motivierenden, lösungsorientierten Lernatmosphäre.',
      'Stärkung der eigenen Kommunikations- und Vermittlungskompetenz für komplexe abstrakte Zusammenhänge.',
    ],
    skills: ['Analytisches Denken', 'Didaktik', 'Kommunikation', 'Methodik'],
    certificateVerified: false,
  },
  {
    id: 'studitemps',
    role: 'Studentische Aushilfe / Koordination',
    company: 'Studitemps / Studentenwerk',
    location: 'Essen & Umgebung',
    period: 'Februar 2021 – August 2022',
    summary:
      'Übernahme koordinativer, administrativer und logistischer Verantwortungsbereiche im Rahmen flexibler Einsätze.',
    bulletPoints: [
      'Mitarbeit bei der Personalrekrutierung, strukturierte Einarbeitung neuer Teammitglieder sowie Erstellung und Koordination verlässlicher Dienstpläne.',
      'Finanzabwicklung, sorgfältige Überwachung von Bestellprozessen sowie Erfassung und Analyse von Geschäftsdaten und Berichten.',
      'Zuverlässige Ausführung anspruchsvoller Aufgaben in Datenerfassung, Logistik, Verkauf und qualitätsgesicherter Corona-Testung.',
    ],
    skills: ['Organisation', 'Personalrekrutierung', 'Dienstplanung', 'Datenanalyse', 'Prozessüberwachung'],
    certificateVerified: false,
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'C# & Softwareentwicklung',
    description: 'Schwerpunkt auf modernem C#/.NET 8/9 und reaktiven Blazor/React-Architekturen',
    skills: [
      { name: 'C#', highlight: true },
      { name: '.NET (8 / 9)', highlight: true },
      { name: 'Blazor (Server & WASM)', highlight: true },
      { name: 'React', highlight: true },
      { name: 'TypeScript / JavaScript', highlight: true },
      { name: 'RESTful APIs', highlight: true },
      { name: 'Clean Architecture', highlight: true },
      { name: 'Python', highlight: false },
    ],
  },
  {
    title: 'KI-Agenten & Künstliche Intelligenz',
    description: 'Installation lokaler Agenten, Open-Source-Modelle und Foundation-APIs',
    skills: [
      { name: 'Nous Hermes / Hermes Agent', highlight: true },
      { name: 'Open Code (OpenCodeInterpreter)', highlight: true },
      { name: 'Lokale Inferenz (Ollama, vLLM)', highlight: true },
      { name: 'Google Vertex AI & Gemini API', highlight: true },
      { name: 'Function Calling & Tool Use', highlight: true },
      { name: 'RAG (Retrieval-Augmented Gen.)', highlight: true },
      { name: 'LM Studio & Private LLMs', highlight: false },
      { name: 'AWS Bedrock', highlight: false },
    ],
  },
  {
    title: 'Mac & Windows IT-Administration',
    description: 'Ganzheitlicher Support für Apple- und Windows-Umgebungen & Fernwartung',
    skills: [
      { name: 'Apple Mac (macOS Support)', highlight: true },
      { name: 'Windows 10 / 11 & Server', highlight: true },
      { name: 'Windows Active Directory', highlight: true },
      { name: 'TeamViewer Fernwartung', highlight: true },
      { name: 'Microsoft 365 & OneDrive', highlight: true },
      { name: 'Linux (Debian, Ubuntu, Mint)', highlight: true },
      { name: 'SSH Server-Administration', highlight: true },
      { name: 'Netzwerksicherheit & Backup', highlight: false },
    ],
  },
  {
    title: 'Cloud, DevOps & Infrastruktur',
    description: 'Skalierbare Cloud-Deployments, Containerisierung und CI/CD-Pipelines',
    skills: [
      { name: 'AWS Cloud-Services', highlight: true },
      { name: 'Google Cloud Platform (GCP)', highlight: true },
      { name: 'Docker & Docker Compose', highlight: true },
      { name: 'TeamCity (CI/CD)', highlight: true },
      { name: 'Microservice-Architekturen', highlight: true },
      { name: 'Google CLI', highlight: false },
      { name: 'Git / GitHub Actions', highlight: true },
    ],
  },
  {
    title: 'Datenbanken & CMS',
    description: 'Effizientes Datenmodellieren und bewährte Content-Plattformen',
    skills: [
      { name: 'SQL Server (MS SQL)', highlight: true },
      { name: 'PostgreSQL', highlight: true },
      { name: 'Entity Framework Core', highlight: true },
      { name: 'WordPress Entwicklung & Pflege', highlight: true },
      { name: 'Google Firebase', highlight: false },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'csharp-blazor-platform',
    title: 'C# & Blazor Enterprise Plattform (.NET 8/9)',
    category: 'C# / .NET & Blazor Entwicklung',
    description:
      'Moderne Full-Stack Enterprise-Webanwendung mit Blazor-Frontend, reaktivem Komponenten-Design und hochperformantem C# / .NET 8/9 Backend.',
    highlights: [
      'Entwicklung von Blazor (WebAssembly & Server) Single-Page-Komponenten mit schnellen Ladezeiten',
      'Robuste C#/.NET 8/9 Backend-Architektur nach Clean-Architecture-Prinzipien mit Dependency Injection',
      'Entity Framework Core mit MS SQL Server und PostgreSQL Datenbankschicht sowie automatisierten Tests',
    ],
    technologies: ['C#', '.NET 8/9', 'Blazor WASM', 'SQL Server', 'Entity Framework Core', 'REST API'],
  },
  {
    id: 'ai-agents-pipeline',
    title: 'Lokale KI-Agenten & Inferenz (Hermes & Open Code)',
    category: 'KI-Agenten & Lokale Inferenz',
    description:
      'Installation, Bereitstellung und Orchestrierung autonomer Open-Source KI-Agenten (Nous Hermes, Open Code) mit 100% lokaler Inferenz – ohne Datenabfluss oder Cloud-Zwang.',
    highlights: [
      'Setup und Feinabstimmung von Nous Hermes / Hermes Agent für autonome Aufgaben und Function Calling',
      'Einrichtung von Open Code / OpenCodeInterpreter & Continue.dev als intelligente Coding-Agenten im Editor',
      'Lokale Ausführung über Ollama und vLLM mit nativer Hardwarebeschleunigung auf Mac (Apple Silicon) & PC (NVIDIA)',
    ],
    technologies: ['Hermes Agent', 'Open Code', 'Ollama', 'vLLM', 'Lokale LLMs', 'Function Calling', 'RAG'],
  },
  {
    id: 'ai-web-app',
    title: 'KI-gestützte Cloud-Webanwendung',
    category: 'Full-Stack & Generative AI',
    description:
      'Eigenständig entwickelte Webanwendung zur intelligenten Datenanalyse und automatisierten Textverarbeitung mit nahtloser Integration von Foundation Models.',
    highlights: [
      'Einbindung der Google Vertex AI und Gemini API Schnittstellen für kontextsensitive Aufgaben',
      'Strukturierte Prompt-Verarbeitung und saubere Response-Validierung im Backend',
      'Reaktionsschnelle Benutzeroberfläche mit intuitivem Dashboard',
    ],
    technologies: ['Google Vertex AI', 'Gemini API', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'microservices',
    title: 'Containerisierte Microservices-Architektur',
    category: 'DevOps & Backend',
    description:
      'Architekturkonzeption und Bereitstellung skalierbarer Microservices innerhalb von Docker-Containern für ein modulares Softwaresystem.',
    highlights: [
      'Isolierte Containerisierung von Kern-Diensten für reproduzierbare Umgebungen',
      'Entkoppelte Kommunikation zwischen Diensten mit hoher Ausfallsicherheit',
      'Optimierte Dockerfiles für schnelle Build-Zeiten und minimale Image-Größen',
    ],
    technologies: ['Docker', 'Microservices', 'Linux / Debian', 'C# / .NET', 'REST APIs'],
  },
  {
    id: 'mobile-chat',
    title: 'Cross-Platform Chat Application',
    category: 'Mobile Entwicklung',
    description:
      'Privates Entwicklungsprojekt einer mobilen Echtzeit-Messaging-Applikation für iOS und Android mit modernem Look & Feel.',
    highlights: [
      'Entwicklung mit React Native für native Performance auf mobilen Endgeräten',
      'Echtzeit-Nachrichtenfluss und lokale Status-Speicherung',
      'Klares, ablenkungsfreies User Interface mit responsivem Chat-Layout',
    ],
    technologies: ['React Native', 'JavaScript', 'Mobile UI', 'WebSockets / REST'],
  },
  {
    id: 'web-projects',
    title: 'Websites & Kunden-Webauftritte',
    category: 'Webentwicklung & WordPress',
    description:
      'Umfangreiche Erfahrung in Konzeption, Responsive Webdesign und Programmierung moderner Internetauftritte seit der 7. Schulklasse.',
    highlights: [
      'Maßgeschneiderte Layouts abgestimmt auf das jeweilige Branding des Kunden',
      'Suchmaschinenoptimierung (SEO), Performance-Tuning und DSGVO-Konformität',
      'Pflegeleichte Integration von CMS-Strukturen und einfacher Content-Verwaltung',
    ],
    technologies: ['WordPress', 'HTML5 / CSS3', 'JavaScript', 'PHP', 'SEO & Performance'],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science (B.Sc.) Informatik',
    institution: 'Bergische Universität Wuppertal',
    period: 'April 2021 – voraussichtlich 2027',
    status: 'In den letzten Zügen (Abschluss innerhalb der nächsten 12 Monate angestrebt)',
    details: [
      'Schwerpunktfach: Betriebswirtschaftslehre (BWL) – Verknüpfung von technischer Systemkompetenz mit kaufmännischem Kosten- und Nutzenverständnis.',
      'Kernbereiche: Algorithmen & Datenstrukturen, Softwaretechnik, Datenbanken, Rechnernetze, IT-Sicherheit.',
    ],
  },
  {
    degree: 'C1 TELC Hochschule',
    institution: 'Westfälische Hochschule Gelsenkirchen',
    period: 'Oktober 2020 – März 2021',
    status: 'Erfolgreich mit Zertifikat abgeschlossen',
    details: [
      'Akademisches Sprachzertifikat auf Hochschulniveau C1 für die deutsche Sprache in Wort und Schrift.',
      'Verhandlungssichere Sprachpraxis im universitären und professionellen Unternehmenskontext.',
    ],
  },
];

export const languagesData: LanguageItem[] = [
  {
    language: 'Deutsch',
    level: 'C1 Niveau (TELC Hochschule)',
    description: 'Verhandlungssicher in Wort und Schrift für Fachgespräche, Dokumentation und Kundenkontakt.',
  },
  {
    language: 'Englisch',
    level: 'Sehr gut (Fließend)',
    description: 'Fließend in Wort und Schrift, routiniert im Lesen englischer Fachliteratur und technischer Dokumentation.',
  },
  {
    language: 'Arabisch',
    level: 'Muttersprache',
    description: 'Muttersprachliches Niveau in Wort und Schrift.',
  },
];

export const interestsData = ['Schwimmen', 'Lesen (Fachliteratur & Sachbücher)', 'Kunst & kreatives Gestalten'];
