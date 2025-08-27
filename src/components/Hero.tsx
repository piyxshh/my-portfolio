// src/components/Hero.tsx
"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-black uppercase tracking-tight"
      >
        Piyush Singh
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-400 mt-4 max-w-2xl mx-auto"
      >
        Full-Stack Engineer building modern web experiences for fun and clients.
      </motion.p>
    </section>
  )
}