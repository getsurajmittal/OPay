"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-indigo-400">Suraj</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg max-w-xl"
      >
        A software developer passionate about building systems that work{" "}
        <span className="text-indigo-400">offline and online</span>, solving
        problems, and crafting experiences.
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#projects"
        className="mt-6 px-6 py-3 bg-indigo-500 rounded-2xl shadow-lg hover:bg-indigo-600 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
