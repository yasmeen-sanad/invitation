"use client"

import { useEffect } from "react"

// Global audio element for persistent music
let globalAudio: HTMLAudioElement | null = null

export function BackgroundMusic() {
  useEffect(() => {
    if (!globalAudio) {
      globalAudio = new Audio("/music/wedding-background.mp4")
      globalAudio.loop = true
      globalAudio.preload = "metadata"
    }
    return () => {
      // Don't cleanup on unmount to keep music playing
    }
  }, [])

  return null
}

// Export function to play music from anywhere
export const playBackgroundMusic = () => {
  if (globalAudio) {
    globalAudio.play().catch(() => {
      // Autoplay blocked, but user interaction should allow it
    })
  }
}
