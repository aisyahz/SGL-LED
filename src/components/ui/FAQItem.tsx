import { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  id?: string;
  key?: string | number | null;
  question: string;
  answer: string | ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function FAQItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  className = '',
}: FAQItemProps) {
  return (
    <div
      id={id}
      className={`border border-white/8 bg-[#111827] rounded-none transition-all duration-300 ${className}`}
    >
      {/* Accordion Trigger */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 cursor-pointer focus:outline-none group hover:bg-white/[0.01]"
      >
        <span className="font-display font-black text-sm sm:text-base md:text-lg text-white uppercase tracking-tight group-hover:text-sky-400 transition-colors">
          {question}
        </span>
        <div className="p-1.5 border border-white/8 bg-white/[0.02] text-slate-400 group-hover:border-blue-500/30 group-hover:text-sky-450 transition-colors shrink-0">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Animated Collapsible Answer Block */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 sm:p-8 bg-[#1f2937]/30 font-sans">
          {typeof answer === 'string' ? (
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {answer}
            </p>
          ) : (
            answer
          )}
        </div>
      </div>
    </div>
  );
}
