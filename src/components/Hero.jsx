import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
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
                    className="text-left md:text-center block text-4xl md:text-6xl text-white/90 mb-3"
                >
                    Hi, I'm
                </motion.p>

                {/* MAIN NAME */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="block text-5xl md:text-[5.5rem] font-extrabold tracking-tight 
                    text-transparent bg-clip-text bg-gradient-to-r from-white to-primary"
                >
                    Ananya Gupta —
                </motion.h1>

                {/* JOB TITLE — TYPING EFFECT */}
                <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.6 }}
    className="text-4xl md:text-[4rem] font-extrabold tracking-tight 
    text-primary typing-effect mx-auto w-fit inline-block whitespace-nowrap"
>
    Full Stack Developer
</motion.h2>


                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
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
                        href="#contact"
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-primary
                        to-primary-dark text-black font-semibold shadow-lg transition"
                    >
                        Hire Me
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="/CV.pdf"
                        download
                        className="px-6 py-3 rounded-full bg-black/50 border border-white/10 
                        text-white font-medium hover:bg-black/60 transition"
                    >
                        Download CV
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="px-6 py-3 rounded-full border border-white/10 
                        hover:border-white/20 text-white font-medium transition"
                    >
                        View My Work →
                    </motion.a>
                </motion.div>
            </div>
        </main>
    );
}
