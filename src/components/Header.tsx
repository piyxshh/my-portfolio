// src/components/Header.tsx
"use client"
import React from 'react'

export default function Header() {
  return (
    <header className="py-6">
      <nav className="flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-accent">Piyush Singh</a>
        <ul className="flex gap-6 items-center">
          <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
          <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
          <li><a href="#contact" className="bg-accent text-dark-bg px-4 py-2 rounded-md font-semibold">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}