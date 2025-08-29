"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Particles from "react-tsparticles";
import HeroParticles from "@/components/HeroParticles";
import { Code2, Terminal, Database, Star, Mail } from "lucide-react";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
    setShowContact(false);
  };

  return (
    <section
      className="h-screen relative flex flex-col justify-center items-center text-center px-4 
  bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      <HeroParticles />

      {/* theme toggle removed */}

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
            words={[
              "Software Developer",
              "DevOps Engineer",
              "DSA Enthusiast",
              "Full time beach person",
            ]}
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
          <a
            href="/Suraj_Mittal_Resume.pdf"
            download
            className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </a>
          <button
            onClick={() => setShowContact(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> Contact Me
          </button>
        </div>
      </motion.div>

      {/* Floating Skill Icons */}
      <motion.div
        className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
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
          <Star className="w-8 h-8" />
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

      {/* Contact Form Modal */}
      {showContact && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.form
            action="https://formsubmit.co/getsurajmittal@gmail.com"
            method="POST"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              onClick={() => setShowContact(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white font-bold text-lg"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Me
            </h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      )}
    </section>
  );
}
