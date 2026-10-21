import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, Linkedin, GraduationCap, ArrowUpRight } from 'lucide-react'
import { TEAM_MEMBERS } from '@/constants/projectData'
import { fadeInUp, easeEngineering } from '@/animations/motionVariants'

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wide mb-3">
            <Users className="w-3.5 h-3.5 text-[#0B2545]" />
            CORE ENGINEERING TEAM
          </div>
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
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Member Portrait */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                  {/* Role Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-slate-900 text-[11px] font-bold rounded-lg shadow-xs">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0D9488] mt-0.5">
                    {member.department}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>

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
                    <Linkedin className="w-4 h-4" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
