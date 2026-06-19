import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  id?: string;
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  id,
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  // Styles inspired by Yelp's structure but customized for SGL's Premium Editorial Look
  const baseStyle = "inline-flex items-center justify-center font-display uppercase tracking-[0.2em] transition-all cursor-pointer select-none font-bold outline-none rounded-none";
  
  const variants = {
    primary: "bg-white border border-white text-black hover:bg-transparent hover:text-white hover:border-white/35 shadow-lg",
    secondary: "bg-blue-600 border border-blue-600 text-white hover:bg-transparent hover:text-sky-300 hover:border-sky-300/50 shadow-md",
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white hover:text-black",
    link: "bg-transparent border-none text-sky-400 hover:text-white p-0 underline decoration-sky-400/55 hover:decoration-white font-mono lowercase tracking-wider",
    danger: "bg-red-600 border border-red-600 text-white hover:bg-transparent hover:text-red-450 hover:border-red-400",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-[9px]",
    md: "px-6 py-3.5 text-[10px]",
    lg: "px-8 py-4.5 text-[11px] tracking-[0.25em]",
  };

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.01 }}
      whileTap={disabled ? {} : { scale: 0.99 }}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
