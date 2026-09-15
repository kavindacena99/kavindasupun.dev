import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { portfolioContent } from "./content/portfolio";
import useTheme from "./hooks/useTheme";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = portfolioContent.navigation.map((item) => item.sectionId);
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    if (!sections.length || typeof window === "undefined") {
      return undefined;
    }

    let frameId = 0;
    const sectionOffset = 180;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + sectionOffset;
      let nextActiveSection = null;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          nextActiveSection = section.id;
        }
      });

      setActiveSection((currentSection) =>
        currentSection === nextActiveSection ? currentSection : nextActiveSection,
      );
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <div className="site-ambient" aria-hidden="true" />

      <Navbar
        brand={portfolioContent.profile.shortName}
        navItems={portfolioContent.navigation}
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero profile={portfolioContent.profile} contact={portfolioContent.contact} />
        <About content={portfolioContent.profile.about} />
        <Services content={portfolioContent.services} />
        <Projects content={portfolioContent.projects} />
        <Experience content={portfolioContent.experience} />
        <Skills content={portfolioContent.skillGroups} />
        <Education content={portfolioContent.education} />
        <Contact content={portfolioContent.contact} />
      </main>

      <Footer
        name={portfolioContent.profile.name}
        role={portfolioContent.profile.positioning}
        navItems={portfolioContent.navigation}
        socialLinks={portfolioContent.contact.socialLinks}
        email={portfolioContent.contact.email}
      />
    </div>
  );
}

export default App;
