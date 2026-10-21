import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, GraduationCap, ExternalLink } from 'lucide-react'
import { TEAM_MEMBERS } from '@/constants/projectData'
import { easeEngineering } from '@/animations/motionVariants'
import { LinkedInIcon } from '@/components/ui/Icons'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Users className="w-3.5 h-3.5 text-[#0B2545] mr-1.5" />
            CORE ENGINEERING TEAM
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Multidisciplinary Engineering & Systems Design
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our student-led engineering team combines academic hydrodynamics expertise, embedded systems architecture, and precision mechanical fabrication to bring the oil skimmer from lab theory to sea reality.
          </p>
        </div>

        {/* 3-Column Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: easeEngineering }}
              className="flex"
            >
              <Card className="flex flex-col justify-between overflow-hidden group hover:shadow-md hover:border-slate-300 transition-all duration-300 w-full">
                <div>
                  {/* Non-Gender-Specific Neutral Avatar Placeholder (Matching User Reference Image 1) */}
                  <div className="p-8 pb-4 flex flex-col items-center justify-center bg-slate-50/60 border-b border-slate-100">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden p-1 bg-white border-2 border-slate-200 shadow-2xs group-hover:border-[#0B2545] transition-colors">
                      <img
                        src="/avatar-placeholder.png"
                        alt={member.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <Badge variant="slate" className="mt-4 text-[11px] font-bold">
                      {member.role}
                    </Badge>
                  </div>

                  {/* Member Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {member.department}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Dr. J Ranjitha Portfolio Website Redirect Button */}
                    {member.portfolioUrl && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <a
                          href={member.portfolioUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0B2545] hover:text-[#133E87] transition-all shadow-2xs"
                        >
                          <span>View Faculty Portfolio</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    {/* Specialties Pills */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5">
                        {member.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-[11px] font-mono font-medium text-slate-700"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Social Links */}
                <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Connect</span>
                  <div className="flex items-center gap-2">
                    {member.scholar && (
                      <a
                        href={member.scholar}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B2545] hover:text-[#0B2545] text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                        aria-label={`${member.name} Google Scholar`}
                      >
                        <GraduationCap className="w-4 h-4" />
                      </a>
                    )}

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B2545] hover:text-[#0B2545] text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B2545] hover:text-[#0B2545] text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
