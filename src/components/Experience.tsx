import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { Separator } from "./ui/separator";

const education = [
  {
    institution: "The City College of New York (CCNY)",
    degree: "Bachelor of Science in Computer Science",
    period: "Expected Graduation: 2027",
    gpa: "GPA: 3.2"
  },
  {
    institution: "James Madison High School",
    degree: "Advanced Regents Diploma",
    period: "Graduated: 2023",
    gpa: null
  }
];

const experience = [
  {
    role: "Babysitter",
    location: "Brooklyn, NY",
    period: "2022 – Present",
    description: "Encourages creativity and learning through engaging activities, fostering focus and curiosity."
  },
  {
    role: "Dog Walker",
    location: "Brooklyn, NY",
    period: "2018 – 2021",
    description: "Managed multiple clients, emphasizing reliability and time management."
  },
  {
    role: "Special Needs Student Assistant",
    location: "James Madison HS",
    period: "2019 – 2020",
    description: "Supported students with diverse learning needs, fostering confidence and participation."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#2B6CB0] mb-4">Education & Experience</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            My academic journey and professional experiences that have shaped my skills and perspective.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2B6CB0] to-[#63B3ED] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[#1A202C]">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-[#E6F2FF] hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[#1A202C]">{edu.institution}</CardTitle>
                    <CardDescription className="text-[#2B6CB0]">
                      {edu.degree}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-[#718096] mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <p className="text-sm text-[#718096]">{edu.gpa}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2B6CB0] to-[#63B3ED] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[#1A202C]">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-[#E6F2FF] hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[#1A202C]">{exp.role}</CardTitle>
                    <CardDescription className="text-[#2B6CB0]">
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-[#718096] mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm text-[#718096]">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
