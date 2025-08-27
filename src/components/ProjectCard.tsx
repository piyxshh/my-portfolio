// src/components/ProjectCard.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Define the type for a single project
type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      // --- LAYOUT FIX ---
      // h-full makes the card stretch to the height of the tallest card in the grid row
      className="h-full"
    >
      <div
        // --- NEW STYLE & LAYOUT FIX ---
        // 1. Dark "frosted glass" background for an attractive look.
        // 2. Glow effect on hover for interactivity.
        // 3. Flexbox layout to force equal height and push links to the bottom.
        className="bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-lg p-6 transition-all duration-300 group hover:border-accent hover:shadow-2xl hover:shadow-accent/10 flex flex-col h-full"
      >
        {/* This div grows to take up all available space, pushing the links down */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-accent">{project.title}</h3>
          
          {/* --- TEXT VISIBILITY FIX --- */}
          {/* Brighter text color for high contrast */}
          <p className="text-gray-200 mt-2 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* This div is pushed to the bottom */}
        <div className="flex gap-4 mt-auto pt-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-light-text hover:text-accent">
            Live Site →
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-light-text hover:text-accent">
            GitHub →
          </a>
        </div>
      </div>
    </motion.div>
  );
}