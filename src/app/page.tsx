// src/app/page.tsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiSanity, SiFramer, SiGit, SiGithub, SiVercel, SiFigma, SiNodedotjs, SiExpress, SiSupabase, SiMongodb, SiPostgresql } from 'react-icons/si';

const projects = [
  {
    title: 'Dev-Grant Hub',
    description: 'A centralized platform that aggregates Web3/AI development grants, hackathons, and fellowship opportunities.',
    tags: ['Next.js', 'Supabase', 'GraphQL', 'Tailwind CSS'],
    liveUrl: 'https://dev-grant-hub.vercel.app/',
    repoUrl: 'https://github.com/piyxshh/dev-grant-hub',
  },
  {
    title: 'Greskas Website',
    description: 'A modern, high-performance website for a restaurant client, built with a headless CMS.',
    tags: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
    liveUrl: 'https://greskas.vercel.app/',
    repoUrl: 'https://github.com/piyxshh/greskas-website',
  },
  {
    title: 'Fix My Crave',
    description: 'A web app to help users find healthy alternatives to their food cravings, built with React and Vite.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://piyxshh.github.io/fix-my-crave/',
    repoUrl: 'https://github.com/piyxshh/fix-my-crave',
  },
  {
    title: 'MotionX',
    description: 'A lightweight, easy-to-use fitness and nutrition assistant that helps you track your calories, monitor your workouts, and receive personalized fitness advice—all without requiring a database.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://piyxshh.github.io/motionX/',
    repoUrl: 'https://github.com/piyxshh/motionX',
  },
]

const skills = {
  'Frontend & Frameworks': [
    { name: 'React', icon: <SiReact size={32} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={32} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} /> },
    { name: 'Framer Motion', icon: <SiFramer size={32} /> },
  ],
  'Backend & Databases': [
    { name: 'Node.js', icon: <SiNodedotjs size={32} /> },
    { name: 'Express.js', icon: <SiExpress size={32} /> },
    { name: 'Supabase', icon: <SiSupabase size={32} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} /> },
    { name: 'MongoDB', icon: <SiMongodb size={32} /> },
  ],
  'Languages': [
    { name: 'TypeScript', icon: <SiTypescript size={32} /> },
    { name: 'JavaScript', icon: <SiJavascript size={32} /> },
  ],
  'Tools & Platforms': [
    { name: 'Sanity.io', icon: <SiSanity size={32} /> },
    { name: 'Git', icon: <SiGit size={32} /> },
    { name: 'GitHub', icon: <SiGithub size={32} /> },
    { name: 'Vercel', icon: <SiVercel size={32} /> },
    { name: 'Figma', icon: <SiFigma size={32} /> },
  ],
};

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <Header />
      <Hero />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </main>
  )
}