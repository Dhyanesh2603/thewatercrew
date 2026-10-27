import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, Sparkles, Wrench, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { ABOUT_STARTUP_CONTENT, STARTUP_META } from '@/constants/projectData'
import { fadeInUp } from '@/animations/motionVariants'
import { Card, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { OilSpillText } from '@/components/ui/OilSpillText'

export const StartupSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical Section Header */}
        <div className="mb-16 max-w-2xl">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <ShieldCheck className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            FOUNDATION & DIRECTIVES
          </Badge>
          <OilSpillText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Bridging Laboratory Science and Real-World Ocean Protection
          </OilSpillText>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
            Originating from research laboratories at {STARTUP_META.institution}, The Water Crew develops autonomous hardware systems engineered with hydrophobic MOF sponges to recover marine hydrocarbon spills at the boundary layer without secondary water collection.
          </p>
        </div>

        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side (5 Columns): Lab CAD Design Frame & Theses Callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* 3D CAD Skimmer Design Showcase from Presentation Slide 16 */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm aspect-[4/3] group p-2">
              <img
                src="/startup-assets/slide_16_skimmer_cad_design.png"
                alt="3D CAD Design of Autonomous MOF Skimmer with Intellectual Property India Registration"
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-[#076E73]">
                  Design Filed · IP India
                </span>
              </div>
            </div>

            {/* Core Directives Box */}
            <Card className="p-6 sm:p-7 space-y-3 bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#076E73]" />
                The Core Thesis
              </span>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                “Conventional skimmers pull in massive amounts of water, consuming high operational energy and requiring expensive onshore separation. Our ZIF-8 hydrophobic MOF sponge repels water entirely, capturing pure hydrocarbons that feed directly into clean biodiesel synthesis.”
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>The Water Crew · VIT</span>
                <span className="font-mono text-[#0B2A3C]">TRL 5 Prototyping</span>
              </div>
            </Card>
          </motion.div>

          {/* Right Side (7 Columns): Staggered Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Mission Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.1}
            >
              <Card className="p-7 sm:p-8 hover:shadow-md transition-shadow bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#076E73]">
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
                    <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#076E73] mb-3">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Long-Term Vision
                    </span>
                    <CardTitle className="text-lg mb-2">Circular Marine Remediation</CardTitle>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ABOUT_STARTUP_CONTENT.vision}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#076E73]">
                    <span>Target SDGs: 6, 13, 14</span>
                    <ArrowUpRight className="w-4 h-4" />
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
                <Card className="p-6 h-full flex flex-col justify-between hover:shadow-md transition-shadow bg-[#0B2A3C] text-white">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sky-400 mb-3">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-sky-300 block mb-1">
                      Patent Status
                    </span>
                    <CardTitle className="text-lg mb-2 text-white">Intellectual Property</CardTitle>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Novel hydrodynamic pod geometry and internal roller mechanism filed with the Government of India Patent Office.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono text-emerald-300">
                    IP India Registered
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* 4 Pillars Horizontal Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {ABOUT_STARTUP_CONTENT.pillars.map((pillar) => (
                <div key={pillar.title} className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                    {pillar.title}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#076E73] mt-1 block">
                    {pillar.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
