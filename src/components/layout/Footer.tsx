import React from 'react'
import { ArrowUp, ShieldCheck, Waves } from 'lucide-react'
import { STARTUP_META } from '@/constants/projectData'
import { NAV_ITEMS } from '@/constants/navigation'

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-slate-50 text-slate-600 text-xs border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Column 1 & 2: Startup Branding & Academic Affiliation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-[#0B2545] border border-slate-200 shadow-xs">
                <img src="/logo.svg" alt="The Water Crew" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-slate-900 tracking-tight">
                  THE WATER CREW
                </span>
                <span className="text-[10px] font-semibold text-[#0D9488] uppercase tracking-wider">
                  Marine Clean-Tech Prototyping
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              An engineering startup and academic research project founded at the Vellore Institute of Technology. Designing next-generation autonomous oleophilic recovery hardware to safeguard marine ecosystems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 shadow-2xs font-medium">
                <Waves className="w-3.5 h-3.5 text-[#0B2545]" />
                TRL 5 Physical Stage
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 shadow-2xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                VIT Incubated
              </span>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
              Navigation
            </span>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#0B2545] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Research & Academic Documentation */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
              Research & Rigs
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#research" className="hover:text-[#0B2545] transition-colors">
                  12m Wave Flume Facility
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-[#0B2545] transition-colors">
                  CNC Polymer Milling
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-[#0B2545] transition-colors">
                  Hydrodynamic CFD Models
                </a>
              </li>
              <li>
                <a href="#lead" className="hover:text-[#0B2545] transition-colors">
                  Faculty Publications
                </a>
              </li>
              <li>
                <a href="#lead" className="hover:text-[#0B2545] transition-colors">
                  Google Scholar Citations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Communication & Institutional Contact */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
              Academic Lab
            </span>
            <p className="text-slate-600 text-xs leading-relaxed">
              Center for Multiphase Fluid Mechanics, Technology Tower, VIT Vellore, Tamil Nadu, India.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${STARTUP_META.contactEmail}`}
                className="text-[#0B2545] hover:underline font-mono text-xs block transition-colors font-medium"
              >
                {STARTUP_META.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} The Water Crew. Academic Research & Marine Prototype Initiative. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors text-xs shadow-2xs font-medium"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
