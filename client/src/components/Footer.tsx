import { Github, Linkedin, Mail, Bookmark, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary/5 text-foreground py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 notebook-paper opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Back to top button - fixed position to ensure it's always visible */}
          <div className="fixed right-8 bottom-8 z-50">
            <motion.button
              onClick={scrollToTop}
              className="bg-background p-3 rounded-full shadow-lg border border-border hover:border-accent transition-colors duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp className="h-6 w-6 text-accent" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand & Social */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="marker-text text-2xl text-primary">
                  A<span className="text-accent">M</span>
                </h3>
                <Bookmark className="h-4 w-4 ml-1 text-accent transform -rotate-12" />
              </div>
              <p className="text-foreground/70 mb-6 font-light">
                Enthusiastic software engineering student, creative builder, and math enthusiast based in Portugal.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/amir-masnavi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-accent/10 rounded-full text-foreground hover:text-accent transition"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/amir-masnavi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-accent/10 rounded-full text-foreground hover:text-accent transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:amir.masnavi@example.com" 
                  className="p-2 bg-accent/10 rounded-full text-foreground hover:text-accent transition"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="handwritten text-xl text-primary mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#home" className="text-foreground/70 hover:text-accent transition py-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-2"></span>
                  Home
                </a>
                <a href="#about" className="text-foreground/70 hover:text-accent transition py-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-2"></span>
                  About Me
                </a>
                <a href="#projects" className="text-foreground/70 hover:text-accent transition py-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-2"></span>
                  Projects
                </a>
                <a href="#skills" className="text-foreground/70 hover:text-accent transition py-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-2"></span>
                  Skills
                </a>
                <a href="#esn" className="text-foreground/70 hover:text-accent transition py-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-2"></span>
                  ESN
                </a>
                <a href="#contact" className="text-foreground/70 hover:text-accent transition py-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-2"></span>
                  Contact
                </a>
              </div>
            </div>
            
            {/* Quote */}
            <div>
              <div className="notebook-paper p-4 rounded-lg shadow-sm relative">
                <div className="bg-accent/5 p-4 rounded-lg">
                  <h3 className="marker-text text-primary mb-2 text-lg">About this site</h3>
                  <p className="text-foreground/70 text-sm italic">
                    This portfolio was created with a minimalist black & white theme featuring notebook-style elements, a dark mode toggle, and subtle animations.
                  </p>
                  <div className="mt-2 text-xs text-foreground/50 flex items-center">
                    <Heart className="h-3 w-3 text-accent mr-1" />
                    <span>Built with React and Tailwind CSS</span>
                  </div>
                </div>
                {/* Paper fold corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent via-transparent to-accent/5"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-foreground/60">
            <p>© {currentYear} Amir Masnavi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
