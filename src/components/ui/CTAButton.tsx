import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CTAButtonProps {
  id?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  pulse?: boolean;
}

export default function CTAButton({
  id,
  children,
  onClick,
  className = '',
  pulse = true,
}: CTAButtonProps) {
  return (
    <motion.button
      id={id}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative inline-flex items-center justify-between gap-4 px-7 py-4.5
        bg-white text-black font-display font-black text-xs uppercase tracking-[0.25em]
        rounded-none cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.1)]
        border border-white hover:bg-transparent hover:text-sky-400 hover:border-sky-400
        group ${className}
      `}
    >
      {/* Decorative pulse glow background */}
      {pulse && (
        <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-none blur opacity-15 group-hover:opacity-35 transition-opacity" />
      )}

      {/* Main text content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Standardized vector indicator */}
      <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black group-hover:text-sky-400" />
    </motion.button>
  );
}
