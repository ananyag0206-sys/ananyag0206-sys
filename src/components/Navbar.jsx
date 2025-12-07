"use client";
import React from "react";
import { motion } from "framer-motion";

const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 140,
            damping: 14,
        },
    },
};

const linksContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const linkItem = {
    hidden: { y: -10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, damping: 16 },
    },
};

export default function Navbar() {
    return (
        <motion.header
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="fixed w-full z-30 top-0 left-0"
        >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                {/* Brand */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 relative z-10 cursor-pointer"
                >
                   Ananya's Portfolio
                </motion.div>

                {/* Links */}
                <motion.ul
                    className="hidden md:flex items-center gap-8 text-gray-300"
                    variants={linksContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <motion.li
                            key={item}
                            variants={linkItem}
                            whileHover={{ scale: 1.14, y: -2 }}
                            whileTap={{ scale: 0.94 }}
                            transition={{ type: "spring", stiffness: 240, damping: 16 }}
                            className="relative cursor-pointer"
                        >
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-purple-400 transition relative"
                            >
                                {item}

                                {/* Underline animation */}
                                <motion.span
                                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-purple-400"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.28 }}
                                />
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
        </motion.header>
    );
}
