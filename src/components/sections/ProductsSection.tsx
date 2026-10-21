import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, ArrowRight, X, ShieldCheck, Gauge } from 'lucide-react'
import { PRODUCTS_LIST } from '@/constants/projectData'
import type { ProductSpec } from '@/types'
import { easeEngineering } from '@/animations/motionVariants'

export const ProductsSection: React.FC = () => {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductSpec | null>(null)

  return (
    <section id="products" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wide mb-3">
            <Package className="w-3.5 h-3.5 text-[#0B2545]" />
            PROTOTYPE HARDWARE PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Engineered Hardware for Turbulent Marine Environments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our modular hardware architecture encompasses recovery skimmers, active containment barriers, and sensor telemetry arrays—designed for plug-and-play integration on harbor and offshore vessels.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS_LIST.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: easeEngineering }}
              className="bg-[#FAFBFC] rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-xs font-bold text-slate-800 rounded-md shadow-xs">
                      {product.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-0.5 bg-sky-950/90 backdrop-blur-md text-[10px] font-mono font-semibold text-sky-300 rounded border border-sky-800">
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0D9488] mt-1">
                    {product.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Metrics 2x2 */}
                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {product.keyMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-white p-2.5 rounded-xl border border-slate-200/70 text-left shadow-2xs"
                      >
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                          {metric.label}
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#0B2545]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                      Engineering Features
                    </span>
                    <ul className="space-y-1.5">
                      {product.features.slice(0, 3).map((feat) => (
                        <li key={feat} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545] mt-1.5 shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(product)}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0B2545] rounded-xl text-xs font-bold text-slate-800 hover:text-[#0B2545] transition-all flex items-center justify-center gap-2 group/btn shadow-xs"
                >
                  Inspect Technical Specs
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
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
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488]">
                    Engineering Specifications
                  </span>
                  <h3 id="product-modal-title" className="text-xl font-bold text-slate-900">
                    {activeModalProduct.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center"
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
                      <Gauge className="w-4 h-4 text-[#0B2545]" />
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
                        <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Documentation version: Prototype Rev 2.4
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-4 py-2 bg-[#0B2545] text-white text-xs font-bold rounded-xl hover:bg-[#133E87] transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
