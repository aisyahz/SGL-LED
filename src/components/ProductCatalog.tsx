import { useState } from 'react';
import { PRODUCTS } from '../constants';
import { LedDisplayProduct } from '../types';
import { Layers } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ProductCard from './ui/ProductCard';

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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/2 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/2 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Title Section closer to premium showroom values */}
        <SectionHeader
          badgeText="SGL CORE SIGNATURE CATALOGUE"
          icon={<Layers className="w-3 h-3 text-sky-400" />}
          title="Ultra-Premium LED Panel Series"
          description="SGL International LED supplies, installs, and maintains indoor P1.86 and P2.5 LED screens and outdoor P3.91 displays. Explore custom LED video walls for schools, hotels, churches, offices, retail spaces, and events."
        />

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
          {(['All', 'Corporate', 'Retail', 'Outdoor'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`px-6 py-3 rounded-none font-display text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer transition-all border ${
                activeTab === tab
                  ? 'bg-white border-white text-black shadow-lg'
                  : 'bg-[#111827] border-white/8 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab === 'All' ? 'VIEW ALL HARDWARE' : `${tab} Applications`}
            </button>
          ))}
        </div>

        {/* Dynamic Products Grid showcasing commercial value */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
