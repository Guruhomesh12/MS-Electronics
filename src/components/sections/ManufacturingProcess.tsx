"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  { id: "01", title: "Design", desc: "Collaborative engineering and hardware architecture." },
  { id: "02", title: "Engineering", desc: "Tolerance simulation and CAD modeling." },
  { id: "03", title: "Material Selection", desc: "Sourcing premium glass, ITO sensors, and adhesives." },
  { id: "04", title: "Precision CNC Dispensing", desc: "Micron-level automated structural bonding." },
  { id: "05", title: "Curing", desc: "Controlled UV and thermal curing processes." },
  { id: "06", title: "Quality Inspection", desc: "100% automated optical inspection (AOI)." },
  { id: "07", title: "Testing", desc: "Environmental, durability, and stress testing." },
  { id: "08", title: "Packaging", desc: "Anti-static, secure custom packaging." },
  { id: "09", title: "Delivery", desc: "Global logistics and deployment." },
]

export function ManufacturingProcess() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Scale the progress line
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="py-32 bg-white relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">Manufacturing Process</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            The Process of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Perfection</span>
          </h2>
          <p className="text-gray-600 text-lg">A journey from concept to reality, governed by strict engineering standards.</p>
        </div>

        <div className="relative">
          {/* Progress Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/5 -translate-x-1/2 rounded-full"></div>
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-accent origin-top -translate-x-1/2 shadow-[0_0_15px_rgba(230,25,25,0.4)]"
            style={{ scaleY }}
          ></motion.div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              
              return (
                <div key={step.id} className="relative flex items-center md:justify-between w-full group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-white border-[3px] border-accent z-10 -translate-x-1/2 shadow-[0_0_10px_rgba(230,25,25,0.3)] group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full pl-16 md:pl-0 md:w-5/12 flex ${isEven ? "md:justify-end" : "md:justify-start"} md:${isEven ? "mr-auto text-right" : "ml-auto text-left"}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`bg-white shadow-lg border border-black/5 p-8 rounded-2xl w-full max-w-sm hover:border-accent/30 transition-colors ${isEven ? "md:items-end flex flex-col" : "md:items-start flex flex-col"}`}
                    >
                      <span className="text-5xl font-black text-black/5 mb-3">{step.id}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
