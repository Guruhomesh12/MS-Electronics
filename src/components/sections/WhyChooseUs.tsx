"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Factory, Users } from "lucide-react"

const features = [
  {
    title: "US-Based Engineering & Support",
    description: "Our dedicated team of engineers provides rapid prototyping and local support, ensuring your project stays on schedule.",
    icon: Users,
  },
  {
    title: "ISO Certified Manufacturing",
    description: "Operating under strict ISO 9001:2015 quality standards with Class 10k and Class 1k cleanrooms.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Customization",
    description: "From custom cover glass and touch sensors to fully integrated assemblies and firmware tuning.",
    icon: Factory,
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5"
              >
                <span className="text-xs font-semibold text-accent tracking-widest uppercase">Why Choose Us</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
              >
                Uncompromising Quality.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">Global Standards.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg leading-relaxed max-w-lg"
              >
                We partner with OEMs worldwide to design, manufacture, and integrate mission-critical display solutions that simply cannot fail.
              </motion.p>
            </div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-accent/10 mt-1 border border-accent/20">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl transform rotate-3"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-black/5 bg-white shadow-xl p-2">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80" 
                alt="Cleanroom Manufacturing" 
                className="w-full h-full object-cover rounded-2xl opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-2xl"></div>
              
              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-white shadow-2xl p-6 rounded-2xl border border-black/5 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                  <span className="text-3xl font-bold text-gray-900">100%</span>
                </div>
                <p className="text-gray-600 font-medium">Yield Guarantee on Custom Optical Bonding</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
