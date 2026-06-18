import { useState } from 'react';
import { PRODUCTS } from '../constants';
import { LedDisplayProduct } from '../types';
import { Check, ShieldCheck, Cpu, Flame, Layers, Box, Compass, Landmark, ArrowRight } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: LedDisplayProduct) => void;
}

export default function ProductCatalog({ onSelectProduct }: ProductCatalogProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Corporate' | 'Retail' | 'Outdoor'>('All');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTab === 'All') return true;
    return product.series === activeTab;
  });

  return (
    <section id="solutions-section" className="py-24 bg-transparent relative border-b border-white/5">
      {/* Decorative cybernetic glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/2 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/2 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Title Section closer to premium showroom values */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="editorial-title-badge">
            <Layers className="w-3 h-3" /> SGL CORE SIGNATURE CATALOGUE
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-none">
            Ultra-Premium LED Panel Series
          </h2>
          <div className="mt-4 w-12 h-[1px] bg-white/20 mx-auto"></div>
          <p className="mt-5 text-sm text-slate-400 font-sans leading-relaxed">
            Our luxury commercial installations are designed with true-calibrated color standards and structural magnesium-alloy shells to endure equatorial weather, heavy public footfall, and close banking lobby range.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
          {(['All', 'Corporate', 'Retail', 'Outdoor'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-none font-display text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer transition-all border ${
                activeTab === tab
                  ? 'bg-white border-white text-black shadow-lg'
                  : 'bg-[#05070a] border-white/10 text-slate-400 hover:text-white hover:border-white/30'
              }`}
            >
              {tab === 'All' ? 'VIEW ALL HARDWARE' : `${tab} Applications`}
            </button>
          ))}
        </div>

        {/* Dynamic Products Grid showcasing commercial value */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-[#05070a]/80 border border-white/10 hover:border-white/30 rounded-none flex flex-col justify-between transition-all duration-300 group shadow-xl relative overflow-hidden"
              >
                
                {/* Visual subtle glow matching application series */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${
                  product.series === 'Corporate' ? 'from-cyan-455 to-blue-600' :
                  product.series === 'Retail' ? 'from-purple-500 to-pink-500' :
                  'from-amber-400 to-rose-500'
                }`} />

                {/* Internal body */}
                <div className="p-6 sm:p-8">
                  
                  {/* Badge series */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-mono text-[8px] font-bold tracking-[0.15em] text-slate-300 uppercase bg-white/5 border border-white/15 px-2.5 py-1 rounded-none">
                      {product.series} SPECIALIST
                    </span>
                    <span className="font-mono text-[9px] text-[#22d3ee] tracking-[0.1em] font-medium uppercase">
                      Premium Project Tier
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase group-hover:text-cyan-400 transition-colors tracking-tight">
                    {product.name}
                  </h3>
                  <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mt-1 mb-5 font-bold">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Technical Specifications Matrix */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-none p-5 space-y-3 mb-6">
                    <div className="grid grid-cols-2 text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400 font-semibold font-sans">Available Pitches:</span>
                      <span className="font-mono text-white text-right font-semibold">
                        {product.pitches.map(p => `P${p}`).join(', ')}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400 font-semibold font-sans">Brightness Factor:</span>
                      <span className="font-mono text-white text-right font-semibold">{product.brightness}</span>
                    </div>
                    <div className="grid grid-cols-2 text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400 font-semibold font-sans">Refresh Rate Speed:</span>
                      <span className="font-mono text-white text-right font-semibold">{product.refreshRate}</span>
                    </div>
                    <div className="grid grid-cols-2 text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400 font-semibold font-sans">Cabinet Housing:</span>
                      <span className="font-mono text-white text-right font-semibold truncate">{product.cabinetSize}</span>
                    </div>
                    <div className="grid grid-cols-2 text-xs">
                      <span className="text-slate-400 font-semibold font-sans">Weather Protection:</span>
                      <span className="font-mono text-white text-right font-semibold">{product.ipRating}</span>
                    </div>
                  </div>

                  {/* Core engineering features */}
                  <div className="space-y-2 mt-4">
                    <h4 className="text-[9px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">Core Engineering Features</h4>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Action button card foot */}
                <div className="p-6 bg-white/[0.01] border-t border-white/5 mt-auto">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-3 bg-transparent hover:bg-white hover:text-black border border-white/20 hover:border-white text-white font-display text-[10px] font-bold uppercase tracking-[0.25em] rounded-none transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    Select & Calculate Pitch
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
