"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Settings2, PlayCircle } from "lucide-react"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 text-center lg:text-left"
          style={{ y, opacity }}
        >
          <div className="inline-flex items-center space-x-2 bg-black/5 border border-black/5 rounded-full px-4 py-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Next-Generation HMI Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Engineering Precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 text-glow">
              Into Every Touch.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Custom Touch Panels and Optical Bonding services engineered for Industrial, Medical, Automotive, and Military Applications. Uncompromising quality and ruggedization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button variant="premium" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/#quote">
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/#products">
                <Settings2 className="mr-2 w-4 h-4" />
                Explore Products
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-gray-700">
              <PlayCircle className="mr-2 w-4 h-4" />
              Watch Process
            </Button>
          </div>
        </motion.div>

        {/* 3D Floating Panel Representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000"
        >
          <motion.div
            animate={{
              rotateY: [-5, 5, -5],
              rotateX: [5, -5, 5],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl glass-card border-accent/30 overflow-hidden box-glow transform-style-3d group"
          >
            {/* Generated Touch Panel Image */}
            <div className="absolute inset-2 md:inset-4 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/hero-panel.png" 
                alt="Premium Industrial Touch Panel" 
                className="w-full h-full object-cover"
              />
              {/* Subtle glass overlay to keep the premium feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none"></div>
            </div>
            
            {/* Edge Lighting & Reflections */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/5 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <motion.div 
              animate={{
                x: ["-100%", "200%"],
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent w-full h-full rotate-45 pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
