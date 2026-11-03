import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from 'motion/react';
import { HERO_SLIDES } from '../constants';
import { ChevronLeft, ChevronRight, Sparkles, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function HeroSlider({ onNavigateToSection, onOpenConsultation }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || paused || interacting) return;

    const interval = setInterval(() => {
      handleNext();
    }, 7000); // Rotate every 7 seconds
    return () => clearInterval(interval);
  }, [index, prefersReducedMotion, paused, interacting]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const setSlide = (targetIndex: number) => {
    setIndex(targetIndex);
  };

  const currentSlide = HERO_SLIDES[index];

  return (
    <section
      id="hero-slider-root"
      aria-labelledby="homepage-heading"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false); }}
      className="relative w-full min-h-[760px] overflow-hidden bg-slate-950"
    >
      
      {/* Background Slides and Cross-fades */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0.1, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {/* The hyperrealistic commercial image */}
            <img
              src={currentSlide.image}
              alt={`${currentSlide.heading} LED display installation in Malaysia`}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic gradient shading constraint. 
            Left side is deliberately darkened to ensure text readability (Website headline and buttons)
            while the right side opens beautifully to showcase the massive LED display installations with real floor reflections */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/75 to-transparent w-full md:w-[75%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-brand-deep/40 w-full" />
      </div>

      {/* Floating high-tech specifications overlay in bottom right corner */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden xl:block bg-[#111827]/90 backdrop-blur-md border border-white/8 p-5 shadow-[0_0_35px_rgba(0,0,0,0.8)] max-w-xs rounded-xs">
        <div className="flex items-center gap-2 font-mono text-[9px] text-sky-400 tracking-[0.2em] uppercase mb-3">
          <Sparkles className="w-3 h-3 text-sky-400" /> Live Project Diagnostics
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-slate-400">Scale Scope:</span>
            <span className="font-mono text-white font-semibold">{currentSlide.meta.size}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-slate-400">Available Pitch:</span>
            <span className="font-mono text-white font-semibold">{currentSlide.meta.pitch}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Core Tech:</span>
            <span className="font-mono text-sky-400 font-semibold">{currentSlide.meta.tech}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex items-center pt-32 pb-32 sm:pt-40 sm:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            
            {/* Animated Header Category Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentSlide.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                className="editorial-title-badge"
              >
                <span className="w-1.5 h-1.5 bg-sky-450 rounded-full animate-pulse mr-1"></span>
                {currentSlide.badge}
              </motion.div>
            </AnimatePresence>

            <h1
              id="homepage-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.05] mb-4"
            >
              Professional LED Screen Supplier &amp; Installation in Malaysia
            </h1>

            <AnimatePresence mode="wait">
              <motion.h2
                key={`heading-${currentSlide.id}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-tight text-slate-100 leading-tight mb-3"
              >
                {currentSlide.heading}
              </motion.h2>
            </AnimatePresence>

            {/* Tagline Indicator */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`tagline-${currentSlide.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.2 }}
                className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#38bdf8] uppercase ml-0.5 mb-6"
              >
                {currentSlide.tagline}
              </motion.p>
            </AnimatePresence>

            {/* Description Area */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 }}
                className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl pb-4 font-sans"
              >
                {currentSlide.description}
              </motion.p>
            </AnimatePresence>

            {/* Business value parameters */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`biz-${currentSlide.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.35 }}
                className="hidden lg:block mb-8 border border-white/5 bg-[#111827]/70 p-4 sm:p-5 max-w-xl rounded-none text-xs space-y-3 font-sans"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#38bdf8] tracking-wider uppercase shrink-0 w-24 pt-0.5">// TARGET SECTORS:</span>
                  <span className="text-slate-300 font-medium font-sans">{currentSlide.industry}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#38bdf8] tracking-wider uppercase shrink-0 w-24 pt-0.5">// PRACTICAL USE:</span>
                  <span className="text-slate-300 font-medium font-sans">{currentSlide.useCase}</span>
                </div>
                <div className="flex items-start gap-4 leading-relaxed">
                  <span className="font-mono text-[8px] sm:text-[9px] text-emerald-400 tracking-wider uppercase shrink-0 w-24 pt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
                    VALUE BENEFIT:
                  </span>
                  <span className="text-emerald-400 font-bold font-sans">{currentSlide.benefit}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action CTAs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`ctas-${currentSlide.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
              >
                <button
                  onClick={() => onNavigateToSection('solutions-section')}
                  className="editorial-button-primary"
                  id="hero-inquire-btn"
                >
                  Explore Solutions
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="editorial-button-secondary inline-flex items-center justify-center gap-2"
                  id="hero-calc-shortcut-btn"
                >
                  Get a Quote
                </button>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Slide Navigation Manual Steppers */}
      <div className="absolute bottom-8 left-6 sm:left-8 md:left-12 z-20 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="p-2 border border-white/8 bg-[#111827]/80 hover:bg-white hover:text-black hover:border-white transition-all text-white rounded-none cursor-pointer"
          aria-label="Previous image background"
          id="hero-prev-btn"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 border border-white/8 bg-[#111827]/80 hover:bg-white hover:text-black hover:border-white transition-all text-white rounded-none cursor-pointer"
          aria-label="Next image background"
          id="hero-next-btn"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="px-3 py-2 text-xs border border-white/20 text-white">{paused ? 'Play' : 'Pause'}</button>
        {/* Selector slide indicators with simple visual timer rings */}
        <div className="flex items-center gap-2 ml-4">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setSlide(idx)}
              className="py-2 cursor-pointer focus:outline-none"
              aria-label={`Slide target ${idx + 1}`}
              aria-current={idx === index ? "true" : undefined}
              id={`hero-bullet-btn-${idx}`}
            >
              <div className="relative w-8 h-1 bg-white/10 rounded-none overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full bg-sky-400 transition-all ${
                    idx === index ? 'w-full duration-[7000ms] ease-linear' : 'w-0'
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Side Ambient Glowing Lines */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-blue-600/20 to-transparent pointer-events-none" />
    </section>
  );
}
