import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "FareFit – AI-Powered Fitness App",
    description: "FareFit is an AI-driven nutrition and fitness app that helps users achieve their health goals with ease. It includes barcode scanning, AI coaching, and personalized meal tracking — all within a sleek, intuitive UI.",
    image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc2MTA0OTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "TypeScript", "Firebase", "Gemini AI", "Vercel", "Cloudflare"],
    highlights: [
      "AI meal and fitness recommendations via Gemini API",
      "Firebase Auth + Firestore for secure user management",
      "Real-time progress dashboards",
      "Deployed on Vercel with Cloudflare DNS"
    ],
    github: "https://github.com/itz-wenddyy/FareFit",
    live: null
  },
  {
    title: "Personal Finance Manager",
    description: "A multi-module finance tracker for managing budgets, expenses, and savings. Designed with team collaboration and clean architecture in mind.",
    image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwY2FsY3VsYXRvciUyMGRhdGF8ZW58MXx8fHwxNzYxMDY4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Java", "OOP", "CSV", "Modular Architecture"],
    highlights: [
      "CSV parsing and validation logic",
      "Budget prediction and reporting",
      "Javadoc documentation for maintainability"
    ],
    github: null,
    live: null
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#2B6CB0] mb-4">Featured Projects</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            Explore my recent work showcasing AI integration, clean architecture, and user-focused design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-[#E6F2FF] overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#1A202C]">{project.title}</CardTitle>
                  <CardDescription className="text-[#718096]">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-[#63B3ED]/10 text-[#2B6CB0] border-[#63B3ED]/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-sm text-[#718096]">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#63B3ED] mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0]/5"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        size="sm"
                        className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
