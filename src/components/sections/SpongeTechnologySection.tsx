import React, { useState } from 'react'
import { Sparkles, CheckCircle2, XCircle, Fuel, Globe, Waves, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { OilSpillText } from '@/components/ui/OilSpillText'
import { COMPETITOR_COMPARISON, TARGET_SDGS } from '@/constants/projectData'

export const SpongeTechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'solution' | 'comparison' | 'impact'>('solution')

  return (
    <section id="technology" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Sparkles className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            RECOVERY TECHNOLOGY & PROCESS
          </Badge>
          <OilSpillText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Engineered for Selective Marine Oil Recovery
          </OilSpillText>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            By combining advanced superhydrophobic materials with continuous vacuum suction and real-time IoT monitoring, our recovery vessel captures surface hydrocarbons without collecting seawater.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('solution')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'solution'
                ? 'bg-[#0B2A3C] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            How the Technology Works
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'comparison'
                ? 'bg-[#0B2A3C] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Traditional Skimmers vs Our Model
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('impact')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'impact'
                ? 'bg-[#0B2A3C] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Environmental Impact & UN SDGs
          </button>
        </div>

        {/* TAB 1: How the Technology Works (Public High-Level Overview) */}
        {activeTab === 'solution' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Feature 1: Selective Oil Absorption */}
              <Card className="p-7 bg-white border-slate-200/90 hover:shadow-md transition-shadow space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#076E73]">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Selective Oil Collection</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Our superhydrophobic recovery sponge actively repels water while attracting hydrocarbons. This eliminates the excessive water collection that hampers traditional marine cleanup vessels.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#076E73]">
                    100% Selective Surface Pickup
                  </span>
                </div>
              </Card>

              {/* Feature 2: Continuous Vacuum Suction */}
              <Card className="p-7 bg-white border-slate-200/90 hover:shadow-md transition-shadow space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Vacuum-Assisted Continuous Recovery</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Integrated vacuum suction transfers extracted hydrocarbons directly into storage tanks while the reusable sponge continues rotating, delivering non-stop operation with minimal manpower.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    Continuous High Throughput
                  </span>
                </div>
              </Card>

              {/* Feature 3: Smart IoT & Telemetry */}
              <Card className="p-7 bg-white border-slate-200/90 hover:shadow-md transition-shadow space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B2A3C]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">AI & IoT Smart Monitoring</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Real-time GPS tracking and fluid level sensors stream operating status and spill coordinates to shore teams, ensuring precise positioning and rapid emergency deployment.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#0B2A3C]">
                    Real-Time GPS & Level Sensing
                  </span>
                </div>
              </Card>
            </div>

            {/* Circular Economy Flow Banner */}
            <div className="bg-[#0B2A3C] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Step 01 · Surface Extraction
                  </span>
                  <h4 className="text-base font-bold text-white">Selective Collection</h4>
                  <p className="text-xs text-slate-300">
                    Advanced hydrophobic sponge collects surface hydrocarbons, repelling all seawater.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Step 02 · Vacuum Transfer
                  </span>
                  <h4 className="text-base font-bold text-white">Vacuum Suction</h4>
                  <p className="text-xs text-slate-300">
                    Continuous vacuum suction routes pure oil to onboard tanks without water dilution.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Step 03 · Closed Loop
                  </span>
                  <h4 className="text-base font-bold text-white">Sponge Reusability</h4>
                  <p className="text-xs text-slate-300">
                    Reusable material matrix cleans continuously for non-stop autonomous skimming cycles.
                  </p>
                </div>

                <div className="space-y-1 bg-white/10 p-4 rounded-2xl border border-white/20">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold flex items-center gap-1">
                    <Fuel className="w-3 h-3" />
                    Step 04 · Green Energy
                  </span>
                  <h4 className="text-base font-bold text-white">Sustainable Biodiesel</h4>
                  <p className="text-xs text-slate-200">
                    Recovered oil is converted into certified biodiesel, transforming waste into clean fuel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Traditional Skimmers vs Our Model */}
        {activeTab === 'comparison' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left: Limitations of Conventional Skimmers */}
              <Card className="p-7 sm:p-8 bg-white border-rose-200 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Limitations of Existing Market Models
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Conventional disc, drum, and weir skimmers rely on non-selective adhesion, leading to high secondary costs.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                    <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Sucks Massive Amounts of Water</span>
                      <span className="text-xs text-slate-600">Conventional units collect up to 50–70% water, requiring expensive secondary separation onshore.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                    <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Requires Constant Manual Monitoring</span>
                      <span className="text-xs text-slate-600">Demands continuous oversight by trained crew on support vessels to adjust weir depths.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                    <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">High Operating Costs ($100–150 / bbl)</span>
                      <span className="text-xs text-slate-600">Slow operation and heavy support equipment add substantial logistical expense.</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Right: Key Features of Our Model */}
              <Card className="p-7 sm:p-8 bg-white border-emerald-200 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Our Solution: Hydrophobic Skimmer
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Combines superhydrophobic materials with continuous vacuum suction and autonomous smart monitoring.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Selective Oil Collection (Zero Water)</span>
                      <span className="text-xs text-slate-600">Superhydrophobic sponge collects only hydrocarbons, actively repelling all seawater.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">AI & IoT-Based Smart Monitoring</span>
                      <span className="text-xs text-slate-600">Real-time GPS tracking, oil reservoir volume sensing, and remote wireless command.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Rapid Continuous Vacuum Cleanup</span>
                      <span className="text-xs text-slate-600">Automated vacuum suction empties collected oil without stopping, reducing cleanup time and manpower.</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Benchmark Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Performance & Architecture Comparison
                </span>
                <span className="text-xs font-mono font-semibold text-[#076E73]">
                  Commercial Standards
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-6">Industry Approach</th>
                      <th className="py-3 px-6">Existing Operation</th>
                      <th className="py-3 px-6 text-[#076E73]">Our Model Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {COMPETITOR_COMPARISON.map((comp) => (
                      <tr key={comp.competitor} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap">
                          {comp.competitor}
                        </td>
                        <td className="py-4 px-6 text-slate-600 max-w-sm">
                          {comp.existingTech}
                        </td>
                        <td className="py-4 px-6 font-semibold text-[#076E73] max-w-sm">
                          {comp.ourAdvantage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Environmental Impact & UN SDGs */}
        {activeTab === 'impact' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TARGET_SDGS.map((sdg) => (
                <Card key={sdg.code} className="p-7 bg-white border-slate-200/90 hover:shadow-md transition-shadow space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg bg-[#0B2A3C] text-white text-xs font-mono font-bold">
                      {sdg.code}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{sdg.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {sdg.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Target Sectors Banner */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Target Sectors & Commercial Application
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-bold text-slate-900 block mb-1">Commercial Ports & Harbours</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Rapid-response deployment units stationed at container terminals, fuel jetties, and bunkering berths.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-bold text-slate-900 block mb-1">Offshore & Coastal Authorities</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Protecting sensitive marine reserves, fish nurseries, and coastal tourist corridors from transit vessel spills.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-bold text-slate-900 block mb-1">Emergency Spill Response Fleets</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Modular integration into existing support tugs and response vessels with zero crane overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
