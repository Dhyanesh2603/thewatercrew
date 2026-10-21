import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle2, Building } from 'lucide-react'
import { STARTUP_META } from '@/constants/projectData'
import type { ContactFormData } from '@/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const initialForm: ContactFormData = {
  fullName: '',
  email: '',
  organization: '',
  interest: 'Research Collaboration',
  message: '',
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm)
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
    setFormData(initialForm)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Mail className="w-3.5 h-3.5 text-[#0B2545] mr-1.5" />
            ACADEMIC & INDUSTRY INQUIRIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Initiate Collaboration or Request Prototype Data
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you represent a port authority, marine response fleet, university lab, or research granting institution, our engineering team welcomes technical inquiries.
          </p>
        </div>

        {/* Contact Layout (Clean Grid, No Coordinates / No Radar Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <Card className="p-7 sm:p-10 shadow-xs bg-[#FAFBFC]">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-[#0B2545] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Communication Dispatched</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your inquiry regarding <span className="font-semibold text-slate-900">{formData.interest}</span> has been logged by the fluid mechanics research team.
                  </p>
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={handleReset}
                      className="bg-[#0B2545] hover:bg-[#133E87] text-white"
                    >
                      Send Another Message
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
                        placeholder="Dr. / Prof. / Eng. First Last"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2545]/20 focus:border-[#0B2545] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work / Institutional Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2545]/20 focus:border-[#0B2545] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Organization / University / Entity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Coast Guard / Port Authority / Lab"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2545]/20 focus:border-[#0B2545] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Inquiry Focus *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            interest: e.target.value as ContactFormData['interest'],
                          })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2545]/20 focus:border-[#0B2545] transition-all"
                      >
                        <option value="Research Collaboration">Academic / Research Collaboration</option>
                        <option value="Prototype Inquiry">Prototype Benchmark & Field Trial Inquiry</option>
                        <option value="Internship">Student Research Residency / Internship</option>
                        <option value="Media">Technical Press & Academic Publication</option>
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Technical Specification or Inquired Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline your interest, required spill volume thresholds, wave conditions, or proposed collaboration timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B2545]/20 focus:border-[#0B2545] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Typical response latency: &lt; 48 hours during academic terms.
                    </span>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0B2545] hover:bg-[#133E87] text-white flex items-center gap-2"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Send Message'}
                      <Send className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Institutional Info Column (No Map / No GPS Coordinates) */}
          <div className="lg:col-span-4 space-y-5">
            <Card className="p-6 sm:p-7 space-y-5 bg-[#FAFBFC]">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200/80 pb-3">
                Institutional Contact
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#0B2545]">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Facility Location:</span>
                    <span>Technology Tower, Vellore Institute of Technology, Katpadi, Vellore, Tamil Nadu 632014, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#0B2545]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Email Inquiries:</span>
                    <a href={`mailto:${STARTUP_META.contactEmail}`} className="text-[#0B2545] hover:underline font-mono">
                      {STARTUP_META.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#0B2545]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Campus Desk:</span>
                    <span className="font-mono">+91 (0416) 220 2011 (Ext. 2408)</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Academic laboratory visits and wave flume demonstration requests must be scheduled at least 5 business days in advance.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
