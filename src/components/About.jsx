import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-[80px] min-h-screen w-full bg-black text-white py-24 px-6"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">


                {/* LEFT — IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center"
                >
                    {/* Glow Balls */}
                    <div className="absolute w-14 h-14 bg-purple-600/30 blur-3xl rounded-full top-10 left-12 animate-pulse" />
                    <div className="absolute w-10 h-10 bg-purple-500/20 blur-3xl rounded-full bottom-16 right-8 animate-pulse" />

                    {/* Image Frame */}
                    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-purple-500 shadow-[0_0_40px_#a855f7] animate-spin-slow" />
                        <div className="absolute inset-4 rounded-full border-2 border-purple-400 shadow-[0_0_60px_#c084fc]" />

                        <img
                            src="/hacker.png"
                            alt="profile"
                            className="w-60 h-60 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* RIGHT TEXT */}
                <div className="space-y-6">

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-purple-400"
                    >
                        About Me
                    </motion.h2>

                    {/* Paragraph 1 */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        Hi, I’m Ananya, an aspiring full-stack developer with a growing foundation in JavaScript, React, backend development, DBMS, and AI/ML.
                        I focus on building efficient, user-centric applications and continuously improving my technical skills through practical, real-world projects.
                        My goal is to develop modern, scalable solutions while expanding my expertise across software development and emerging technologies.
                    </motion.p>

                    {/* Paragraph 2 */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        I love clean UI, animations, and fast user-friendly designs.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap gap-3"
                    >
                        <div className="px-5 py-2 bg-white/10 rounded-full border border-white/20">
                            1 Year Experience
                        </div>
                        <div className="px-5 py-2 bg-white/10 rounded-full border border-white/20">
                            3+ Projects
                        </div>
                        <div className="px-5 py-2 bg-white/10 rounded-full border border-purple-400 text-purple-400">
                            Client Satisfaction
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
