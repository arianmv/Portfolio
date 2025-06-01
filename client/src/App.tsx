import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ESNSection from "@/components/ESNSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

function App() {
  // Track active section for navigation highlighting
  const [activeSection, setActiveSection] = useState("home");

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        // Using optional chaining to handle possible null values
        const sectionTop = (section as HTMLElement)?.offsetTop ?? 0;
        const sectionHeight = (section as HTMLElement)?.offsetHeight ?? 0;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground"
      >
        <NavBar activeSection={activeSection} />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ESNSection />
        <EducationSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </motion.div>
    </TooltipProvider>
  );
}

export default App;
