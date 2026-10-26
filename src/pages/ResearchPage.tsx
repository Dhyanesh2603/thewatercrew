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
    <main className="w-full relative pt-20">
      <Helmet>
        <title>Research & Experimental Facilities | The Water Crew</title>
        <meta
          name="description"
          content="Explore The Water Crew's research facilities, 12-meter wave flume test rig, multi-phase fluid dynamic modeling, and published marine clean-tech literature."
        />
      </Helmet>

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D14] to-[#0E1A27] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-xs font-semibold text-cyan-300 border-cyan-500/30 bg-cyan-950/40">
              <Microscope className="w-3.5 h-3.5 text-[#00F0FF] mr-1.5" />
              ACADEMIC LABORATORY & RIGS
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Research & Experimental Infrastructure
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              From our 12-meter wave-flume boundary-layer testbed to high-precision CNC polymer engineering, our experimental facilities yield verifiable empirical datasets for autonomous ocean cleanup.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
              <div className="px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-slate-400">Recovery Efficiency:</span>
                <span className="text-white font-bold">94.8% at Sea State 3</span>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-slate-400">Telemetry Frequency:</span>
                <span className="text-white font-bold">50 Hz Real-Time Sampling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Facilities Component */}
      <ResearchSection />

      {/* Publications & Whitepapers */}
      <section className="py-24 sm:py-32 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
              <FileText className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
              PEER-REVIEWED LITERATURE & WHITE PAPERS
            </Badge>
            <OilSpillText as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Published Research & Technical Reports
            </OilSpillText>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Our research team regularly publishes empirical findings in international journals and conference proceedings, advancing mechanical oil-water separation science.
            </p>
          </div>

          <div className="space-y-6">
            {PUBLICATIONS.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-md transition-shadow">
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
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-[#0B2A3C] text-white hover:bg-[#076E73] transition-colors"
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

      {/* Call to Action Bar */}
      <section className="py-16 bg-[#070D14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Interested in Joint Flume Trials or Sponsoring Research?
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              We welcome academic institutions, maritime companies, and government environmental boards for joint testing programs.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#00F0FF] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              Contact Lab Lead
            </Link>
            <Link
              to="/team"
              className="px-5 py-3 border border-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
