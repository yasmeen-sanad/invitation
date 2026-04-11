"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface IntroScreenProps {
  onOpen: () => void
}

const CASTLE_ENTRANCE_MS = 1400
const HOLD_BEFORE_CONTENT_MS = 250

export function IntroScreen({ onOpen }: IntroScreenProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    if (isPressed) return
    setIsPressed(true)
    setTimeout(() => onOpen(), CASTLE_ENTRANCE_MS + HOLD_BEFORE_CONTENT_MS)
  }

  return (
    <AnimatePresence mode="wait">
      {!isPressed ? (
        <motion.div
          key="tap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{
            // Watercolor palette: warm cream → blush rose → sage green mist
            background:
              "linear-gradient(180deg, #fdf8f4 0%, #f8ede4 30%, #eee8e0 60%, #e8eeea 100%)",
          }}
        >
          {/* Soft warm glow behind logo */}
          <motion.div
            aria-hidden
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <div
              className="absolute left-1/2 top-[42%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(240,224,210,0.55) 0%, transparent 70%)",
                filter: "blur(48px)",
              }}
            />
          </motion.div>

          {/* Watercolor accent dots — top corners */}
          <motion.div
            className="absolute top-8 left-8 flex gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {["#f2b4b4", "#b5d1b5", "#b4c8dc"].map((c, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.65 }} />
            ))}
          </motion.div>
          <motion.div
            className="absolute top-8 right-8 flex gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            {["#b4c8dc", "#b5d1b5", "#f2b4b4"].map((c, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.65 }} />
            ))}
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.94 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 cursor-pointer"
            onClick={handleClick}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative aspect-square w-[min(85vw,18rem)] md:w-80 shrink-0 overflow-hidden rounded-full"
              style={{
                boxShadow: "0 24px 64px -16px rgba(160,120,100,0.24), 0 0 0 1px rgba(215,190,172,0.28)",
              }}
            >
              <Image
                src="/images/ww-logo.png"
                alt="W&W Wedding"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Wedding Invitation label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65, ease: "easeOut" }}
            className="relative z-10 mt-5 text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#9e8e82]">
              Wedding Invitation
            </p>
          </motion.div>

          {/* Flourish divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="relative z-10 mt-4"
          >
            <svg width="80" height="16" viewBox="0 0 80 16" fill="none">
              <path d="M4,8 Q20,2 40,8 Q60,14 76,8" stroke="#dcc4b4" strokeWidth="1.2" fill="none" />
              <circle cx="40" cy="8" r="2.5" fill="#f2b4b4" opacity="0.7" />
            </svg>
          </motion.div>

          {/* Tap to open */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.25, 0.8, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.9 }}
            className="relative z-10 mt-10 text-[11px] tracking-[0.28em] text-[#a09080]"
          >
            TAP TO OPEN
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          key="castle"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden"
          // Warm cream base — matches intro bg bottom color
          style={{ background: "#e8eeea" }}
        >
          {/* Castle image — fades in with gentle zoom-out */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 1.05, ease: [0.4, 0, 0.2, 1] },
              scale:   { duration: 1.65, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <Image
              src="/images/chateau.jpg"
              alt="Venue"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* Warm cream flash — bridges intro → castle without dark flash */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "#fdf8f4" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 1, 1] }}
          />

          {/* Soft vignette fades in after flash clears */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(248,240,232,0.12) 0%, transparent 40%, rgba(232,240,236,0.18) 100%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}