import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, ArrowRight, X, ShieldCheck, Gauge } from 'lucide-react'
import { PRODUCTS_LIST } from '@/constants/projectData'
import type { ProductSpec } from '@/types'
import { easeEngineering } from '@/animations/motionVariants'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { OilSpillText } from '@/components/ui/OilSpillText'
import {
  SkimmerSchematic,
  TelemetrySchematic,
} from '@/components/schematics/TechnicalSchematics'

const renderProductVisual = (id: string, className?: string) => {
  switch (id) {
    case 'skimmer-alpha':
      return (
        <div className={`relative w-full h-full bg-slate-950 overflow-hidden ${className}`}>
          <img
            src="/hero-mof-skimmer.jpg"
            alt="Autonomous Hydrophobic Skimmer Surface Vessel"
            className="w-full h-full object-cover"
          />
        </div>
      )
    case 'micro-boom':
      return (
        <div className={`relative w-full h-full bg-slate-900 overflow-hidden ${className}`}>
          <img
            src="/startup-assets/mof_lab_petridish_test.png"
            alt="Selective Hydrocarbon Absorption Trial"
            className="w-full h-full object-cover"
          />
        </div>
      )
    case 'telemetry-array':
      return <TelemetrySchematic className={className} />
    default:
      return <SkimmerSchematic className={className} />
  }
}

export const ProductsSection: React.FC = () => {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductSpec | null>(null)

  const flagshipProduct = PRODUCTS_LIST[0] // The Skimmer MK-2
  const complementaryHardware = PRODUCTS_LIST.slice(1) // Boom & Telemetry Buoy

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Section Header */}
        <div className="max-w-2xl mb-16">
          <Badge variant="outline" className="mb-3 text-xs font-semibold text-slate-700 bg-white">
            <Package className="w-3.5 h-3.5 text-[#076E73] mr-1.5" />
            PROTOTYPE HARDWARE PORTFOLIO
          </Badge>
          <OilSpillText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Engineered Hardware for Turbulent Marine Environments
          </OilSpillText>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
            Our modular hardware architecture encompasses recovery skimmers, active containment barriers, and sensor telemetry arrays—designed for plug-and-play integration on harbor and offshore vessels.
          </p>
        </div>

        {/* Asymmetrical Hardware Showcase: 7-Column Flagship Spotlight + 5-Column Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Flagship Skimmer MK-2 (7 Columns Wide Feature) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: easeEngineering }}
            className="lg:col-span-7"
          >
            <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
              {/* Large Engineering Schematic */}
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                {renderProductVisual(flagshipProduct.id, 'w-full h-full')}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 rounded-lg shadow-xs">
                    Flagship Surface Vessel
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold text-[#076E73] rounded-lg shadow-xs">
                    {flagshipProduct.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 sm:p-9 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {flagshipProduct.name}
                  </h3>
                  <span className="text-sm font-semibold text-[#076E73] block mt-0.5">
                    {flagshipProduct.tagline}
                  </span>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {flagshipProduct.description}
                  </p>
                </div>

                {/* 4 Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {flagshipProduct.keyMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-slate-50 p-3 rounded-xl border border-slate-200/70"
                    >
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                        {metric.label}
                      </span>
                      <span className="text-base font-mono font-bold text-[#0B2A3C] mt-0.5 block">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2.5">
                    Subsystem Architecture
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {flagshipProduct.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#076E73] mt-1.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-2">
                  <Button
                    onClick={() => setActiveModalProduct(flagshipProduct)}
                    className="w-full sm:w-auto px-6 bg-[#0B2A3C] hover:bg-[#076E73] text-white flex items-center gap-2"
                  >
                    <span>Inspect Laboratory Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Complementary Hardware Stack (5 Columns, Asymmetric Cards) */}
          <div className="lg:col-span-5 space-y-6">
            {complementaryHardware.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: easeEngineering }}
              >
                <Card className="overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                    {renderProductVisual(product.id, 'w-full h-full')}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-900 rounded-md shadow-2xs">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                        {product.name}
                      </h4>
                      <span className="text-xs font-semibold text-[#076E73] block mt-0.5">
                        {product.tagline}
                      </span>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {product.keyMetrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="bg-slate-50 p-2 rounded-lg border border-slate-200/70">
                          <span className="text-[9px] uppercase font-bold text-slate-400 block">{m.label}</span>
                          <span className="text-xs font-mono font-bold text-[#0B2A3C]">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveModalProduct(product)}
                      className="w-full text-xs font-semibold text-slate-800"
                    >
                      Technical Specs
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProduct(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: easeEngineering }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#076E73]">
                    Engineering Specifications
                  </span>
                  <h3 id="product-modal-title" className="text-xl font-bold text-slate-900">
                    {activeModalProduct.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    System Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalProduct.description}
                  </p>
                </div>

                {/* Key Technical Matrix */}
                {activeModalProduct.technicalDetails && (
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-[#076E73]" />
                      Laboratory Benchmark Data
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                          Recovery Throughput
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          {activeModalProduct.technicalDetails.recoveryRate}
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                          Viscosity Operating Range
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          {activeModalProduct.technicalDetails.viscosityRange}
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                          Deployment Speed
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          {activeModalProduct.technicalDetails.deploymentTime}
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                          Power Subsystem
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          {activeModalProduct.technicalDetails.powerSource}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* All Features List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Subsystem Architecture & Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProduct.features.map((feat) => (
                      <li key={feat} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#076E73] mt-0.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="text-[11px] sm:text-xs text-slate-500">
                  Documentation version: Prototype Rev 2.4
                </span>
                <Button
                  onClick={() => setActiveModalProduct(null)}
                  className="w-full sm:w-auto bg-[#0B2A3C] hover:bg-[#076E73] text-white text-xs cursor-pointer"
                >
                  Close Specification
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
