import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Sliders, Eye, Zap, Weight, Maximize2, ShieldAlert, CheckCircle, Info, Landmark, Check } from 'lucide-react';

export default function ProductCalculator() {
  const [seriesMode, setSeriesMode] = useState<'Corporate' | 'Retail' | 'Outdoor'>('Corporate');
  const [pitch, setPitch] = useState<number>(1.2);
  const [width, setWidth] = useState<number>(6.0); // Meters
  const [height, setHeight] = useState<number>(3.375); // Meters (perfect 16:9 aspect ratio standard)

  // Mapping pitch values for each environment to prevent unrealistic configurations
  const pitchOptions = {
    Corporate: [0.9, 1.2, 1.5, 1.8],
    Retail: [1.8, 2.0, 2.5, 3.0],
    Outdoor: [4.0, 5.0, 6.0, 8.0]
  };

  // Adjust pitch dynamically when seriesMode shifts
  const handleSeriesChange = (mode: 'Corporate' | 'Retail' | 'Outdoor') => {
    setSeriesMode(mode);
    setPitch(pitchOptions[mode][0]);
    if (mode === 'Outdoor') {
      setWidth(12.0);
      setHeight(6.0);
    } else if (mode === 'Corporate') {
      setWidth(4.8);
      setHeight(2.7);
    } else {
      setWidth(8.0);
      setHeight(4.5);
    }
  };

  // Intermediate calculations
  const specs = useMemo(() => {
    const area = width * height;
    
    // Pixel count calculations
    const pixelsW = Math.round((width * 1000) / pitch);
    const pixelsH = Math.round((height * 1000) / pitch);
    const totalPixels = pixelsW * pixelsH;

    // Categorization
    let resolutionCategory = 'Standard Definition';
    if (totalPixels >= 33177600) {
      resolutionCategory = '8K UHD Cinema Master';
    } else if (totalPixels >= 8294400) {
      resolutionCategory = '4K UHD Fine Resolution';
    } else if (totalPixels >= 2073600) {
      resolutionCategory = 'Full HD Broadcast Grade';
    } else if (totalPixels >= 921600) {
      resolutionCategory = 'HD Standard Commercial';
    } else {
      resolutionCategory = 'LD Utility Dot-Matrix';
    }

    // Weight parameters based on series
    const weightFactor = seriesMode === 'Corporate' ? 15 : seriesMode === 'Retail' ? 12 : 38; // kg/sqm
    const totalWeight = Math.round(area * weightFactor);

    // Power draw (W/sqm)
    const peakPowerFactor = seriesMode === 'Corporate' ? 580 : seriesMode === 'Retail' ? 620 : 850;
    const avgPowerFactor = Math.round(peakPowerFactor * 0.33);
    const peakPowerKw = ((area * peakPowerFactor) / 1000).toFixed(2);
    const avgPowerKw = ((area * avgPowerFactor) / 1000).toFixed(2);

    // Optimal Viewing Distances (metrical)
    // 1) Minimum distance to avoid pixelation = pitch * 1 (approx)
    // 2) Optimal visual comfort sweet spot = pitch * 2.0 to 3.0 meters
    const minViewingDistance = (pitch * 1.0).toFixed(1);
    const sweetSpotMin = (pitch * 1.5).toFixed(1);
    const sweetSpotMax = (pitch * 3.0).toFixed(1);

    return {
      area: area.toFixed(2),
      pixelsW,
      pixelsH,
      totalPixels: (totalPixels / 1000000).toFixed(2), // In millions
      resolutionCategory,
      totalWeight,
      peakPowerKw,
      avgPowerKw,
      minViewingDistance,
      sweetSpotMin,
      sweetSpotMax
    };
  }, [width, height, pitch, seriesMode]);

  return (
    <section id="calculator-section" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/2 via-transparent to-indigo-600/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="editorial-title-badge">
            <Sliders className="w-3 h-3 text-sky-450" /> NATIONWIDE PLANNING DESK
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-none">
            Malaysian Layout & Pitch Calculator
          </h2>
          <div className="mt-4 w-12 h-[1px] bg-white/20 mx-auto"></div>
          <p className="mt-5 text-sm text-slate-400 font-sans leading-relaxed">
            Professional indoor & outdoor LED configurations across Malaysia. Estimate your custom resolution standards, viewing distances, and peak power loads calibrated for domestic commercial grids.
          </p>
        </div>

        {/* Triple Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: Inputs & Parameters (Col-span 5) */}
          <div className="lg:col-span-5 bg-[#111827] border border-white/8 p-6 sm:p-8 rounded-none shadow-xl space-y-6">
            <div>
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-sky-400 font-mono text-xs font-bold">[01]</span>
                Project Application Setup
              </h3>
              
              {/* Target environment selector */}
              <div className="grid grid-cols-3 gap-2">
                {(['Corporate', 'Retail', 'Outdoor'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => handleSeriesChange(mode)}
                    className={`px-3 py-2.5 rounded-none text-[10px] font-bold font-display uppercase tracking-widest text-center cursor-pointer transition-all border ${
                      seriesMode === mode
                        ? 'bg-white border-white text-black font-extrabold'
                        : 'bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-sky-400 font-mono text-xs font-bold">[02]</span>
                Choose Pixel Pitch (mm)
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {pitchOptions[seriesMode].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPitch(p)}
                    className={`py-2 rounded-none font-mono text-xs font-bold border cursor-pointer transition-all ${
                      pitch === p
                        ? 'bg-blue-600/15 border-blue-500 text-sky-400'
                        : 'bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    P{p}
                  </button>
                ))}
              </div>
              <p className="mt-2.5 text-[10px] text-slate-400 font-sans flex items-center gap-1.5 leading-normal">
                <Info className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                Pixel pitch defines physical distance between diodes. Narrower pitch increases resolution.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-sky-400 font-mono text-xs font-bold">[03]</span>
                Physical Dimensions
              </h3>
              <div className="space-y-4">
                
                {/* Width Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-sans">
                    <span className="text-slate-400 font-semibold">Width:</span>
                    <span className="font-mono text-white font-bold">{width.toFixed(1)} Meters</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="24.0"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer h-[2px] bg-white/10"
                    aria-label="Screen Width in meters"
                  />
                </div>

                {/* Height Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-sans">
                    <span className="text-slate-400 font-semibold">Height:</span>
                    <span className="font-mono text-white font-bold">{height.toFixed(1)} Meters</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="12.0"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer h-[2px] bg-white/10"
                    aria-label="Screen Height in meters"
                  />
                </div>
              </div>
              
              {/* Presets Button Links */}
              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 text-xs">
                <span className="text-slate-400 font-semibold shrink-0">Presets:</span>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  <button
                    onClick={() => { setWidth(4.8); setHeight(2.7); }}
                    className="bg-transparent border border-white/10 hover:border-white px-2.5 py-1 text-slate-300 font-mono text-[10px] transition cursor-pointer"
                  >
                    16:9 Mid
                  </button>
                  <button
                    onClick={() => { setWidth(9.6); setHeight(5.4); }}
                    className="bg-transparent border border-white/10 hover:border-white px-2.5 py-1 text-slate-300 font-mono text-[10px] transition cursor-pointer"
                  >
                    16:9 Lrg
                  </button>
                  <button
                    onClick={() => { setWidth(12.0); setHeight(4.0); }}
                    className="bg-transparent border border-white/10 hover:border-white px-2.5 py-1 text-slate-300 font-mono text-[10px] transition cursor-pointer"
                  >
                    3:1 Ext
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMN 2: Schematic & Blueprint Scale Layout (Col-span 4) */}
          <div className="lg:col-span-4 bg-[#111827] border border-white/8 p-6 sm:p-8 rounded-none shadow-xl flex flex-col h-full justify-between">
            <div>
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="text-sky-400 font-mono text-xs font-bold">[04]</span>
                  Display Scale Diagram
                </span>
                <span className="font-mono text-[8px] text-sky-400 uppercase tracking-widest border border-blue-500/30 px-2 py-0.5 bg-blue-600/5 rounded-none">
                  {width.toFixed(1)}mx{height.toFixed(1)}m
                </span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                Comparison diagram of the specified display footprint size adjacent to a typical human silhouette (1.8m tall).
              </p>
            </div>

            {/* Simulated Schematic Stage */}
            <div className="relative bg-white/[0.01] border border-white/8 h-[280px] rounded-none flex items-end justify-center p-6 mb-4 overflow-hidden led-reflection-glow">
              
              {/* Floor grid horizontal reflection */}
              <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-blue-600/10 to-transparent border-t border-white/5 pointer-events-none" />
              
              {/* Screen Boundary box representing exact aspect ratio preview */}
              <div className="relative flex flex-col justify-between items-center transition-all duration-300"
                   style={{
                     width: `${Math.max(40, Math.min(95, (width / 24) * 100))}%`,
                     height: `${Math.max(40, Math.min(85, (height / 12) * 100))}%`,
                     maxHeight: '220px'
                   }}
               >
                {/* Visual LED Wall Grid background with Neon stroke */}
                <div className="absolute inset-0 bg-[#0B1120] border-2 rounded-none shadow-2xl transition-all border-blue-600 flex flex-col items-center justify-center p-2 text-center select-none overflow-hidden"
                     style={{
                       gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
                       backgroundImage: 'radial-gradient(circle, rgba(37, 99, 213, 0.4) 1px, transparent 1px)',
                       backgroundSize: '7px 7px'
                     }}
                >
                  {/* Subtle active screen core glow */}
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl pointer-events-none" />
                  
                  {/* Overlay specification texts */}
                  <div className="relative z-10 space-y-1">
                    <p className="font-display font-extrabold text-[12px] md:text-[14px] text-white tracking-tight uppercase leading-none truncate">
                      SGL P{pitch}
                    </p>
                    <p className="font-mono text-[9px] text-sky-400 font-bold uppercase leading-none">
                      {specs.pixelsW} × {specs.pixelsH}
                    </p>
                  </div>
                </div>
              </div>

              {/* Human figure representation silhouette scaled correctly */}
              <div className="absolute bottom-6 left-6 z-10 flex flex-col items-center select-none"
                   style={{
                     height: `${Math.max(25, Math.min(75, (1.8 / 12) * 100))}%`,
                     maxHeight: '100px'
                   }}
              >
                {/* SVG Human icon vector body */}
                <svg className="h-full w-auto text-slate-500 fill-current filter drop-shadow opacity-90 transition duration-200" viewBox="0 0 100 200">
                  <circle cx="50" cy="20" r="16" />
                  <path d="M50,42c-15.5,0-28,12.5-28,28v45c0,4.4,3.6,8,8,8h6v65c0,5.5,4.5,10,10,10h8c5.5,0,10-4.5,10-10v-65h6c4.4,0,8-3.6,8-8V70C78,54.5,65.5,42,50,42z" />
                </svg>
                <span className="font-mono text-[7px] text-slate-400 tracking-widest uppercase bg-[#111827] px-1.5 py-0.5 border border-white/8 rounded-none mt-1">
                  1.8m Human
                </span>
              </div>
            </div>

            {/* Specs Category Banner */}
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-none text-center">
              <span className="font-sans text-[9px] tracking-widest text-slate-400 font-semibold uppercase block">RESOLUTION CLASSIFICATION</span>
              <span className="font-display font-black text-xs text-sky-400 tracking-[0.1em] uppercase block mt-1">
                {specs.resolutionCategory}
              </span>
            </div>
          </div>

          {/* COLUMN 3: Real Calculated Specifications (Col-span 3) */}
          <div className="lg:col-span-3 bg-[#111827] border border-white/8 p-6 sm:p-8 rounded-none shadow-xl space-y-6">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="text-sky-400 font-mono text-xs font-bold">[05]</span>
              Dynamic Outputs
            </h3>

            {/* Area Box */}
            <div className="space-y-4">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-none flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-none border border-white/10 text-sky-400">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] tracking-widest text-slate-400 font-sans font-semibold uppercase leading-tight mb-0.5">Total LED Area</span>
                  <span className="font-mono text-sm text-white font-extrabold leading-none">{specs.area} sqm</span>
                </div>
              </div>

              {/* Total Pixel Count Box */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-none flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-none border border-white/10 text-sky-400">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] tracking-widest text-slate-400 font-sans font-semibold uppercase leading-tight mb-0.5">Total Pixels</span>
                  <span className="font-mono text-sm text-white font-extrabold leading-none">{specs.totalPixels}M Pixels</span>
                </div>
              </div>

              {/* Active Dry weight Box */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-none flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-none border border-white/10 text-sky-400">
                  <Weight className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] tracking-widest text-slate-400 font-sans font-semibold uppercase leading-tight mb-0.5">Static Weight</span>
                  <span className="font-mono text-sm text-white font-extrabold leading-none">~{specs.totalWeight} Kg</span>
                </div>
              </div>

              {/* Electric power consumption requirement */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-none flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-none border border-white/10 text-sky-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] tracking-widest text-slate-400 font-sans font-semibold uppercase leading-tight mb-1">Power Draw</span>
                  <span className="font-mono text-xs text-white font-bold block leading-none">Peak: {specs.peakPowerKw} kW</span>
                  <span className="font-mono text-[10px] text-slate-400 block mt-1 leading-none">Avg load: {specs.avgPowerKw} kW</span>
                </div>
              </div>
            </div>

            {/* Optimal safe viewing distance rules */}
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-none">
              <span className="font-display font-bold text-[10px] text-sky-400 tracking-[0.2em] uppercase block mb-3 border-b border-white/5 pb-2">Viewing Distances</span>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Min safe distance:</span>
                  <span className="font-mono text-white font-bold">{specs.minViewingDistance}m</span>
                </div>
                <div className="flex justify-between text-xs pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">Sweet-spot:</span>
                  <span className="font-mono text-sky-400 font-bold">{specs.sweetSpotMin}m - {specs.sweetSpotMax}m</span>
                </div>
                <p className="text-[10px] text-slate-400 italic pt-1 leading-normal font-sans">
                  Stand outside of {specs.minViewingDistance}m to achieve premium, seamless fusion (pixels coalesce beautifully).
                </p>
              </div>
            </div>

            {/* Proudly Malaysian Local Service & Execution Guarantees */}
            <div className="p-5 bg-blue-600/[0.02] border border-blue-500/20 rounded-none space-y-3">
              <span className="font-display font-bold text-[10px] text-sky-400 tracking-[0.2em] uppercase block border-b border-blue-500/10 pb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block animate-pulse"></span>
                NATIONWIDE MALAYSIAN EXECUTION
              </span>
              <ul className="space-y-2 text-[10px] text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  Kuala Lumpur HQ Project Desk
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  Semenyih & Borneo Rigging Crews
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  48h Local Spare Parts Standby
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  Full Site Assessment Safeguard
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
