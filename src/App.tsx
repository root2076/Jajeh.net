import React, { useState } from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LegalModal } from '@/components/LegalModal';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#060d1a] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer onOpenLegal={(type) => setLegalModalType(type)} />
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      </div>
    </LanguageProvider>
  );
}
