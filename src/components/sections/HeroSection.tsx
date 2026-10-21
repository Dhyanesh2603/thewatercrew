import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Activity, ShieldCheck, Cpu, Waves } from 'lucide-react'
import { HERO_FLOATING_CARD, STARTUP_META } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'

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
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAFBFC] pt-28 pb-16 lg:py-24"
    >
      {/* Light Theme Hydrodynamic Video Layer with Clean Luminous Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80"
          className="w-full h-full object-cover opacity-20 filter saturate-150 contrast-110"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-ocean-waves-loop-1191-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Clean Light Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFC]/80 via-[#FAFBFC]/90 to-[#FAFBFC]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFC] via-white/80 to-sky-50/50" />

        {/* Blueprint Coordinate Technical Grid (Subtle Light) */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #0B2545 1px, transparent 1px), linear-gradient(to bottom, #0B2545 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Academic Lab Identification Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeEngineering }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-700">
                {STARTUP_META.institution} · {STARTUP_META.stage}
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeEngineering }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Engineering the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2545] via-[#133E87] to-[#0D9488]">
                Oil Spill Recovery
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeEngineering }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              Next-generation autonomous oleophilic skimmer systems developed through university laboratory research. High-capacity, continuous marine oil extraction engineered for turbulent coastal waters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeEngineering }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('project')}
                className="px-6 py-3.5 bg-[#0B2545] text-white font-bold text-sm rounded-xl hover:bg-[#133E87] transition-all duration-200 flex items-center gap-2 shadow-md shadow-[#0B2545]/15 active:scale-[0.98]"
              >
                Explore Project
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 bg-white text-slate-800 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-all duration-200 border border-slate-200/90 shadow-xs hover:border-slate-300 active:scale-[0.98]"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-600 border-t border-slate-200/80"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B2545]" />
                <span>Patented Oleophilic Geometry</span>
              </div>
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4 text-[#0D9488]" />
                <span>Wave Flume Validated</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#133E87]" />
                <span>Autonomous Telemetry</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Technical Status Card (Pure Light Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeEngineering }}
            className="lg:col-span-5"
          >
            <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xl text-slate-900">
              {/* Card Header */}
              <div className="flex items-start justify-between pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      Live Telemetry Stream
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {HERO_FLOATING_CARD.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {HERO_FLOATING_CARD.institution} · {HERO_FLOATING_CARD.trl}
                  </p>
                </div>

                <div className="px-3 py-1 bg-sky-50 border border-sky-200 text-[#0B2545] rounded-lg text-xs font-mono font-semibold">
                  REV 2.4
                </div>
              </div>

              {/* Status Tags */}
              <div className="grid grid-cols-2 gap-2.5 my-5 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Stage</span>
                  <span className="font-semibold text-slate-900">Prototype Stage (TRL 5)</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Foundation</span>
                  <span className="font-semibold text-slate-900">Research Based</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Structure</span>
                  <span className="font-semibold text-slate-900">Student Startup</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Affiliation</span>
                  <span className="font-semibold text-slate-900">VIT Vellore</span>
                </div>
              </div>

              {/* Live Metric Benchmarks */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <Activity className="w-3.5 h-3.5 text-[#0B2545]" />
                    Oil Recovery Efficiency
                  </span>
                  <span className="font-mono font-bold text-[#0B2545]">94.2%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '94.2%' }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-[#0B2545] to-[#0D9488] h-full rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-600">Throughput Capacity</span>
                  <span className="font-mono font-bold text-slate-900">1,800 L/hr</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Viscosity Range</span>
                  <span className="font-mono font-bold text-slate-900">Up to 50,000 cSt</span>
                </div>
              </div>

              {/* Card Footer Micro-note */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Lab Wave Frequency: 0.85 Hz</span>
                <span className="text-[#0D9488] font-mono font-semibold">NOMINAL</span>
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <button
          type="button"
          onClick={() => handleScrollTo('about')}
          className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors focus:outline-none"
          aria-label="Scroll down to startup overview"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase text-slate-500 group-hover:text-slate-800">
            Scroll to Explore Research
          </span>
          <div className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-xs flex items-center justify-center group-hover:border-slate-400 group-hover:bg-slate-50 transition-all">
            <ArrowDown className="w-4 h-4 text-slate-600 animate-bounce" />
          </div>
        </button>
      </motion.div>
    </section>
  )
}
