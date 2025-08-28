import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
// import FloatingResumeButton from "@/components/FloatingResumeButton";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      {/* <FloatingResumeButton /> */}
      <Chatbot />
    </main>
  );
}
