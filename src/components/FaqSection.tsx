import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FAQItem from './ui/FAQItem';

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
      answer: 'All SGL flagship installations include a comprehensive 2-year warranty covering all electronic components, power units, and pixel modules. We operate a localized, prompt 48-hour Service Level Agreement (SLA) repair/replacement backup dispatch from our Kuala Lumpur hub.'
    },
    {
      question: 'Which pixel pitch should I choose?',
      answer: 'Pixel pitch selection depends on the minimum viewing distance and installation environment. For corporate displays, choose P1.86 Indoor Led Display. For retail indoor displays, choose P2.5 Indoor Led Display. For outdoor waterproof installations, choose P4 Led Display Water Proof.'
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
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/[0.01] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Heading Section using SectionHeader */}
        <SectionHeader
          badgeText="KNOWLEDGE DECK"
          icon={<HelpCircle className="w-3.5 h-3.5 text-sky-400" />}
          title="FREQUENTLY ASKED QUESTIONS"
          description="SGL ENGINEERING SPECIFICATIONS & SERVICE MODEL"
        />

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

