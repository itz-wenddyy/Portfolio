import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { BookOpen, Cat, Cookie, Grid3x3 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const hobbies = [
  {
    icon: Grid3x3,
    title: "Daily Wordle Warrior",
    description: "I start every morning with a Wordle puzzle. It's my favorite way to wake up my brain and challenge myself daily!",
    color: "from-[#2B6CB0] to-[#63B3ED]",
    image: "https://images.unsplash.com/photo-1622617760286-e11b543f5ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkJTIwZ2FtZSUyMHB1enpsZXxlbnwxfHx8fDE3NjEwNjkyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: BookOpen,
    title: "Avid Reader",
    description: "Nothing beats getting lost in a good fantasy novel. The Throne of Glass series by Sarah J. Maas? Absolutely one of the best series ever written!",
    color: "from-[#2B6CB0] to-[#63B3ED]",
    image: "https://images.unsplash.com/photo-1563045848-0a66ac691653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZyUyMGNvenl8ZW58MXx8fHwxNzYwOTUyNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Cat,
    title: "Proud Cat Parent",
    description: "I share my home with three amazing cats who keep me company during late-night coding sessions and provide endless entertainment.",
    color: "from-[#2B6CB0] to-[#63B3ED]",
    image: "https://images.unsplash.com/photo-1710997740246-75b30937dd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTc5NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Cookie,
    title: "Baking Enthusiast",
    description: "When I'm not coding, you'll find me in the kitchen experimenting with new recipes. Baking is my creative outlet and stress relief!",
    color: "from-[#2B6CB0] to-[#63B3ED]",
    image: "https://images.unsplash.com/photo-1649634437312-c005a922d448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBjb29raWVzJTIwcGFzdHJ5fGVufDF8fHx8MTc2MTA2OTIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#2B6CB0] mb-4">Beyond the Code</h2>
          <p className="text-[#718096] max-w-2xl mx-auto">
            When I'm not studying computer science or building applications, here's what keeps me inspired and balanced.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-[#E6F2FF] hover:shadow-xl transition-all duration-300 group">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 via-[#1A202C]/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${hobby.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white">{hobby.title}</h3>
                    </div>
                  </div>

                  <CardContent className="pt-6">
                    <p className="text-[#718096] leading-relaxed">
                      {hobby.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Fun Fact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#63B3ED]/10 to-[#2B6CB0]/10 rounded-2xl px-8 py-6 border border-[#63B3ED]/20">
            <p className="text-[#718096]">
              <span className="text-[#2B6CB0]">Fun fact:</span> I believe the best code is written with a cup of tea, 
              a cat on my lap, and a good book waiting for me when I'm done! 📚🐱
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
