"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Award, ShieldCheck, Target, Search } from "lucide-react"

export function Quality() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Uncompromising <span className="text-accent">Quality</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Factory premises along with a 1000 sq. ft. Clean room allow access to complete line integration, optical bonding, systems integration and repair services. We provide unmatched technical support and customer care.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "0.01mm", label: "Dispensing Tolerance" },
            { value: "100%", label: "Automated Inspection" },
            { value: "ISO 9001", label: "Certified Facility" },
            { value: "10M+", label: "Touches Lifespan" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 glass-card rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2 text-glow">{stat.value}</div>
              <div className="text-sm text-gray-600 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tolerance Visualization Animation */}
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 animate-pulse"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Micron-Level Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our CNC dispensing machines map the glass topography in real-time, adjusting the adhesive output dynamically to maintain a perfect bond line thickness across the entire panel, ensuring optical clarity and structural integrity.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Target, text: "Dynamic Z-Axis Compensation" },
                  { icon: Search, text: "Real-time Telecentric Optics" },
                  { icon: ShieldCheck, text: "1000 sq. ft. Clean Room Assembly" },
                  { icon: Award, text: "Automated Calibration" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <item.icon className="w-5 h-5 mr-3 text-accent" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Animated Graphic */}
            <div className="w-full md:w-1/2 aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 border border-black/5 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-accent/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="relative w-48 h-48 bg-white/50 backdrop-blur-sm border border-black/10 rounded-xl flex items-center justify-center overflow-hidden">
                {/* Scanning line */}
                <motion.div 
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-accent shadow-[0_0_15px_#00f0ff] z-20"
                ></motion.div>
                
                <div className="w-3/4 h-3/4 border-2 border-black/5 rounded relative z-10">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
