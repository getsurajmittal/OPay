"use client";
import { timelineData } from "@/data/timeline";
import { GraduationCap, Briefcase, Code2, Star } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Code2: Code2,
  Star: Star
};

export default function AboutTimeline() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        About Me
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>

        {/* Timeline items */}
        {timelineData.map((item, index) => {
          const Icon = iconMap[item.icon] || Star;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`mb-12 flex items-center w-full ${isLeft ? "justify-start" : "justify-end"} relative`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-1/2 px-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg relative">
                  <Icon className="w-6 h-6 text-indigo-600 absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-50 dark:bg-gray-900 rounded-full p-1" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.period}</p>
                  <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
