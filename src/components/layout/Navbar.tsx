import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react'
import { NAV_ITEMS } from '@/constants/navigation'
import { cn } from '@/utils/cn'

interface NavbarProps {
  onOpenInternship: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInternship }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 28) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active hash based on scroll position
      const sections = ['contact', 'gallery', 'products', 'team', 'lead', 'project', 'research', 'about', 'hero']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveHash(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll helper
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        const navHeight = 72
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
        setActiveHash(href)
      }
      setMobileMenuOpen(false)
      setCareerDropdownOpen(false)
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-b border-slate-200/80 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0B2545]/20 rounded-lg p-1"
              aria-label="The Water Crew Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="/logo.svg"
                  alt="The Water Crew Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    'text-base sm:text-lg font-extrabold tracking-tight transition-colors',
                    isScrolled ? 'text-slate-900' : 'text-white'
                  )}
                >
                  THE WATER CREW
                </span>
                <span
                  className={cn(
                    'text-[10px] font-semibold tracking-wider uppercase transition-colors -mt-0.5',
                    isScrolled ? 'text-[#0D9488]' : 'text-sky-300'
                  )}
                >
                  VIT Deep-Tech Research
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setCareerDropdownOpen(true)}
                      onMouseLeave={() => setCareerDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        aria-expanded={careerDropdownOpen}
                        aria-haspopup="true"
                        className={cn(
                          'flex items-center gap-1 px-3.5 py-2 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200',
                          isScrolled
                            ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                            : 'text-slate-200 hover:text-white hover:bg-white/10'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'w-3.5 h-3.5 transition-transform duration-200',
                            careerDropdownOpen && 'rotate-180'
                          )}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {careerDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-0 top-full mt-1.5 w-64 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 overflow-hidden"
                          >
                            <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Engineering Opportunities
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setCareerDropdownOpen(false)
                                onOpenInternship()
                              }}
                              className="w-full text-left px-3.5 py-2.5 hover:bg-slate-50 transition-colors flex items-start gap-2.5 group/item"
                            >
                              <GraduationCap className="w-4 h-4 text-[#0B2545] mt-0.5 shrink-0 group-hover/item:text-[#133E87]" />
                              <div>
                                <div className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover/item:text-[#0B2545]">
                                  Apply for Internship
                                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                                </div>
                                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                  Join our marine robotics & prototype development cohort.
                                </p>
                              </div>
                            </button>
                            <a
                              href="#contact"
                              onClick={(e) => handleNavClick(e, '#contact')}
                              className="w-full text-left px-3.5 py-2.5 hover:bg-slate-50 transition-colors flex items-start gap-2.5 group/item block"
                            >
                              <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200 mt-0.5 shrink-0 flex items-center justify-center text-[10px] text-slate-600 font-bold">
                                L
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#0B2545]">
                                  Academic Collaboration
                                </div>
                                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                  University laboratories & joint marine trials.
                                </p>
                              </div>
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                const isActive = activeHash === item.href
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'px-3.5 py-2 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-200 relative',
                      isScrolled
                        ? isActive
                          ? 'text-[#0B2545] font-bold'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                        : isActive
                        ? 'text-white font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={cn(
                          'absolute bottom-0 left-3 right-3 h-0.5 rounded-full',
                          isScrolled ? 'bg-[#0B2545]' : 'bg-sky-400'
                        )}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}

              {/* Action Button */}
              <div className="ml-2 pl-2 border-l border-slate-200/40">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className={cn(
                    'px-4 py-2 text-xs lg:text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm flex items-center gap-1.5',
                    isScrolled
                      ? 'bg-[#0B2545] text-white hover:bg-[#133E87] hover:shadow-md'
                      : 'bg-white text-slate-900 hover:bg-slate-100 hover:shadow-md'
                  )}
                >
                  Contact Lab
                </a>
              </div>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  isScrolled
                    ? 'text-slate-800 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                )}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl overflow-hidden px-5 py-6 mt-3"
            >
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  if (item.isDropdown) {
                    return (
                      <div key={item.label} className="py-2 border-t border-b border-slate-100 my-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-3 mb-2">
                          {item.label}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            onOpenInternship()
                          }}
                          className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#0B2545] hover:bg-slate-50 rounded-lg flex items-center justify-between"
                        >
                          <span>Apply for Internship</span>
                          <ArrowUpRight className="w-4 h-4 text-[#0B2545]" />
                        </button>
                        <a
                          href="#contact"
                          onClick={(e) => handleNavClick(e, '#contact')}
                          className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#0B2545] hover:bg-slate-50 rounded-lg block"
                        >
                          Academic Collaboration
                        </a>
                      </div>
                    )
                  }

                  const isActive = activeHash === item.href
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        'block px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors',
                        isActive
                          ? 'bg-[#0B2545]/10 text-[#0B2545] font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      )}
                    >
                      {item.label}
                    </a>
                  )
                })}

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenInternship()
                    }}
                    className="w-full py-2.5 bg-[#0B2545] text-white text-sm font-bold rounded-xl hover:bg-[#133E87] transition-colors shadow-sm text-center"
                  >
                    Apply for Internship
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
