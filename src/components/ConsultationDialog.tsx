import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, X, Send, CheckCircle, Calculator, FileText, Zap, RefreshCw } from 'lucide-react';
import { LedDisplayProduct } from '../types';

interface ConsultationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: LedDisplayProduct | null;
}

export default function ConsultationDialog({ isOpen, onClose, preselectedProduct }: ConsultationDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Corporate',
    width: 6.0,
    height: 3.375,
    pitch: 1.2,
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prefill when preselectedProduct changes
  useState(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedProduct.series,
        pitch: preselectedProduct.pitches[0] || 1.2
      }));
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setLoading(true);
    // Simulate real high-end enterprise pricing collation server transaction
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'Corporate',
      width: 6.0,
      height: 3.375,
      pitch: 1.2,
      message: ''
    });
    setFormSubmitted(false);
  };

  // Live price indicator estimation
  const livePriceEstimate = useMemoEstimate(
    formData.width,
    formData.height,
    formData.pitch,
    formData.projectType
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Dark Backdrop modal blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-[#111827] border border-white/8 rounded-none shadow-2xl w-full max-w-3xl overflow-hidden z-10"
          >
            
            {/* Top Close Actuator button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-none text-slate-400 hover:text-white hover:bg-white/5 transition"
              aria-label="Close dialog modal"
              id="close-dialog-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left accent column / Top banner for branding */}
            <div className="bg-white/[0.01] border-b border-white/10 p-6 flex items-center gap-3">
              <div className="bg-white/5 p-2.5 rounded-none border border-white/8">
                <PhoneCall className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
                  SGL Enterprise Layout Planner
                </h3>
                <p className="font-mono text-[8px] text-sky-400 uppercase tracking-[0.2em] leading-none mt-1 font-bold">
                  Request Commercial RFQ Bid — RM100k+ Scale Installations
                </p>
              </div>
            </div>

            {/* Dialog Scroll Body */}
            <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Two-Column input matrix */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Column A: Contact Details */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-xs text-sky-400 tracking-[0.15em] uppercase border-b border-white/5 pb-1.5 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-sky-400" /> Client Corporate Identity
                      </h4>
                      
                      {/* Name input */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1" htmlFor="client-name">
                          Contact Person *
                        </label>
                        <input
                          id="client-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Saisyah Zainal"
                          className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white placeholder-slate-650 focus:outline-none"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1" htmlFor="client-company">
                          Company Name *
                        </label>
                        <input
                          id="client-company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. SGL Malaysia Sdn Bhd"
                          className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white placeholder-slate-650 focus:outline-none"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1" htmlFor="client-email">
                          Corporate Email Address *
                        </label>
                        <input
                          id="client-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. partner@sgl.com"
                          className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white placeholder-slate-650 focus:outline-none"
                        />
                      </div>

                      {/* Phone contact */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1" htmlFor="client-phone">
                          Contact Phone number
                        </label>
                        <input
                          id="client-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +60 12-345 6789"
                          className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white placeholder-slate-650 focus:outline-none"
                        />
                      </div>

                    </div>

                    {/* Column B: Layout Specification & Quote Prefills */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-xs text-sky-400 tracking-[0.15em] uppercase border-b border-white/5 pb-1.5 flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-sky-400" /> Screen layout Scope Settings
                      </h4>

                      {/* Application Selector */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1">
                          Product Series Application
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white focus:outline-none"
                          aria-label="Product series selector"
                        >
                          <option value="Corporate">Corporate Lobby series (COB Onyx)</option>
                          <option value="Retail">Retail Atrium series (Horizon Curving)</option>
                          <option value="Outdoor">Outdoor Skyscraper series (Titan Billboard)</option>
                        </select>
                      </div>

                      {/* Dimension parameters side-by-side */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1" htmlFor="field-width">
                            Width (Meters)
                          </label>
                          <input
                            id="field-width"
                            type="number"
                            min="1.0"
                            max="50.0"
                            step="0.5"
                            value={formData.width}
                            onChange={(e) => setFormData({ ...formData, width: parseFloat(e.target.value) || 1.0 })}
                            className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white focus:outline-none font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1" htmlFor="field-height">
                            Height (Meters)
                          </label>
                          <input
                            id="field-height"
                            type="number"
                            min="1.0"
                            max="30.0"
                            step="0.5"
                            value={formData.height}
                            onChange={(e) => setFormData({ ...formData, height: parseFloat(e.target.value) || 1.0 })}
                            className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white focus:outline-none font-mono"
                          />
                        </div>
                      </div>

                      {/* Live Valuation Estimate block */}
                      <div className="bg-[#0b1120] p-5 border border-white/8 rounded-none relative overflow-hidden">
                        <span className="block text-[9px] text-[#38bdf8] font-mono tracking-[0.2em] uppercase mb-1">LIVE ESTIMATED VALUE SHEET</span>
                        <div className="flex justify-between items-baseline">
                          <span className="font-display font-black text-2xl text-white tracking-tighter">
                            {livePriceEstimate}
                          </span>
                          <span className="font-mono text-[8px] text-slate-500 font-bold uppercase tracking-wider">
                            Approx total budget
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-450 text-slate-400 leading-normal mt-2 flex items-center gap-1.5 border-t border-white/5 pt-2">
                          <Zap className="w-3.5 h-3.5 text-blue-500" /> Calculates based on core sizing footprint & structural parameters.
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Wide Message and notes area */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans font-bold mb-1" htmlFor="project-desc">
                      Scope parameters and site notes
                    </label>
                    <textarea
                      id="project-desc"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify installation requirements (e.g., floor mounting depth, curving angle, custom brackets)..."
                      className="w-full bg-[#0b1120] border border-white/8 focus:border-blue-500 px-3 py-2.5 rounded-none text-xs text-white placeholder-slate-650 focus:outline-none font-sans"
                    />
                  </div>

                  {/* Submission and error verification */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] text-slate-400 font-sans leading-normal max-w-sm">
                      *By clicking submit, your project blueprints are compiled and routed directly to our specialist bidding division.
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-white text-black hover:bg-slate-200 transition-all font-display text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-none cursor-pointer disabled:opacity-55 flex items-center justify-center gap-1.5"
                      id="submit-rfq-btn"
                    >
                      {loading ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Compiling Specs Plan...
                        </>
                      ) : (
                        <>
                          Submit Project Plan <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                <div className="py-12 text-center max-w-md mx-auto space-y-6">
                  <div className="inline-flex p-4 bg-blue-600/15 border border-blue-500/20 rounded-none text-sky-400 mb-2">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight leading-none mb-2">
                    Project Plan Compiled!
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. SGL has locked your custom plan for <strong className="text-white">{formData.company}</strong> estimated at <strong className="text-sky-400">{livePriceEstimate}</strong>.
                  </p>
                  <p className="text-xs text-slate-400 font-sans leading-normal border-t border-white/5 pt-4">
                    Our Kuala Lumpur senior bidding architect will telephone you within 4 business hours to finalize structures and physical scope variables.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-transparent hover:bg-white hover:text-black border border-white/10 text-white font-display text-[10px] font-bold uppercase tracking-widest rounded-none cursor-pointer transition"
                      id="submit-another-btn"
                    >
                      Configure another LED display
                    </button>
                  </div>
                </div>
              )}

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Custom hook helper to compute approximate RM pricing dynamically
function useMemoEstimate(width: number, height: number, pitch: number, type: string) {
  const area = width * height;
  let multiplier = 5000;
  if (type === 'Corporate') multiplier = 8500;
  if (type === 'Retail') multiplier = 5800;
  if (type === 'Outdoor') multiplier = 4200;

  // Surcharge for finer pitches
  const pitchFactor = pitch <= 1.2 ? 1.4 : pitch <= 2.0 ? 1.15 : 0.95;

  const totalEstimate = Math.round(area * multiplier * pitchFactor);
  
  if (isNaN(totalEstimate) || totalEstimate <= 0) {
    return 'RM 100,000+';
  }

  // Format currency
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    maximumFractionDigits: 0
  }).format(totalEstimate).replace('MYR', 'RM');
}
