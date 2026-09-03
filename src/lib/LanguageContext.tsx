import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de' | 'ar';

export interface TranslationData {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    hire: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    roles: string[];
    cta1: string;
    cta2: string;
    openTo: string;
    yearsExp: string;
    projectsDone: string;
  };
  services: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  portfolio: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    filters: string[];
    projects: Array<{
      title: string;
      description: string;
      category: string;
      tags: string[];
      image: string;
    }>;
  };
  about: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    bio1: string;
    bio2: string;
    bio3: string;
    stats: Array<[string, string]>;
    skills: Array<{ name: string; level: number }>;
    techLabel: string;
  };
  contact: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    info: Array<{ label: string; value: string }>;
    availTitle: string;
    availDesc: string;
    form: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      subject: string;
      subjectPh: string;
      message: string;
      messagePh: string;
      send: string;
      sending: string;
      success: string;
    };
  };
  footer: {
    copy: string;
  };
}

const translations: Record<Language, TranslationData> = {
  de: {
    nav: {
      home: 'Start',
      services: 'Leistungen',
      portfolio: 'Projekte',
      about: 'Über mich',
      contact: 'Kontakt',
      hire: 'Jetzt anfragen',
    },
    hero: {
      badge: 'C# & .NET • KI-Agenten • Mac & Windows Support',
      title1: 'Modernes',
      title2: 'C# & Software Engineering',
      title3: 'mit autonomen KI-Agenten.',
      subtitle:
        'Spezialisiert auf hochperformante C# / .NET 8/9 & Blazor Webanwendungen, Installation lokaler KI-Agenten (Nous Hermes, Open Code), Cloud-Infrastruktur sowie verlässlichen Mac- und Windows-Support in Essen (Ruhrgebiet) & Remote.',
      roles: ['C# & Blazor', 'KI-Agenten (Hermes & Open Code)', 'Mac & Windows Support', '.NET 8/9', 'Cloud & DevOps', 'Essen & Remote'],
      cta1: 'Projekte ansehen',
      cta2: 'Kontakt aufnehmen',
      openTo: 'Verfügbar für Softwareprojekte, KI-Setup & IT-Support',
      yearsExp: 'Jahre Praxiserfahrung',
      projectsDone: 'Erfolgreiche Lösungen',
    },
    services: {
      badge: 'Expertise & Schwerpunkte',
      title1: 'Maßgeschneiderte',
      title2: 'IT- & Softwarelösungen',
      subtitle: 'Von skalierbaren C#/.NET Architekturen über private KI-Inferenz bis hin zu plattformübergreifendem Mac- und Windows-Support.',
      items: [
        {
          title: 'C# & Blazor Softwareentwicklung',
          description:
            'Entwicklung moderner Full-Stack Web- und Enterprise-Anwendungen mit C# und .NET 8/9. Reaktive Blazor-Frontends (Server & WASM), Clean Architecture und hochperformante RESTful APIs.',
          tags: ['C#', '.NET 8/9', 'Blazor WASM', 'Clean Architecture', 'REST APIs'],
        },
        {
          title: 'KI-Agenten Installation (Hermes & Open Code)',
          description:
            'Installation, Prompt-Tuning und Bereitstellung autonomer Agenten wie Nous Hermes und Open Code. Lokale Inferenz ohne Datenabfluss via Ollama / vLLM direkt auf Ihrer Hardware.',
          tags: ['Nous Hermes', 'Open Code', 'Ollama / vLLM', 'Lokale Inferenz', 'RAG'],
        },
        {
          title: 'Mac & Windows IT-Support',
          description:
            'Ganzheitliche Betreuung heterogener Umgebungen: Apple macOS (Apple Silicon M-Serie), Windows 10/11 Workstations, Active Directory, Office 365 sowie schnelle Fernwartung via TeamViewer.',
          tags: ['macOS Support', 'Windows 10/11', 'Active Directory', 'TeamViewer', 'Vor-Ort-Hilfe'],
        },
        {
          title: 'Cloud & DevOps Infrastruktur',
          description:
            'Automatisierte Deployments und Cloud-Systeme auf AWS und Google Cloud. Containerisierung mit Docker & Docker Compose sowie CI/CD-Pipelines mit TeamCity und GitHub Actions.',
          tags: ['AWS', 'Google Cloud', 'Docker', 'TeamCity', 'CI/CD'],
        },
        {
          title: 'Datenbanken & Backend-Systeme',
          description:
            'Effiziente Datenmodellierung und Transaktionssicherheit mit Microsoft SQL Server und PostgreSQL. Entity Framework Core (EF Core), Migrationen und performante Abfragen.',
          tags: ['SQL Server', 'PostgreSQL', 'EF Core', 'Data Modeling', 'Microservices'],
        },
        {
          title: 'Netzwerk & IT-Infrastruktur',
          description:
            'Strukturierte Netzwerkinstallation, Gigabit-LAN, professionelle WLAN-Mesh-Abdeckung, Firewall-Einrichtung und Linux-Server-Administration via SSH (Debian/Ubuntu).',
          tags: ['WLAN Mesh', 'Gigabit LAN', 'Linux / SSH', 'Firewall', 'Ruhrgebiet'],
        },
      ],
    },
    portfolio: {
      badge: 'Referenzen & Arbeitsbeispiele',
      title1: 'Ausgewählte',
      title2: 'Projekte & Systeme',
      subtitle: 'Ein Einblick in praxiserprobte C# Architekturen, KI-Agenten-Pipelines und moderne IT-Umsetzungen.',
      filters: ['All', 'C# & Blazor', 'KI-Agenten', 'Mac & IT', 'Cloud'],
      projects: [
        {
          title: 'C# & Blazor Enterprise Plattform (.NET 8/9)',
          description:
            'Reaktive Full-Stack Anwendung mit Blazor WebAssembly Frontend, modularer C# Backend-Architektur, Identity Management und Microsoft SQL Server Anbindung.',
          category: 'C# & Blazor',
          tags: ['C#', '.NET 8/9', 'Blazor WASM', 'SQL Server', 'EF Core'],
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
          title: 'Lokale KI-Agenten Pipeline (Hermes & Open Code)',
          description:
            'Orchestrierung autonomer KI-Agenten für Code-Generierung und Task-Automatisierung mit Nous Hermes und Open Code. 100% lokale Inferenz ohne Cloud-Abhängigkeit.',
          category: 'KI-Agenten',
          tags: ['Hermes Agent', 'Open Code', 'Ollama', 'vLLM', 'Function Calling'],
          image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&q=80',
        },
        {
          title: 'Mac & Windows Hybrid-IT Rollout',
          description:
            'Konzeption und Betreuung einer heterogenen IT-Landschaft mit Apple macOS und Windows 11 PCs, Active Directory Domänenverwaltung und gesicherter Fernwartung.',
          category: 'Mac & IT',
          tags: ['macOS', 'Windows 11', 'Active Directory', 'TeamViewer', 'Microsoft 365'],
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
        },
        {
          title: 'Cloud-native AI & Microservice Architektur',
          description:
            'Skalierbare Cloud-Deployments auf AWS & Google Cloud Platform mit Docker-Containern, Gemini API Integration und TeamCity CI/CD Build-Pipelines.',
          category: 'Cloud',
          tags: ['AWS', 'Google Cloud', 'Docker', 'Gemini API', 'CI/CD'],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
        {
          title: 'Enterprise REST API & Datenbankschicht',
          description:
            'Hochperformante RESTful API mit C#/.NET 9, Swagger-Dokumentation, PostgreSQL und asynchronem Repository-Pattern für ausfallsichere Unternehmensprozesse.',
          category: 'C# & Blazor',
          tags: ['C#', '.NET 9', 'REST API', 'PostgreSQL', 'Clean Architecture'],
          image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
        },
        {
          title: 'Intelligentes RAG Knowledge-System',
          description:
            'Retrieval-Augmented Generation System mit lokalen Vektoreinbettungen für semantische Durchsuchung von Dokumenten und Codebasen unter Datenschutzvorgaben.',
          category: 'KI-Agenten',
          tags: ['RAG', 'Vektor-DB', 'Lokale KI', 'Python', 'Hermes'],
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
        },
      ],
    },
    about: {
      badge: 'Profil & Werdegang',
      title1: 'Informatik-Expertise trifft auf',
      title2: 'unternehmerisches Denken',
      title3: 'und lösungsorientierte Praxis.',
      bio1:
        'Mein Name ist Abduljabar Jajeh. Als Informatiker mit Schwerpunkt Betriebswirtschaftslehre (BWL) verbinde ich technisches Tiefenwissen mit wirtschaftlichem Augenmaß für echte Mehrwerte.',
      bio2:
        'Mein Entwicklungsfokus liegt auf modernem C#/.NET (Versionen 8 & 9), reaktiven Architekturen mit Blazor und React sowie der zielgerichteten Einrichtung autonomer KI-Agenten (Nous Hermes, Open Code) für maximale Effizienz.',
      bio3:
        'Parallel betreue ich seit mehreren Jahren verlässlich IT-Infrastrukturen für Apple Mac und Windows – sei es vor Ort im Ruhrgebiet oder via schneller Remote-Fernwartung.',
      stats: [
        ['3+ Jahre', 'Berufserfahrung'],
        ['.NET 8/9', 'C# & Blazor'],
        ['100%', 'Lokale KI-Agenten'],
        ['B.Sc. i.A.', 'Informatik & BWL'],
      ],
      skills: [
        { name: 'C# / .NET 8/9 & Blazor', level: 95 },
        { name: 'KI-Agenten (Nous Hermes, Open Code, Ollama)', level: 92 },
        { name: 'Mac (macOS) & Windows Support', level: 96 },
        { name: 'Cloud & Docker (AWS / GCP)', level: 88 },
        { name: 'SQL Server, PostgreSQL & EF Core', level: 90 },
        { name: 'React & TypeScript', level: 92 },
      ],
      techLabel: 'Technologie-Stack & Werkzeuge',
    },
    contact: {
      badge: 'Projekt anfragen oder IT-Support',
      title1: 'Lassen Sie uns',
      title2: 'gemeinsam starten.',
      subtitle:
        'Haben Sie ein konkretes C#/.NET Projekt, möchten Sie KI-Agenten auf Ihrer Hardware installieren oder benötigen Sie Mac/Windows Support? Schreiben Sie mir direkt.',
      info: [
        { label: 'E-Mail', value: 'abduljabar@jajeh.net' },
        { label: 'Telefon / WhatsApp', value: '+49 1520 8747323' },
        { label: 'Standort', value: '45279 Essen (Ruhrgebiet) & Remote' },
      ],
      availTitle: 'Aktuell verfügbar',
      availDesc: 'Offen für Festanstellungen, IT-Projekte, KI-Setups & Support-Aufträge.',
      form: {
        name: 'Ihr Name / Unternehmen',
        namePh: 'z.B. Max Mustermann',
        email: 'Ihre E-Mail-Adresse',
        emailPh: 'name@beispiel.de',
        subject: 'Betreff / Projektart',
        subjectPh: 'z.B. C# Blazor Projekt, KI-Agenten Setup, Mac Support',
        message: 'Ihre Nachricht',
        messagePh: 'Beschreiben Sie kurz Ihr Vorhaben, Ihre Anforderungen oder Ihren Support-Bedarf...',
        send: 'Nachricht absenden',
        sending: 'Nachricht wird gesendet...',
        success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt. Ich melde mich zeitnah bei Ihnen.',
      },
    },
    footer: {
      copy: 'Abduljabar Jajeh • jajeh.net • Alle Rechte vorbehalten.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      hire: 'Hire Me',
    },
    hero: {
      badge: 'C# & .NET • AI AGENTS • MAC & WINDOWS SUPPORT',
      title1: 'High-Impact',
      title2: 'C# & Software Engineering',
      title3: 'with Autonomous AI Agents.',
      subtitle:
        'Specialized in C# / .NET 8/9 & Blazor web applications, local AI agent deployment (Nous Hermes, Open Code), cloud infrastructure, and dependable Mac & Windows IT support based in Essen (Ruhr Region) & Remote.',
      roles: ['C# & Blazor', 'AI Agents (Hermes & Open Code)', 'Mac & Windows Support', '.NET 8/9', 'Cloud & DevOps', 'Essen & Remote'],
      cta1: 'View Portfolio',
      cta2: 'Get in Touch',
      openTo: 'Available for Software Projects, AI Setups & IT Support',
      yearsExp: 'Years Experience',
      projectsDone: 'Completed Projects',
    },
    services: {
      badge: 'Core Competencies',
      title1: 'Customized',
      title2: 'IT & Software Solutions',
      subtitle: 'From resilient C#/.NET enterprise backends to private AI inference pipelines and seamless Mac & Windows administration.',
      items: [
        {
          title: 'C# & Blazor Software Development',
          description:
            'Building modern enterprise and web applications using C# and .NET 8/9. Reactive Blazor frontends (Server & WASM), Clean Architecture, and high-throughput REST APIs.',
          tags: ['C#', '.NET 8/9', 'Blazor WASM', 'Clean Architecture', 'REST APIs'],
        },
        {
          title: 'AI Agent Deployment (Hermes & Open Code)',
          description:
            'Installation, prompt-tuning, and deployment of autonomous agents like Nous Hermes and Open Code. 100% private local inference via Ollama / vLLM without data leakage.',
          tags: ['Nous Hermes', 'Open Code', 'Ollama / vLLM', 'Local Inference', 'RAG'],
        },
        {
          title: 'Mac & Windows IT Support',
          description:
            'Holistic support for heterogeneous environments: Apple macOS (Apple Silicon M-series), Windows 10/11 Workstations, Active Directory, Microsoft 365, and fast TeamViewer remote help.',
          tags: ['macOS Support', 'Windows 10/11', 'Active Directory', 'TeamViewer', 'On-Site'],
        },
        {
          title: 'Cloud & DevOps Infrastructure',
          description:
            'Automated deployments and resilient cloud services on AWS and Google Cloud Platform. Docker containerization and continuous integration with TeamCity and GitHub Actions.',
          tags: ['AWS', 'Google Cloud', 'Docker', 'TeamCity', 'CI/CD'],
        },
        {
          title: 'Database & Backend Systems',
          description:
            'Robust data modeling and transactional reliability with Microsoft SQL Server and PostgreSQL. Entity Framework Core (EF Core), database migrations, and optimized queries.',
          tags: ['SQL Server', 'PostgreSQL', 'EF Core', 'Data Modeling', 'Microservices'],
        },
        {
          title: 'Network & IT Infrastructure',
          description:
            'Structured cabling, Gigabit LAN, whole-home/office Wi-Fi mesh systems, firewall setup, and Linux server administration via SSH (Debian/Ubuntu).',
          tags: ['Wi-Fi Mesh', 'Gigabit LAN', 'Linux / SSH', 'Firewall', 'Remote'],
        },
      ],
    },
    portfolio: {
      badge: 'Case Studies & References',
      title1: 'Featured',
      title2: 'Projects & Implementations',
      subtitle: 'A showcase of production-ready C# systems, local AI agent setups, and scalable IT infrastructure.',
      filters: ['All', 'C# & Blazor', 'KI-Agenten', 'Mac & IT', 'Cloud'],
      projects: [
        {
          title: 'C# & Blazor Enterprise Platform (.NET 8/9)',
          description:
            'Full-stack enterprise application featuring a Blazor WebAssembly frontend, modular C# backend architecture, identity management, and Microsoft SQL Server.',
          category: 'C# & Blazor',
          tags: ['C#', '.NET 8/9', 'Blazor WASM', 'SQL Server', 'EF Core'],
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
          title: 'Local AI Agent Pipeline (Hermes & Open Code)',
          description:
            'Orchestration of autonomous AI coding and task agents using Nous Hermes and Open Code. Complete local inference with zero telemetry or cloud dependency.',
          category: 'KI-Agenten',
          tags: ['Hermes Agent', 'Open Code', 'Ollama', 'vLLM', 'Function Calling'],
          image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&q=80',
        },
        {
          title: 'Mac & Windows Hybrid IT Rollout',
          description:
            'Design and ongoing support for a mixed IT environment with Apple macOS and Windows 11 workstations, Active Directory domain management, and remote support.',
          category: 'Mac & IT',
          tags: ['macOS', 'Windows 11', 'Active Directory', 'TeamViewer', 'Microsoft 365'],
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
        },
        {
          title: 'Cloud-Native AI & Microservice Architecture',
          description:
            'Scalable cloud deployments on AWS and GCP with Docker containerization, Google Gemini API integration, and TeamCity CI/CD automated build pipelines.',
          category: 'Cloud',
          tags: ['AWS', 'Google Cloud', 'Docker', 'Gemini API', 'CI/CD'],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
        {
          title: 'Enterprise REST API & Database Layer',
          description:
            'High-throughput RESTful API built on C#/.NET 9 with Swagger OpenAPI documentation, PostgreSQL, and asynchronous repository patterns for mission-critical workflows.',
          category: 'C# & Blazor',
          tags: ['C#', '.NET 9', 'REST API', 'PostgreSQL', 'Clean Architecture'],
          image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
        },
        {
          title: 'Intelligent RAG Knowledge System',
          description:
            'Retrieval-Augmented Generation pipeline using local vector embeddings for semantic document search and code auditing under strict privacy guidelines.',
          category: 'KI-Agenten',
          tags: ['RAG', 'Vector DB', 'Local AI', 'Python', 'Hermes'],
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
        },
      ],
    },
    about: {
      badge: 'Profile & Background',
      title1: 'Computer Science Depth Meets',
      title2: 'Business Acumen',
      title3: 'and Practical Engineering.',
      bio1:
        'My name is Abduljabar Jajeh. As a Computer Scientist with a minor in Business Administration (BWL), I combine deep technical expertise with strategic economic value creation.',
      bio2:
        'My primary engineering focus is modern C#/.NET (versions 8 & 9), reactive user interfaces with Blazor and React, and the installation of autonomous AI agents (Nous Hermes, Open Code) for cutting-edge productivity.',
      bio3:
        'Simultaneously, I have been delivering hands-on IT support and systems administration for Apple Mac and Windows ecosystems for over three years, both on-site in Germany and remotely worldwide.',
      stats: [
        ['3+ Years', 'Work Experience'],
        ['.NET 8/9', 'C# & Blazor'],
        ['100%', 'Local AI Agents'],
        ['B.Sc. in Prog.', 'CS & Business'],
      ],
      skills: [
        { name: 'C# / .NET 8/9 & Blazor', level: 95 },
        { name: 'AI Agents (Nous Hermes, Open Code, Ollama)', level: 92 },
        { name: 'Mac (macOS) & Windows Support', level: 96 },
        { name: 'Cloud & Docker (AWS / GCP)', level: 88 },
        { name: 'SQL Server, PostgreSQL & EF Core', level: 90 },
        { name: 'React & TypeScript', level: 92 },
      ],
      techLabel: 'Technology Stack & Tooling',
    },
    contact: {
      badge: 'Request a Project or IT Support',
      title1: "Let's build",
      title2: 'something exceptional.',
      subtitle:
        'Whether you need a new C#/.NET application, local AI agent installation on your hardware, or reliable Mac/Windows IT support, feel free to reach out directly.',
      info: [
        { label: 'Email', value: 'abduljabar@jajeh.net' },
        { label: 'Phone / WhatsApp', value: '+49 1520 8747323' },
        { label: 'Location', value: '45279 Essen, Germany & Remote' },
      ],
      availTitle: 'Currently Available',
      availDesc: 'Open for full-time roles, software projects, AI installations & IT support contracts.',
      form: {
        name: 'Your Name / Company',
        namePh: 'e.g. John Doe',
        email: 'Your Email Address',
        emailPh: 'john@example.com',
        subject: 'Subject / Project Type',
        subjectPh: 'e.g. C# Blazor App, AI Agent Setup, Mac Support',
        message: 'Your Message',
        messagePh: 'Tell me about your project, timeline, or IT requirements...',
        send: 'Send Message',
        sending: 'Sending message...',
        success: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
      },
    },
    footer: {
      copy: 'Abduljabar Jajeh • jajeh.net • All rights reserved.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      portfolio: 'الأعمال',
      about: 'من أنا',
      contact: 'اتصل بي',
      hire: 'ابدأ مشروعك',
    },
    hero: {
      badge: 'تطوير C# و .NET • وكلاء الذكاء الاصطناعي • دعم ماك وويندوز',
      title1: 'تطوير برمجي متقدم',
      title2: 'بلغة C# و Blazor',
      title3: 'مع وكلاء الذكاء الاصطناعي المستقلين.',
      subtitle:
        'متخصص في تطوير تطبيقات الويب والأنظمة الحديثة باستخدام C# و .NET 8/9 و Blazor، وتثبيت وتشغيل وكلاء الذكاء الاصطناعي محلياً (Nous Hermes و Open Code)، بالإضافة إلى تقديم الدعم الفني الموثوق لأنظمة Mac و Windows في منطقة إيسن، ألمانيا وعن بُعد.',
      roles: ['C# و Blazor', 'وكلاء الذكاء الاصطناعي (Hermes & Open Code)', 'دعم Mac و Windows', '.NET 8/9', 'سحابة و DevOps', 'ألمانيا وعن بُعد'],
      cta1: 'استعراض المشاريع',
      cta2: 'تواصل معي',
      openTo: 'متاح للمشاريع البرمجية وتثبيت الذكاء الاصطناعي والدعم الفني',
      yearsExp: 'سنوات خبرة عملية',
      projectsDone: 'حلول ومشاريع ناجحة',
    },
    services: {
      badge: 'الخبرات والخدمات',
      title1: 'حلول تقنية برمجية',
      title2: 'مخصصة وعالية الأداء',
      subtitle: 'من هندسة تطبيقات C# و .NET المتقدمة إلى تشغيل الذكاء الاصطناعي المحلي وحماية البيانات وإدارة أنظمة Mac و Windows.',
      items: [
        {
          title: 'تطوير البرمجيات بـ C# و Blazor',
          description:
            'تصميم وبرمجة تطبيقات الويب والمؤسسات الحديثة باستخدام C# و .NET 8/9، وواجهات Blazor التفاعلية، ومعمارية برمجية نظيفة Clean Architecture وواجهات برمجية REST APIs سريعة.',
          tags: ['C#', '.NET 8/9', 'Blazor WASM', 'Clean Architecture', 'REST APIs'],
        },
        {
          title: 'تثبيت وكلاء الذكاء الاصطناعي (Hermes & Open Code)',
          description:
            'تثبيت وإعداد وكلاء الذكاء الاصطناعي المستقلين مثل Nous Hermes و Open Code. استدلال محلي 100% عبر Ollama و vLLM على أجهزتك مباشرة لحفظ الخصوصية.',
          tags: ['Nous Hermes', 'Open Code', 'Ollama / vLLM', 'ذكاء محلي', 'RAG'],
        },
        {
          title: 'الدعم الفني لأنظمة Mac و Windows',
          description:
            'دعم وصيانة احترافية لأنظمة Apple Mac (معالجات Apple Silicon) وأجهزة Windows 10/11، وإدارة Active Directory، وحلول Microsoft 365 والدعم عن بُعد عبر TeamViewer.',
          tags: ['دعم macOS', 'Windows 10/11', 'Active Directory', 'TeamViewer', 'دعم ميداني'],
        },
        {
          title: 'البنية السحابية و DevOps',
          description:
            'نشر وإدارة الأنظمة السحابية على AWS و Google Cloud Platform. استخدام حاويات Docker وخطوط البناء الآلي CI/CD مع TeamCity و GitHub Actions.',
          tags: ['AWS', 'Google Cloud', 'Docker', 'TeamCity', 'CI/CD'],
        },
        {
          title: 'قواعد البيانات والأنظمة الخلفية',
          description:
            'تصميم وإدارة قواعد البيانات المترابطة عالية الأداء باستخدام Microsoft SQL Server و PostgreSQL، مع استخدام Entity Framework Core للاستعلامات السريعة.',
          tags: ['SQL Server', 'PostgreSQL', 'EF Core', 'Data Modeling', 'Microservices'],
        },
        {
          title: 'الشبكات والبنية التحتية',
          description:
            'تمديد وتركيب شبكات Gigabit LAN وشبكات Wi-Fi Mesh وتكوين جدران الحماية وإدارة خوادم لينكس عبر SSH (Debian/Ubuntu).',
          tags: ['Wi-Fi Mesh', 'Gigabit LAN', 'Linux / SSH', 'Firewall', 'عن بُعد'],
        },
      ],
    },
    portfolio: {
      badge: 'معرض الأعمال والنماذج',
      title1: 'أبرز المشاريع',
      title2: 'والحلول المنفذة',
      subtitle: 'نظرة على مشاريع C# المتقدمة، وخطوط عمل وكلاء الذكاء الاصطناعي، والحلول التقنية المتكاملة.',
      filters: ['الكل', 'C# & Blazor', 'وكلاء الذكاء', 'Mac & Windows', 'سحابي'],
      projects: [
        {
          title: 'منصة مؤسسية باستخدام C# و Blazor (.NET 8/9)',
          description:
            'تطبيق ويب متكامل بواجهة Blazor WebAssembly، ومعمارية خلفية معيارية بـ C# مع إدارة صلاحيات وربط مع Microsoft SQL Server.',
          category: 'C# & Blazor',
          tags: ['C#', '.NET 8/9', 'Blazor WASM', 'SQL Server', 'EF Core'],
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
          title: 'خط تشغيل وكلاء الذكاء الاصطناعي (Hermes & Open Code)',
          description:
            'تنسيق وتشغيل وكلاء الذكاء الاصطناعي لكتابة الأكواد والمهام الذاتية باستخدام Nous Hermes و Open Code محلياً بدون مشاركة البيانات.',
          category: 'وكلاء الذكاء',
          tags: ['Hermes Agent', 'Open Code', 'Ollama', 'vLLM', 'Function Calling'],
          image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&q=80',
        },
        {
          title: 'نشر وإدارة بيئة هجينة Mac و Windows',
          description:
            'تهيئة وإدارة بيئة عمل تجمع بين أجهزة Mac بنظام macOS وحواسيب Windows 11 مع خادم Active Directory ودعم فني سريع عن بُعد.',
          category: 'Mac & Windows',
          tags: ['macOS', 'Windows 11', 'Active Directory', 'TeamViewer', 'Microsoft 365'],
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
        },
        {
          title: 'بنية سحابية مع الذكاء الاصطناعي و Microservices',
          description:
            'نشر حاويات Docker على AWS و GCP مع دمج Google Gemini API وخطوط أتمتة البناء والنشر عبر TeamCity CI/CD.',
          category: 'سحابي',
          tags: ['AWS', 'Google Cloud', 'Docker', 'Gemini API', 'CI/CD'],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
        {
          title: 'واجهة برمجية REST API عالية الإنتاجية',
          description:
            'بناء واجهة برمجية فائقة السرعة بـ C#/.NET 9 مع توثيق Swagger وقاعدة بيانات PostgreSQL لدعم العمليات الحساسة.',
          category: 'C# & Blazor',
          tags: ['C#', '.NET 9', 'REST API', 'PostgreSQL', 'Clean Architecture'],
          image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
        },
        {
          title: 'نظام معرفي ذكي بتقنية RAG',
          description:
            'نظام بحث واسترجاع للمستندات والأكواد البرمجية باستخدام التضمين المحلي للذكاء الاصطناعي تحت أعلى معايير الخصوصية.',
          category: 'وكلاء الذكاء',
          tags: ['RAG', 'Vector DB', 'ذكاء محلي', 'Python', 'Hermes'],
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
        },
      ],
    },
    about: {
      badge: 'الملف الشخصي والخبرة',
      title1: 'عمق علم الحاسوب يلتقي مع',
      title2: 'الفكر الإداري والاقتصادي',
      title3: 'والحلول العملية المباشرة.',
      bio1:
        'اسمي عبد الجبار الجاجة. أجمع بين دراسة علوم الحاسوب والتخصص في إدارة الأعمال (BWL)، لتقديم حلول تقنية ذات قيمة اقتصادية حقيقية للشركات.',
      bio2:
        'يركز عملي البرمجي على لغة C# ومنصة .NET 8/9 وتطبيقات Blazor و React، إلى جانب التثبيت المتقدم لوكلاء الذكاء الاصطناعي المستقلين (Nous Hermes و Open Code).',
      bio3:
        'كما أمتلك خبرة عملية تمتد لأكثر من 3 سنوات في تقديم الدعم الفني المتخصص لأنظمة Apple Mac و Windows، سواء في موقع العمل بألمانيا أو عن بُعد.',
      stats: [
        ['+3 سنوات', 'خبرة عملية'],
        ['.NET 8/9', 'C# و Blazor'],
        ['100%', 'وكلاء ذكاء محليين'],
        ['بكالوريوس (قيد الإنجاز)', 'علوم حاسوب وإدارة'],
      ],
      skills: [
        { name: 'C# / .NET 8/9 و Blazor', level: 95 },
        { name: 'وكلاء الذكاء (Nous Hermes, Open Code, Ollama)', level: 92 },
        { name: 'دعم Mac (macOS) و Windows', level: 96 },
        { name: 'السحابة و Docker (AWS / GCP)', level: 88 },
        { name: 'SQL Server و PostgreSQL و EF Core', level: 90 },
        { name: 'React و TypeScript', level: 92 },
      ],
      techLabel: 'التقنيات والأدوات المستخدمة',
    },
    contact: {
      badge: 'طلب مشروع أو دعم فني',
      title1: 'لنبدأ العمل',
      title2: 'معاً اليوم.',
      subtitle:
        'سواء كان لديك مشروع C#/.NET، أو ترغب في تثبيت وكلاء الذكاء الاصطناعي على أجهزتك، أو تحتاج إلى دعم فني لأجهزة Mac و Windows، يمكنك مراسلتي مباشرة.',
      info: [
        { label: 'البريد الإلكتروني', value: 'abduljabar@jajeh.net' },
        { label: 'الهاتف / واتساب', value: '+49 1520 8747323' },
        { label: 'الموقع', value: 'إيسن (منطقة الرور)، ألمانيا وعن بُعد' },
      ],
      availTitle: 'متاح حالياً',
      availDesc: 'جاهز لعقود العمل والمشاريع البرمجية وتركيب الذكاء الاصطناعي والدعم الفني.',
      form: {
        name: 'الاسم / اسم الشركة',
        namePh: 'مثال: محمد أحمد',
        email: 'البريد الإلكتروني',
        emailPh: 'name@example.com',
        subject: 'الموضوع / نوع الخدمة',
        subjectPh: 'مثال: مشروع C# Blazor، تثبيت وكيل ذكاء، دعم Mac',
        message: 'الرسالة',
        messagePh: 'اكتب تفاصيل مشروعك أو الدعم الفني المطلوب...',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'شكراً لتواصلك! تم إرسال رسالتك بنجاح وسأقوم بالرد عليك في أقرب وقت.',
      },
    },
    footer: {
      copy: 'عبد الجبار جاجة • jajeh.net • جميع الحقوق محفوظة.',
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationData;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('jajeh_lang') as Language;
    return saved === 'en' || saved === 'de' || saved === 'ar' ? saved : 'de';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('jajeh_lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang],
    isRTL: lang === 'ar',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
};
