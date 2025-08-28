"use client";
import { Download } from "lucide-react";

export default function FloatingResumeButton() {
  return (
    <a
      href="/Suraj_Mittal_Resume.pdf"
      download
      className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 z-50"
    >
      <Download className="w-5 h-5" />
      Resume
    </a>
  );
}
