"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Award, ShieldCheck, Target, Search } from "lucide-react"

export function Quality() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">Quality Assurance</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Quality</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
              className="text-center p-6 glass-panel rounded-2xl border border-white/5"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tolerance Visualization Animation */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-white">Micron-Level Precision</h3>
              <p className="text-gray-400 leading-relaxed">
                Our CNC dispensing machines map the glass topography in real-time, adjusting the adhesive output dynamically to maintain a perfect bond line thickness across the entire panel, ensuring optical clarity and structural integrity.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  { icon: Target, text: "Dynamic Z-Axis Compensation" },
                  { icon: Search, text: "Real-time Telecentric Optics" },
                  { icon: ShieldCheck, text: "1000 sq. ft. Clean Room Assembly" },
                  { icon: Award, text: "Automated Calibration" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <item.icon className="w-5 h-5 mr-4 text-accent" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Animated Graphic */}
            <div className="w-full md:w-1/2 aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="relative w-48 h-48 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Scanning line */}
                <motion.div 
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-accent shadow-[0_0_20px_rgba(230,25,25,0.8)] z-20"
                ></motion.div>
                
                <div className="w-3/4 h-3/4 border-2 border-white/10 rounded-lg relative z-10">
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
