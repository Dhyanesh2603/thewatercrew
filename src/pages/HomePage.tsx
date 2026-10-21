import React from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroSection } from '@/components/sections/HeroSection'
import { StartupSection } from '@/components/sections/StartupSection'
import { ResearchSection } from '@/components/sections/ResearchSection'
import { ProjectTimelineSection } from '@/components/sections/ProjectTimelineSection'
import { ResearchLeadSection } from '@/components/sections/ResearchLeadSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSection } from '@/components/sections/ContactSection'

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

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Welcome + About Startup */}
      <StartupSection />

      {/* 3. Research Centre Showcase */}
      <ResearchSection />

      {/* 4. Project Overview Timeline */}
      <ProjectTimelineSection />

      {/* 5. Research Lead Profile */}
      <ResearchLeadSection />

      {/* 6. Core Team */}
      <TeamSection />

      {/* 7. Products & Prototypes */}
      <ProductsSection />

      {/* 8. Gallery Masonry */}
      <GallerySection />

      {/* 9. Contact & Map */}
      <ContactSection />
    </main>
  )
}
