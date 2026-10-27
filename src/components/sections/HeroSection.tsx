import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, ShieldCheck, Sparkles, Cpu } from 'lucide-react'
import { easeEngineering } from '@/animations/motionVariants'
import { Button } from '@/components/ui/button'
import { OilSpillText } from '@/components/ui/OilSpillText'
import { SkimmerSchematic } from '@/components/schematics/TechnicalSchematics'

export const HeroSection: React.FC = () => {
  const [visualMode, setVisualMode] = useState<'render' | 'blueprint'>('render')

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      const navOffset = 76
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAFBFC] pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Asymmetrical 12-Column Split: Editorial Left + Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          {/* Left Column: Tightly constrained, asymmetric editorial typography */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-left pr-0 lg:pr-4">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#076E73]">
                <Sparkles className="w-3.5 h-3.5" />
                ZIF-8 MOF Sponge Technology
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Patent / Design Registered (IP India)
              </span>
            </div>

            {/* Asymmetrical Big Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: easeEngineering }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 break-words"
            >
              <OilSpillText className="block">
                Intelligent MOF Sponge for Selective Oil Recovery
              </OilSpillText>
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#076E73] block mt-1">
                and Sustainable Biodiesel Production
              </span>
            </motion.h1>

            {/* Constrained Explanatory Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: easeEngineering }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-lg font-normal leading-relaxed"
            >
              A patent-protected marine clean-tech innovation engineered at the Vellore Institute of Technology. Integrating superhydrophobic ZIF-8 Metal-Organic Framework sponges, vacuum suction extraction, and real-time AI & IoT telemetry for pure hydrocarbon recovery.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: easeEngineering }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <Button
                size="lg"
                onClick={() => handleScrollTo('technology')}
                className="flex items-center justify-center gap-2 bg-[#0B2A3C] hover:bg-[#076E73] text-white px-6 shadow-xs w-full sm:w-auto cursor-pointer"
              >
                Explore Technology
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors shadow-2xs w-full sm:w-auto"
              >
                Contact Faculty & Lab
              </Link>
            </motion.div>

            {/* Responsive Metrics Strip from Startup Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="pt-5 sm:pt-6 border-t border-slate-200/90 grid grid-cols-3 gap-2 sm:gap-4 text-left"
            >
              <div className="border-r border-slate-200 pr-2">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Selectivity
                </span>
                <span className="text-base sm:text-xl font-mono font-bold text-[#0B2A3C] mt-0.5 block">
                  100% Oil Only
                </span>
              </div>
              <div className="border-r border-slate-200 pr-2">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Water Ingress
                </span>
                <span className="text-base sm:text-xl font-mono font-bold text-emerald-600 mt-0.5 block">
                  0% (Repelled)
                </span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Circular Value
                </span>
                <span className="text-base sm:text-xl font-mono font-bold text-slate-900 mt-0.5 block">
                  Biodiesel
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Frame with Mode Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeEngineering }}
            className="lg:col-span-6 xl:col-span-6 relative w-full"
          >
            {/* View Mode Switcher Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Vessel Prototype Visual
              </span>
              <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl">
                <button
                  type="button"
                  onClick={() => setVisualMode('render')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    visualMode === 'render'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  3D Sea Visual
                </button>
                <button
                  type="button"
                  onClick={() => setVisualMode('blueprint')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    visualMode === 'blueprint'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  CAD Blueprint
                </button>
              </div>
            </div>

            {/* Architectural Frame with Offset Shadow */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-md sm:shadow-xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] group w-full">
              {visualMode === 'render' ? (
                <div className="relative w-full h-full">
                  <img
                    src="/hero-mof-skimmer.jpg"
                    alt="Intelligent MOF Sponge Skimmer Operating on Marine Oil Spill"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Asymmetrical Top-Right Tag */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-2xs text-left">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                      Autonomous Vessel
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0B2A3C]">
                      MOF Skimmer Pod
                    </span>
                  </div>

                  {/* Asymmetrical Bottom-Left Cover Caption */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-sky-300 block mb-0.5">
                      Vellore Institute of Technology · CO2 RGTC
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      Selective Hydrocarbon Uptake via ZIF-8 Nanocrystal Sponge Matrix
                    </h3>
                  </div>
                </div>
              ) : (
                <SkimmerSchematic className="w-full h-full" />
              )}
            </div>

            {/* Asymmetric Offset Floating Accent Pill */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center font-mono font-bold text-sm text-[#076E73] border border-sky-100">
                <Cpu className="w-5 h-5 text-[#076E73]" />
              </div>
              <div className="text-left pr-2">
                <span className="text-xs font-bold text-slate-900 block">
                  AI & IoT Telemetry
                </span>
                <span className="text-[11px] text-slate-500">
                  Real-time GPS & oil level monitoring
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden lg:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          type="button"
          onClick={() => handleScrollTo('about')}
          className="group flex flex-col items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors focus:outline-none cursor-pointer"
          aria-label="Scroll down to startup overview"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase text-slate-400 group-hover:text-slate-700">
            Scroll to Explore
          </span>
          <div className="w-7 h-7 rounded-full border border-slate-200 bg-white shadow-2xs flex items-center justify-center group-hover:border-slate-300">
            <ArrowDown className="w-3.5 h-3.5 text-slate-500 animate-bounce" />
          </div>
        </button>
      </motion.div>
    </section>
  )
}
