import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, HelpCircle } from 'lucide-react'
import { ContactSection } from '@/components/sections/ContactSection'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { OilSpillText } from '@/components/ui/OilSpillText'

const FAQS = [
  {
    q: 'Can third-party researchers schedule test runs in your 12m wave flume?',
    a: 'Yes. Academic and institutional partners may request testing slots in our multi-phase wave flume for comparative hydrodynamic trials and sensor validation.',
  },
  {
    q: 'How does The Water Crew handle industrial non-disclosure agreements (NDAs)?',
    a: 'We operate through standard university intellectual property and industry partnership guidelines established by the Centre for Multiphase Fluid Mechanics.',
  },
  {
    q: 'Are sample benchmark data and CFD mesh files available for review?',
    a: 'Anonymized empirical flume benchmark data from our TRL 4 and TRL 5 runs can be shared with authorized academic researchers upon written request.',
  },
]

export const ContactPage: React.FC = () => {
  return (
    <main className="w-full relative pt-20 bg-[#FAFBFC]">
      <Helmet>
        <title>Contact Laboratory & Collaboration Inquiries | The Water Crew</title>
        <meta
          name="description"
          content="Get in touch with The Water Crew for academic collaborations, wave flume trials, grant partnerships, and prototype inquiries at VIT Vellore."
        />
      </Helmet>

      {/* Clean White Page Header */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-xs font-semibold text-slate-700 bg-white">
              <Mail className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
              INSTITUTIONAL LIAISON
            </Badge>
            <OilSpillText as="h1" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Contact & Collaboration
            </OilSpillText>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Connect directly with our fluid dynamicists, robotics leads, and faculty advisor. We welcome inquiries from port authorities, clean ocean funds, and research collaborators worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Core Contact Section */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <section className="py-20 sm:py-28 bg-[#FAFBFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
              <HelpCircle className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
              COMMUNICATION PROTOCOLS
            </Badge>
            <OilSpillText as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Addressed Inquiries
            </OilSpillText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAQS.map((faq) => (
              <Card key={faq.q} className="p-6 bg-white border-slate-200/90 shadow-2xs">
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
