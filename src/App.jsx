import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy-load everything below the fold
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Decorative background should not block initial rendering
const BackgroundAnimation = lazy(
  () => import("./components/BackgroundAnimation")
);

export default function App() {
  return (<div className="relative min-h-screen overflow-x-hidden bg-black text-white font-sans">
    {/*
Decorative background:
Loaded asynchronously so it does not become part
of the initial critical rendering path.
*/} <Suspense fallback={null}> <div
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    > <BackgroundAnimation /> </div> </Suspense>

    ```
    {/* Dark overlay */}
    <div
      className="fixed inset-0 -z-5 pointer-events-none bg-black/60"
      aria-hidden="true"
    />

    {/* Critical above-the-fold content */}
    <Navbar />

    <Hero />

    {/* 
    Below-the-fold sections:
    Code-split into separate JavaScript chunks.
  */}
    <Suspense
      fallback={
        <div
          className="min-h-screen bg-black"
          aria-hidden="true"
        />
      }
    >
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Suspense>
  </div>
  )
}