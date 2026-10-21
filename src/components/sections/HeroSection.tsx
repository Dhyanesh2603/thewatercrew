import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ShieldCheck, Cpu, Waves } from 'lucide-react'
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAFBFC] pt-32 pb-20 lg:py-32"
    >
      {/* Light Theme Hydrodynamic Video Layer with Clean Luminous Overlay (No Background Grid) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80"
          className="w-full h-full object-cover opacity-15 filter saturate-150 contrast-110"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-ocean-waves-loop-1191-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Clean Plain Overlay - No grids */}
        <div className="absolute inset-0 bg-[#FAFBFC]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Academic Lab Identification Pill (No green dot, no active tag) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeEngineering }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white shadow-2xs">
            {STARTUP_META.institution} · {STARTUP_META.stage}
          </Badge>
        </motion.div>

        {/* Primary Headline with Animated Oil Spillage Effect Inside the Font (No Blue Gradient) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeEngineering }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          <span className="oil-spill-text block">
            Engineering the Future of Oil Spill Recovery
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeEngineering }}
          className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-8"
        >
          Next-generation autonomous oleophilic skimmer systems developed through university laboratory research. High-capacity, continuous marine oil extraction engineered for turbulent coastal waters.
        </motion.p>

        {/* CTA Buttons (Solid Colors, No Gradients) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeEngineering }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Button
            size="lg"
            onClick={() => handleScrollTo('project')}
            className="flex items-center gap-2 bg-[#0B2545] hover:bg-[#133E87] text-white shadow-xs"
          >
            Explore Project
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScrollTo('contact')}
            className="text-slate-800"
          >
            Contact Lab
          </Button>
        </motion.div>

        {/* High-Level Benchmarks Strip (Clean Solid Row, No Telemetry Box) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easeEngineering }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-left"
        >
          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
              Recovery Efficiency
            </span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-[#0B2545] mt-0.5 block">
              94.2%
            </span>
          </div>

          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
              Throughput Capacity
            </span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-900 mt-0.5 block">
              1,800 L/hr
            </span>
          </div>

          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
              Viscosity Tolerance
            </span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-900 mt-0.5 block">
              50,000 cSt
            </span>
          </div>

          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
              Project Status
            </span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-900 mt-0.5 block">
              TRL 5 Lab
            </span>
          </div>
        </motion.div>

        {/* Technical Validation Badges (No green dots) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 text-xs font-semibold text-slate-600"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0B2545]" />
            <span>Patented Oleophilic Geometry</span>
          </div>
          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4 text-[#0B2545]" />
            <span>12m Wave Flume Validated</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#0B2545]" />
            <span>Autonomous Guidance</span>
          </div>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          type="button"
          onClick={() => handleScrollTo('about')}
          className="group flex flex-col items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors focus:outline-none"
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
