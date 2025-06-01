import { motion } from "framer-motion";
import { 
  Code, Server, Github, Shield, Layout, Beaker, 
  Users, Zap, FileText, MessageSquare, 
  Lightbulb, Puzzle, PenTool, Camera, Paintbrush
} from "lucide-react";

const technicalSkills = [
  { id: 1, name: "Java", icon: <Code className="h-8 w-8 mx-auto text-accent" /> },
  { id: 2, name: "Maven", icon: <Server className="h-8 w-8 mx-auto text-accent" /> },
  { id: 3, name: "GitHub", icon: <Github className="h-8 w-8 mx-auto text-accent" /> },
  { id: 4, name: "CI/CD", icon: <Shield className="h-8 w-8 mx-auto text-accent" /> },
  { id: 5, name: "DDD", icon: <Layout className="h-8 w-8 mx-auto text-accent" /> },
  { id: 6, name: "Photo Editing", icon: <Paintbrush className="h-8 w-8 mx-auto text-accent" /> },
  { id: 7, name: "Video Editing", icon: <Camera className="h-8 w-8 mx-auto text-accent" /> },
  { id: 8, name: "Database", icon: <Server className="h-8 w-8 mx-auto text-accent" /> },
];

const softSkills = [
  { 
    id: 1, 
    name: "Teamwork", 
    description: "Collaborative problem-solving and effective communication",
    icon: <Users className="h-6 w-6 text-accent" />,
  },
  { 
    id: 2, 
    name: "Adaptability", 
    description: "Quick to learn and adjust to changing environments",
    icon: <Zap className="h-6 w-6 text-accent" />,
  },
  { 
    id: 3, 
    name: "Documentation", 
    description: "Clear technical writing and project documentation",
    icon: <FileText className="h-6 w-6 text-accent" />,
  },
  { 
    id: 4, 
    name: "Communication", 
    description: "Effective cross-cultural and multilingual communication",
    icon: <MessageSquare className="h-6 w-6 text-accent" />,
  },
  { 
    id: 5, 
    name: "Creativity", 
    description: "Innovative approach to problem-solving and design",
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
  },
  { 
    id: 6, 
    name: "Analytical Thinking", 
    description: "Strong mathematical background and logical reasoning",
    icon: <Puzzle className="h-6 w-6 text-accent" />,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
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
            <h2 className="handwritten text-3xl text-primary mb-2">Skills & Tools</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              The technologies, tools, and methodologies I work with to build creative and functional solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Technical Skills */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center"
              >
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Technical Skills
                </h3>
              </motion.div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="notebook-paper paper-fold rounded-lg p-8 shadow-md"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {technicalSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="bg-background border border-border p-4 rounded-lg text-center hover-lift shadow-sm"
                    >
                      <div className="bg-accent/10 p-3 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="handwritten text-foreground block">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Soft Skills */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center"
              >
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Soft Skills
                </h3>
              </motion.div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="notebook-paper paper-fold rounded-lg p-8 shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {softSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="bg-background border border-border p-4 rounded-lg flex items-start hover-lift shadow-sm"
                    >
                      <div className="bg-accent/10 p-3 rounded-full mr-4 mt-1">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="marker-text text-lg text-primary mb-1">{skill.name}</h4>
                        <p className="text-foreground/70 text-sm">{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block transform -rotate-1">
              <div className="bg-accent/5 px-6 py-4 rounded-lg border border-border shadow-sm">
                <PenTool className="h-5 w-5 text-accent mx-auto mb-2" />
                <p className="handwritten text-foreground/90 text-lg">
                  I'm always learning new technologies and expanding my skillset!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
