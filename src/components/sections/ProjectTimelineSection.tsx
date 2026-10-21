import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GitCommit, Clock, CheckCircle2 } from 'lucide-react'
import { TIMELINE_STAGES } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/utils/cn'

export const ProjectTimelineSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('stage-4')

  return (
    <section id="project" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Clock className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            DEVELOPMENT LIFECYCLE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            From Mathematical Fluidics to Field-Deployable Autonomous Hardware
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The Water Crew follows a rigorous aerospace-grade Stage-Gate engineering methodology. Each phase requires empirical physical validation before moving to the next Technology Readiness Level (TRL).
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Central Vertical Spine Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-12 -translate-x-1/2 w-0.5 bg-slate-200" />

          {/* Timeline Cards */}
          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0
              const isSelected = selectedStageId === stage.id

              return (
                <div
                  key={stage.id}
                  className={cn(
                    'relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-12',
                    isEven ? 'lg:text-right' : ''
                  )}
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={cn(
                      'lg:col-span-5',
                      isEven ? 'lg:order-1' : 'lg:order-3'
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.6, ease: easeEngineering }}
                      onClick={() => setSelectedStageId(stage.id)}
                    >
                      <Card
                        className={cn(
                          'p-6 sm:p-7 transition-all duration-300 cursor-pointer text-left',
                          isSelected
                            ? 'border-[#0B2A3C] shadow-md ring-1 ring-[#0B2A3C]/20'
                            : 'border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-sm'
                        )}
                      >
                        {/* Top Header of Card (No green/pulsing dots) */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
                            STAGE {stage.stageNumber}
                          </span>

                          {stage.status === 'completed' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                              <CheckCircle2 className="w-3 h-3 text-[#076E73]" /> Completed
                            </span>
                          )}
                          {stage.status === 'in-progress' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#076E73] bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                              Current Phase
                            </span>
                          )}
                          {stage.status === 'upcoming' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                              Upcoming
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                          {stage.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {stage.description}
                        </p>

                        {/* Engineering Details List */}
                        <div className="pt-3 border-t border-slate-100 space-y-1.5">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                            Engineering Deliverables
                          </span>
                          {stage.engineeringDetails.map((detail) => (
                            <div key={detail} className="flex items-start gap-2 text-xs text-slate-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#076E73] shrink-0 mt-1.5" />
                              <span className="leading-snug">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Metric Tag */}
                        {stage.metrics && (
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-medium">{stage.metrics.label}:</span>
                            <span className="font-mono font-bold text-[#0B2A3C] bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                              {stage.metrics.value}
                            </span>
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  </div>

                  {/* Center Node Indicator (Desktop) */}
                  <div className="hidden lg:flex lg:col-span-2 lg:order-2 justify-center relative">
                    <div
                      className={cn(
                        'w-9 h-9 rounded-full border flex items-center justify-center bg-white transition-all duration-300 z-10 shadow-2xs',
                        stage.status === 'completed'
                          ? 'border-[#0B2A3C] text-[#0B2A3C]'
                          : stage.status === 'in-progress'
                          ? 'border-[#0B2A3C] text-[#0B2A3C] ring-2 ring-slate-200'
                          : 'border-slate-300 text-slate-400'
                      )}
                    >
                      <GitCommit className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right/Opposite Column - Timeframe & Context */}
                  <div
                    className={cn(
                      'hidden lg:block lg:col-span-5',
                      isEven ? 'lg:order-3 text-left' : 'lg:order-1 text-right'
                    )}
                  >
                    <div className="px-4">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        {stage.timeframe}
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {stage.status === 'completed'
                          ? 'Milestone Verified & Benchmarked'
                          : stage.status === 'in-progress'
                          ? 'Current Benchmarking Underway'
                          : 'Offshore Swarm Field Trials'}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
