export type AudienceMode = 'all' | 'clients' | 'recruiters';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  targetAudience: 'clients' | 'both';
  highlight?: boolean;
}

export interface PrivateClientService {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  icon: string;
  badge?: string;
}

export interface PriceItem {
  id: string;
  service: string;
  price: string;
  billingUnit: string;
  description: string;
  popular?: boolean;
  features?: string[];
}

export interface NetworkInstallationService {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  note?: string;
  summary: string;
  bulletPoints: string[];
  skills: string[];
  certificateVerified?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  details: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
  description: string;
}
