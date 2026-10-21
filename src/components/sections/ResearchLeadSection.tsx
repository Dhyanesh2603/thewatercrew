import React from 'react'
import { Mail, Quote, ExternalLink, Award } from 'lucide-react'
import { RESEARCH_LEAD_DATA } from '@/constants/projectData'
import { LinkedInIcon, GoogleScholarIcon } from '@/components/ui/Icons'

export const ResearchLeadSection: React.FC = () => {
  return (
    <section id="lead" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wide mb-3">
            <Award className="w-3.5 h-3.5 text-[#0B2545]" />
            ACADEMIC ADVISOR & PRINCIPAL INVESTIGATOR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Faculty Leadership & Research Rigor
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every mechanical geometry and surface polymer utilized in our oil skimmer prototype is grounded in peer-reviewed fluid dynamics, governed by academic laboratory leadership at {RESEARCH_LEAD_DATA.institution}.
          </p>
        </div>

        {/* Premium Faculty Profile Container */}
        <div className="bg-[#FAFBFC] rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Portrait & Faculty Links */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm aspect-[4/5] group">
                <img
                  src={RESEARCH_LEAD_DATA.image}
                  alt={RESEARCH_LEAD_DATA.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-[#0D9488] block">
                    Principal Investigator
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {RESEARCH_LEAD_DATA.name}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={RESEARCH_LEAD_DATA.links.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 hover:border-[#0B2545] rounded-xl text-xs font-semibold text-slate-800 hover:text-[#0B2545] transition-all flex items-center justify-between shadow-xs group"
                >
                  <span className="flex items-center gap-2">
                    <GoogleScholarIcon className="w-4 h-4 text-[#0B2545]" />
                    Google Scholar Profile
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0B2545] transition-colors" />
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={RESEARCH_LEAD_DATA.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-white border border-slate-200 hover:border-[#0B2545] rounded-xl text-xs font-semibold text-slate-800 hover:text-[#0B2545] transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-[#0B2545]" />
                    LinkedIn
                  </a>

                  <a
                    href={`mailto:${RESEARCH_LEAD_DATA.links.email}`}
                    className="px-4 py-2.5 bg-[#0B2545] hover:bg-[#133E87] rounded-xl text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>

              {/* Institution Pill */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-600 shadow-2xs">
                <div className="font-semibold text-slate-900">{RESEARCH_LEAD_DATA.institution}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{RESEARCH_LEAD_DATA.department}</div>
              </div>
            </div>

            {/* Right Column: Bio, Metrics, Featured Quote */}
            <div className="lg:col-span-8 space-y-8">
              {/* Profile Title Header */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Faculty Profile
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  {RESEARCH_LEAD_DATA.name}
                </h3>
                <p className="text-base font-semibold text-slate-700 mt-0.5">
                  {RESEARCH_LEAD_DATA.title}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {RESEARCH_LEAD_DATA.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs"
                  >
                    <span className="text-[11px] text-slate-500 block font-medium">
                      {stat.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-mono font-bold text-[#0B2545] mt-1 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Narrative Bio */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Academic Background & Governance
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {RESEARCH_LEAD_DATA.bio}
                </p>
              </div>

              {/* Research Focus Chips */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Research Domains
                </h4>
                <div className="flex flex-wrap gap-2">
                  {RESEARCH_LEAD_DATA.researchFocus.map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Quote */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
                <Quote className="w-8 h-8 text-sky-200 mb-3" />
                <p className="text-sm sm:text-base font-medium text-slate-800 italic leading-relaxed">
                  "{RESEARCH_LEAD_DATA.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-900">— {RESEARCH_LEAD_DATA.name}</span>
                  <span>Research Lead, The Water Crew</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
