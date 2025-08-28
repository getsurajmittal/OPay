"use client";
import { useState, useEffect } from "react";

export default function LandingIntro({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish(); // Notify parent to show main hero
    }, 2500); // show intro for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
      <p className="text-green-400 font-mono text-2xl md:text-3xl tracking-wide">
        Welcome to my portfolio
      </p>
    </div>
  );
}
