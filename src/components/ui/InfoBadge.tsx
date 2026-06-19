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
    cyan: 'bg-blue-600/5 border border-blue-500/10 text-blue-300',
    ambient: 'bg-blue-600/5 border border-blue-500/10 text-slate-300',
    'cyan-glow': 'bg-blue-600/10 border border-blue-500/25 text-blue-400',
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
