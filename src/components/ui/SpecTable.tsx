import { ReactNode } from 'react';

export interface SpecItem {
  label: string;
  value: ReactNode;
}

interface SpecTableProps {
  id?: string;
  items: SpecItem[];
  className?: string;
}

export default function SpecTable({
  id,
  items,
  className = '',
}: SpecTableProps) {
  return (
    <div
      id={id}
      className={`bg-white/[0.02] border border-white/5 rounded-none p-5 space-y-3 ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            key={index}
            className={`grid grid-cols-2 text-xs py-1.5 ${
              !isLast ? 'border-b border-white/5' : ''
            }`}
          >
            <span className="text-slate-400 font-semibold font-sans">{item.label}</span>
            <span className="font-mono text-white text-right font-semibold truncate">
              {item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
