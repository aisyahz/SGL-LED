import { PhoneCall, Sparkles, Sliders, ArrowRight } from 'lucide-react';

interface LeadCaptureBannerProps {
  onOpenConsultation: () => void;
}

export default function LeadCaptureBanner({ onOpenConsultation }: LeadCaptureBannerProps) {
  return (
    <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative linear technology light rails */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-6">
        
        {/* Decorative Badge icon */}
        <div className="inline-flex p-3 bg-cyan-400/10 border border-cyan-400/25 rounded-none text-cyan-400">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        {/* Lead Headline */}
        <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tighter text-white uppercase max-w-2xl mx-auto leading-none">
          ARCHITECTING YOUR NEXT RM100,000+ ICONIC DEPLOYMENT
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
          From multi-storey curved ribbons hanging in premium shopping atriums to heavy bulletproof weatherproof displays above congested metropolitan crossings—SGL executes serious, high-investment, architectural commercial LED.
        </p>

        {/* Action Button layout row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-display text-[10px] font-bold uppercase tracking-[0.2em] rounded-none cursor-pointer hover:bg-slate-200 transition-all"
            id="bottom-cta-consult-btn"
          >
            Request Bidding Proposal
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('tech-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 hover:border-white text-white font-display text-[10px] font-bold uppercase tracking-[0.2em] rounded-none cursor-pointer transition-all"
            id="bottom-cta-learn-btn"
          >
            Review Technical Specs
          </button>
        </div>

        {/* Floating security indicators */}
        <p className="text-[9px] text-slate-500 font-mono tracking-[0.18em] uppercase pt-4">
          • KUALA LUMPUR REGIONAL SERVICE OFFICE • 3-YEAR WARRANTY • LOCAL MONSOON PROTECTION INDEX IP65 •
        </p>

      </div>
    </section>
  );
}
