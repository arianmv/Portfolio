import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Calendar, MapPin, Star, ArrowRight } from "lucide-react";

const education = [
  {
    id: 1,
    period: "Sep 2022 – Sep 2026",
    institution: "Instituto Superior de Engenharia do Porto (ISEP)",
    degree: "BSc in Computer Engineering",
    location: "Porto, Portugal",
    current: true,
    highlights: [
      "Focus on software development and engineering principles",
      "Practical application of programming concepts",
      "Database management and system architecture"
    ]
  },
  {
    id: 2,
    period: "Sep 2021 – Jul 2022",
    institution: "Shahid Beheshti University",
    degree: "BSc in Mathematics (1st Year Completed)",
    location: "Tehran, Iran",
    current: false,
    highlights: [
      "Strong foundation in mathematical principles",
      "Analytical thinking and problem-solving skills",
      "Completed first year before migrating to Portugal"
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 notebook-paper opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="handwritten text-3xl text-primary mb-2">Education</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              My academic journey spans across countries, building a strong foundation in
              both mathematics and computer engineering.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Academic Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Academic Journey
                </h3>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="notebook-paper paper-fold rounded-lg p-6 shadow-md hover-lift">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <h4 className="marker-text text-xl text-primary">{edu.degree}</h4>
                        {edu.current && (
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center text-foreground mb-2">
                          <BookOpen className="h-4 w-4 text-accent mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-foreground/70 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/5 p-3 rounded-lg">
                        <h5 className="font-medium text-foreground mb-2 flex items-center">
                          <Star className="h-4 w-4 text-accent mr-2" />
                          Highlights
                        </h5>
                        <ul className="space-y-1 text-foreground/70 text-sm">
                          {edu.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Skills and Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="self-start"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Skills & Languages
                </h3>
              </div>
              
              {/* Top Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="notebook-paper paper-fold rounded-lg p-6 shadow-md mb-6"
              >
                <h4 className="marker-text text-lg text-primary mb-4">Top Skills</h4>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-background border border-border rounded-lg p-3 flex flex-col items-center text-center hover-lift">
                    <div className="bg-accent/10 p-2 rounded-full mb-2">
                      <div className="h-8 w-8 flex items-center justify-center text-accent font-bold">J</div>
                    </div>
                    <span className="text-foreground font-medium">Java/JavaScript</span>
                    <span className="text-foreground/60 text-xs">Backend & Frontend</span>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg p-3 flex flex-col items-center text-center hover-lift">
                    <div className="bg-accent/10 p-2 rounded-full mb-2">
                      <div className="h-8 w-8 flex items-center justify-center text-accent font-bold">PS</div>
                    </div>
                    <span className="text-foreground font-medium">Problem Solving</span>
                    <span className="text-foreground/60 text-xs">Algorithms & Logic</span>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg p-3 flex flex-col items-center text-center hover-lift">
                    <div className="bg-accent/10 p-2 rounded-full mb-2">
                      <div className="h-8 w-8 flex items-center justify-center text-accent font-bold">PY</div>
                    </div>
                    <span className="text-foreground font-medium">Python</span>
                    <span className="text-foreground/60 text-xs">Scripting & Automation</span>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg p-3 flex flex-col items-center text-center hover-lift">
                    <div className="bg-accent/10 p-2 rounded-full mb-2">
                      <div className="h-8 w-8 flex items-center justify-center text-accent font-bold">DB</div>
                    </div>
                    <span className="text-foreground font-medium">Database</span>
                    <span className="text-foreground/60 text-xs">Oracle & SQL</span>
                  </div>
                </div>
                
                <h5 className="text-foreground font-medium mb-2">Other Skills</h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                    Git & GitHub
                  </span>
                  <span className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                    Creative Design
                  </span>
                  <span className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                    Team Communication
                  </span>
                  <span className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                    Bash
                  </span>
                  <span className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                    Artificial Intelligence
                  </span>
                  <span className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                    C/C++
                  </span>
                  <span className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                    HTML/CSS
                  </span>
                </div>
              </motion.div>
              
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="notebook-paper paper-fold rounded-lg p-6 shadow-md"
              >
                <h4 className="marker-text text-lg text-primary mb-4">Languages</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">Farsi (Persian)</span>
                    </div>
                    <span className="text-foreground/70 text-sm">Native</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">English</span>
                    </div>
                    <span className="text-foreground/70 text-sm">Fluent</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">Portuguese</span>
                    </div>
                    <span className="text-foreground/70 text-sm">Conversational</span>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition"
                  >
                    <span>Let's connect!</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;