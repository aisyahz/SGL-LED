import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long is installation?',
      answer: 'Typically 3 to 10 working days depending on structural scale. Major corporate lobby displays (such as the Onyx P1.2 COB system) involve 4 days for structural framework and panel alignment, followed by a mandatory 72-hour continuous thermal stress-test and software color-balancing run.'
    },
    {
      question: 'Do you provide site inspection?',
      answer: 'Yes, SGL provides complete on-site engineering assessments prior to production. We evaluate structural wall-mount load capacities, sub-frame anchoring parameters, and calculate exact electrical distribution box load draws.'
    },
    {
      question: 'What warranty is provided?',
      answer: 'All SGL flagship installations include a comprehensive 3-year warranty covering all electronic components, power units, and pixel modules. We operate a localized, prompt 48-hour Service Level Agreement (SLA) repair/replacement backup dispatch from our Kuala Lumpur hub.'
    },
    {
      question: 'Which pixel pitch should I choose?',
      answer: 'Pixel pitch selection depends on the minimum viewing distance. For close-up corporate lobbies (<2.5m), we recommend Onyx Series fine pitches (P0.9 - P1.5). For retail mall galleries and high-ceiling atriums (3m - 6m), the Horizon P1.8 or P2.5 offers absolute visual balance. Large-scale outdoor billboards use Titan P4.0 or P5.0.'
    },
    {
      question: 'Do you cover all Malaysia?',
      answer: 'Yes, SGL’s fully certified mechanical and AV technicians deploy across West Malaysia (Kuala Lumpur, Penang, Johor, East Coast) and East Malaysia (major hubs in Sabah and Sarawak).'
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Decorative linear grids */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-500/[0.01] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Heading Section */}
        <div className="text-center mb-16">
          <div className="editorial-title-badge mb-4 mx-auto inline-flex">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400 mr-1" /> KNOWLEDGE DECK
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-none">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-4 text-xs text-slate-500 font-mono uppercase tracking-widest">
            SGL ENGINEERING SPECIFICATIONS & SERVICE MODEL
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-white/10 bg-[#05070a]/90 rounded-none transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 cursor-pointer focus:outline-none group hover:bg-white/[0.01]"
                  id={`faq-trigger-${idx}`}
                >
                  <span className="font-display font-black text-sm sm:text-base md:text-lg text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                  <div className="p-1.5 border border-white/10 bg-white/[0.02] text-slate-405 group-hover:border-cyan-400/30 group-hover:text-[#22d3ee] transition-colors shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Collapsible Answer Block */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-6 sm:p-8 bg-[#070a0e]/50">
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
