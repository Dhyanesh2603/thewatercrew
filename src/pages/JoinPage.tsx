import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { UserPlus, CheckCircle2, Send, Rocket, BookOpen, Layers, ArrowUpRight } from 'lucide-react'
import { OilSpillText } from '@/components/ui/OilSpillText'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface JoinPageProps {
  onOpenInternshipModal?: () => void
}

export const JoinPage: React.FC<JoinPageProps> = ({ onOpenInternshipModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: 'Vellore Institute of Technology',
    degreeMajor: '',
    yearOfStudy: '3rd Year (Pre-final)',
    discipline: 'Mechatronics & Embedded',
    statement: '',
    portfolioUrl: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 700)
  }

  const handleReset = () => {
    setIsSuccess(false)
    setFormData({
      fullName: '',
      email: '',
      university: 'Vellore Institute of Technology',
      degreeMajor: '',
      yearOfStudy: '3rd Year (Pre-final)',
      discipline: 'Mechatronics & Embedded',
      statement: '',
      portfolioUrl: '',
    })
  }

  return (
    <main className="w-full relative pt-20">
      <Helmet>
        <title>Join The Water Crew | Student Research & Engineering Cohort</title>
        <meta
          name="description"
          content="Apply to join The Water Crew's ocean oil spill skimmer research team. Hardware prototyping, wave-flume hydrodynamics, and embedded systems engineering."
        />
      </Helmet>

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#070D14] to-[#0E1A27] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-xs font-semibold text-cyan-300 border-cyan-500/30 bg-cyan-950/40">
              <UserPlus className="w-3.5 h-3.5 text-[#00F0FF] mr-1.5" />
              STUDENT COHORT INTAKE
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Build Real Ocean Hardware with Us
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              We invite motivated undergraduate and postgraduate engineering students to join our active laboratory cohort. Work directly on physical skimmer prototypes, wave-flume hydrodynamic trials, and autonomous telemetry.
            </p>

            {onOpenInternshipModal && (
              <div className="mt-6">
                <Button
                  onClick={onOpenInternshipModal}
                  className="bg-[#00F0FF] text-slate-950 hover:bg-cyan-300 font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Quick Modal Application</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cohort Benefits */}
      <section className="py-20 sm:py-28 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="p-7 bg-white border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Physical Hardware Deployment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Take concepts from CAD to real water tanks and ocean harbors. Work with marine-grade polymers, CNC machining, and motor controllers.
              </p>
            </Card>

            <Card className="p-7 bg-white border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Research Publication Authorship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Co-author scientific whitepapers, IEEE conference proceedings, and patents under the guidance of our faculty advisory board.
              </p>
            </Card>

            <Card className="p-7 bg-white border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Multidisciplinary Synergy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Collaborate side-by-side with mechanical fluid dynamicists, IoT firmware engineers, and industrial designers in our university lab.
              </p>
            </Card>
          </div>

          {/* Interactive On-Page Application Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-2 text-xs font-semibold text-slate-700 bg-white">
                CANDIDATE REGISTRATION
              </Badge>
              <OilSpillText as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Submit Your Application
              </OilSpillText>
              <p className="mt-2 text-sm text-slate-600">
                Applications are reviewed on a rolling basis by our student leads and faculty mentor.
              </p>
            </div>

            <Card className="p-7 sm:p-10 bg-white border-slate-200 shadow-sm">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-[#076E73] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Application Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>! Your submission for the <span className="font-semibold text-slate-900">{formData.discipline}</span> cohort has been cataloged. We will reach out to schedule your lab review.
                  </p>
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={handleReset}
                      className="bg-[#0B2A3C] hover:bg-[#076E73] text-white"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        University Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="yourname@vitstudent.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Institution / University
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vellore Institute of Technology"
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Degree Major / Branch *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Mechanical / EEE / CSE / Robotics"
                        value={formData.degreeMajor}
                        onChange={(e) => setFormData({ ...formData, degreeMajor: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Year of Study *
                      </label>
                      <select
                        value={formData.yearOfStudy}
                        onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      >
                        <option value="1st Year">1st Year (Freshman)</option>
                        <option value="2nd Year">2nd Year (Sophomore)</option>
                        <option value="3rd Year (Pre-final)">3rd Year (Pre-final)</option>
                        <option value="4th Year (Final Year)">4th Year (Final Year)</option>
                        <option value="Postgraduate / M.Tech / PhD">Postgraduate / M.Tech / PhD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Target Engineering Track *
                      </label>
                      <select
                        value={formData.discipline}
                        onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      >
                        <option value="Control Systems & Embedded">Control Systems & Embedded Telemetry</option>
                        <option value="Fluid Dynamics & CAD">Fluid Dynamics, CFD & Hydro-flume</option>
                        <option value="Mechanical Prototyping">Mechanical Prototyping & CNC Milling</option>
                        <option value="Frontend Architecture">Frontend Architecture & Mission Control</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Portfolio / GitHub / CAD Profile Link (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/username or LinkedIn"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Brief Statement of Purpose & Relevant Experience *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Detail previous projects, CAD modeling, microcontrollers used, or your interest in marine conservation hardware..."
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-500">
                      Decisions are communicated via email within 5 business days.
                    </span>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0B2A3C] hover:bg-[#076E73] text-white flex items-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      <Send className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
