import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { STARTUP_META } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const HeroSection: React.FC = () => {
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
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAFBFC] pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Asymmetrical 12-Column Split: Editorial Left + Half-Page Cover Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Tightly constrained, asymmetric editorial typography */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left pr-0 lg:pr-4">
            {/* Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: easeEngineering }}
            >
              <Badge variant="outline" className="px-3.5 py-1 text-xs font-semibold text-slate-700 bg-white shadow-2xs">
                {STARTUP_META.institution} · {STARTUP_META.stage}
              </Badge>
            </motion.div>

            {/* Asymmetrical Big Headline with Fluid Oil Spillage Animation inside text */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: easeEngineering }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900"
            >
              <span className="oil-spill-text block">
                Engineering the Future of Oil Spill Recovery
              </span>
            </motion.h1>

            {/* Tightly Constrained Text - Doesn't flow across the whole page */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: easeEngineering }}
              className="text-base sm:text-lg text-slate-600 max-w-lg font-normal leading-relaxed"
            >
              Autonomous oleophilic skimmer prototypes developed through university laboratory research. High-throughput mechanical separation engineered to collect marine hydrocarbons directly at the boundary layer.
            </motion.p>

            {/* Action Buttons (Solid Colors, No Gradients) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: easeEngineering }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={() => handleScrollTo('project')}
                className="flex items-center gap-2 bg-[#0B2545] hover:bg-[#133E87] text-white px-6 shadow-xs"
              >
                Explore Project
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScrollTo('contact')}
                className="px-6 text-slate-800"
              >
                Contact Lab
              </Button>
            </motion.div>

            {/* Asymmetrical Inline Metrics Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="pt-6 border-t border-slate-200/90 flex items-center gap-6 text-left"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Recovery Efficiency
                </span>
                <span className="text-xl font-mono font-bold text-[#0B2545]">
                  94.2%
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Viscosity Tolerance
                </span>
                <span className="text-xl font-mono font-bold text-slate-900">
                  50,000 cSt
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Testing Status
                </span>
                <span className="text-xl font-mono font-bold text-slate-900">
                  TRL 5 Flume
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Half-Page Editorial Visual Cover / Architectural Photo Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeEngineering }}
            className="lg:col-span-6 xl:col-span-6 relative"
          >
            {/* Architectural Frame with Offset Shadow */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] group">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80"
                alt="Marine Hydrodynamics Skimmer Surface Vessel"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Light Clean Framing Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Asymmetrical Top-Right Technical Specification Tag */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200/90 shadow-xs text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Vessel Spec
                </span>
                <span className="text-xs font-mono font-bold text-[#0B2545]">
                  MK-2 Oleophilic Catamaran
                </span>
              </div>

              {/* Asymmetrical Bottom-Left Cover Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-300 block mb-0.5">
                  Center for Multiphase Fluid Mechanics
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Hydrodynamic Wave Flume & Rapid Mechanical Recovery
                </h3>
              </div>
            </div>

            {/* Asymmetric Offset Floating Accent Pill */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-mono font-bold text-sm text-[#0B2545]">
                12m
              </div>
              <div className="text-left pr-2">
                <span className="text-xs font-bold text-slate-900 block">
                  Wave Flume Testing
                </span>
                <span className="text-[11px] text-slate-500">
                  Laminar flow boundary layer trials
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
        className="hidden md:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
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
