import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, PhoneCall, Layers, Monitor, Calculator, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo-2.png';

interface NavbarProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ onNavigateToSection, onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll leakage when mobile nav drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'LED Solutions', id: 'solutions-section', icon: Layers },
    { label: 'Pixel Pitch Calculator', id: 'calculator-section', icon: Calculator },
    { label: 'Commercial Case Studies', id: 'cases-section', icon: Monitor },
    { label: 'SGL Technology', id: 'tech-section', icon: ShieldCheck },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1120]/95 backdrop-blur-md border-b border-white/8 py-4 shadow-xl'
          : 'bg-transparent py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Zone */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 cursor-pointer group"
            id="brand-logo-btn"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-none border border-white/8 flex items-center justify-center overflow-hidden bg-white/5 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                <img 
                  src={logoImg} 
                  alt="SGL Logo" 
                  className="w-full h-full object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center">
                <span className="font-display font-extrabold text-lg tracking-widest text-white uppercase leading-none">SGL</span>
                <span className="font-mono text-[9px] font-bold text-sky-400 ml-1.5 border border-sky-400/20 px-1 py-0.2 rounded-none">PRO</span>
              </div>
              <p className="font-mono text-[8px] tracking-[0.2em] text-slate-400 uppercase leading-none mt-0.5">Lumina Displays</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigateToSection(item.id)}
                  className="flex items-center px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-colors cursor-pointer relative group"
                >
                  <span className="font-mono text-[9px] mr-1 text-sky-400/40 group-hover:text-blue-500 transition-colors">//</span>
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </button>
              );
            })}
          </nav>

          {/* CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-transparent border border-white/25 text-white hover:text-black hover:bg-white hover:border-white font-display text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer"
              id="cta-nav-consult"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Menu Actuator */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-sm border border-white/10 hover:bg-white/5"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#111827]/98 border-b border-white/8 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3 max-w-7xl mx-auto">
              {navItems.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => onNavigateToSection(item.id), 200);
                    }}
                    className="flex items-center gap-2 w-full text-left px-3 py-2.5 rounded-sm hover:bg-white/5 text-slate-300 hover:text-white text-[10px] uppercase tracking-[0.2em] transition font-medium"
                  >
                    <span className="font-mono text-sky-400">//</span>
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(onOpenConsultation, 200);
                  }}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3 rounded-none transition"
                >
                  Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
