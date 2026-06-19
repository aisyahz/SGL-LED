import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/images/logo-sgl.jpeg';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1120] border-t border-white/5 text-slate-400 font-sans" aria-label="SGL Footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column A: Logo Brand Zone (Col-span 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white w-12 h-12 rounded-none border border-white/15 p-1 flex items-center justify-center overflow-hidden shrink-0">
                <img 
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
              SGL is Southeast Asia&apos;s leading engineering and procurement force specializing in serious, large-footprint commercial LED displays with true Common Cathode energy efficiency and P1.86, P2.5, and P4 pixels.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>238, Persiaran Pegaga, 41200 Klang Selangor, Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>+60 (10) 425-7824 (Daniel T | Managing Director)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>lengzaiiteng98@gmail.com</span>
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.2813163357605!2d101.4316!3d3.0189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdab5faf497c57%3A0x5a44030984796556!2s238%2C%20Persiaran%20Pegaga%2C%20Taman%20Bayu%20Perdana%2C%2042000%20Pelabuhan%20Klang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1781848443614!5m2!1sen!2smy"
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
            &copy; {new Date().getFullYear()} SGL International LED Sdn Bhd. All rights reserved. Malaysia's LED Display Specialist. Unit 32-02, Menara Petronas KLCC.
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
