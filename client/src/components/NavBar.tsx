import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Palette, Bookmark } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavBarProps {
  activeSection: string;
}

const NavBar = ({ activeSection }: NavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "esn", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background bg-opacity-90 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <a href="#home" className="group flex items-center">
            <span className="marker-text text-2xl text-primary group-hover:scale-110 transition-transform duration-300">
              A<span className="text-accent">M</span>
            </span>
            <span className="ml-1 handwritten text-lg text-foreground opacity-80">
              portfolio
            </span>
            <Bookmark className="h-4 w-4 ml-1 text-accent transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          </a>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`font-medium transition relative group ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  <span className="handwritten text-lg">{link.label}</span>
                  {activeSection === link.id && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
                      layoutId="navHighlight"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile navigation */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background border-t border-border"
      >
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`handwritten text-lg transition block py-2 ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
              onClick={closeMobileMenu}
            >
              {link.label}
              {activeSection === link.id && (
                <div className="w-1/2 h-0.5 bg-accent mt-1" />
              )}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default NavBar;
