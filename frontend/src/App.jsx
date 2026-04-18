import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CurrentFocus from "./components/CurrentFocus";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
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
      let nextActiveSection = sectionIds[0];

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
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-soft),transparent_28%),radial-gradient(circle_at_bottom_right,var(--color-accent-alt),transparent_24%),var(--color-bg)]" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-grid)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <Navbar
        brand={portfolioContent.profile.name}
        navItems={portfolioContent.navigation}
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero profile={portfolioContent.profile} contact={portfolioContent.contact} />
        <CurrentFocus content={portfolioContent.currentFocus} />
        <About content={portfolioContent.profile.about} />
        <Experience content={portfolioContent.experience} />
        <Education content={portfolioContent.education} />
        <Skills content={portfolioContent.skillGroups} />
        <Projects content={portfolioContent.projects} />
        <Contact content={portfolioContent.contact} />
      </main>

      <Footer
        name={portfolioContent.profile.name}
        role={portfolioContent.profile.role}
        navItems={portfolioContent.navigation}
        socialLinks={portfolioContent.contact.socialLinks}
      />
    </div>
  );
}

export default App;
