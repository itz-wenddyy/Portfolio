import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Send, Download, FileText } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:wendygg481@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadResume = () => {
    toast.info("Resume download feature - please add your PDF to the project");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#F7FAFC] to-[#E6F2FF]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#2B6CB0] mb-4">Get In Touch</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-[#E6F2FF] bg-white">
              <CardHeader>
                <CardTitle className="text-[#1A202C] flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#2B6CB0]" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-[#718096]">
                  Fill out the form and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#1A202C]">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-[#E6F2FF] focus:border-[#2B6CB0]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1A202C]">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-[#E6F2FF] focus:border-[#2B6CB0]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1A202C]">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-[#E6F2FF] focus:border-[#2B6CB0]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email Card */}
            <Card className="border-[#E6F2FF] bg-white">
              <CardHeader>
                <CardTitle className="text-[#1A202C]">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:wendygg481@gmail.com"
                  className="text-[#2B6CB0] hover:text-[#63B3ED] transition-colors"
                >
                  wendygg481@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Resume Download Card */}
            <Card className="border-[#E6F2FF] bg-white">
              <CardHeader>
                <CardTitle className="text-[#1A202C] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#2B6CB0]" />
                  Resume
                </CardTitle>
                <CardDescription className="text-[#718096]">
                  Download my resume to learn more about my experience and skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="w-full border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0]/5"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links Card */}
            <Card className="border-[#E6F2FF] bg-white">
              <CardHeader>
                <CardTitle className="text-[#1A202C]">Connect</CardTitle>
                <CardDescription className="text-[#718096]">
                  Find me on these platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://github.com/itz-wenddyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2B6CB0] hover:text-[#63B3ED] transition-colors"
                >
                  <span>GitHub</span>
                  <span className="text-[#718096]">→</span>
                </a>
                <a
                  href="https://linkedin.com/in/wendy-gutierrez-290136279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2B6CB0] hover:text-[#63B3ED] transition-colors"
                >
                  <span>LinkedIn</span>
                  <span className="text-[#718096]">→</span>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
