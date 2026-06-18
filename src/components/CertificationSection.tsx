import { Award, Shield, FileCheck, Check } from 'lucide-react';

export default function CertificationSection() {
  const certifications = [
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015',
      authority: 'LRQA Quality Assured',
      description: 'Underpins SGL’s systematic quality management system covering multi-layer COB encapsulation manufacturing, optoelectronic calibration, and high-heat stress tolerance testing.',
      icon: Award,
      badgeText: 'QUALITY SYSTEM'
    },
    {
      id: 'ce-marking',
      title: 'CE COMPLIANCE',
      authority: 'EMC & LVD Certified',
      description: 'Fully compliant with European Union safety, health, and environmental protection directives, ensuring secure high-wattage shielding and low electromagnetic radiation.',
      icon: Shield,
      badgeText: 'EU STANDARDS'
    },
    {
      id: 'rohs',
      title: 'RoHS CERTIFIED',
      authority: 'Lead-Free Materials',
      description: 'Strict restriction on hazardous substances across all lead-free polymer housings, copper-plated solder junctions, and heavy-metal-free semiconductor substrates.',
      icon: FileCheck,
      badgeText: 'GREEN COMPLIANT'
    }
  ];

  return (
    <section id="certifications-section" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Subtle linear decorative elements */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.01] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="editorial-title-badge">
            <Shield className="w-3 h-3" /> CREDIBILITY & COMPLIANCE
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-none">
            ENGINEERED TO INTERNATIONAL STANDARDS
          </h2>
          <div className="mt-4 w-12 h-[1px] bg-white/20 mx-auto"></div>
          <p className="mt-5 text-sm text-slate-400 font-sans leading-relaxed">
            Every screen layout designed and assembled by SGL conforms to robust structural, systemic, and environmental safety regulations required for tier-one corporate and critical public infrastructures.
          </p>
        </div>

        {/* High-Contrast Monochrome Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={cert.id}
                className="bg-[#05070a]/90 border border-white/10 hover:border-cyan-400/50 p-8 flex flex-col justify-between transition-all duration-300 group rounded-none"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 border border-white/15 bg-white/[0.02] flex items-center justify-center p-2.5 transition-colors group-hover:border-cyan-400/40 text-slate-350 group-hover:text-cyan-400">
                      <IconComponent className="w-full h-full stroke-1" />
                    </div>
                    <span className="font-mono text-[8px] tracking-[0.2em] uppercase font-bold text-slate-500 group-hover:text-[#22d3ee] transition-colors border border-white/5 px-2.5 py-1">
                      {cert.badgeText}
                    </span>
                  </div>

                  {/* Standard Designation */}
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight mb-1">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-5">
                    {cert.authority}
                  </p>

                  {/* Core engineering impact detail */}
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mr-2">
                    {cert.description}
                  </p>
                </div>

                {/* Verification Check Badge */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#22d3ee] font-bold tracking-widest uppercase flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> VERIFIED STANDARD
                  </span>
                  <span className="text-[10px] text-slate-650 font-mono text-slate-600">
                    SGL-REG-{cert.id.toUpperCase().slice(0,4)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom micro-copy assuring public liability protection */}
        <div className="mt-12 text-center">
          <p className="inline-block px-4 py-2 bg-white/[0.01] border border-white/5 font-mono text-[9px] tracking-wider text-slate-500 uppercase rounded-none">
            • REGISTERED REGISTER OF KUALA LUMPUR FIRE & SAFETY (FRDM) COMPLIANT ENCLOSURES •
          </p>
        </div>

      </div>
    </section>
  );
}
