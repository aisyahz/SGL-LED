import { LedDisplayProduct } from '../../types';
import { Check, ArrowRight } from 'lucide-react';
import InfoBadge from './InfoBadge';
import SpecTable, { SpecItem } from './SpecTable';
import Button from './Button';

interface ProductCardProps {
  id?: string;
  key?: string | number | null;
  product: LedDisplayProduct;
  onSelect: (product: LedDisplayProduct) => void;
  className?: string;
}

export default function ProductCard({
  id,
  product,
  onSelect,
  className = '',
}: ProductCardProps) {
  const specItems: SpecItem[] = [
    { label: 'Available Pitches:', value: product.pitches.map(p => `P${p}`).join(', ') },
    { label: 'Brightness Factor:', value: product.brightness },
    { label: 'Refresh Rate Speed:', value: product.refreshRate },
    { label: 'Cabinet Housing:', value: product.cabinetSize },
    { label: 'Weather Protection:', value: product.ipRating },
  ];

  return (
    <div
      id={id}
      className={`bg-[#111827] border border-white/8 hover:border-white/20 rounded-none flex flex-col justify-between transition-all duration-300 group shadow-xl relative overflow-hidden ${className}`}
    >
      {/* Visual subtle dynamic ribbon matching application series */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${
          product.series === 'Corporate'
            ? 'from-blue-650 to-blue-550'
            : product.series === 'Retail'
            ? 'from-blue-500 to-sky-400'
            : 'from-blue-700 to-indigo-600'
        }`}
      />

      {/* Internal body */}
      <div className="p-6 sm:p-8">
        {/* Header tags */}
        <div className="flex justify-between items-center mb-5">
          <InfoBadge variant="gray">{product.series} SPECIALIST</InfoBadge>
          <span className="font-mono text-[9px] text-sky-400 tracking-[0.1em] font-medium uppercase">
            Premium Project Tier
          </span>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase group-hover:text-sky-400 transition-colors tracking-tight">
          {product.name}
        </h3>
        <p className="font-mono text-[10px] text-sky-400 uppercase tracking-widest mt-1 mb-5 font-bold">
          {product.tagline}
        </p>

        {/* Description body */}
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Modular SpecTable */}
        <SpecTable items={specItems} className="mb-6" />

        {/* Core engineering features */}
        <div className="space-y-2 mt-4">
          <h4 className="text-[9px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
            Core Engineering Features
          </h4>
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
              <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Standardized Card Lower Action Footer */}
      <div className="p-6 bg-white/[0.01] border-t border-white/5 mt-auto">
        <Button
          variant="outline"
          size="md"
          className="w-full justify-center gap-2"
          onClick={() => onSelect(product)}
        >
          Select & Calculate Pitch
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}
