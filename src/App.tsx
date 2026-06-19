import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductCatalog from './components/ProductCatalog';
import ProductCalculator from './components/ProductCalculator';
import IndustriesSection from './components/IndustriesSection';
import CasePortfolio from './components/CasePortfolio';
import TechUSPSection from './components/TechUSPSection';
import CertificationSection from './components/CertificationSection';
import FaqSection from './components/FaqSection';
import LeadCaptureBanner from './components/LeadCaptureBanner';
import Footer from './components/Footer';
import ConsultationDialog from './components/ConsultationDialog';
import { LedDisplayProduct } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<LedDisplayProduct | null>(null);

  // Unified scroll routing for modular navigation anchors
  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75; // Subtract navbar thickness
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenConsultation = () => {
    setSelectedProduct(null);
    setIsConsultationOpen(true);
  };

  // Prefilling configuration setting from product selection
  const handleSelectProductForQuote = (product: LedDisplayProduct) => {
    setSelectedProduct(product);
    setIsConsultationOpen(true);
    
    // Smooth scroll down to the interactive calculator to let them inspect first, or directly trigger dialog
    const calcElement = document.getElementById('calculator-section');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col justify-between selection:bg-brand-cyan/35 selection:text-white relative overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Flagship brand ambient light flare line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-40 pointer-events-none"></div>

      {/* Decorative Vertical Text */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-4 opacity-30 pointer-events-none z-40 select-none">
        <span className="[writing-mode:vertical-rl] rotate-180 text-[8px] font-mono tracking-[1.1em] uppercase text-slate-400">PREMIUM LED ENGINEERING</span>
      </div>

      {/* Premium Navbar */}
      <Navbar
        onNavigateToSection={handleNavigateToSection}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Blocks */}
      <main id="main-content-flow">
        {/* Rotating 3-Background Hero Section (left side dark aligned, right side image, seamless floor reflections) */}
        <HeroSlider
          onNavigateToSection={handleNavigateToSection}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Small "Industries We Serve" Section with SGL Core Value Deck */}
        <IndustriesSection />

        {/* Modular Product Series Catalog */}
        <ProductCatalog
          onSelectProduct={handleSelectProductForQuote}
        />

        {/* Dynamic Interactive Pixel Pitch & Screen Dimensions Calculator */}
        <ProductCalculator />

        {/* Heavy Commercial Case Studies (Kuala Lumpur, Avenue K, Standard Chartered RM100k+ portfolio) */}
        <CasePortfolio />

        {/* Technical USP Specs Block (Common Cathode power grids, COB encapsulation structure, 7680Hz drivers) */}
        <TechUSPSection />

        {/* Industry Safety & Quality Certifications */}
        <CertificationSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Marketing Action banner for AV engineers & developers */}
        <LeadCaptureBanner
          onOpenConsultation={handleOpenConsultation}
        />
      </main>

      {/* Premium Corporate Footer */}
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* Elegant, Swiss-modern floating WhatsApp Button */}
      <a
        href="https://wa.me/60123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-[#05070a] border border-emerald-500/30 hover:border-emerald-400 text-white font-mono text-[9px] tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] group rounded-none"
        aria-label="Direct SGL WhatsApp Engineering Contact"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-bold text-emerald-400 group-hover:text-emerald-350 transition-colors">LIVE ENG SUPPORT</span>
      </a>

      {/* Interactive RFP Project bid planner dialog */}
      <ConsultationDialog
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedProduct={selectedProduct}
      />
    </div>
  );
}
