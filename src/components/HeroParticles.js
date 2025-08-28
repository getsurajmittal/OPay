"use client";
import Particles from "react-tsparticles";

export default function HeroParticles() {
  return (
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
  );
}
