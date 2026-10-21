import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, Sparkles, Wrench, Layers, ArrowUpRight } from 'lucide-react'
import { ABOUT_STARTUP_CONTENT, STARTUP_META } from '@/constants/projectData'
import { fadeInUp, easeEngineering } from '@/animations/motionVariants'
import { Card, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const StartupSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical Section Header: Offset Left with Tight Max-Width */}
        <div className="mb-16 max-w-2xl">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            FOUNDATION & DIRECTIVES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Bridging Laboratory Science and Real-World Ocean Protection
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
            Originating from research laboratories at {STARTUP_META.institution}, The Water Crew develops autonomous hardware systems engineered to recover maritime hydrocarbon spills at the boundary layer before irreversible coastal damage occurs.
          </p>
        </div>

        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side (5 Columns): Lab Photo Frame & Theses Callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Architectural Lab Image with Asymmetric Floating Caption */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Marine Hydrodynamics Laboratory"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Lab Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                  Research Base
                </span>
                <span className="text-xs font-bold text-slate-900 block">
                  Center for Multiphase Fluid Mechanics
                </span>
                <span className="text-[11px] text-[#0B2545] font-mono font-semibold">
                  VIT Vellore Campus
                </span>
              </div>
            </div>

            {/* Core Directives Box */}
            <Card className="p-6 sm:p-7 space-y-3 bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0B2545]" />
                The Core Thesis
              </span>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                “Conventional oil spill containment continues to rely on chemical dispersants that push hydrocarbons below the water column, creating unseen benthic ecological collapse. True environmental mitigation requires high-throughput mechanical recovery at the ocean surface.”
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>The Water Crew Team</span>
                <span className="font-mono text-[#0B2545]">TRL 5 Physical Stage</span>
              </div>
            </Card>
          </motion.div>

          {/* Right Side (7 Columns): Staggered, Asymmetric Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Mission Card: Wide Architectural Presence */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.1}
            >
              <Card className="p-7 sm:p-8 hover:shadow-md transition-shadow bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B2545]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Primary Directive
                    </span>
                    <CardTitle className="text-xl">Our Mission</CardTitle>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {ABOUT_STARTUP_CONTENT.mission}
                </p>
              </Card>
            </motion.div>

            {/* Asymmetrical 2-Column: Vision + Key Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.15}
                className="sm:col-span-7"
              >
                <Card className="p-6 h-full flex flex-col justify-between hover:shadow-md transition-shadow bg-white">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B2545] mb-3">
                      <Compass className="w-4 h-4" />
                    </div>
                    <CardTitle className="text-lg mb-2">Our Vision</CardTitle>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ABOUT_STARTUP_CONTENT.vision}
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.2}
                className="sm:col-span-5"
              >
                <Card className="p-6 h-full flex flex-col justify-between bg-slate-50 border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                    Ecological Impact
                  </span>
                  <div>
                    <span className="text-2xl font-mono font-bold text-[#0B2545] block">
                      100%
                    </span>
                    <span className="text-xs font-semibold text-slate-800 block mt-1">
                      Mechanical Extraction
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      Zero chemical dispersants required in marine remediation.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* 4 Engineering Pillars: Asymmetric Staggered Grid */}
            <Card className="p-6 sm:p-7 bg-white">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0B2545]" />
                  Engineering Foundations
                </h3>
                <span className="text-xs font-mono font-medium text-slate-400">Design Specifications</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ABOUT_STARTUP_CONTENT.pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06, ease: easeEngineering }}
                    className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold text-slate-900">{pillar.title}</h4>
                      <Layers className="w-3 h-3 text-slate-400" />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                      {pillar.description}
                    </p>
                    <span className="inline-block px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono font-semibold text-[#0B2545]">
                      {pillar.metric}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Solid Deep Ocean Blue Callout */}
            <div className="bg-[#0B2545] rounded-2xl p-6 text-white shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Future Horizon
                </span>
                <p className="text-xs sm:text-sm text-slate-200 max-w-md leading-relaxed">
                  {ABOUT_STARTUP_CONTENT.futureRoadmap}
                </p>
              </div>
              <a
                href="#project"
                className="shrink-0 px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                View Timeline
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
