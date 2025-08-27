// src/components/Footer.tsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 text-center text-gray-500">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/piyxshh" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
        <a href="https://www.linkedin.com/in/piyush-singh-22bb85262/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
        <a href="https://x.com/piyxshh" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Twitter</a>
        <a href="https://medium.com/@piyxsh.hh" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Medium</a>
      </div>
      <p>Piyush Singh &copy; 2025</p>
    </footer>
  )
}