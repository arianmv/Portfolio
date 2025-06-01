import { motion } from "framer-motion";
import { Shield, Globe, Video, ArrowRight, ExternalLink, Code, Layers, Database } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shodrone Project",
    tags: ["Java", "DDD", "CI/CD"],
    description: "A comprehensive catalog management and drone simulation system built using Domain-Driven Design principles and CI/CD practices.",
    icon: <Shield className="h-8 w-8 text-accent" />,
    linkText: "View on GitHub",
    linkUrl: "#",
  },
  {
    id: 2,
    title: "RCOMP Network Simulation",
    tags: ["Cisco", "OSPF", "DHCP"],
    description: "A comprehensive network simulation using Cisco Packet Tracer that implements OSPF routing, DHCP, DNS services, and Access Control Lists.",
    icon: <Globe className="h-8 w-8 text-accent" />,
    linkText: "View on GitHub",
    linkUrl: "#",
  },
  {
    id: 3,
    title: "Video Biography Project",
    tags: ["Storytelling", "Video Editing"],
    description: "A personal storytelling project that combines narrative development with advanced video editing techniques to create a compelling biography.",
    icon: <Video className="h-8 w-8 text-accent" />,
    linkText: "View Project",
    linkUrl: "#",
  },
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

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="notebook-paper paper-fold rounded-lg shadow-md overflow-hidden hover-lift"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="marker-text text-xl text-primary mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs bg-accent/10 text-foreground/90 rounded-md border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-2 bg-accent/10 rounded-full">
            {project.icon}
          </div>
        </div>
        
        <p className="text-foreground/70 mb-4">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <a 
            href={project.linkUrl} 
            className="text-accent hover:text-accent/80 font-medium flex items-center transition"
          >
            <span>{project.linkText}</span>
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
      
      {/* Corner fold with number */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent via-transparent to-accent/10 flex items-end justify-end p-1">
        <span className="handwritten text-foreground/60 text-sm">{index + 1}</span>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  // Custom icons for the section
  const projectIcons = [
    { icon: <Code className="h-5 w-5 text-accent" />, label: "Code" },
    { icon: <Layers className="h-5 w-5 text-accent" />, label: "Architecture" },
    { icon: <Database className="h-5 w-5 text-accent" />, label: "Data" },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 notebook-paper opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="handwritten text-3xl text-primary mb-2">My Projects</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {projectIcons.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-background p-3 rounded-full border border-border shadow-sm mb-2">
                  {item.icon}
                </div>
                <span className="text-foreground/70 text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-foreground/80 text-center mb-12 max-w-3xl mx-auto"
          >
            Here are some of the projects I've worked on that showcase my skills and interests.
            Each project represents a different aspect of my technical capabilities.
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-background border border-border hover:border-accent text-foreground hover:text-accent font-medium rounded-md transition shadow-sm"
            >
              <span>View More on GitHub</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
