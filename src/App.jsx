import React, { useState, useEffect } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [heroKey, setHeroKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls near the top (Hero section)
      if (window.scrollY < 100) {
        // Force re-mount hero
        setHeroKey((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <BackgroundAnimation />

      {/* 👇 Hero remounts every time heroKey increases */}
      <Hero key={heroKey} />

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
