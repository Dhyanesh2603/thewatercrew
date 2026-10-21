import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, UploadCloud, GraduationCap, Building2 } from 'lucide-react'
import type { InternshipFormData } from '@/types'

interface InternshipModalProps {
  isOpen: boolean
  onClose: () => void
}

const initialForm: InternshipFormData = {
  fullName: '',
  email: '',
  university: '',
  degreeMajor: '',
  yearOfStudy: 'Pre-final Year (3rd Year)',
  discipline: 'Control Systems & Embedded',
  statement: '',
  portfolioUrl: '',
}

export const InternshipModal: React.FC<InternshipModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InternshipFormData>(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData(initialForm)
    setFileName(null)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="internship-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-10"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-100 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#076E73]">
                  <GraduationCap className="w-5 h-5 text-[#076E73]" />
                </div>
                <div>
                  <h2 id="internship-modal-title" className="text-lg font-bold text-slate-900 tracking-tight">
                    Research Internship Application
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    The Water Crew · Marine Hydrodynamics Laboratory (VIT)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Application Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your engineering credentials have been routed to Dr. J Ranjitha and the prototyping committee. Shortlisted candidates will be contacted for a lab technical interview.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#0B2A3C] text-white text-sm font-semibold rounded-xl hover:bg-[#076E73] transition-colors shadow-sm"
                    >
                      Return to Research Portal
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-4 text-xs text-sky-950 flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-[#076E73] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      We offer semester research cohorts and summer hardware residencies focused on autonomous marine surface vessels, oleophilic interfacial capture, and real-time CFD modeling.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alex Chen"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        University Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@institution.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        University / Institution *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Vellore Institute of Technology"
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Major & Degree *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. B.Tech Mechanical Engineering"
                        value={formData.degreeMajor}
                        onChange={(e) => setFormData({ ...formData, degreeMajor: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Discipline of Interest *
                      </label>
                      <select
                        value={formData.discipline}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            discipline: e.target.value as InternshipFormData['discipline'],
                          })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      >
                        <option value="Control Systems & Embedded">Control Systems & Embedded Telemetry</option>
                        <option value="Fluid Dynamics & CAD">Fluid Dynamics & Hydrodynamic CFD</option>
                        <option value="Frontend Architecture">Frontend Architecture & Mission UI</option>
                        <option value="Mechanical Prototyping">Mechanical Prototyping & CNC Machining</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Current Year of Study *
                      </label>
                      <select
                        value={formData.yearOfStudy}
                        onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                      >
                        <option>2nd Year Undergraduate</option>
                        <option>Pre-final Year (3rd Year)</option>
                        <option>Final Year (4th Year)</option>
                        <option>Postgraduate / M.Tech / M.S.</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Technical Statement & Prior Project Work *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe hands-on experience in CAD, embedded firmware, wave flumes, or fluid mechanics relevant to our prototype..."
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      GitHub / Portfolio / Research Profile Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/username or LinkedIn"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2A3C]/20 focus:border-[#0B2A3C] transition-all"
                    />
                  </div>

                  {/* Resume Upload Simulation */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Resume / Academic CV (PDF)
                    </label>
                    <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-slate-300 transition-colors bg-slate-50/50">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name)
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center gap-1.5">
                        <UploadCloud className="w-6 h-6 text-slate-400" />
                        <span className="text-xs font-medium text-slate-700">
                          {fileName ? (
                            <span className="text-emerald-600 font-semibold">{fileName}</span>
                          ) : (
                            'Click or drag your CV here (Max 10MB)'
                          )}
                        </span>
                        <span className="text-[11px] text-slate-400">PDF, DOC, DOCX</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-end gap-2.5 sm:gap-3 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#0B2A3C] text-white text-sm font-semibold rounded-xl hover:bg-[#076E73] transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting Credentials...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
