import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Chatbot from "@/components/Chatbot";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Chatbot />
    </main>
  );
}
