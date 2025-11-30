import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaJsSquare,
    FaReact,
    FaCss3Alt,
    FaBootstrap,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
    FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";

export default function Skills() {
    const skills = [
        { icon: <FaHtml5 />, name: "HTML & CSS3", level: "98%" },
        { icon: <FaJsSquare />, name: "JavaScript", level: "90%" },
        { icon: <FaReact />, name: "React / Redux", level: "95%" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "91%" },

        { icon: <FaBootstrap />, name: "Bootstrap", level: "81%" },
        { icon: <SiExpress />, name: "Express.js", level: "85%" },


        { icon: <FaFigma />, name: "UI/UX Design", level: "87%" },
        { icon: <FaNodeJs />, name: "Node.js / Express.js", level: "87%" },

        { icon: <SiMongodb />, name: "MongoDB", level: "86%" },
        { icon: <SiPostgresql />, name: "PostgreSQL", level: "84%" },
        { icon: <FaGitAlt />, name: "Git", level: "89%" },
        { icon: <FaDatabase />, name: "GitHub", level: "92%" },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen w-full bg-black text-white py-24 px-4"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-3xl md:text-4xl font-bold"
            >
                My <span className="text-purple-400 underline underline-offset-4">Skills</span>
            </motion.h2>

            {/* Skills Grid */}
            <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="p-4 bg-black/40 border border-purple-500/20 rounded-xl shadow-[0_0_12px_#6b21a8] hover:shadow-[0_0_20px_#a855f7]transition relative"
                    >
                        <div className="flex flex-col items-center gap-3">

                            {/* Icon */}
                            <div className="text-purple-400 text-3xl">
                                {skill.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-center">
                                {skill.name}
                            </h3>

                            {/* Progress Bar */}
                            <div className="w-full mt-2">
                                <div className="w-full bg-purple-900/20 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        transition={{ duration: 1.5 }}
                                        className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                                    />
                                </div>
                                <p className="text-right text-xs text-purple-300 mt-1">
                                    {skill.level}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
