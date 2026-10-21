import React from 'react'
import { motion } from 'framer-motion'
import { Microscope, CheckCircle2, ChevronRight, Activity, Cpu, Wrench } from 'lucide-react'
import { RESEARCH_FACILITIES } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'
import { cn } from '@/utils/cn'

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wide mb-3">
            <Microscope className="w-3.5 h-3.5 text-[#0B2545]" />
            FACILITIES & EXPERIMENTAL RIGS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            State-of-the-Art Research Rigs & Prototyping Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From hydro-flume boundary layer simulations to multi-axis CNC fabrication, our university testing facilities allow rapid empirical iteration on physical skimmer aerodynamics, hydrodynamics, and telemetry systems.
          </p>
        </div>

        {/* Alternating Showcase Rows */}
        <div className="space-y-24 sm:space-y-32">
          {RESEARCH_FACILITIES.map((facility, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: easeEngineering }}
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center',
                  !isEven && 'lg:flex-row-reverse'
                )}
              >
                {/* Image Side */}
                <div
                  className={cn(
                    'lg:col-span-7 relative group',
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  )}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm aspect-[16/10]">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                    {/* Facility Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#0B2545] text-xs font-bold rounded-lg border border-slate-200/80 shadow-sm">
                        {facility.badge}
                      </span>
                    </div>

                    {/* Technical Metric Float */}
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white rounded-xl px-4 py-2.5 shadow-lg">
                      <div className="text-[10px] uppercase font-bold text-slate-400">
                        {facility.metricLabel}
                      </div>
                      <div className="text-sm font-mono font-bold text-sky-400">
                        {facility.metricValue}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={cn(
                    'lg:col-span-5 space-y-5',
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  )}
                >
                  <div className="inline-block">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                      {facility.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Specifications List */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Rig Specifications & Verification Tools
                    </h4>
                    <ul className="space-y-2.5">
                      {facility.specifications.map((spec) => (
                        <li key={spec} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                          <span className="leading-snug">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Micro Lab Status */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Active Lab Operations
                    </span>
                    <span>·</span>
                    <span>Safety Certified</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
