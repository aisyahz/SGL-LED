import { ArrowUp, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import logoImg from '../assets/images/logo-sgl.jpeg';
import { COMPANY, COMPANY_ADDRESS, COMPANY_MAP_EMBED_URL, COMPANY_WHATSAPP_URL } from '../company';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return (
    <footer className="bg-[#0b1120] border-t border-white/5 text-slate-400 font-sans" aria-label="SGL Footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column A: Logo Brand Zone (Col-span 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white w-12 h-12 rounded-none border border-white/15 p-1 flex items-center justify-center overflow-hidden shrink-0">
                <img loading="lazy" decoding="async"
                  src={logoImg} 
                  alt="SGL International LED Sdn Bhd Logo" 
                  className="w-full h-full object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-black text-sm tracking-wide text-white block uppercase leading-tight">SGL International LED</span>
                <span className="font-mono text-[8.5px] text-[#38bdf8] uppercase block leading-none font-bold mt-0.5">Sdn Bhd</span>
                <span className="font-sans text-[8.5px] text-slate-400 block mt-0.5">Malaysia's LED Display Specialist</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SGL supplies, installs, and maintains indoor and outdoor LED displays for businesses across Malaysia, including P1.86, P2.5, and P3.91 pixel pitches.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <address className="not-italic">{COMPANY_ADDRESS}</address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phoneDisplay} ({COMPANY.contactName} | {COMPANY.contactPosition})</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <a className="break-all" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <a href={COMPANY.website} target="_blank" rel="noopener noreferrer">sglled.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-sky-400" />
                <a href={COMPANY_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp {COMPANY.contactName}</a>
              </div>
            </div>
          </div>

          {/* Column B: Practical Shortcuts (Col-span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em]">Solution Directory</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <button
                onClick={() => onNavigateToSection('solutions-section')}
                className="text-left hover:text-sky-400 transition cursor-pointer"
              >
                LED Hardware Products
              </button>
              <button
                onClick={() => onNavigateToSection('calculator-section')}
                className="text-left hover:text-sky-400 transition cursor-pointer"
              >
                Interactive Layout Calculator
              </button>
              <button
                onClick={() => onNavigateToSection('cases-section')}
                className="text-left hover:text-sky-400 transition cursor-pointer"
              >
                RM100k+ Commercial Portfolios
              </button>
              <button
                onClick={() => onNavigateToSection('tech-section')}
                className="text-left hover:text-sky-400 transition cursor-pointer"
              >
                Common Cathode Engineering
              </button>
            </div>
          </div>

          {/* Column C: Technical index status values (Col-span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em]">Technical Indices Tracker</h4>
            <div className="space-y-3.5 bg-white/[0.01] border border-white/8 p-4 rounded-none text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold uppercase font-sans text-[9px] tracking-wider">LED Refresh Index:</span>
                <span className="font-mono text-sky-400 font-bold">7,680 Hz Cinema</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold uppercase font-sans text-[9px] tracking-wider">Power Saving Tech:</span>
                <span className="font-mono text-white font-semibold">Common Cathode</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold uppercase font-sans text-[9px] tracking-wider">Core Protection Unit:</span>
                <span className="font-mono text-white font-semibold">Patented Micro COB</span>
              </div>
            </div>

            <div className="border border-white/8 bg-white/[0.01] overflow-hidden rounded-none">
              <iframe
                title="SGL International LED location map"
                src={COMPANY_MAP_EMBED_URL}
                className="h-64 w-full border-0 grayscale contrast-125"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Footnote and scroll to top panel */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-500 font-sans">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Malaysia&apos;s LED display supply, installation, and maintenance specialist.
          </p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-white/8 bg-transparent hover:border-white rounded-none text-slate-300 hover:text-white cursor-pointer transition text-[10px] uppercase font-bold font-mono tracking-widest"
            aria-label="Scroll to top of the page"
            id="footer-back-to-top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
