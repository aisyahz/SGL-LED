import { TECHNICAL_USPs } from '../constants';
import { ShieldCheck, Snowflake, Cpu, Activity, Zap } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function TechUSPSection() {
  return (
    <section id="tech-section" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      
      {/* Absolute decorative geometric overlays */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/3 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700/2 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title and Badge using SectionHeader */}
        <SectionHeader
          badgeText="SGL ENGINEERING & AV STANDARDS"
          icon={<ShieldCheck className="w-3 h-3 text-sky-400" />}
          title="WHY SGL COMMANDS COMMERCIAL DOMINANCE"
          description="Standard LED screens flicker on broadcast cameras and overheat, degrading visual quality rapidly. SGL resolves these issues using patented Common Cathode circuitry and advanced polymer seals."
          className="mb-20"
        />

        {/* Unified USP Display Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TECHNICAL_USPs.map((usp, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#111827] border border-white/8 hover:border-white/20 rounded-none p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  
                  {/* Metric Display block */}
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tighter group-hover:text-sky-400 transition-colors">
                      {usp.metric}
                    </span>
                    <span className="font-mono text-[9px] text-sky-400 font-bold uppercase tracking-widest border border-blue-500/20 px-2 py-0.5 bg-blue-600/5 rounded-none">
                      {usp.metricLabel}
                    </span>
                  </div>

                  {/* Visual Category info */}
                  <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-sky-400 uppercase block mb-1.5">
                    {usp.subtitle}
                  </span>
                  
                  {/* Topic Headline */}
                  <h3 className="text-lg font-display font-black text-white uppercase leading-tight mb-4 tracking-tight">
                    {usp.title}
                  </h3>

                  {/* Core description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
                    {usp.description}
                  </p>

                </div>

                {/* Micro tech checklist footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-sans">
                  <div className="flex items-center gap-1">
                    {idx === 0 && <Snowflake className="w-3.5 h-3.5 text-sky-400" />}
                    {idx === 1 && <Cpu className="w-3.5 h-3.5 text-sky-400" />}
                    {idx === 2 && <Activity className="w-3.5 h-3.5 text-sky-400" />}
                    <span>{idx === 0 ? 'Energy Savings' : idx === 1 ? 'Impact Protections' : 'True UHD Standard'}</span>
                  </div>
                  <span className="font-mono text-[9px]">SGL-STD-{idx + 1}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Ambient summary row centered */}
        <div className="mt-16 bg-white/[0.01] border border-white/8 p-5 rounded-none flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-sans text-center sm:text-left">
            <Zap className="w-4 h-4 text-blue-500 animate-pulse" />
            <span>All display installations come with a cohesive 36-month local SGL service Level Agreement (SLA).</span>
          </div>
          <span className="font-mono text-[9px] text-sky-400 font-bold tracking-[0.2em] uppercase">
            3-Year Premium Full Warranty
          </span>
        </div>

      </div>
    </section>
  );
}
