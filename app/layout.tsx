import type { Metadata } from 'next'
import { Playfair_Display, Great_Vibes, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BackgroundMusic } from '@/components/background-music'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});
const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-script'
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: 'Wiam & Waleed - Wedding Invitation',
  description: 'You are cordially invited to celebrate our Nikah - May 10, 2026',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${greatVibes.variable} ${cairo.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <BackgroundMusic />
      </body>
    </html>
  )
}
