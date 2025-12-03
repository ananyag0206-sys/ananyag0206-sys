"use client";
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

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.85, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 160, damping: 18 },
        },
    };
const titleVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

const letter = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 240, damping: 18 },
    },
};

    return (
        <section id="skills" className="min-h-screen w-full bg-black text-white py-24 px-4">

            {/* Title */}
            <motion.h2
    className="text-center text-3xl md:text-4xl font-bold flex justify-center gap-1"
    variants={titleVariants}
    initial="hidden"
    whileInView="visible"
>
    {["M","y"," ","S","k","i","l","l","s"].map((char, i) => (
        <motion.span
            key={i}
            variants={letter}
            className={`${i > 2 ? "text-purple-400" : ""}`}
        >
            {char}
        </motion.span>
    ))}
</motion.h2>

            {/* Animated Grid */}
            <motion.div
                className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                 
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{
                            scale: 1.07,
                            y: -6,
                        }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 240, damping: 12 }}
                        className="p-5 rounded-xl bg-black/30 hover:bg-black/40 
                                   transition-all duration-300 backdrop-blur-sm"
                    >
                        <div className="flex flex-col items-center gap-3">

                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 8, scale: 1.18 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="text-purple-400 text-4xl"
                            >
                                {skill.icon}
                            </motion.div>

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-center">{skill.name}</h3>

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
            </motion.div>
        </section>
    );
}
