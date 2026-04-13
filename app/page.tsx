"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { IntroScreen } from "@/components/intro-screen"
import { CountdownTimer } from "@/components/countdown-timer"
import { WeddingDetails } from "@/components/wedding-details"

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const isArabic = language === "ar"
  const arabicFontFamily = "var(--font-arabic), ui-sans-serif, system-ui"
  const copy = isArabic
    ? {
        together: "بدعوة من عائلتيهما",
        requestLine1: "يتشرفان بدعوتكم",
        requestLine2: "لحضور حفلة عقد القران",
        sundayDubai: "الأربعاء · الرياض",
        venue: "الموقع",
        saveTheDate: "Save The Date",
        footerMessage: "لا يسعنا الانتظار للاحتفال معكم",
      }
    : {
        together: "Together with their families",
        requestLine1: "Request the pleasure of your company",
        requestLine2: "at their Engagement Party",
        sundayDubai: "Wednesday · Riyadh",
        venue: "Venue",
        saveTheDate: "Save the Date",
        footerMessage: "We can't wait to celebrate with you",
      }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="fixed right-4 top-4 z-70">
        <button
          type="button"
          onClick={() => setLanguage(isArabic ? "en" : "ar")}
          className={`rounded-full border border-white/55 bg-white/65 px-4 py-1.5 text-xs ${isArabic ? '' : 'tracking-[0.16em]'} text-[#7e6e62] shadow-sm backdrop-blur-md transition hover:bg-white/80`}
          style={isArabic ? { fontFamily: arabicFontFamily } : undefined}
        >
          {isArabic ? "ENGLISH" : "العربية"}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <IntroScreen key="intro" onOpen={() => setIsOpen(true)} language={language} />
        ) : (
          <motion.div key="content" initial={{ opacity: 1 }} animate={{ opacity: 1 }} className="relative">

            {/* Fixed chateau background */}
            <div className="fixed inset-0 z-0">
              <Image src="/images/chateau.jpg" alt="Chateau Background" fill className="object-cover" priority />
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(255,252,248,0.22) 0%, rgba(255,248,244,0.12) 50%, rgba(252,240,235,0.32) 100%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>

            <div className="relative z-10" style={isArabic ? { fontFamily: arabicFontFamily } : undefined}>

              {/* ── 1. Invitation ── */}
              <section className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
                <motion.div
                  initial={{ y: 52, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.05, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center mx-4 max-w-sm w-full rounded-[1.75rem] px-7 py-11 sm:px-8 sm:py-12"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(255,253,252,0.58) 0%, rgba(255,248,246,0.62) 48%, rgba(252,242,238,0.55) 100%)",
                    boxShadow:
                      "0 8px 40px -12px rgba(100,72,58,0.06), inset 0 1px 0 0 rgba(255,255,255,0.65)",
                    backdropFilter: "blur(22px) saturate(1.05)",
                    WebkitBackdropFilter: "blur(22px) saturate(1.05)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <div className="mb-5 flex justify-center gap-1.5">
                    {["#e8b4b8", "#c5d9c0", "#b8d0e0", "#dcc8be", "#d4c4dc"].map((c, i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: c, opacity: 0.55 }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.65, 0.45] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
                      />
                    ))}
                  </div>

                  <p className={`mb-5 text-[10px] uppercase ${isArabic ? '' : 'tracking-[0.42em]'} text-[#a8988c]/90`}>{copy.together}</p>

                  <h1
                    className="mb-1 text-5xl text-[#6e5c54] md:text-6xl"
                    style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}
                  >
                    Weaam
                  </h1>
                  <p
                    className="my-1.5 text-3xl text-[#c9a99a]/95"
                    style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}
                  >
                    &
                  </p>
                  <h1
                    className="mb-6 text-5xl text-[#6e5c54] md:text-6xl"
                    style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}
                  >
                    Waleed
                  </h1>

                  <div className={`mb-6 space-y-1 text-[13px] font-light leading-relaxed ${isArabic ? '' : 'tracking-wide'} text-[#8a7a72]/95`}>
                    <p>{copy.requestLine1}</p>
                    <p>{copy.requestLine2}</p>
                  </div>

                  <div className="border-t border-white/50 pt-5">
                    <p
                      className="text-2xl text-[#6e5c54]"
                      style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}
                    >
                      29th April 2026
                    </p>
                    <p className={`mt-1.5 text-[10px] ${isArabic ? '' : 'tracking-[0.28em]'} text-[#a8988c]/85`}>{copy.sundayDubai}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-9"
                  initial={{ opacity: 0 }}
                  animate={{ y: [0, 8, 0], opacity: 0.4 }}
                  transition={{
                    y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.7, delay: 1.2 },
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
                    <path
                      d="M12 5v14M5 12l7 7 7-7"
                      stroke="#9a8a80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.65}
                    />
                  </svg>
                </motion.div>
              </section>

              {/* ── 2. Countdown ── */}
              <CountdownTimer targetDate="2026-04-29T20:00:00" language={language} />

              {/* فاصل بصري بين العد التنازلي وتفاصيل المكان */}
              <div className="relative flex justify-center py-12 px-6" aria-hidden="true">
                <div className="flex w-full max-w-[240px] flex-col items-center gap-5">
                  <div className="h-px w-full bg-linear-to-r from-transparent via-[#c4b4a8]/50 to-transparent" />
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#c4b4a8]/35" />
                    <span className={`text-[9px] ${isArabic ? '' : 'tracking-[0.35em]'} text-[#a8988c]/70 uppercase`}>{copy.venue}</span>
                    <span className="h-px w-8 bg-[#c4b4a8]/35" />
                  </div>
                </div>
              </div>

              {/* ── 3. Location / venue ── */}
              <WeddingDetails language={language} />

              {/* ── 4. Save the Date ── */}
              <section className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
                <motion.div
                  initial={{ y: 56, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="w-full max-w-sm mx-auto"
                >
                  <div className="relative rounded-3xl overflow-hidden"
                    style={{ boxShadow: "0 32px 80px -16px rgba(140,100,80,0.28)" }}>
                    <Image src="/images/couple.jpg" alt="Wiam & Waleed" width={500} height={600} className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-15 md:pt-12">
                      <motion.p initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.15 }}
                        className={`text-[10px] ${isArabic ? '' : 'tracking-[0.38em]'} text-[#7a6458] uppercase mb-9`}>{copy.saveTheDate}</motion.p>
                      <motion.h1 initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ delay: 0.25 }}
                        className="text-4xl md:text-5xl text-[#6b5248]"
                        style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}>Wiam & Waleed</motion.h1>
                      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={{ delay: 0.4 }}
                        className="text-lg text-[#7a6458] mt-3"
                        style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive" }}>29th April 2026</motion.p>
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: 0.35 }}
                    className="flex justify-center gap-3 mt-6">
                    {["#f2b4b4","#b5d1b5","#b4c8dc","#dcc4b4","#d0b4d0"].map((c, i) => (
                      <motion.div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.82 }}
                        animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }} />
                    ))}
                  </motion.div>
                </motion.div>
              </section>

              {/* ── Footer ── */}
              <footer className="py-14 text-center relative"
                style={{ background: "linear-gradient(180deg, rgba(255,252,250,0.88) 0%, rgba(252,238,232,0.96) 100%)" }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }} viewport={{ once: true }}>
                  <p className={`text-sm text-[#9e8e82] ${isArabic ? '' : 'tracking-[0.3em]'}`}>29 · 04 · 2026</p>
                  <div className="flex justify-center gap-3 mt-6">
                    {["#f2b4b4","#b4c8dc","#b5d1b5","#d0b4d0","#dcc4b4"].map((c, i) => (
                      <motion.svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={c} style={{ opacity: 0.85 }}
                        animate={{ scale: [1, 1.28, 1] }} transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.13 }}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className={`text-sm text-[#b0a098] mt-8 ${isArabic ? '' : 'tracking-wide'}`}>{copy.footerMessage}</p>
                </motion.div>
              </footer>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}