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
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            ORGANIZATION & MISSION
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Bridging Laboratory Science and Real-World Ocean Protection
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The Water Crew is a deep-tech engineering initiative originating from research laboratories at {STARTUP_META.institution}. We develop autonomous hardware systems engineered to recover maritime hydrocarbon spills at the boundary layer before irreversible coastal damage occurs.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Welcome Narrative & Lab Photo */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Lab Image Frame with Clean Border */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Marine Hydrodynamics Laboratory"
                className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Lab Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                      University Research Base
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      Center for Multiphase Fluid Mechanics
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#0B2545] text-white text-[11px] font-mono font-semibold rounded-lg">
                    VIT VELLORE
                  </span>
                </div>
              </div>
            </div>

            {/* Core Directives Box */}
            <Card className="p-6 sm:p-7 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0B2545]" />
                The Core Thesis
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                “Conventional oil spill containment continues to rely on chemical dispersants that push hydrocarbons below the water column, creating unseen benthic ecological collapse. True environmental mitigation requires high-throughput mechanical recovery at the ocean surface.”
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>The Water Crew Engineering Team</span>
                <span className="font-mono text-slate-700">Prototype Phase</span>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Mission, Vision, Innovation Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mission & Vision Twin Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Mission Card */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.1}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B2545] mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg mb-2">Our Mission</CardTitle>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ABOUT_STARTUP_CONTENT.mission}
                  </p>
                </Card>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.2}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B2545] mb-4">
                    <Compass className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg mb-2">Our Vision</CardTitle>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ABOUT_STARTUP_CONTENT.vision}
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* 4 Engineering Pillars */}
            <Card className="p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0B2545]" />
                  Engineering Foundations
                </h3>
                <span className="text-xs font-semibold text-slate-500">Design Specifications</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_STARTUP_CONTENT.pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: easeEngineering }}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-xs font-bold text-slate-900">{pillar.title}</h4>
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                      {pillar.description}
                    </p>
                    <div className="inline-block px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono font-semibold text-[#0B2545]">
                      {pillar.metric}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Future Roadmap Callout (Solid Deep Ocean Blue, No Gradient) */}
            <div className="bg-[#0B2545] rounded-2xl p-6 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Future Horizon
                </span>
                <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                  {ABOUT_STARTUP_CONTENT.futureRoadmap}
                </p>
              </div>
              <a
                href="#project"
                className="shrink-0 px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-xs"
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
