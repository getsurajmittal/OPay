"use client";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-indigo-200 text-indigo-800 dark:bg-indigo-600 dark:text-white px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
