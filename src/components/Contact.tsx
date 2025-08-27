// src/components/Contact.tsx
"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 mb-8 max-w-xl mx-auto"
      >
        I&apos;m currently open to freelance opportunities and collaborations. Feel free to reach out!
      </motion.p>
      <motion.a 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="mailto:piyxsh.hh@gmail.com"
        className="inline-block bg-accent text-dark-bg text-lg font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
      >
        Say Hello
      </motion.a>
    </section>
  )
}