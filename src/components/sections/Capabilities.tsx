"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Layers, Lightbulb, Sun, Maximize, Shield, Wrench } from "lucide-react"

const capabilities = [
  {
    title: "Optical Bonding",
    description: "Eliminates air gaps, reducing reflection and increasing ruggedness for outdoor and military applications.",
    icon: Layers,
  },
  {
    title: "Custom Backlighting",
    description: "High-brightness solutions for readability in direct sunlight, ideal for avionics and marine displays.",
    icon: Sun,
  },
  {
    title: "Touch Integration",
    description: "Advanced capacitive and resistive touch panel tuning for use with gloves, water drops, and thick cover glass.",
    icon: Maximize,
  },
  {
    title: "EMI/RFI Shielding",
    description: "Custom mesh and ITO coatings to meet strict military (MIL-STD) and medical compliance standards.",
    icon: Shield,
  },
  {
    title: "Display Enhancements",
    description: "Anti-glare, anti-reflective, and anti-fingerprint treatments to optimize optical performance.",
    icon: Lightbulb,
  },
  {
    title: "Cleanroom Assembly",
    description: "Class 10,000 and Class 1,000 cleanroom facilities ensuring zero contamination during assembly.",
    icon: Wrench,
  }
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5"
            >
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Our Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Advanced <span className="text-accent">Display Engineering</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md md:text-right"
          >
            We don't just supply displays; we engineer them. Our in-house capabilities allow us to modify and enhance LCDs for the most demanding environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,25,25,0.1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-black border border-white/5 group-hover:bg-accent/20 transition-colors duration-300">
                  <cap.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">{cap.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
