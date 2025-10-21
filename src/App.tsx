import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <AboutMe />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}