"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Particles from "react-tsparticles";
import HeroParticles from "@/components/HeroParticles";
import { Code2, Terminal, Database, Star } from "lucide-react";
import LandingIntro from "./LandingIntro";

export default function Hero() {

  return (
    <section className="h-screen relative flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <HeroParticles />
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#6366F1", "#F472B6", "#34D399"] },
            links: { enable: true, color: "#888", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.5 },
            size: { value: { min: 3, max: 6 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I’m Suraj Mittal
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
          <Typewriter
            words={["Software Engineer", "Fullstack Developer", "DSA Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-8">
          <Link
            href="/Suraj_Mittal_Resume.pdf"
            download
            className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </Link>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Floating Skill Icons */}
      <motion.div
        className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Example icons floating around */}
        <motion.div
          className="absolute top-20 left-10 text-indigo-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Code2 className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-16 text-pink-500"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Star  className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-24 text-green-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
        >
          <Database className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-32 text-yellow-400"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Terminal className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
