import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, ShoppingBag, Utensils, GraduationCap, Church, Music, ZoomIn, X } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

import mallImg from '../assets/images/mall.png';
import schoolImg from '../assets/images/school.png';
import churchImg from '../assets/images/church.png';
import eventhallImg from '../assets/images/eventhall.png';
import restaurantImg from '../assets/images/restaurant.png';
import corporateImg from '../assets/images/corporate.png';

export default function IndustriesSection() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  // Prevent background scroll when image modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  // Handle ESC close key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const industries = [
    {
      id: 'shopping-malls',
      title: 'Shopping Malls',
      description: 'Grand center atrium displays, sinuous curved ribbons, and digital signposts designed to capture visitor attention and maximize billboard ad-leasing revenue.',
      icon: ShoppingBag,
      tag: 'ADVERTISING REVENUE',
      image: mallImg
    },
    {
      id: 'schools',
      title: 'Schools',
      description: 'High-contrast, direct-lit displays for assembly halls, active scoreboards, and administrative halls. Offers vivid presentations even under bright ambient lights.',
      icon: GraduationCap,
      tag: 'EDUCATIONAL IMPACT',
      image: schoolImg
    },
    {
      id: 'churches',
      title: 'Churches',
      description: 'Extremely wide horizontal viewing angles with reliable performance, designed for clear lyrics projecting and vivid sermon live-streaming.',
      icon: Church,
      tag: 'SANCTUARY READY',
      image: churchImg
    },
    {
      id: 'event-halls',
      title: 'Event Halls',
      description: 'Ultra-fluid 7,680Hz refresh rate stages and exhibition displays. Guarantees camera-flicker-free live presentation capture for press conferences and performance keynotes.',
      icon: Music,
      tag: '7680Hz STAGE',
      image: eventhallImg
    },
    {
      id: 'restaurants',
      title: 'Restaurants',
      description: 'High-luminance digital drive-thru menus, creative window banners, and immersive dining backdrops designed to increase average table sizes.',
      icon: Utensils,
      tag: 'INCREASED FOOTFALL',
      image: restaurantImg
    },
    {
      id: 'corporate-offices',
      title: 'Corporate Offices',
      description: 'Vibrant reception lobby feature walls, multi-window command dashboards, and boardroom backdrops projecting corporate prestige.',
      icon: Building2,
      tag: 'FINE PITCH PREMIUM',
      image: corporateImg
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
                className="bg-[#111827] border border-white/8 flex flex-col justify-between transition-all duration-350 cursor-default group rounded-none hover:border-blue-500/50 hover:bg-[#1f2937]/30 relative overflow-hidden"
              >
                {/* Image Section at top - clickable to expand */}
                <div 
                  className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-slate-900 cursor-zoom-in group/img"
                  onClick={() => setSelectedImage({ url: ind.image, title: ind.title })}
                  title="Click to expand industry preview cover"
                >
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient overlay to merge with dark aesthetic card container */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-transparent to-transparent opacity-70" />
                  
                  {/* Zoom micro-indicator overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5">
                    <div className="p-2 border border-white/20 bg-black/50 rounded-full">
                      <ZoomIn className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-slate-200 uppercase bg-black/60 px-2 py-0.5">Click to Expand</span>
                  </div>

                  {/* Tag positioned absolutely */}
                  <span className="absolute top-4 right-4 font-mono text-[8.5px] tracking-[0.15em] font-semibold text-white bg-[#111827]/90 backdrop-blur-sm border border-white/10 px-2.5 py-1 uppercase scale-95 sm:scale-100 origin-top-right z-10">
                    {ind.tag}
                  </span>
                </div>

                <div className="p-8 pb-8 flex-grow">
                  {/* Top Industry Identification Bracket */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] text-slate-500 font-bold">
                      // SGL-SEC-0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 border border-white/8 bg-white/[0.01] group-hover:border-blue-500/30 text-slate-400 group-hover:text-sky-400 transition-colors shrink-0">
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
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Expanded Image Premium Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8 select-none"
            onClick={() => setSelectedImage(null)}
          >
            {/* Top Control Bar with Close action */}
            <div className="absolute top-4 right-4 z-[110] flex items-center gap-3">
              <span className="text-[10px] text-slate-500 font-mono tracking-wider hidden sm:inline uppercase">PRESS ESC KEY TO CLOSE</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-3 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-pointer"
                aria-label="Close expanded industry view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="relative border border-white/10 bg-[#090d16] p-1.5 overflow-hidden shadow-2xl flex items-center justify-center cursor-zoom-out"
                onClick={() => setSelectedImage(null)}
                title="Click anywhere on the photo to dismiss zoom view"
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain block mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-display font-black text-sm uppercase tracking-[0.15em] text-sky-400 font-mono">// SGL PHOTO DECK: {selectedImage.title}</h4>
                <p className="text-[9px] text-slate-500 font-mono mt-1">CLICK ANYWHERE ON OR OUTSIDE THE IMAGE TO CLOSE</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
