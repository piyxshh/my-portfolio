// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ParticleBackground from '@/components/ParticleBackground' // 1. Import the new component

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Piyush Singh | Full-Stack Engineer',
  description: 'Piyush Singh is a freelance Full-Stack Engineer specializing in building modern, high-performance web experiences with technologies like Next.js, React, and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <ParticleBackground /> 
        <div className="relative z-10"> {/* 2. Wrap children in a div with relative positioning */}
          {children}
        </div>
      </body>
    </html>
  )
}