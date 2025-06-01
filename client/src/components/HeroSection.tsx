import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MousePointer, Code, PenTool } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add typing animation class after component mounts
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.classList.add("typing-effect");
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.8,
      }
    })
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-background relative overflow-hidden"
    >
      {/* Background pattern - notebook lines */}
      <div className="absolute inset-0 notebook-paper opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1"
          >
            <div className="mb-6 flex items-center">
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-accent/10 p-2 rounded-full mr-3"
              >
                <Code className="h-6 w-6 text-accent" />
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="handwritten text-2xl text-foreground/80"
              >
                Hello there! I'm
              </motion.h2>
            </div>
            
            <motion.h1 
              className="marker-text text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Amir Masnavi
              <span className="block text-accent">Software Engineer</span>
            </motion.h1>
            
            <div 
              ref={textRef}
              className="text-xl md:text-2xl text-foreground/80 mb-8"
            >
              Adaptable developer with a passion for technology
            </div>
            
            <motion.p 
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-foreground/70 mb-8 max-w-lg"
            >
              An enthusiastic and adaptable individual with a strong background in mathematics 
              and a passion for technology. Currently studying Computer Engineering in Portugal.
            </motion.p>
            
            <motion.div 
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-medium rounded-md transition shadow-sm"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border hover:border-primary text-foreground hover:text-primary font-medium rounded-md transition"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] -rotate-6 transform-gpu"></div>
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden border-4 border-foreground/10 relative z-10 shadow-xl"
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
              <img 
                src={profileImage}
                alt="Amir Masnavi"
                className="w-full h-full object-cover object-center"
              />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-0 -right-5 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-border"
              >
                <PenTool className="h-6 w-6 text-accent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-3 right-10 bg-background/80 backdrop-blur-sm py-1 px-3 rounded-full shadow-md border border-border"
              >
                <span className="handwritten text-foreground/80 text-sm">Based in Portugal</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="handwritten text-foreground/70 mb-2">Scroll down</span>
            <ArrowDown className="h-6 w-6 text-accent animate-bounce-slow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
