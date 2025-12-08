import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // ====== WORDS TO LOOP THROUGH ======
  const titles = [
    "Full Stack Developer",
    "Problem Solver",
    "Code Explorer",
    "Tech Enthusiast"
  ];

  // ====== TYPING STATE ======
  const [index, setIndex] = useState(0);        // which word in `titles`
  const [text, setText] = useState("");         // current displayed substring
  const [isDeleting, setIsDeleting] = useState(false); // whether we're deleting

  // ====== TIMINGS (tweak these if you want faster/slower) ======
  const TYPING_SPEED = 100;   // ms per character while typing
  const DELETING_SPEED = 50;  // ms per character while deleting
  const PAUSE_AFTER_FULL = 1200; // pause when full word typed (ms)
  const PAUSE_AFTER_DELETE = 200; // small pause after fully deleted before next word

  useEffect(() => {
    let timeoutId;

    const currentWord = titles[index];

    // If not deleting and we haven't finished typing the word, type the next char
    if (!isDeleting && text !== currentWord) {
      timeoutId = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }
    // If we've finished typing the full word, pause then start deleting
    else if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_FULL);
    }
    // If deleting and we still have chars, delete the next char
    else if (isDeleting && text !== "") {
      timeoutId = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length - 1));
      }, DELETING_SPEED);
    }
    // If deleting and word is fully deleted, move to next word and pause slightly
    else if (isDeleting && text === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }, PAUSE_AFTER_DELETE);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, index, titles]);

  return (
    <main id="home" className="relative h-screen flex items-center">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* SMALL TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-left md:text-center block text-4xl md:text-6xl text-white/90 mb-1"
        >
          Hi, I'm
        </motion.p>

        {/* MAIN NAME */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="block text-10xl md:text-[5.5rem] font-extrabold tracking-tight 
                    text-transparent bg-clip-text bg-gradient-to-r from-white to-primary"
        >
          Ananya Gupta —
        </motion.h1>

        {/* JOB TITLE — TYPING EFFECT (LOOPING) */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: false }}
          className="text-5xl md:text-[4rem] font-extrabold tracking-tight text-primary mx-auto w-fit whitespace-nowrap inline-block"
        >
          {/* typed text */}
          <span>{text}</span>
          {/* blinking cursor */}
          <span
            aria-hidden="true"
            className="ml-2 inline-block h-[1.05em] w-[0.12em] bg-white animate-[blink_1s_step-end_infinite]"
            style={{
              // fallback CSS for environments without the tailwind animate class:
              // you can remove `style` if using tailwind with custom keyframes set up.
              WebkitMaskImage: undefined,
            }}
          ></span>

          {/* Small inline CSS for cursor blink if your setup doesn't include that keyframe */}
          <style>{`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-[blink_1s_step-end_infinite] {
              animation: blink 1s step-end infinite;
            }
          `}</style>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Full Stack Developer crafting modern, responsive web apps with clean UI and
          robust backend architecture.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false }}
            href="#projects"
            className="
              relative px-8 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-br from-purple-600/80 to-fuchsia-500/80
              border border-white/10 backdrop-blur-xl
              shadow-[0_0_20px_rgba(139,92,246,0.45)]
              hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]
              overflow-hidden
            "
          >
            <span className="relative z-10">View My Work</span>

            <motion.div
              className="absolute inset-0 z-0"
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
              }}
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false }}
            href="/CV_PORT.pdf"
            download
            className="px-6 py-3 rounded-full bg-black/50 border border-white/10 
                       text-white font-medium hover:border-white/60 transition"
          >
            Download CV
          </motion.a>

          {/* <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false }}
            href="#projects"
            className="px-6 py-3 rounded-full border border-white/10 
                       hover:border-white/60 text-white font-medium transition"
          >
            View My Work →
          </motion.a> */}
        </motion.div>
      </div>
    </main>
  );
}
