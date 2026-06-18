import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductCatalog from './components/ProductCatalog';
import ProductCalculator from './components/ProductCalculator';
import CasePortfolio from './components/CasePortfolio';
import TechUSPSection from './components/TechUSPSection';
import CertificationSection from './components/CertificationSection';
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

        {/* Marketing Action banner for AV engineers & developers */}
        <LeadCaptureBanner
          onOpenConsultation={handleOpenConsultation}
        />
      </main>

      {/* Premium Corporate Footer */}
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* Interactive RFP Project bid planner dialog */}
      <ConsultationDialog
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedProduct={selectedProduct}
      />
    </div>
  );
}
