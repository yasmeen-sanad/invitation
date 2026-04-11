"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Calendar, Clock } from "lucide-react"

export function WeddingDetails() {
  return (
    <section
      className="relative px-4 pb-16 pt-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,252,250,0.78) 0%, rgba(248,242,236,0.9) 45%, rgba(255,252,250,0.82) 100%)",
      }}
    >
      <div className="max-w-sm mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="text-4xl text-[#6b5248] mb-2"
            style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}>Details of the Day</h2>
          <p className="text-sm text-[#9e8e82]">Everything you need to know about our special day</p>
        </motion.div>

        {/* Venue photo — ELVEE Event Hall */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-8 overflow-hidden rounded-2xl bg-[#e8e0d8]"
          style={{ boxShadow: "0 16px 48px -12px rgba(140,100,80,0.2)" }}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/elvee-event-hall.png"
              alt="ELVEE Event Hall — entrance"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 384px"
            />
          </div>
        </motion.div>

        {/* Info card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
          className="rounded-2xl p-6 mb-6"
          style={{
            background: "rgba(255,252,250,0.94)",
            border: "1px solid rgba(215,190,172,0.32)",
            boxShadow: "0 8px 32px -8px rgba(160,120,100,0.16)",
            backdropFilter: "blur(12px)",
          }}>
          <h3 className="text-base font-medium text-[#6b5248] mb-1">Location</h3>
          <p className="text-lg text-[#3d3028] font-medium mb-4">ELVEE Event Hall</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#7a6a60]">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: "#c4a090" }} />
              <span className="text-sm">Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-3 text-[#7a6a60]">
              <Calendar className="w-4 h-4 shrink-0" style={{ color: "#a0b888" }} />
              <span className="text-sm">Sunday, May 1, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-[#7a6a60]">
              <Clock className="w-4 h-4 shrink-0" style={{ color: "#88aac0" }} />
              <span className="text-sm">From 8:00 PM</span>
            </div>
          </div>
        </motion.div>

        {/* Map button */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <a
            href="https://maps.app.goo.gl/da6qRz5RwazrJzY79?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-white font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(90deg, #c4a090 0%, #d4b4a4 50%, #c8baa8 100%)",
              boxShadow: "0 6px 24px rgba(196,160,144,0.38)",
            }}>
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">How to get there</span>
          </a>
        </motion.div>

        {/* Divider flourish */}
        <div className="flex justify-center mt-8">
          <svg width="110" height="28" viewBox="0 0 110 28" fill="none">
            <path d="M5,14 Q20,4 38,14 Q55,24 72,14 Q90,4 105,14" stroke="#e0c8b8" strokeWidth="1.5" fill="none" />
            <circle cx="55" cy="14" r="4" fill="#f2b4b4" opacity="0.75" />
            <circle cx="38" cy="14" r="2.5" fill="#b5d1b5" opacity="0.7" />
            <circle cx="72" cy="14" r="2.5" fill="#b4c8dc" opacity="0.7" />
          </svg>
        </div>
      </div>
    </section>
  )
}