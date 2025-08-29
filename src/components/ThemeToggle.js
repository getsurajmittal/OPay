"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // icons (install: npm install lucide-react)

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-900" />
      )}
    </button>
  );
}
