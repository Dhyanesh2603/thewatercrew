import React from 'react'
import { motion } from 'framer-motion'
import { Microscope, CheckCircle2 } from 'lucide-react'
import { RESEARCH_FACILITIES } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'
import { Badge } from '@/components/ui/badge'
import { OilSpillText } from '@/components/ui/OilSpillText'
import { cn } from '@/utils/cn'
import {
  FlumeLabSchematic,
  CncMachiningSchematic,
} from '@/components/schematics/TechnicalSchematics'

const renderFacilityVisual = (id: string, className?: string) => {
  switch (id) {
    case 'fluid-mechanics-lab':
      return <FlumeLabSchematic className={className} />
    case 'prototype-machining-cell':
      return <CncMachiningSchematic className={className} />
    case 'telemetry-bench':
      return (
        <div className={`relative w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center ${className}`}>
          <img
            src="/startup-assets/mof_lab_petridish_test.png"
            alt="Laboratory Hydrocarbon Separation Test"
            className="w-full h-full object-cover"
          />
        </div>
      )
    default:
      return <FlumeLabSchematic className={className} />
  }
}

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Microscope className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            FACILITIES & EXPERIMENTAL RIGS
          </Badge>
          <OilSpillText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            State-of-the-Art Research Rigs & Prototyping Infrastructure
          </OilSpillText>
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
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-sm aspect-[16/10]">
                    {renderFacilityVisual(facility.id, 'w-full h-full')}

                    {/* Facility Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#0B2A3C] text-xs font-bold rounded-lg border border-slate-200/80 shadow-xs">
                        {facility.badge}
                      </span>
                    </div>

                    {/* Technical Metric Float (Light Theme) */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 shadow-md">
                      <div className="text-[10px] uppercase font-bold text-slate-500">
                        {facility.metricLabel}
                      </div>
                      <div className="text-sm font-mono font-bold text-[#076E73]">
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
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
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
                          <CheckCircle2 className="w-4 h-4 text-[#076E73] shrink-0 mt-0.5" />
                          <span className="leading-snug">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lab Status (No green dot, no active tag) */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                    <span>Verified Flume Testing Protocols</span>
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
