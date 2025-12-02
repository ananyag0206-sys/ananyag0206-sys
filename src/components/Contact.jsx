import React from "react";
import { motion } from "framer-motion";

// TEXT SPLIT ANIMATION
const splitText = (text) =>
    text.split("").map((char, i) => (
        <motion.span
            key={i}
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: "easeOut",
            }}
        >
            {char}
        </motion.span>
    ));

// UNIVERSAL STAGGER
const staggerParent = {
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen w-full bg-black text-white py-24 px-6 overflow-hidden"
        >
            {/* ⭐ FLOATING PARTICLES ⭐ */}
            {Array.from({ length: 45 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.9, 0],
                        y: [0, -40, 0],
                        x: [0, Math.random() * 35 - 20, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 6,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                    }}
                    className="absolute rounded-full bg-purple-500"
                    style={{
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        filter: "blur(2px)",
                        opacity: 0.5,
                    }}
                />
            ))}

            {/* ⭐ HEADING ⭐ */}
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={staggerParent}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-extrabold text-center mb-4"
                style={{
                    textShadow:
                        "0 0 25px rgba(168,85,247,0.55), 0 0 40px rgba(139,92,246,0.65)",
                }}
            >
                {splitText("Get In Touch")}
            </motion.h1>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="text-gray-300 text-center max-w-2xl mx-auto"
            >
                Whether it's a project, collaboration, or a simple hello —  
                I'm always open to connecting and creating something amazing.
            </motion.p>

            {/* ⭐ MAIN BODY ⭐ */}
            <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
            >
                {/* LEFT — FORM */}
                <motion.div
                    variants={fadeUp}
                    className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                    shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                >
                    {/* FORM FIELD */}
                    {[
                        { label: "Name", type: "text", placeholder: "Your name" },
                        { label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map((field, idx) => (
                        <motion.div key={idx} className="mb-4" variants={fadeUp}>
                            <label className="text-gray-300 text-sm">{field.label}</label>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="w-full p-3 mt-2 bg-black/40 text-white rounded-lg
                                border border-purple-500/20 outline-none
                                focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]
                                transition-all"
                            />
                        </motion.div>
                    ))}

                    {/* MESSAGE */}
                    <motion.div variants={fadeUp}>
                        <label className="text-gray-300 text-sm">Message</label>
                        <textarea
                            rows="2"
                            placeholder="Tell me about your project..."
                            className="w-full p-3 mt-2 bg-black/40 text-white rounded-lg
                            border border-purple-500/20 outline-none
                            focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]
                            transition-all"
                        ></textarea>
                    </motion.div>

                    {/* SEND BUTTON — MAGNETIC */}
                    <motion.button
                        whileHover={{
                            scale: 1.06,
                            y: -4,
                            boxShadow:
                                "0 0 22px rgba(139,92,246,0.55), 0 0 40px rgba(168,85,247,0.45)",
                        }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="w-full mt-8 py-3 bg-gradient-to-br from-purple-600 to-fuchsia-500 
                        rounded-lg text-white font-semibold shadow-lg relative overflow-hidden"
                    >
                        <span className="relative z-10">Send Message ✨</span>

                        <motion.div
                            className="absolute inset-0"
                            animate={{ x: ["-120%", "120%"] }}
                            transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
                            style={{
                                background:
                                    "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                            }}
                        ></motion.div>
                    </motion.button>
                </motion.div>

                {/* RIGHT — CONNECT BOXES */}
                <motion.div className="space-y-6">
                    {[
                        { icon: "📩", label: "Email", value: "ananyag@gmail.com", color: "purple" },
                        { icon: "📞", label: "Phone", value: "+91 xxxxxxxxx", color: "blue" },
                        { icon: "📍", label: "Location", value: "Gwalior, India", color: "pink" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -6 }}
                            transition={{ type: "spring", stiffness: 200, damping: 14 }}
                            className="flex items-center gap-6 p-5 rounded-xl 
                            bg-white/5 border border-white/10 backdrop-blur-lg
                            hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] cursor-pointer"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                                className={`text-3xl p-3 rounded-full bg-${item.color}-600/80`}
                            >
                                {item.icon}
                            </motion.div>

                            <div>
                                <p className="text-gray-300">{item.label}</p>
                                <h3 className="text-white text-lg font-semibold">{item.value}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
