import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, GraduationCap, ExternalLink } from 'lucide-react'
import { TEAM_MEMBERS } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'
import { LinkedInIcon } from '@/components/ui/Icons'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { OilSpillText } from '@/components/ui/OilSpillText'

export const TeamSection: React.FC = () => {
  const leadMember = TEAM_MEMBERS[0] // Dr. J Ranjitha
  const studentEngineers = TEAM_MEMBERS.slice(1) // Software & Mechanical

  return (
    <section id="team" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Section Header */}
        <div className="max-w-2xl mb-16">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Users className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            CORE ENGINEERING TEAM
          </Badge>
          <OilSpillText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Multidisciplinary Engineering & Systems Design
          </OilSpillText>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
            Our student-led engineering team combines academic hydrodynamics expertise, embedded systems architecture, and precision mechanical fabrication to bring the oil skimmer from lab theory to sea reality.
          </p>
        </div>

        {/* Asymmetrical Grid: Featured Lead Card (7 cols) + Dual Staggered Cards (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Faculty Lead Card (7 Columns, Horizontal Asymmetry) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: easeEngineering }}
            className="lg:col-span-7"
          >
            <Card className="p-7 sm:p-9 bg-[#FAFBFC] border-slate-200/90 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                {/* Neutral Avatar (from user uploaded image 1) */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1 bg-white border-2 border-slate-200 shadow-xs">
                    <img
                      src="/avatar-placeholder.png"
                      alt={leadMember.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <Badge variant="slate" className="mt-3 text-[10px] font-bold">
                    Faculty Lead
                  </Badge>
                </div>

                {/* Details & Portfolio Redirect Link */}
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#076E73]">
                      {leadMember.role}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                      {leadMember.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {leadMember.department}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leadMember.bio}
                  </p>

                  {/* Portfolio Website Link (Requested by User) */}
                  <div className="pt-2">
                    <a
                      href={leadMember.portfolioUrl || 'https://vit.ac.in'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200/90 text-xs font-bold text-[#0B2A3C] hover:text-[#076E73] rounded-xl shadow-2xs transition-colors"
                    >
                      <span>View Faculty Portfolio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Specialties */}
                  <div className="pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                    {leadMember.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-medium text-slate-700 shadow-2xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex items-center gap-2 pt-2">
                    {leadMember.scholar && (
                      <a
                        href={leadMember.scholar}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B2A3C] hover:text-[#0B2A3C] text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                        aria-label="Google Scholar"
                      >
                        <GraduationCap className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={leadMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B2A3C] hover:text-[#0B2A3C] text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`mailto:${leadMember.email}`}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B2A3C] hover:text-[#0B2A3C] text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Student Engineering Leads (5 Columns, Staggered Vertical Stack) */}
          <div className="lg:col-span-5 space-y-6">
            {studentEngineers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: easeEngineering }}
              >
                <Card className="p-5 sm:p-6 bg-white hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* Neutral Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden p-0.5 bg-white border border-slate-200 shrink-0">
                      <img
                        src="/avatar-placeholder.png"
                        alt={member.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {member.name}
                          </h4>
                          <span className="text-xs font-semibold text-[#076E73] block">
                            {member.role}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0B2A3C] flex items-center justify-center transition-colors"
                          >
                            <LinkedInIcon className="w-3 h-3" />
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0B2A3C] flex items-center justify-center transition-colors"
                          >
                            <Mail className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {member.specialties.slice(0, 3).map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/70 text-[10px] font-mono text-slate-600"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
