import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, ExternalLink, GraduationCap, Award } from 'lucide-react'
import { TEAM_MEMBERS } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { OilSpillText } from '@/components/ui/OilSpillText'

export const TeamSection: React.FC = () => {
  const leadMember = TEAM_MEMBERS[0] // Dr. J. Ranjitha
  const studentEngineers = TEAM_MEMBERS.slice(1) // Sunilkumar, Deeptiman, Shreyash, Jayaharini

  return (
    <section id="team" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Users className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            THE RESEARCH & ENGINEERING TEAM
          </Badge>
          <OilSpillText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Interdisciplinary Innovation Across Engineering Disciplines
          </OilSpillText>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
            Originating from research laboratories at the Vellore Institute of Technology, our team unites materials science, mechanical design, embedded IoT electronics, and cloud software to engineer autonomous marine oil recovery systems.
          </p>
        </div>

        {/* Featured Faculty Lead Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: easeEngineering }}
          className="mb-12"
        >
          <Card className="p-8 sm:p-10 bg-[#FAFBFC] border-slate-200/90 shadow-xs">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Circular Faculty Photo */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1 bg-white border-4 border-slate-200 shadow-md ring-4 ring-sky-200/50">
                  <img
                    src={leadMember.image}
                    alt={leadMember.name}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <Badge variant="slate" className="mt-3 text-[11px] font-bold">
                  <Award className="w-3 h-3 text-[#076E73] mr-1" />
                  Team Lead & PI
                </Badge>
              </div>

              {/* Lead Details */}
              <div className="space-y-4 flex-1 text-center md:text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#076E73]">
                    {leadMember.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {leadMember.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    {leadMember.department}
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                  {leadMember.bio}
                </p>

                {/* Specialties */}
                <div className="pt-2 flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {leadMember.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Actions & Links */}
                <div className="pt-2 flex flex-wrap items-center gap-3 justify-center md:justify-start">
                  <a
                    href={`mailto:${leadMember.email}`}
                    className="px-4 py-2 bg-[#0B2A3C] hover:bg-[#076E73] text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{leadMember.email}</span>
                  </a>

                  {leadMember.scholar && (
                    <a
                      href={leadMember.scholar}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs transition-colors"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-[#076E73]" />
                      <span>Scholar Profile</span>
                    </a>
                  )}

                  <a
                    href={leadMember.portfolioUrl || 'https://vit.ac.in'}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <span>VIT Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 4 Core Student Engineers (Clean 4-Column Responsive Grid) */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Department Project Leads
            </span>
            <span className="text-xs font-mono font-semibold text-[#076E73]">
              4 Engineering Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentEngineers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: easeEngineering }}
              >
                <Card className="h-full flex flex-col p-6 bg-white hover:shadow-lg transition-all duration-300 border-slate-200/90 group">
                  {/* Photo Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-200/80 shadow-2xs">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-900 rounded-lg shadow-xs block truncate">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 flex-1 flex flex-col">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {member.name}
                      </h4>
                      <p className="text-xs font-medium text-[#076E73] mt-0.5 line-clamp-1">
                        {member.department}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 flex-1">
                      {member.bio}
                    </p>

                    {/* Specialties Chips */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                      {member.specialties.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-[10px] font-mono text-slate-600"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Contact Link */}
                    <div className="pt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#076E73] transition-colors font-medium"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span className="truncate">{member.email}</span>
                      </a>
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
