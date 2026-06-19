import { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { Monitor } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import CaseStudyCard from './ui/CaseStudyCard';

export default function CasePortfolio() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-std-stanchart');

  const activeCase = CASE_STUDIES.find((cs) => cs.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="cases-section" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/1 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title and Headings using SectionHeader */}
        <SectionHeader
          badgeText="PROVEN COMMERCIAL DEPLOYMENTS"
          icon={<Monitor className="w-3 h-3 text-cyan-400" />}
          title="SGL Commercial Case Studies"
          description="Verify actual RM100,000+ commercial-grade LED design architectures in equatorial Southeast Asia. Inspect our customized resolutions and high-density installations."
        />

        {/* Dynamic Project Selector Switches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CASE_STUDIES.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseId(cs.id)}
              className={`p-5 rounded-none text-left border cursor-pointer transition-all duration-200 ${
                selectedCaseId === cs.id
                  ? 'bg-[#05070a] border-cyan-400 shadow-xl led-reflection-glow'
                  : 'bg-transparent border-white/10 hover:border-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[8px] font-bold tracking-[0.15em] text-[#22d3ee] uppercase">
                  {cs.series} INSTALLATION
                </span>
                <span className="text-white font-mono text-[10px] font-bold">
                  {cs.totalCost}
                </span>
              </div>
              <h3 className="font-display font-black text-sm text-white truncate uppercase tracking-tight">
                {cs.title}
              </h3>
              <p className="text-[10px] tracking-wide text-slate-400 font-sans truncate mt-1">
                {cs.client}
              </p>
            </button>
          ))}
        </div>

        {/* Detailed Case Study Analysis Card from modern design library */}
        <CaseStudyCard caseStudy={activeCase} />

      </div>
    </section>
  );
}

