import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aishwarya Kawade | AI & Backend Engineer',
  description: 'AI Engineer & Backend Developer. Building distributed systems, AI agents, and scalable solutions. Open source contributor. Available for top-tier tech roles.',
  keywords: ['AI Engineer', 'Backend Developer', 'Distributed Systems', 'LLMs', 'RAG', 'Open Source', 'Spring Boot', 'Python', 'GCP'],
  authors: [{ name: 'Aishwarya Kawade' }],
  creator: 'Aishwarya Kawade',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aishwaryakawade.com',
    siteName: 'Aishwarya Kawade',
    title: 'Aishwarya Kawade | AI & Backend Engineer',
    description: 'Explore my projects, open source work, and technical expertise in AI, backend systems, and distributed architecture.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aishwarya Kawade | AI & Backend Engineer',
    description: 'AI Engineer & Backend Developer. Building distributed systems and AI solutions.',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
