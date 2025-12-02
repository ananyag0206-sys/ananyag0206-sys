"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 },
        },
    };

    return (
        <footer className="relative z-10 w-full py-16 px-6 bg-transparent border-t border-purple-500/20 overflow-hidden">

            {/* GLOW AURORA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.4,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[400px] h-[140px] 
                bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700
                blur-[90px] rounded-full pointer-events-none"
            />

            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white relative"
            >

                {/* LEFT SECTION */}
                <motion.div variants={fadeUp}>
                    <h2 className="text-2xl font-bold">Portfolio</h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-1 w-20 bg-purple-500 mt-1 rounded-full origin-left"
                    ></motion.div>

                    <p className="text-gray-300 mt-4 leading-relaxed">
                        Building modern, high-performance web experiences through elegant
                        design, clean code, and cutting-edge technologies.
                    </p>

                    {/* SOCIAL ICONS */}
                    <motion.div
                        className="flex gap-4 mt-6"
                        variants={stagger}
                    >
                        {["🛒", "📘"].map((icon, i) => (
                            <motion.button
                                key={i}
                                variants={fadeUp}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: 6,
                                    boxShadow:
                                        "0 0 25px rgba(168,85,247,0.55)"
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className="w-12 h-12 rounded-xl bg-gradient-to-br 
                                from-purple-500 to-pink-500 flex items-center justify-center
                                text-2xl shadow-lg shadow-purple-500/40"
                            >
                                {icon}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT SECTION */}
                <motion.div variants={fadeUp}>
                    <h2 className="text-xl font-semibold">Get In Touch</h2>

                    <motion.p
                        whileHover={{ x: 5, color: "#c084fc" }}
                        transition={{ duration: 0.3 }}
                        className="text-purple-400 mt-4 cursor-pointer"
                    >
                        Email
                    </motion.p>
                    <p className="text-gray-300">ananyag0206@gmail.com</p>

                    <motion.p
                        whileHover={{ x: 5, color: "#c084fc" }}
                        transition={{ duration: 0.3 }}
                        className="text-purple-400 mt-4 cursor-pointer"
                    >
                        Location
                    </motion.p>
                    <p className="text-gray-300">Gwalior, India</p>
                </motion.div>

            </motion.div>

            {/* COPYRIGHT */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ duration: 1 }}
                className="text-center text-gray-500 mt-10"
            >
                © {new Date().getFullYear()} Ananya Gupta
            </motion.div>
        </footer>
    );
}
