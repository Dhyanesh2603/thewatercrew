import React from 'react'
import { Mail, ExternalLink, Award, Play, Microscope, FlaskConical } from 'lucide-react'
import { RESEARCH_LEAD_DATA } from '@/constants/projectData'
import { LinkedInIcon, GoogleScholarIcon } from '@/components/ui/Icons'

export const ResearchLeadSection: React.FC = () => {
  return (
    <section id="lead" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Tag */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wide mb-3">
            <Award className="w-3.5 h-3.5 text-[#076E73]" />
            FACULTY LEADERSHIP & RESEARCH RIGOR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Academic Governance & Research Direction
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every interfacial surface geometry, ZIF-8 Metal-Organic Framework nanocomposite, and vacuum extraction mechanism is grounded in rigorous peer-reviewed science at {RESEARCH_LEAD_DATA.institution}.
          </p>
        </div>

        {/* Academic Profile Card - Styled Exactly like the University Faculty Layout Reference */}
        <div className="bg-[#FAFBFC] rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Circular Faculty Portrait & Laboratory Demonstration Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
              {/* Big Circular Photo with Elegant Ring & Shadow */}
              <div className="relative w-56 h-56 sm:w-68 sm:h-68 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-sky-300/40 bg-slate-100 shrink-0 mx-auto lg:mx-0">
                <img
                  src={RESEARCH_LEAD_DATA.image}
                  alt={RESEARCH_LEAD_DATA.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Lab Demonstration Card (Matches Video Card in Faculty Reference) */}
              <div className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src="/startup-assets/mof_lab_petridish_test.png"
                    alt="Laboratory MOF Sponge Selective Oil Absorption Trial"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Play badge / Lab Verification Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[11px] font-semibold">
                    <div className="w-4 h-4 rounded-full bg-rose-600 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 fill-white" />
                    </div>
                    <span>Lab Demonstration</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-sky-300 block">
                      CO2 RGTC Laboratory Trials
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                      Selective Oil Absorption in Saline Water
                    </h4>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <FlaskConical className="w-3.5 h-3.5 text-[#076E73]" />
                    ZIF-8 Hydrophobic MOF Sponge
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#076E73]">
                    100% Oil Selective
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Faculty Details, Email, Appointments List, Bio */}
            <div className="lg:col-span-7 space-y-6">
              {/* Name & Academic Rank */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {RESEARCH_LEAD_DATA.name}, Ph.D.
                </h3>
                <p className="text-base sm:text-lg italic text-slate-600 mt-1 font-serif">
                  {RESEARCH_LEAD_DATA.officialRole}, {RESEARCH_LEAD_DATA.department}
                </p>
                <div className="mt-2.5">
                  <a
                    href={`mailto:${RESEARCH_LEAD_DATA.email}`}
                    className="text-sm font-semibold text-sky-600 hover:text-sky-800 underline decoration-sky-300 underline-offset-4 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4" />
                    {RESEARCH_LEAD_DATA.email}
                  </a>
                </div>
              </div>

              {/* Academic Appointments & Focus Areas (Bulleted list matching reference layout) */}
              <div className="space-y-2 pt-1 border-t border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Research Specializations & Governance
                </span>
                <ul className="space-y-2 text-sm text-slate-700">
                  {RESEARCH_LEAD_DATA.affiliations.map((affil, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#076E73] mt-2 shrink-0" />
                      <span className="leading-snug font-medium">{affil}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exact Narrative Bio provided by User */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  About the Teacher
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  {RESEARCH_LEAD_DATA.bio}
                </p>
              </div>

              {/* 4 Stats Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {RESEARCH_LEAD_DATA.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs"
                  >
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                      {stat.label}
                    </span>
                    <span className="text-lg font-mono font-bold text-[#0B2A3C] mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* External Profile Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={RESEARCH_LEAD_DATA.links.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white border border-slate-200 hover:border-[#0B2A3C] rounded-xl text-xs font-semibold text-slate-800 hover:text-[#0B2A3C] transition-all flex items-center gap-2 shadow-xs"
                >
                  <GoogleScholarIcon className="w-3.5 h-3.5 text-[#076E73]" />
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={RESEARCH_LEAD_DATA.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white border border-slate-200 hover:border-[#0B2A3C] rounded-xl text-xs font-semibold text-slate-800 hover:text-[#0B2A3C] transition-all flex items-center gap-2 shadow-xs"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#076E73]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={RESEARCH_LEAD_DATA.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white border border-slate-200 hover:border-[#0B2A3C] rounded-xl text-xs font-semibold text-slate-800 hover:text-[#0B2A3C] transition-all flex items-center gap-2 shadow-xs"
                >
                  <Microscope className="w-3.5 h-3.5 text-[#076E73]" />
                  <span>VIT Faculty Directory</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
