import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Briefcase, ArrowUpRight, Clock, MapPin, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { OilSpillText } from '@/components/ui/OilSpillText'

interface CareerPageProps {
  onOpenInternshipModal: () => void
}

const CAREER_ROLES = [
  {
    id: 'embed-firmware',
    title: 'Embedded Firmware & Marine Telemetry Engineer',
    type: 'Research Internship / Student Fellow',
    term: 'Spring / Summer 2026 Cohort',
    location: 'VIT Vellore Lab / Hybrid',
    department: 'Robotics & Control Systems',
    description: 'Design and deploy real-time sensor fusion algorithms on dual-core microcontrollers (ESP32-S3 / STM32) with LoRa wireless telemetry for ocean-deployed skimmers.',
    skills: ['C / C++', 'FreeRTOS', 'I2C / SPI / UART', 'Kalman Filtering', 'LoRaWAN'],
    perks: ['Hardware prototype stipend', 'IEEE paper co-authorship', 'Official Lab Certificate'],
  },
  {
    id: 'cfd-fluid',
    title: 'Hydrodynamic CFD & Boundary Layer Analyst',
    type: 'Graduate / Pre-final Residency',
    term: '6-Month Research Track',
    location: 'Technology Tower Lab',
    department: 'Multiphase Fluid Mechanics',
    description: 'Conduct computational multi-phase simulations of oil-water interface behavior under wave agitation, calibrating numerical models against our physical 12m wave flume empirical datasets.',
    skills: ['ANSYS Fluent / OpenFOAM', 'Fluid Mechanics', 'Mesh Generation', 'MATLAB / Python'],
    perks: ['Direct faculty co-supervision', 'Supercomputing GPU cluster access', 'Conference funding'],
  },
  {
    id: 'mech-fabricator',
    title: 'Mechanical Prototyping & CNC Hull Fabricator',
    type: 'Hands-on Engineering Fellowship',
    term: 'Immediate Intake',
    location: 'Mechanical Fabrication Shop',
    department: 'Physical Prototyping Workshop',
    description: 'Lead 3D CAD modeling, multi-axis CNC routing of oleophilic polymer drums, catamaran hull balancing, and waterproof marine-grade electronic enclosure fabrication.',
    skills: ['SolidWorks / Fusion 360', 'CNC Milling / CAM', 'Rapid Prototyping', 'Marine Polymers'],
    perks: ['Full workshop fabrication access', 'Materials & tooling budget', 'Recommendation letters'],
  },
  {
    id: 'mission-control',
    title: 'Telemetry Dashboard & Mission Control Developer',
    type: 'Frontend & Cloud Engineering Intern',
    term: 'Semester Long Project',
    location: 'Flexible / Hybrid',
    department: 'Software Architecture',
    description: 'Build web-based telemetry monitors visualizing real-time recovery metrics, spill map coordinates, battery thermals, and autonomous skimmer heading vectors.',
    skills: ['React / TypeScript', 'Tailwind CSS', 'WebSockets / MQTT', 'Leaflet / Mapbox'],
    perks: ['Portfolio-grade live production deployment', 'Incubation networking', 'Mentorship'],
  },
]

export const CareerPage: React.FC<CareerPageProps> = ({ onOpenInternshipModal }) => {
  return (
    <main className="w-full relative pt-20 bg-[#FAFBFC]">
      <Helmet>
        <title>Career Options & Engineering Fellowships | The Water Crew</title>
        <meta
          name="description"
          content="Explore open engineering positions, student internships, and research fellowships at The Water Crew marine oil spill recovery laboratory."
        />
      </Helmet>

      {/* Clean White Page Header */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-xs font-semibold text-slate-700 bg-white">
              <Briefcase className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
              FELLOWSHIPS & INTERNSHIPS
            </Badge>
            <OilSpillText as="h1" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Career & Engineering Options
            </OilSpillText>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Join our interdisciplinary crew to design, test, and deploy marine hardware. We offer structured research internships and hands-on fellowships for ambitious engineering talent.
            </p>
          </div>
        </div>
      </section>

      {/* Career Roles Listing */}
      <section className="py-20 sm:py-28 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
              OPEN COHORTS
            </Badge>
            <OilSpillText as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Active Research & Engineering Openings
            </OilSpillText>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Select an engineering track below to review responsibilities and submit your candidate portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {CAREER_ROLES.map((role) => (
              <Card key={role.id} className="p-7 sm:p-8 bg-white border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-[#076E73] border border-slate-200">
                      {role.department}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {role.term}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-2">
                    {role.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 font-medium">
                    <span>{role.type}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {role.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Required Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {role.skills.map((skill) => (
                          <span key={skill} className="px-2.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Included Benefits
                      </span>
                      <ul className="space-y-1">
                        {role.perks.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#076E73] shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-slate-500">
                    Rolling evaluations
                  </span>
                  <Button
                    onClick={onOpenInternshipModal}
                    className="bg-[#076E73] hover:bg-[#065A5E] text-white flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer shadow-2xs"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Light CTA Bar */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Looking to submit a general application for the next semester cohort?
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              You can also fill out the unified student candidate form on our Join page.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/join"
              className="px-5 py-2.5 bg-[#076E73] hover:bg-[#065A5E] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-2xs"
            >
              Go to Join Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
