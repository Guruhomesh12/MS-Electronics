"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { XCircle, CheckCircle2 } from "lucide-react"

const features = [
  { name: "Impact Resistance", traditional: "Fragile LCD Surface", ours: "Up to 300% Stronger" },
  { name: "Scratch Resistance", traditional: "Scratches at 3H", ours: "No Scratches up to 9H" },
  { name: "Outdoor Visibility", traditional: "High Ambient Reflection", ours: "400% Contrast Increase" },
  { name: "Condensation", traditional: "Prone to Fogging", ours: "Zero Moisture Penetration" },
  { name: "Touch Accuracy", traditional: "Parallax Errors", ours: "Highly Accurate Touch" },
  { name: "Shock & Vibration", traditional: "Film Damage Risk", ours: "300% Higher Resistance" },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            The Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">Optical Bonding</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            By eliminating the air gap between the display and cover glass, our advanced bonding services dramatically increase ruggedness and sunlight readability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 text-center mb-6 px-4 md:px-8">
            <div className="text-left font-semibold text-gray-500 uppercase tracking-wider text-sm hidden md:block">
              Feature
            </div>
            <div className="md:hidden"></div>
            <div className="font-semibold text-gray-500 uppercase tracking-wider text-sm">
              Traditional
            </div>
            <div className="font-bold text-accent uppercase tracking-wider text-sm text-glow">
              Our Manufacturing
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-3 items-center p-4 md:p-6 rounded-2xl glass-card relative overflow-hidden group hover:border-accent/30 transition-colors"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Feature Name */}
                <div className="text-left font-medium text-gray-900 md:text-lg col-span-3 md:col-span-1 mb-3 md:mb-0">
                  {feature.name}
                </div>
                
                {/* Traditional */}
                <div className="text-center flex flex-col items-center gap-2 border-r md:border-r-0 border-black/5 md:border-transparent pr-4 md:pr-0">
                  <XCircle className="text-red-500/50 w-6 h-6" />
                  <span className="text-sm md:text-base text-gray-600">{feature.traditional}</span>
                </div>
                
                {/* Ours */}
                <div className="text-center flex flex-col items-center gap-2 pl-4 md:pl-0">
                  <CheckCircle2 className="text-accent w-6 h-6 text-glow" />
                  <span className="text-sm md:text-base text-gray-900 font-medium">{feature.ours}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
