import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Microscope, Users, UserPlus, Mail, Briefcase } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { StartupSection } from '@/components/sections/StartupSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { ProjectTimelineSection } from '@/components/sections/ProjectTimelineSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { OilSpillText } from '@/components/ui/OilSpillText'
import { Badge } from '@/components/ui/badge'

export const HomePage: React.FC = () => {
  return (
    <main className="w-full relative">
      <Helmet>
        <title>The Water Crew | Marine Oil Spill Recovery & Skimmer Prototype</title>
        <meta
          name="description"
          content="Autonomous oleophilic marine oil skimmer prototype engineered by student researchers at the Vellore Institute of Technology. High-recovery mechanical separation in turbulent seas."
        />
        <meta property="og:title" content="The Water Crew | Deep-Tech Marine Clean-Tech" />
        <meta
          property="og:description"
          content="Engineering the future of autonomous marine oil spill recovery through academic fluid dynamics research."
        />
      </Helmet>

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Foundation & About Startup */}
      <StartupSection />

      {/* 3. Products & Hardware Prototype */}
      <ProductsSection />

      {/* 4. Project Timeline & Milestones */}
      <ProjectTimelineSection />

      {/* 5. Multipage Directory / Deep Dive Cards */}
      <section className="py-20 sm:py-28 bg-[#F4F6F8] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
              EXPLORE OUR INITIATIVE
            </Badge>
            <OilSpillText as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Discover the Laboratory & Pathways
            </OilSpillText>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore in-depth documentation on our experimental facilities, core engineering personnel, open recruitment cohorts, and institutional contact channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Research */}
            <Link
              to="/research"
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#076E73]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#076E73] group-hover:text-white transition-all">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#076E73] transition-colors flex items-center justify-between">
                  Research & Rigs
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#076E73]" />
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  12m wave flume testing, boundary layer oleophilic mechanics, and CNC polymer fabrication facilities.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center text-xs font-bold text-[#076E73] gap-1">
                View Facilities & Specs &rarr;
              </span>
            </Link>

            {/* Card 2: Team */}
            <Link
              to="/team"
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#076E73]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#076E73] group-hover:text-white transition-all">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#076E73] transition-colors flex items-center justify-between">
                  Core Team
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#076E73]" />
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Meet our faculty lead Dr. J Ranjitha with direct portfolio access, alongside student robotics & fluid dynamicists.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center text-xs font-bold text-[#076E73] gap-1">
                Meet Engineering Team &rarr;
              </span>
            </Link>

            {/* Card 3: Join */}
            <Link
              to="/join"
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#076E73]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#076E73] group-hover:text-white transition-all">
                  <UserPlus className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#076E73] transition-colors flex items-center justify-between">
                  Join the Crew
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#076E73]" />
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cohort intake for undergraduate and postgraduate engineers passionate about ocean conservation hardware.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center text-xs font-bold text-[#076E73] gap-1">
                Application Process &rarr;
              </span>
            </Link>

            {/* Card 4: Career Options */}
            <Link
              to="/career"
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#076E73]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#076E73] group-hover:text-white transition-all">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#076E73] transition-colors flex items-center justify-between">
                  Career Options
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#076E73]" />
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Research internships, engineering fellowships, and telemetry opportunities in marine autonomy.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center text-xs font-bold text-[#076E73] gap-1">
                View Open Positions &rarr;
              </span>
            </Link>

            {/* Card 5: Contact */}
            <Link
              to="/contact"
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#076E73]/50 transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-2"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#076E73] group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#076E73] transition-colors flex items-center justify-between">
                  Academic & Industry Inquiries
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#076E73]" />
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Connect directly with our laboratory coordinators for flume testing demonstrations, joint grants, port authority deployment trials, or general inquiries.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center text-xs font-bold text-[#076E73] gap-1">
                Initiate Communication &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery */}
      <GallerySection />
    </main>
  )
}
