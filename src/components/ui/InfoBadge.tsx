import { ReactNode } from 'react';

interface InfoBadgeProps {
  id?: string;
  children: ReactNode;
  variant?: 'cyan' | 'gray' | 'ambient' | 'cyan-glow';
  className?: string;
}

export default function InfoBadge({
  id,
  children,
  variant = 'gray',
  className = '',
}: InfoBadgeProps) {
  const styles = {
    gray: 'bg-white/5 border border-white/8 text-slate-300',
    cyan: 'bg-blue-500/5 border border-blue-400/20 text-sky-400',
    ambient: 'bg-blue-400/5 border border-blue-400/10 text-slate-300',
    'cyan-glow': 'bg-blue-500/10 border border-blue-400/30 text-sky-400 animate-pulse',
  };

  return (
    <span
      id={id}
      className={`font-mono text-[8.5px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-none inline-block ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
