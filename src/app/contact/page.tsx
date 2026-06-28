"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Visit Our <span className="text-accent">Facility</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our precision engineering and cleanroom manufacturing environment firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Headquarters</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm mt-1">M S ELECTRONICS COMPANY<br/>Plot No.109, Road No.72, Jubilee hills<br/>Hyderabad 500033, Telangana, India.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mt-1">+91 9246288140<br/>+1 (555) 987-6543 (Support)</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm mt-1">siva@mselectronicscompany.com</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 text-sm mt-1">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday & Sunday: Closed</p>
                  </div>
                </li>
              </ul>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Plot+No.109,+Road+No.72,+Jubilee+hills,+Hyderabad+500033,+Telangana,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center w-full py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Navigate to Factory
              </a>
            </motion.div>
          </div>

          {/* Map Embed Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass-card rounded-2xl overflow-hidden min-h-[500px] relative flex items-center justify-center border border-black/5"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Plot%20No.109,%20Road%20No.72,%20Jubilee%20hills,%20Hyderabad%20500033,%20Telangana,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '500px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
