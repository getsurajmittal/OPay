"use client";

import certificationData from "@/data/certificationData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Certifications() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="certifications">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          📜 Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificationData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={cert.logo}
                  alt={cert.issuer}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.issuer} • {cert.date}
                </p>
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  className="mt-2 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  View Credential
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
