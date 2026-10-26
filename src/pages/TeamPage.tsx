import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Users, ArrowRight, Compass } from 'lucide-react'
import { TeamSection } from '@/components/sections/TeamSection'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { OilSpillText } from '@/components/ui/OilSpillText'

const SUB_DOMAINS = [
  {
    title: 'Hydrodynamics & Flume Modeling',
    lead: 'Mechanical & Fluid Systems Team',
    desc: 'Empirical wave-flume calibration, CFD boundary layer analysis, and drum surface micro-texture optimization for maximal oil collection rates.',
    tools: ['ANSYS Fluent', 'OpenFOAM', '12m Wave Flume', 'Laser Doppler Velocimetry'],
  },
  {
    title: 'Autonomous Navigation & Embedded Telemetry',
    lead: 'Robotics & Control Systems Team',
    desc: 'Dual ESP32-S3 and STM32 architecture handling real-time IMU sensor fusion, surface wave adaptation, and long-range LoRa marine telemetry.',
    tools: ['FreeRTOS', 'LoRaWAN 868MHz', 'Edge Sensor Fusion', 'Sub-meter GNSS'],
  },
  {
    title: 'Rapid Prototyping & Hull Fabrication',
    lead: 'Physical Prototyping Workshop',
    desc: 'Precision CNC machining of marine-grade oleophilic polymers, buoyant catamaran hull balancing, and sealed marine electronic enclosures.',
    tools: ['3-Axis CNC Router', 'TIG Welded Aluminum 5083', 'PETG / HDPE', 'Vacuum Sealing'],
  },
]

export const TeamPage: React.FC = () => {
  return (
    <main className="w-full relative pt-20">
      <Helmet>
        <title>Core Engineering Team | The Water Crew</title>
        <meta
          name="description"
          content="Meet The Water Crew's research engineers, student innovators, and faculty advisor Dr. J Ranjitha at the Vellore Institute of Technology."
        />
      </Helmet>

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D14] to-[#0E1A27] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-xs font-semibold text-cyan-300 border-cyan-500/30 bg-cyan-950/40">
              <Users className="w-3.5 h-3.5 text-[#00F0FF] mr-1.5" />
              PEOPLE & LAB ARCHITECTS
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Multidisciplinary Engineering Team
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Led by faculty mentorship and driven by undergraduate engineers, our crew brings together robotics, mechanical prototyping, and multi-phase fluid mechanics to solve marine environmental challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <TeamSection />

      {/* Engineering Sub-domains */}
      <section className="py-24 sm:py-32 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
              <Compass className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
              LABORATORY DIVISIONS
            </Badge>
            <OilSpillText as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Specialized Engineering Sub-Teams
            </OilSpillText>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Every prototype iteration involves parallel workstreams across fluid mechanics, robotics hardware, and rapid hull fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUB_DOMAINS.map((domain) => (
              <Card key={domain.title} className="p-7 bg-white border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#076E73] block mb-2">
                    {domain.lead}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Tools & Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.tools.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Callout */}
      <section className="py-16 bg-[#070D14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Want to Build Autonomous Marine Hardware With Us?
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              We recruit ambitious student engineers every academic semester for our fluid dynamics and robotics cohort.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/join"
              className="px-6 py-3 bg-[#00F0FF] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
            >
              <span>Explore Join Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
