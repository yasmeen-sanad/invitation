"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true) // Start playing by default
  const [canAutoplay, setCanAutoplay] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("wedding-music-playing")
    if (saved === "true") {
      setIsPlaying(true)
    }
  }, [])

  // Save preference
  useEffect(() => {
    localStorage.setItem("wedding-music-playing", isPlaying ? "true" : "false")
  }, [isPlaying])

  // Try autoplay immediately
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setCanAutoplay(true)
          })
          .catch(() => {
            setCanAutoplay(false)
            // Autoplay blocked; audio will play on user interaction
          })
      }
    } else {
      audio.pause()
    }
  }, [isPlaying])

  const toggle = () => {
    setIsPlaying(p => !p)
    // If autoplay was blocked, this user interaction will enable playback
    if (!canAutoplay) {
      setCanAutoplay(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-background.mp4"
        loop
        playsInline
        preload="metadata"
      />
      <motion.button
        type="button"
        onClick={toggle}
        className="fixed right-4 top-16 z-70 rounded-full border border-white/55 bg-white/65 px-3 py-1.5 text-xs text-[#7e6e62] shadow-sm backdrop-blur-md transition hover:bg-white/80"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
      </motion.button>
    </>
  )
}
