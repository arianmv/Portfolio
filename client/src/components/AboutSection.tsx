import { motion } from "framer-motion";
import { Code, Mail, Gift, MapPin, GraduationCap, Languages } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 notebook-paper opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="handwritten text-3xl text-primary mb-2">About Me</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-transition"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-foreground/5 p-4">
                <div className="absolute top-0 left-0 w-full h-full bg-accent/5 rounded-xl transform rotate-3"></div>
                <motion.div 
                  className="relative z-10 bg-background border-4 border-foreground/10 rounded-2xl overflow-hidden shadow-lg p-2"
                  whileHover={{ rotate: [0, -2, 0, 2, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={profileImage}
                    alt="Amir Masnavi" 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-6 right-2 bg-background/80 backdrop-blur-sm py-1 px-4 rounded-full border border-border shadow-md">
                  <span className="handwritten text-foreground/90">Passionate Developer</span>
                </div>
              </div>
              
              {/* Quick facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="bg-background paper-fold border border-border p-4 rounded-lg shadow-sm flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <div>
                    <h4 className="marker-text text-sm text-primary">Location</h4>
                    <p className="text-foreground/80 text-sm">Based in Portugal</p>
                  </div>
                </div>
                
                <div className="bg-background paper-fold border border-border p-4 rounded-lg shadow-sm flex items-start">
                  <GraduationCap className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <div>
                    <h4 className="marker-text text-sm text-primary">Studies</h4>
                    <p className="text-foreground/80 text-sm">Computer Engineering</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-transition"
            >
              <div className="notebook-paper paper-fold rounded-lg p-6 shadow-md">
                <h3 className="marker-text text-2xl text-primary mb-6 chalk-underline inline-block">A bit about me</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-accent/10 p-2 rounded-full">
                      <Gift className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground/80 mb-1">
                        I'm an <span className="font-medium text-foreground">enthusiastic and adaptable individual</span> with a strong 
                        background in mathematics and a passion for technology.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-accent/10 p-2 rounded-full">
                      <Code className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground/80 mb-1">
                        Currently studying <span className="font-medium text-foreground">Computer Engineering in Portugal</span>, I'm eager to leverage 
                        my skills in programming and problem-solving through internship opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-accent/10 p-2 rounded-full">
                      <Languages className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground/80 mb-1">
                        Besides coding, I'm passionate about exploring new technologies and learning new 
                        programming languages. I also managed <span className="font-medium text-foreground">social media accounts</span> and developed 
                        strong <span className="font-medium text-foreground">video and photo editing skills</span> during my time as a Marketing Manager.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className="px-5 py-2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-md transition flex items-center gap-2 shadow-sm"
                  >
                    <Code className="h-5 w-5" />
                    My Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="px-5 py-2 border border-border hover:border-primary text-foreground hover:text-primary rounded-md transition flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </a>
                </div>
              </div>
              
              {/* Handwritten note */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-6 bg-accent/5 p-4 rounded-lg transform rotate-1 shadow-sm border border-border"
              >
                <p className="handwritten text-foreground/90 text-lg">
                  "I love bringing mathematical thinking to software engineering challenges."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
