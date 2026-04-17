import type { Metadata } from "next"
import { Playfair_Display, Great_Vibes, Amiri } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LayoutClient } from "@/components/layout-client"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
})

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://weaam-waleed.vercel.app"),
  title: "Weaam & Waleed - Wedding Invitation",
  description: "You are cordially invited to celebrate our engagement - April 29, 2026",
  generator: "v0.app",

  icons: {
    icon: [
      {
        url: "/images/og-cover.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/og-cover.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/og-cover.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/og-cover.jpg",
  },

  openGraph: {
    title: "Weaam & Waleed - Wedding Invitation",
    description: "You are cordially invited to celebrate our engagement - April 29, 2026",
    url: "https://weaam-waleed.vercel.app",
    siteName: "Weaam & Waleed",
    images: [
      {
        url: "/images/ww-logo.png", 
        width: 1200,
        height: 630,
        alt: "Weaam & Waleed - Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Weaam & Waleed - Wedding Invitation",
    description: "You are cordially invited to celebrate our engagement - April 29, 2026",
    images: ["/images/ww-logo.png"], // ← نفس الصورة
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${amiri.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <LayoutClient />
      </body>
    </html>
  )
}