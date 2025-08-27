// src/components/Projects.tsx
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'; // Import the new card component

// Define the type for a single project
type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
};

// Define the props for the Projects component
type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  )
}