import { Sparkles } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import Button from './ui/Button';

interface LeadCaptureBannerProps {
  onOpenConsultation: () => void;
}

export default function LeadCaptureBanner({ onOpenConsultation }: LeadCaptureBannerProps) {
  return (
    <section className="py-20 bg-[#111827] border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative linear technology light rails */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-6">
        
        {/* Decorative Badge icon */}
        <div className="inline-flex p-3 bg-blue-600/10 border border-blue-500/25 rounded-none text-sky-400">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        {/* Lead Headline */}
        <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tighter text-white uppercase max-w-2xl mx-auto leading-none">
          ARCHITECTING YOUR NEXT RM100,000+ ICONIC DEPLOYMENT
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
          From multi-storey curved ribbons hanging in premium shopping atriums to heavy bulletproof weatherproof displays above congested metropolitan crossings—SGL executes serious, high-investment, architectural commercial LED.
        </p>

        {/* Action Button layout row using centralized Design System components */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            onClick={onOpenConsultation}
            pulse={true}
            id="bottom-cta-consult-btn"
          >
            Request Bidding Proposal
          </CTAButton>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const el = document.getElementById('tech-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            id="bottom-cta-learn-btn"
            className="w-full sm:w-auto h-[54px] md:h-[54px]"
          >
            Review Technical Specs
          </Button>
        </div>

        {/* Floating security indicators */}
        <p className="text-[9px] text-slate-500 font-mono tracking-[0.18em] uppercase pt-4">
          • KUALA LUMPUR REGIONAL SERVICE OFFICE • 3-YEAR WARRANTY • LOCAL MONSOON PROTECTION INDEX IP65 •
        </p>

      </div>
    </section>
  );
}

