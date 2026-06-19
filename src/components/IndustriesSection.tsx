import { Building2, ShoppingBag, Store, GraduationCap, Church, Music } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      id: 'shopping-mall',
      title: 'Shopping Malls',
      description: 'Grand atriums, sinuous curving ribbons, and floating banner arrays designed to capture and hold premium retail traffic.',
      icon: ShoppingBag,
      tag: 'HIGH-BRIGHT'
    },
    {
      id: 'school',
      title: 'Schools & Academies',
      description: 'Direct-lit high-contrast displays for interactive lecture halls, digital scoreboards, and main assembly facilities.',
      icon: GraduationCap,
      tag: 'ANTI-GLARE'
    },
    {
      id: 'church',
      title: 'Churches & Houses of Worship',
      description: 'Low-maintenance, extremely wide viewing-angle sanctuaries screens rendering lyric templates and high-definition video feeds.',
      icon: Church,
      tag: 'HIGH-CONTRAST'
    },
    {
      id: 'corporate-office',
      title: 'Corporate Offices',
      description: 'Vibrant command lobby installations, immersive executive boardroom backdrops, and active real-time diagnostic grids.',
      icon: Building2,
      tag: '0.9mm FINE PITCH'
    },
    {
      id: 'retail-store',
      title: 'Retail Flagship Stores',
      description: 'Pristine, 16-bit color synchronized signage and high-refresh pillar displays designed for prestige merchandise aesthetics.',
      icon: Store,
      tag: 'CREATIVE CONFIGS'
    },
    {
      id: 'event-hall',
      title: 'Event & Exhibition Halls',
      description: 'Quick-couple rental scale structures, extremely bright stage backdrops with heavy 7,680Hz fluid capture capabilities.',
      icon: Music,
      tag: '7680Hz STAGE'
    }
  ];

  return (
    <section id="industries-section" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Decorative hairline line grids */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Heading Structure */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="editorial-title-badge mb-4">
            <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full mr-1.5 inline-block"></span>
            SECTOR EXCELLENCE
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-none">
            INDUSTRIES WE SERVE
          </h2>
          <p className="mt-4 text-sm text-slate-400 font-sans leading-relaxed max-w-xl">
            SGL designs and deploys optimized physical LED screen hardware tailored to the distinct acoustic, visual, load-bearing, and heat conditions of premium commercial sectors in Malaysia.
          </p>
        </div>

        {/* Swiss-Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => {
            const IconComponent = ind.icon;
            return (
              <div 
                key={ind.id}
                className="bg-[#05070a]/90 border border-white/10 p-8 flex flex-col justify-between transition-all duration-350 cursor-default group rounded-none hover:border-cyan-450 hover:bg-[#070a0f] relative overflow-hidden"
              >
                {/* Thin top accent border animated on hover */}
                <div className="absolute left-0 top-0 right-0 h-[1.5px] bg-transparent group-hover:bg-[#22d3ee] transition-all duration-350" />
                
                <div>
                  {/* Top Industry Identification Bracket */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[9px] text-slate-500 font-bold">
                      // SGL-SEC-0{index + 1}
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.2em] font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors border border-white/5 px-2 py-0.5 uppercase">
                      {ind.tag}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 border border-white/10 bg-white/[0.01] group-hover:border-cyan-400/30 text-slate-400 group-hover:text-[#22d3ee] transition-colors shrink-0">
                      <IconComponent className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-lg text-white uppercase tracking-tight group-hover:text-white transition-colors">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans mt-3">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-end">
                  <span className="font-mono text-[9px] text-slate-600 group-hover:text-[#22d3ee] transition-colors uppercase tracking-widest">
                    EXPLORE SPECS →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
