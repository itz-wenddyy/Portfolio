import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A202C] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/itz-wenddyy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#2B6CB0]/10 hover:bg-[#2B6CB0]/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/wendy-gutierrez-290136279"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#2B6CB0]/10 hover:bg-[#2B6CB0]/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:wendygg481@gmail.com"
              className="p-3 rounded-full bg-[#2B6CB0]/10 hover:bg-[#2B6CB0]/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 justify-center text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#63B3ED] hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#63B3ED] hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#63B3ED] hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#63B3ED] hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#63B3ED] hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-[#718096]/20" />

          {/* Copyright */}
          <div className="text-center text-sm text-[#718096]">
            <p className="flex items-center gap-2 justify-center">
              © {currentYear} Wendy Gutierrez. Made with 
              <Heart className="w-4 h-4 text-[#63B3ED] fill-[#63B3ED]" />
              in Brooklyn, NY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
