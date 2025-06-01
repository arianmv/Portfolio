import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Calendar, Briefcase, Building, MapPin, Megaphone, Globe, Code } from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "Jan 2025 – Present",
    role: "IT Department Member",
    organization: "Erasmus Student Network (ESN) Porto",
    location: "Porto, Portugal",
    icon: <Code className="h-5 w-5 text-accent" />,
  },
  {
    id: 2,
    period: "Sep 2024 – Present",
    role: "Partnerships Department Member",
    organization: "ESN Porto",
    location: "Porto, Portugal",
    icon: <Building className="h-5 w-5 text-accent" />,
  },
  {
    id: 3,
    period: "Sep 2024 – Jan 2025",
    role: "Marketing Department Member",
    organization: "ESN Porto",
    location: "Porto, Portugal",
    icon: <Megaphone className="h-5 w-5 text-accent" />,
  },
  {
    id: 4,
    period: "Sep 2024 – Present",
    role: "Volunteer, Marketing Manager",
    organization: "Núcleo de Estudantes de Informática do ISEP",
    location: "Porto, Portugal",
    icon: <Users className="h-5 w-5 text-accent" />,
  },
  {
    id: 5,
    period: "Sep 2021 – Mar 2022",
    role: "Marketing Manager (Part-time)",
    organization: "cllive.net",
    location: "Tehran, Iran",
    icon: <Globe className="h-5 w-5 text-accent" />,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const ESNSection = () => {
  return (
    <section id="esn" className="py-20 bg-background relative overflow-hidden">
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
            <h2 className="handwritten text-3xl text-primary mb-2">Experience & Leadership</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              My professional journey includes ESN involvement, volunteering, and marketing roles
              that have shaped my teamwork and leadership skills.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ESN and Work Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Experience Timeline
                </h3>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative border-l-2 border-border pl-8 ml-4 space-y-8 before:content-[''] before:absolute before:top-0 before:left-[-5px] before:w-2 before:h-2 before:bg-accent before:rounded-full after:content-[''] after:absolute after:bottom-0 after:left-[-5px] after:w-2 after:h-2 after:bg-accent after:rounded-full"
              >
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="absolute left-[-39px] top-1 bg-background border-2 border-border rounded-full p-1">
                      {exp.icon}
                    </div>
                    <div className="notebook-paper paper-fold p-4 rounded-lg shadow-sm hover-lift">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="marker-text text-lg text-primary">{exp.role}</h4>
                        <span className="text-xs flex items-center bg-accent/10 px-2 py-1 rounded-full">
                          <Calendar className="h-3 w-3 text-accent mr-1" />
                          <span className="text-foreground/70">{exp.period}</span>
                        </span>
                      </div>
                      <p className="text-foreground mb-1 font-medium">{exp.organization}</p>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <MapPin className="h-3 w-3 text-accent/70 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* ESN Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  ESN Leadership
                </h3>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="notebook-paper paper-fold p-6 rounded-lg shadow-md mb-6"
              >
                <p className="text-foreground/80 mb-4">
                  As an active member of Erasmus Student Network (ESN) Porto, I've combined my technical 
                  skills with my passion for cultural exchange and community building across multiple departments:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground">IT Department</h5>
                      <p className="text-foreground/70 text-sm">
                        Applying technical skills to improve organization's digital tools and platforms
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground">Partnerships</h5>
                      <p className="text-foreground/70 text-sm">
                        Establishing and maintaining relationships with local businesses and organizations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground">Marketing</h5>
                      <p className="text-foreground/70 text-sm">
                        Creating promotional materials and content for social media and events
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/5 p-4 rounded-lg mb-4">
                  <h4 className="marker-text text-primary mb-3">Key Contributions:</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                      <span>Organized cultural exchange events connecting international students</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                      <span>Applied technical skills to improve digital presence and internal systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                      <span>Enhanced marketing strategies for better outreach to international community</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition"
                  >
                    <span>Ask me about my ESN experience</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </motion.div>
              
              {/* Insight Note */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="transform -rotate-2 bg-accent/5 p-4 rounded-lg shadow-sm border border-border"
              >
                <p className="handwritten text-foreground/90 text-lg">
                  "Working with ESN has taught me the importance of team dynamics, multicultural communication, 
                  and effective collaboration across diverse backgrounds."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESNSection;
