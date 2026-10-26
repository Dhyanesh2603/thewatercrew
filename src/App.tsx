import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { HomePage } from '@/pages/HomePage'
import { ResearchPage } from '@/pages/ResearchPage'
import { TeamPage } from '@/pages/TeamPage'
import { JoinPage } from '@/pages/JoinPage'
import { ContactPage } from '@/pages/ContactPage'
import { CareerPage } from '@/pages/CareerPage'
import { InternshipModal } from '@/components/ui/InternshipModal'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export function App() {
  const [isInternshipOpen, setIsInternshipOpen] = useState(false)

  // Initialize Lenis smooth scroll
  useSmoothScroll()

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAFBFC] text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-950 font-sans">
          <Navbar onOpenInternship={() => setIsInternshipOpen(true)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route
                path="/join"
                element={<JoinPage onOpenInternshipModal={() => setIsInternshipOpen(true)} />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/career"
                element={<CareerPage onOpenInternshipModal={() => setIsInternshipOpen(true)} />}
              />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
          <InternshipModal
            isOpen={isInternshipOpen}
            onClose={() => setIsInternshipOpen(false)}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
