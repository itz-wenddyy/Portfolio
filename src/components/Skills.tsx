import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code2, Wrench, BookOpen, Globe, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "Python (beginner)", "HTML/CSS"]
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Javadoc", "VS Code", "IntelliJ IDEA"]
  },
  {
    title: "Concepts",
    icon: BookOpen,
    skills: ["Object-Oriented Programming (OOP)", "Modular Design", "CSV Parsing", "Version Control"]
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["English (Fluent)", "Spanish (Fluent)", "Italian (Basic)"]
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    skills: ["Communication", "Teamwork", "Adaptability", "Problem Solving", "Organization"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-[#F7FAFC] to-[#E6F2FF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#2B6CB0] mb-4">Skills & Expertise</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            A comprehensive set of technical and interpersonal skills developed through academic projects and real-world experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#E6F2FF] bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2B6CB0] to-[#63B3ED] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-[#1A202C]">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#718096]">
                          <span className="text-[#63B3ED] mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
