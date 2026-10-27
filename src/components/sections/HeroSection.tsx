import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
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
            
            {/* Asymmetrical Big Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: easeEngineering }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 break-words"
            >
              <OilSpillText className="block">
                Autonomous Surface Skimmer for Selective Oil Recovery
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
              An innovative marine clean-tech vessel engineered at the Vellore Institute of Technology. Integrating superhydrophobic recovery materials and continuous vacuum suction extraction for high-throughput hydrocarbon recovery.
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

          {/* Right Column: Hero Visual Frame with Mode Switcher (Clean, Zero Text Overlap) */}
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

            {/* Architectural Frame - Completely Clean with Zero Text Overlap */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-md sm:shadow-xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full">
              {visualMode === 'render' ? (
                <div className="relative w-full h-full">
                  <img
                    src="/hero-mof-skimmer.jpg"
                    alt="Autonomous Hydrophobic Skimmer Operating on Marine Oil Spill"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <SkimmerSchematic className="w-full h-full" />
              )}
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
