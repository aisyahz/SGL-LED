import { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';
import { Monitor, MapPin, Landmark, Scaling, DollarSign, PenTool, ShieldAlert, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CasePortfolio() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-std-stanchart');

  const activeCase = CASE_STUDIES.find((cs) => cs.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="cases-section" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/1 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title and Headings */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="editorial-title-badge">
            <Monitor className="w-3 h-3" /> PROVEN COMMERCIAL DEPLOYMENTS
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-none">
            SGL Commercial Case Studies
          </h2>
          <div className="mt-4 w-12 h-[1px] bg-white/20 mx-auto"></div>
          <p className="mt-5 text-sm text-slate-400 font-sans leading-relaxed">
            Verify actual RM100,000+ commercial-grade LED design architectures in equatorial Southeast Asia. Inspect our customized resolutions and high-density installations.
          </p>
        </div>

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

        {/* Detailed Case Study Analysis Card */}
        <div className="bg-[#05070a]/80 border border-white/10 rounded-none overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Side: Project specifications and stats (Col-span 4) */}
          <div className="lg:col-span-4 bg-transparent p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-[8px] font-mono text-[#22d3ee] font-bold tracking-[0.2em] uppercase block mb-1.5">CLIENT TYPE</span>
                <h4 className="font-display font-black text-lg text-white leading-tight uppercase flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-cyan-400" />
                  {activeCase.clientType}
                </h4>
                <p className="text-[10px] text-slate-400 font-mono mt-1 uppercase">CLIENT: {activeCase.client}</p>
                <p className="text-xs text-slate-400 font-sans mt-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  {activeCase.location}
                </p>
              </div>

              {/* Specs parameters table */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold font-sans">Installation Size:</span>
                  <span className="font-mono text-white font-bold bg-white/5 px-2.5 py-1 rounded-none border border-white/10">{activeCase.size}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold font-sans">Pixel Density Pitch:</span>
                  <span className="font-mono text-cyan-400 font-bold bg-cyan-400/10 px-2.5 py-1 rounded-none border border-cyan-400/20">{activeCase.pitch}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold font-sans">Resolved Output:</span>
                  <span className="font-mono text-white font-semibold">{activeCase.resolution}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold font-sans">Project Value:</span>
                  <span className="font-mono text-[#22d3ee] font-black bg-cyan-400/5 px-2.5 py-1 rounded-none border border-cyan-400/20">
                    {activeCase.totalCost}
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
              <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-[#22d3ee] uppercase block mb-2">PROJECT CORE OVERVIEW</span>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans">
                {activeCase.description}
              </p>
            </div>

            {/* Project Objective */}
            <div className="bg-[#05070a]/40 border border-white/5 border-l-2 border-cyan-400 rounded-none p-5">
              <span className="font-mono text-[9px] font-bold text-cyan-400 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Project Objective & Goal
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {activeCase.objective}
              </p>
            </div>

            {/* Core Architectural Challenge met & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.01] border border-white/5 border-l-2 border-amber-500 rounded-none p-5">
                <span className="font-mono text-[9px] font-bold text-amber-500 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Engineering Challenge
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeCase.challenge}
                </p>
              </div>

              <div className="bg-white/[0.01] border border-white/5 border-l-2 border-blue-400 rounded-none p-5">
                <span className="font-mono text-[9px] font-bold text-blue-400 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
                  <PenTool className="w-3.5 h-3.5" />
                  SGL Deployed Solution
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* Business Outcome */}
            <div className="bg-[#10b981]/[0.02] border border-emerald-500/10 border-l-2 border-emerald-500 rounded-none p-5">
              <span className="font-mono text-[9px] font-bold text-emerald-400 tracking-[0.15em] uppercase flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Business Outcome
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {activeCase.outcome}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
