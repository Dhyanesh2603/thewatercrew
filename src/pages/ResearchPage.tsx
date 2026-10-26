import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Microscope, FileText, ArrowRight, Cpu, Activity } from 'lucide-react'
import { ResearchSection } from '@/components/sections/ResearchSection'
import { OilSpillText } from '@/components/ui/OilSpillText'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const PUBLICATIONS = [
  {
    id: 'pub-1',
    title: 'Boundary Layer Oleophilic Drum Dynamics in Turbulent Multi-Phase Marine Flows',
    venue: 'International Journal of Multiphase Flow & Ocean Technology',
    year: '2025',
    type: 'Peer-Reviewed Journal',
    doi: '10.1016/j.ijmultflow.2025.10489',
    abstract: 'Investigates boundary-layer viscous adhesion of high-viscosity petroleum slicks on grooved oleophilic polymer cylinders under controlled 1.2 m/s simulated sea swell conditions.',
  },
  {
    id: 'pub-2',
    title: 'Autonomous Wave-Following Skimmer Navigation Using Kalman Filter IMU Sensor Fusion',
    venue: 'IEEE Oceans Symposium on Marine Autonomy',
    year: '2024',
    type: 'Conference Proceeding',
    doi: '10.1109/OCEANS.2024.98124',
    abstract: 'Details an adaptive pitch-control mechanism keeping the recovery weir positioned exactly within the 3mm surface hydrocarbon film during turbulent wave regimes.',
  },
  {
    id: 'pub-3',
    title: 'Benchmarking Hydrocarbon-to-Water Separation Efficiency Across Variable Oleophilic Polymer Substrates',
    venue: 'Marine Pollution Bulletin & Clean Seas Working Group',
    year: '2024',
    type: 'Technical Report',
    doi: '10.1016/j.marpolbul.2024.1162',
    abstract: 'Comparative study of textured HDPE, polyurethane, and fluoropolymer coatings for maximal recovery throughput and minimal water co-collection.',
  },
]

export const ResearchPage: React.FC = () => {
  return (
    <main className="w-full relative pt-20 bg-[#FAFBFC]">
      <Helmet>
        <title>Research & Experimental Facilities | The Water Crew</title>
        <meta
          name="description"
          content="Explore The Water Crew's research facilities, 12-meter wave flume test rig, multi-phase fluid dynamic modeling, and published marine clean-tech literature."
        />
      </Helmet>

      {/* Clean White Page Header (Matches existing light theme, zero dark cyberpunk blocks) */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-xs font-semibold text-slate-700 bg-white">
              <Microscope className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
              ACADEMIC LABORATORY & RIGS
            </Badge>
            <OilSpillText as="h1" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Research & Experimental Infrastructure
            </OilSpillText>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From our 12-meter wave-flume boundary-layer testbed to high-precision CNC polymer engineering, our experimental facilities yield verifiable empirical datasets for autonomous ocean cleanup.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 text-xs">
              <div className="px-4 py-2.5 rounded-xl bg-[#FAFBFC] border border-slate-200 flex items-center gap-2 shadow-2xs">
                <Activity className="w-4 h-4 text-[#076E73]" />
                <span className="text-slate-500 font-medium">Recovery Efficiency:</span>
                <span className="text-slate-900 font-bold font-mono">94.8% at Sea State 3</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-[#FAFBFC] border border-slate-200 flex items-center gap-2 shadow-2xs">
                <Cpu className="w-4 h-4 text-[#076E73]" />
                <span className="text-slate-500 font-medium">Telemetry Frequency:</span>
                <span className="text-slate-900 font-bold font-mono">50 Hz Real-Time Sampling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Facilities Section */}
      <ResearchSection />

      {/* Publications & Whitepapers */}
      <section className="py-20 sm:py-28 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
              <FileText className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
              PEER-REVIEWED LITERATURE & WHITE PAPERS
            </Badge>
            <OilSpillText as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Published Research & Technical Reports
            </OilSpillText>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Our research team regularly publishes empirical findings in international journals and conference proceedings, advancing mechanical oil-water separation science.
            </p>
          </div>

          <div className="space-y-6">
            {PUBLICATIONS.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="p-6 sm:p-8 bg-white border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-[#076E73] border border-slate-200">
                          {pub.type}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {pub.year} · {pub.venue}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {pub.abstract}
                      </p>
                      <div className="pt-1 text-xs font-mono text-slate-500">
                        DOI: <span className="text-[#076E73] underline">{pub.doi}</span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center gap-2 shrink-0">
                      <Link
                        to="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-[#076E73] text-white hover:bg-[#065A5E] transition-colors shadow-2xs"
                      >
                        <span>Request Paper</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Light CTA Bar (Zero dark cyberpunk background) */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Interested in Joint Flume Trials or Sponsoring Research?
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              We welcome academic institutions, maritime companies, and government environmental boards for joint testing programs.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#076E73] hover:bg-[#065A5E] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-2xs"
            >
              Contact Lab Lead
            </Link>
            <Link
              to="/team"
              className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-2xs"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
