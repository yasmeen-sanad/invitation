"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calc = () => {
      const diff = +new Date(targetDate) - +new Date()
      if (diff > 0) {
        setTimeLeft({
          days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }
    calc()
    const t = setInterval(calc, 1000)
    return () => clearInterval(t)
  }, [targetDate])

  if (!mounted) return null

  const units = [
    { label: "DAYS",    value: timeLeft.days,    accent: "#f2b4b4" },
    { label: "HOURS",   value: timeLeft.hours,   accent: "#b5d1b5" },
    { label: "MINS",    value: timeLeft.minutes, accent: "#b4c8dc" },
    { label: "SECS",    value: timeLeft.seconds, accent: "#dcc4b4" },
  ]

  return (
    <section
      className="relative px-4 pt-20 pb-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(248,242,238,0.82) 0%, rgba(242,236,230,0.88) 55%, rgba(250,246,242,0.55) 100%)",
      }}
    >
      <div className="max-w-sm mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-4xl text-[#6b5248] mb-2"
            style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}>Countdown</h2>
          <p className="text-sm text-[#9e8e82] tracking-wide">Until we say &ldquo;I do&rdquo;</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }} viewport={{ once: true }}
          className="grid grid-cols-4 gap-3">
          {units.map((u, i) => (
            <motion.div key={u.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }} viewport={{ once: true }}
              className="flex flex-col items-center py-5 rounded-2xl"
              style={{
                background: "rgba(255,252,250,0.92)",
                border: `1px solid ${u.accent}55`,
                boxShadow: `0 4px 20px -6px ${u.accent}60`,
                backdropFilter: "blur(10px)",
              }}>
              {/* Accent dot */}
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: u.accent, opacity: 0.8 }} />
              <p className="text-3xl md:text-4xl font-light text-[#6b5248] tabular-nums leading-none mb-2">
                {String(u.value).padStart(2, "0")}
              </p>
              <p className="text-[9px] tracking-[0.18em] text-[#9e8e82]">{u.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <svg width="100" height="22" viewBox="0 0 110 28" fill="none" className="opacity-70">
            <path d="M5,14 Q20,4 38,14 Q55,24 72,14 Q90,4 105,14" stroke="#e0c8b8" strokeWidth="1.25" fill="none" />
            <circle cx="55" cy="14" r="3.5" fill="#b4c8dc" opacity="0.65" />
            <circle cx="38" cy="14" r="2" fill="#f2b4b4" opacity="0.55" />
            <circle cx="72" cy="14" r="2" fill="#b5d1b5" opacity="0.55" />
          </svg>
        </div>
      </div>
    </section>
  )
}