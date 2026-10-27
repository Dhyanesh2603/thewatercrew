import React, { useState } from 'react'
import { Sparkles, CheckCircle2, XCircle, Fuel, IndianRupee } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { OilSpillText } from '@/components/ui/OilSpillText'
import { STARTUP_BUDGET_BREAKDOWN, COMPETITOR_COMPARISON, TARGET_SDGS } from '@/constants/projectData'

export const SpongeTechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'technology' | 'comparison' | 'budget'>('technology')

  return (
    <section id="technology" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Sparkles className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            CORE SCIENTIFIC INNOVATION
          </Badge>
          <OilSpillText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            What Makes This MOF Sponge Special?
          </OilSpillText>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            By synthesizing ZIF-8 Metal-Organic Framework nanocrystals directly onto a porous substrate, we engineered an Oleophilic-Hydrophobic MOF (OHM) sponge that selectively captures hydrocarbons with zero water uptake.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('technology')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'technology'
                ? 'bg-[#0B2A3C] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Sponge Science & Mechanism
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
            Existing Skimmers vs Our Model
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('budget')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'budget'
                ? 'bg-[#0B2A3C] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Budget & Market Feasibility
          </button>
        </div>

        {/* TAB 1: Sponge Science & Mechanism */}
        {activeTab === 'technology' && (
          <div className="space-y-12">
            {/* 4-Card Science Grid from Slide 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: SEM Microstructure Analysis */}
              <Card className="overflow-hidden bg-white border-slate-200/90 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                  <img
                    src="/startup-assets/mof_sem_analysis.png"
                    alt="SEM Analysis of MOF Sponge Before and After Coating"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-sky-300 font-bold">
                    SEM 100 µm SCALE
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">SEM Nanocrystal Imaging</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Microscopic surface characterization confirming dense ZIF-8 nanocrystal growth across the sponge skeleton, producing superhydrophobic surface roughness.
                  </p>
                  <span className="inline-block text-[11px] font-mono font-semibold text-[#076E73] pt-1">
                    Contact Angle &gt; 150°
                  </span>
                </div>
              </Card>

              {/* Card 2: ZIF-8 Molecular Framework */}
              <Card className="overflow-hidden bg-white border-slate-200/90 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                  <img
                    src="/startup-assets/mof_zif8_structure.png"
                    alt="ZIF-8 Metal-Organic Framework Crystal Structure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 font-bold">
                    MOF STRUCTURE
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">ZIF-8 Nanocrystal Cage</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zeolitic Imidazolate Framework-8 structure provides microporous coordination that repels polar water molecules while selectively absorbing non-polar hydrocarbons.
                  </p>
                  <span className="inline-block text-[11px] font-mono font-semibold text-[#076E73] pt-1">
                    Nanoporous Selective Sieve
                  </span>
                </div>
              </Card>

              {/* Card 3: Real Lab Petridish Test */}
              <Card className="overflow-hidden bg-white border-slate-200/90 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                  <img
                    src="/startup-assets/mof_lab_petridish_test.png"
                    alt="Laboratory Oil-Water Separation Test in Petridish"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 font-bold">
                    LAB PROVEN TRIAL
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Petridish Separation Test</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demonstrates complete, instantaneous selective uptake of floating red-dyed oil film by the black MOF sponge, leaving crystal clear water behind.
                  </p>
                  <span className="inline-block text-[11px] font-mono font-semibold text-emerald-600 pt-1">
                    100% Selective Absorption
                  </span>
                </div>
              </Card>

              {/* Card 4: Working Mechanism & Circular Biodiesel */}
              <Card className="overflow-hidden bg-white border-slate-200/90 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                  <img
                    src="/startup-assets/mof_working_mechanism.png"
                    alt="Working Mechanism of OHM Sponge with Reuse and Recovery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-sky-300 font-bold">
                    CLOSED LOOP
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Working Mechanism & Reuse</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Base sponge + ZIF-8 nanocomposite coating creates the reusable OHM sponge. Squeeze recovery enables multi-cycle extraction with zero sponge degradation.
                  </p>
                  <span className="inline-block text-[11px] font-mono font-semibold text-[#076E73] pt-1">
                    Multi-Cycle Squeeze & Reuse
                  </span>
                </div>
              </Card>
            </div>

            {/* Circular Economy Flow Banner */}
            <div className="bg-[#0B2A3C] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Step 01 · Marine Extraction
                  </span>
                  <h4 className="text-base font-bold text-white">Selective Oil Absorption</h4>
                  <p className="text-xs text-slate-300">
                    Hydrophobic MOF sponge selectively collects oil from the water surface, repelling all seawater.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Step 02 · Vacuum Recovery
                  </span>
                  <h4 className="text-base font-bold text-white">Vacuum Suction Transfer</h4>
                  <p className="text-xs text-slate-300">
                    High-volume vacuum hopper rapidly transfers pure oil into onboard tanks without water dilution.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Step 03 · Reusable Sponge
                  </span>
                  <h4 className="text-base font-bold text-white">Multi-Cycle Sponge Reusability</h4>
                  <p className="text-xs text-slate-300">
                    Mechanical roller compression cleans the sponge for non-stop autonomous skimming cycles.
                  </p>
                </div>

                <div className="space-y-1 bg-white/10 p-4 rounded-2xl border border-white/20">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold flex items-center gap-1">
                    <Fuel className="w-3 h-3" />
                    Step 04 · Circular Bioenergy
                  </span>
                  <h4 className="text-base font-bold text-white">Sustainable Biodiesel</h4>
                  <p className="text-xs text-slate-200">
                    Extracted hydrocarbons are routed to transesterification reactors for high-grade biodiesel synthesis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Existing Skimmers vs Our Model */}
        {activeTab === 'comparison' && (
          <div className="space-y-10">
            {/* Visual Comparison from Slide 7 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left: Limitations of Currently Available Models */}
              <Card className="p-7 sm:p-8 bg-white border-rose-200 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Currently Available Models in the Market
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Conventional disc, drum, brush, and weir skimmers rely on passive surface adhesion without selective nanomaterials.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                    <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Sucks Massive Amounts of Water</span>
                      <span className="text-xs text-slate-600">Skimmers collect up to 50–70% water, requiring expensive secondary separation on shore.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                    <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Requires Constant Manual Monitoring</span>
                      <span className="text-xs text-slate-600">Demands human operators on support vessels to adjust weir depth and monitor clogging.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                    <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Slow Operation & High Fuel Costs</span>
                      <span className="text-xs text-slate-600">Mechanical recovery costs $100–150 per barrel, with prolonged exposure endangering wildlife.</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Right: Key Features of Our Proposed Model */}
              <Card className="p-7 sm:p-8 bg-white border-emerald-200 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Our Proposed Model: Hydrophobic MOF Skimmer
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Combining ZIF-8 Metal-Organic Framework sponges with vacuum suction and autonomous AI & IoT control.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Selective Oil Collection (Zero Water)</span>
                      <span className="text-xs text-slate-600">Superhydrophobic MOF sponge collects only hydrocarbons, actively repelling all seawater.</span>
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

            {/* Competitor Benchmark Table from Slide 13 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Industry Competitor Benchmark (Slide 13 Data)
                </span>
                <span className="text-xs font-mono font-semibold text-[#076E73]">
                  LAMOR · JVM · NASH
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-6">Competitor</th>
                      <th className="py-3 px-6">Existing Technology</th>
                      <th className="py-3 px-6 text-[#076E73]">How Our Model is Different</th>
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

        {/* TAB 3: Budget & Market Feasibility */}
        {activeTab === 'budget' && (
          <div className="space-y-10">
            {/* Budget Breakup from Slide 14 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Budget Table */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <IndianRupee className="w-3.5 h-3.5 text-[#076E73]" />
                    Realistic Prototype Budget Breakup (Total: ₹4,45,000)
                  </span>
                  <Badge variant="outline" className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50">
                    TRL 5 Prototyping
                  </Badge>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-600 uppercase text-[10px] font-semibold">
                      <tr>
                        <th className="py-2.5 px-6">S.No.</th>
                        <th className="py-2.5 px-6">Component Subsystem</th>
                        <th className="py-2.5 px-6 text-right">Realistic Budget</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {STARTUP_BUDGET_BREAKDOWN.map((item, idx) => (
                        <tr key={item.item} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-6 font-mono text-slate-400">{idx + 1}.</td>
                          <td className="py-2.5 px-6 font-medium text-slate-800">{item.item}</td>
                          <td className="py-2.5 px-6 font-mono font-bold text-right text-slate-900">{item.budget}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50 font-bold">
                        <td className="py-3 px-6" colSpan={2}>
                          TOTAL PROJECTED PROTOTYPE INVESTMENT
                        </td>
                        <td className="py-3 px-6 font-mono text-right text-base text-[#076E73]">
                          ₹4,45,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column: Market & SDGs */}
              <div className="lg:col-span-5 space-y-6">
                {/* Target SDGs */}
                <Card className="p-6 bg-white border-slate-200/90 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Target UN Sustainable Development Goals
                  </span>
                  <div className="space-y-3">
                    {TARGET_SDGS.map((sdg) => (
                      <div key={sdg.code} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-[#0B2A3C] text-white text-[10px] font-mono font-bold">
                            {sdg.code}
                          </span>
                          <span className="text-xs font-bold text-slate-900">{sdg.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                          {sdg.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Target Market from Slide 10 & 11 */}
                <Card className="p-6 bg-[#0B2A3C] text-white space-y-4 border-slate-800">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
                    Target Market & Revenue Streams
                  </span>
                  <ul className="space-y-2 text-xs text-slate-200">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span><strong>Equipment Sales:</strong> One-time sale of complete AI-IoT skimmers to ports and terminals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span><strong>Emergency Response Rental:</strong> Short-term deployment services with trained operators.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span><strong>Recurring Maintenance & Spare Parts:</strong> AMC contracts, motor servicing, and recurring MOF sponge replacement.</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
