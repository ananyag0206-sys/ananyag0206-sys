import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";
// import MouseBackground from "./components/MouseBackground";
// import Background from "./components/Background";

export default function App() {
  const [heroKey, setHeroKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setHeroKey((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* 🌌 Global Background (applies to ALL pages) */}
      <div className="fixed inset-0 -z-10">
        <BackgroundAnimation />
        {/* <MouseBackground /> */}
        {/* <Background /> */}
      </div>

      {/* 🔹 Optional: A subtle dark overlay (makes text readable) */}
      <div className="fixed inset-0 bg-black/60 -z-5 pointer-events-none"></div>

      {/* 🔽 All page content below will now have your Background behind them */}
      <Navbar />
      <Hero key={heroKey} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
