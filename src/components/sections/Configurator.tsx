"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, Check, AlertCircle, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const presetSizes = [
  { w: 3.5, h: 2.5, label: '3.5"' },
  { w: 5, h: 3, label: '5"' },
  { w: 7, h: 4.5, label: '7"' },
  { w: 10.1, h: 6, label: '10.1"' },
  { w: 12.1, h: 9, label: '12.1"' },
  { w: 15.6, h: 9, label: '15.6"' },
  { w: 18.5, h: 10.5, label: '18.5"' },
  { w: 21.5, h: 12, label: '21.5"' },
]

export function Configurator() {
  const [step, setStep] = React.useState(1)
  
  // Config state
  const [width, setWidth] = React.useState(10.1)
  const [height, setHeight] = React.useState(6.0)
  const [radius, setRadius] = React.useState(0.2)
  const [orientation, setOrientation] = React.useState<"landscape" | "portrait">("landscape")
  
  // Form state
  const [formData, setFormData] = React.useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    quantity: "100",
    mountingType: "Optical Bonding",
    glassFinish: "Anti-Glare",
    environment: "Indoor",
    projectDescription: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handlePresetSelect = (w: number, h: number) => {
    if (orientation === "portrait") {
      setWidth(h)
      setHeight(w)
    } else {
      setWidth(w)
      setHeight(h)
    }
  }

  const toggleOrientation = () => {
    setOrientation(prev => prev === "landscape" ? "portrait" : "landscape")
    setWidth(height)
    setHeight(width)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          config: { width, height, radius, orientation }
        })
      })
      
      if (response.ok) {
        setIsSuccess(true)
        setStep(3)
      } else {
        alert("There was an error submitting your quote. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("There was an error submitting your quote. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate visual aspect ratio for the preview
  const previewScale = 20 // scale factor for drawing
  const displayW = Math.max(100, Math.min(width * previewScale, 400))
  const displayH = Math.max(100, Math.min(height * previewScale, 400))
  const displayR = radius * previewScale

  return (
    <section id="quote" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Build Your <span className="text-accent">Custom Panel</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Configure hardware specifications and request a manufacturing quotation instantly.
          </p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-black/5 shadow-2xl">
          {/* Progress Header */}
          <div className="flex border-b border-black/5 bg-black/5">
            <button onClick={() => !isSuccess && setStep(1)} className={`flex-1 py-4 text-center font-medium transition-colors ${step === 1 ? 'text-accent border-b-2 border-accent' : 'text-gray-600 hover:text-gray-700'}`}>
              1. Hardware Config
            </button>
            <button onClick={() => !isSuccess && setStep(2)} className={`flex-1 py-4 text-center font-medium transition-colors ${step === 2 ? 'text-accent border-b-2 border-accent' : 'text-gray-600 hover:text-gray-700'}`}>
              2. Project Details
            </button>
          </div>

          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  {/* Controls */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Size Select</h3>
                      <div className="flex flex-wrap gap-2">
                        {presetSizes.map(size => (
                          <button 
                            key={size.label}
                            onClick={() => handlePresetSelect(size.w, size.h)}
                            className="px-3 py-1.5 text-sm rounded bg-black/5 border border-black/5 text-gray-700 hover:bg-accent/20 hover:border-accent/50 hover:text-accent transition-colors"
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Custom Dimensions (inches)</h3>
                        <button onClick={toggleOrientation} className="text-xs px-2 py-1 bg-black/5 rounded text-gray-700 hover:text-gray-900 transition-colors">
                          Swap {orientation === 'landscape' ? 'Portrait' : 'Landscape'}
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Width</label>
                          <input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" step="0.1" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Height</label>
                          <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" step="0.1" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Corner Radius ({radius}")</label>
                        <input type="range" min="0" max="1" step="0.05" value={radius} onChange={e => setRadius(Number(e.target.value))} className="w-full accent-accent" />
                      </div>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-700 leading-relaxed">
                        We manufacture custom touch panel hardware only. Operating systems and software are developed, installed, and maintained by the customer or integration partner. Contact engineering for compatibility questions.
                      </p>
                    </div>

                    <Button variant="premium" className="w-full" onClick={() => setStep(2)}>
                      Continue to Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  {/* Live Preview */}
                  <div className="bg-slate-50 rounded-2xl border border-black/5 flex items-center justify-center p-8 relative min-h-[400px]">
                    <div className="absolute top-4 left-4 text-xs font-mono text-gray-500">LIVE PREVIEW</div>
                    
                    <motion.div 
                      layout
                      className="relative border-2 border-black/10 bg-black/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden"
                      style={{
                        width: displayW,
                        height: displayH,
                        borderRadius: displayR,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {/* Glass glare effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/5 to-transparent w-[200%] h-[200%] rotate-45 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                      
                      {/* Measurement indicators */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-accent font-mono">{width}"</div>
                      <div className="absolute top-0 left-0 right-0 h-px bg-accent/30"></div>
                      
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[10px] text-accent font-mono rotate-90">{height}"</div>
                      <div className="absolute top-0 right-0 bottom-0 w-px bg-accent/30"></div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 border-b border-black/5 pb-2">Contact Info</h3>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Company Name *</label>
                          <input required name="companyName" value={formData.companyName} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Contact Person *</label>
                            <input required name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Country</label>
                            <input name="country" value={formData.country} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Email *</label>
                            <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Phone</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 border-b border-black/5 pb-2">Project Specs</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Quantity *</label>
                            <input required type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent" />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Mounting</label>
                            <select name="mountingType" value={formData.mountingType} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent">
                              <option>Optical Bonding</option>
                              <option>Air Gap Bonding</option>
                              <option>Bezel Mount</option>
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Environment</label>
                            <select name="environment" value={formData.environment} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent">
                              <option>Indoor</option>
                              <option>Outdoor (High Brightness)</option>
                              <option>Harsh Industrial</option>
                              <option>Medical/Sterile</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Glass Finish</label>
                            <select name="glassFinish" value={formData.glassFinish} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent">
                              <option>Anti-Glare (AG)</option>
                              <option>Anti-Reflective (AR)</option>
                              <option>Anti-Fingerprint (AF)</option>
                              <option>Clear Glass</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Project Description & Requirements</label>
                          <textarea rows={3} name="projectDescription" value={formData.projectDescription} onChange={handleInputChange} className="w-full bg-white/50 border border-black/5 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-accent resize-none"></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/5 border border-black/5 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-black/5 transition-colors">
                       <Upload className="w-8 h-8 text-gray-600 mb-2" />
                       <p className="text-sm text-gray-700">Drag & drop CAD/PDF files here or click to browse</p>
                       <p className="text-xs text-gray-500 mt-1">Supported: PDF, DXF, DWG, STEP, ZIP (Max 50MB)</p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-black/5">
                      <Button type="button" variant="ghost" onClick={() => setStep(1)}>
                        Back to Configurator
                      </Button>
                      <Button type="submit" variant="premium" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                          "Submit Quote Request"
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50 box-glow shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <Check className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Quotation Requested Successfully</h3>
                  <p className="text-gray-600 max-w-md">
                    Thank you, {formData.contactPerson}. Our engineering team has received your hardware specifications and will contact you within 24 hours at {formData.email}.
                  </p>
                  <Button variant="outline" onClick={() => {
                    setStep(1); setIsSuccess(false); setFormData({...formData, projectDescription: ""})
                  }}>
                    Configure Another Panel
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
