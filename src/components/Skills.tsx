// src/components/Skills.tsx
"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillsProps = {
  skills: { [key: string]: Skill[] };
};

export default function Skills({ skills }: SkillsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
      <div className="space-y-12">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div 
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold text-accent mb-6 text-center md:text-left">{category}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {items.map(skill => (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center gap-3 w-32 h-32 justify-center hover:bg-gray-700 hover:border-accent transition-colors"
                >
                  <div className="text-gray-300">{skill.icon}</div>
                  <span className="text-light-text font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}