import { ReactNode } from 'react';

interface SectionHeaderProps {
  id?: string;
  badgeText: string;
  icon?: ReactNode;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  id,
  badgeText,
  icon,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const lineClass = align === 'center' ? 'mx-auto' : '';

  return (
    <div id={id} className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      {/* Editorial SGL Badge */}
      <div className={`editorial-title-badge inline-flex items-center gap-1.5 ${align === 'center' ? 'justify-center' : ''}`}>
        {icon}
        {badgeText}
      </div>

      {/* Styled display title */}
      <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-none mt-4">
        {title}
      </h2>

      {/* Symmetric divider rule */}
      <div className={`mt-4 w-12 h-[1px] bg-white/20 ${lineClass}`}></div>

      {/* Supporting body copywriting */}
      {description && (
        <p className="mt-5 text-sm text-slate-400 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
