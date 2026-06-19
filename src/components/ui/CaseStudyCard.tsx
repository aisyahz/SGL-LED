import { CaseStudy } from '../../types';
import { Landmark, MapPin, Sparkles, AlertCircle, PenTool, CheckCircle2 } from 'lucide-react';
import InfoBadge from './InfoBadge';

interface CaseStudyCardProps {
  id?: string;
  caseStudy: CaseStudy;
  className?: string;
}

export default function CaseStudyCard({
  id,
  caseStudy,
  className = '',
}: CaseStudyCardProps) {
  return (
    <div
      id={id}
      className={`bg-[#111827] border border-white/8 rounded-none overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 ${className}`}
    >
      {/* Side: Project Specifications and Stats (Col-span 4) */}
      <div className="lg:col-span-4 bg-transparent p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/8 flex flex-col justify-between">
        <div className="space-y-6">
          <div>
            <span className="text-[8px] font-mono text-sky-400 font-bold tracking-[0.2em] uppercase block mb-1.5">
              CLIENT TYPE
            </span>
            <h4 className="font-display font-black text-lg text-white leading-tight uppercase flex items-center gap-2">
              <Landmark className="w-5 h-5 text-blue-500" />
              {caseStudy.clientType}
            </h4>
            <p className="text-[10px] text-slate-400 font-mono mt-1 uppercase">
              CLIENT: {caseStudy.client}
            </p>
            <p className="text-xs text-slate-400 font-sans mt-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-500" />
              {caseStudy.location}
            </p>
          </div>

          {/* Specs parameters list */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-semibold font-sans">
                Installation Size:
              </span>
              <InfoBadge variant="gray">{caseStudy.size}</InfoBadge>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-semibold font-sans">
                Pixel Density Pitch:
              </span>
              <InfoBadge variant="cyan">{caseStudy.pitch}</InfoBadge>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-semibold font-sans">
                Resolved Output:
              </span>
              <span className="font-mono text-white font-semibold">
                {caseStudy.resolution}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-semibold font-sans">
                Project Value:
              </span>
              <span className="font-mono text-sky-400 font-black bg-blue-600/5 px-2.5 py-1 rounded-none border border-blue-500/20">
                {caseStudy.totalCost}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-slate-400 leading-normal font-sans">
          *All SGL projects are real, engineering-checked LED installations deployed with structural warranty contracts.
        </div>
      </div>

      {/* Main Case review section (Col-span 8) */}
      <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 space-y-6">
        {/* Project description general */}
        <div>
          <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-sky-400 uppercase block mb-2">
            PROJECT CORE OVERVIEW
          </span>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans">
            {caseStudy.description}
          </p>
        </div>

        {/* Project Objective */}
        <div className="bg-[#111827] border border-white/5 border-l-2 border-blue-500 rounded-none p-5">
          <span className="font-mono text-[9px] font-bold text-sky-400 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Project Objective & Goal
          </span>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {caseStudy.objective}
          </p>
        </div>

        {/* Core Architectural Challenge met & Deployed Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/[0.01] border border-white/5 border-l-2 border-amber-500 rounded-none p-5">
            <span className="font-mono text-[9px] font-bold text-amber-500 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
              <AlertCircle className="w-3.5 h-3.5" />
              Engineering Challenge
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="bg-white/[0.01] border border-white/5 border-l-2 border-blue-400 rounded-none p-5">
            <span className="font-mono text-[9px] font-bold text-blue-400 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
              <PenTool className="w-3.5 h-3.5" />
              SGL Deployed Solution
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Verified Business Outcome */}
        <div className="bg-[#10b981]/[0.02] border border-emerald-500/10 border-l-2 border-emerald-500 rounded-none p-5">
          <span className="font-mono text-[9px] font-bold text-emerald-400 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Business Outcome
          </span>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {caseStudy.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}
