import { Building2, ShoppingBag, Utensils, GraduationCap, Church, Music } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function IndustriesSection() {
  const industries = [
    {
      id: 'shopping-malls',
      title: 'Shopping Malls',
      description: 'Grand center atrium displays, sinuous curved ribbons, and digital signposts designed to capture visitor attention and maximize billboard ad-leasing revenue.',
      icon: ShoppingBag,
      tag: 'ADVERTISING REVENUE'
    },
    {
      id: 'schools',
      title: 'Schools',
      description: 'High-contrast, direct-lit displays for assembly halls, active scoreboards, and administrative halls. Offers vivid presentations even under bright ambient lights.',
      icon: GraduationCap,
      tag: 'EDUCATIONAL IMPACT'
    },
    {
      id: 'churches',
      title: 'Churches',
      description: 'Extremely wide horizontal viewing angles with reliable performance, designed for clear lyrics projecting and vivid sermon live-streaming.',
      icon: Church,
      tag: 'SANCTUARY READY'
    },
    {
      id: 'event-halls',
      title: 'Event Halls',
      description: 'Ultra-fluid 7,680Hz refresh rate stages and exhibition displays. Guarantees camera-flicker-free live presentation capture for press conferences and performance keynotes.',
      icon: Music,
      tag: '7680Hz STAGE'
    },
    {
      id: 'restaurants',
      title: 'Restaurants',
      description: 'High-luminance digital drive-thru menus, creative window banners, and immersive dining backdrops designed to increase average table sizes.',
      icon: Utensils,
      tag: 'INCRES FOOTFALL'
    },
    {
      id: 'corporate-offices',
      title: 'Corporate Offices',
      description: 'Vibrant reception lobby feature walls, multi-window command dashboards, and boardroom backdrops projecting corporate prestige.',
      icon: Building2,
      tag: 'FINE PITCH PREMIUM'
    }
  ];

  return (
    <section id="industries-section" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Decorative hairline line grids */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Heading Structure with Core Business Answers */}
        <div className="mb-20">
          <SectionHeader
            badgeText="SGL CORE SOLUTIONS DECK"
            title="Who We Are & How We Drive Growth"
            align="left"
            className="mb-8"
          />
          
          {/* Business Core Answers Grid to engage non-technical decision makers instantly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 sm:p-8 bg-[#111827] border border-white/8 mb-16 rounded-none text-left">
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-sky-400 font-bold tracking-[0.2em] block uppercase">// 1. WHAT DOES SGL DO?</span>
              <h3 className="font-display font-black text-sm text-white uppercase tracking-tight">Spectacular Custom LED Spaces</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                SGL designs, supplies, and installs high-performance digital displays. We manage projects of any budget range (from premium reception screens to massive building crown boards valued from RM50,000 to RM500,000+), utilizing safety-certified structural brackets.
              </p>
            </div>
            <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/5 pt-5 md:pt-0 md:pl-8">
              <span className="font-mono text-[9px] text-sky-400 font-bold tracking-[0.2em] block uppercase">// 2. WHO IS IT FOR?</span>
              <h3 className="font-display font-black text-sm text-white uppercase tracking-tight">Malaysian Commercial Landmark Teams</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Our screens are optimized for shopping malls, churches, restaurants, universities, event spaces, corporate boardrooms, and property developers looking to attract high premium tenant leases and maximize viewer footfall.
              </p>
            </div>
            <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/5 pt-5 md:pt-0 md:pl-8">
              <span className="font-mono text-[9px] text-emerald-400 font-bold tracking-[0.2em] block uppercase">// 3. WHY CONTACT SGL TODAY?</span>
              <h3 className="font-display font-black text-sm text-[#10b981] uppercase tracking-tight font-sans">Zero Technical Guesswork</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                We eliminate technical guesswork for non-engineers. SGL provides full pre-project site safety surveys, custom layout calibration, an extensive 36-month local parts warranty, and localized 48-hour standby support.
              </p>
            </div>
          </div>

          <SectionHeader
            badgeText="SECTOR CODES"
            title="INDUSTRIES WE SERVE"
            description="SGL designs and deploys optimized physical LED screen hardware tailored to the distinct acoustic, visual, load-bearing, and heat conditions of premium commercial sectors in Malaysia."
            align="left"
            className="mb-12"
          />
        </div>

        {/* Swiss-Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => {
            const IconComponent = ind.icon;
            return (
              <div 
                key={ind.id}
                className="bg-[#111827] border border-white/8 p-8 flex flex-col justify-between transition-all duration-350 cursor-default group rounded-none hover:border-blue-500/50 hover:bg-[#1f2937]/50 relative overflow-hidden"
              >
                {/* Thin top accent border animated on hover */}
                <div className="absolute left-0 top-0 right-0 h-[1.5px] bg-transparent group-hover:bg-blue-500 transition-all duration-350" />
                
                <div>
                  {/* Top Industry Identification Bracket */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[9px] text-slate-500 font-bold">
                      // SGL-SEC-0{index + 1}
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.2em] font-semibold text-slate-400 group-hover:text-sky-400 transition-colors border border-white/5 px-2 py-0.5 uppercase">
                      {ind.tag}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 border border-white/8 bg-white/[0.01] group-hover:border-blue-500/30 text-slate-400 group-hover:text-sky-450 transition-colors shrink-0">
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
                  <span className="font-mono text-[9px] text-slate-600 group-hover:text-sky-400 transition-colors uppercase tracking-widest">
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
