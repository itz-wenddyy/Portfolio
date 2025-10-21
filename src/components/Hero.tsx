import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Github, Linkedin, Download, ArrowRight, Shield, Database, Code2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Hero() {
  const handleDownloadResume = () => {
    toast.info("Resume download - please add your PDF file to the project");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2B6CB0] via-[#2B6CB0] to-[#63B3ED] px-4 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating accent dots */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-white/20 rounded-full"
          animate={{
            y: [0, 40, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-2 h-2 bg-white/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Accent lines */}
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-10 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Avatar with Initials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating animation for avatar */}
              <motion.div
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-[#2B6CB0] text-8xl">WG</span>
                </div>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Shield className="w-6 h-6 text-[#2B6CB0]" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Database className="w-6 h-6 text-[#2B6CB0]" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center"
                animate={{
                  x: [0, 5, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <Code2 className="w-5 h-5 text-[#2B6CB0]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center md:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4"
            >
              <p className="text-[#E2E8F0] text-lg mb-2">👋 Hi, I'm</p>
              <h1 className="text-white mb-2 relative inline-block">
                Wendy Gutierrez
                {/* Animated underline accent */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-[#63B3ED] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </h1>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/90 mb-6"
            >
              Aspiring Software Developer & Computer Science Student
            </motion.h2>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[#E2E8F0] text-lg leading-relaxed mb-8"
            >
              I'm passionate about cybersecurity and data science, building secure and data-driven applications 
              that solve real-world problems through thoughtful design and innovative technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="bg-white text-[#2B6CB0] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all rounded-xl group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-[#63B3ED] text-white hover:bg-[#4299E1] shadow-lg hover:shadow-xl transition-all rounded-xl group border-2 border-white/50"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/itz-wenddyy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#2B6CB0] transition-all hover:scale-110 shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/wendy-gutierrez-290136279"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#2B6CB0] transition-all hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}