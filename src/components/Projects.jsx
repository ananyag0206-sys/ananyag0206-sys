"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio Website",
            desc:
                "A modern, fully responsive portfolio built with React.js and Framer Motion, featuring smooth animations, reusable components, a dynamic projects section, and an optimized UI/UX design.",
            img: "/port.jpeg",
            tags: [
                "React.js",
                "Framer Motion",
                "Tailwind CSS",
                "Responsive Design",
                "Vite",
                "JavaScript",
            ],
        },
        {
            id: 2,
            title: "Universal Multi-Database Client (DEX Project)",
            desc:
                "Designed a multi-database client with real-time interaction, query execution, visual insights and a developer-first workflow.",
            img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
            tags: [
                "React.js",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "MySQL",
                "REST API",
                "Cloud",
            ],
        },
    ];

    /* ---------------- Heading Animations ---------------- */
    const titleVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.06 },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 220, damping: 18 },
        },
    };

    /* ---------------- Card Reveal Variants ---------------- */
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.94, filter: "blur(6px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    /* ---------------- Parallax ---------------- */
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [22, -22]);

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    return (
        <section
            id="projects"
            className="relative min-h-screen w-full bg-black text-white py-24 px-6 overflow-hidden"
        >
            {/* ⭐ Floating Particles Background */}
            {Array.from({ length: 25 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.9, 0],
                        y: [0, -35, 0],
                        x: [0, Math.random() * 18 - 9, 0],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                    }}
                    className="absolute w-2 h-2 rounded-full bg-purple-500/60 blur-sm"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            {/* ⭐ Aurora Background */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.55 }}
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[380px] h-[150px] blur-[80px]
                bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 rounded-full"
            />

            {/* ⭐ Split Animated Title */}
            <motion.h2
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center text-5xl md:text-6xl font-extrabold flex justify-center gap-1 mb-6"
                style={{
                    textShadow: "0 0 35px rgba(139,92,246,0.35)",
                }}
            >
                {["F", "e", "a", "t", "u", "r", "e", "d", " ", "P", "r", "o", "j", "e", "c", "t", "s"].map((char, i) => (
                    <motion.span
                        key={i}
                        variants={letter}
                        className={i >= 9 ? "text-purple-400" : "text-white"}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h2>

            {/* ⭐ Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-gray-300 text-center max-w-2xl mx-auto text-lg leading-relaxed"
            >
                Hand-picked modern full-stack projects focused on animations,
                performance and clean UI.
            </motion.p>

            {/* ⭐ Cards Grid */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-14"
            >
                {projects.map((project, index) => (
                    <Card
                        key={project.id}
                        project={project}
                        index={index}
                        variants={cardVariants}
                        parallax={parallax}
                        clamp={clamp}
                    />
                ))}
            </motion.div>
        </section>
    );
}

/* -------------------------------------------------------------------
    ⭐ ULTRA-PREMIUM CARD WITH 3D DEPTH, SHINE, PARALLAX & GLOW
------------------------------------------------------------------- */
function Card({ project, index, variants, parallax, clamp }) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    const [cardStyle, setCardStyle] = useState({
        transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)",
        transition: "transform 800ms cubic-bezier(.18,.72,.23,1)",
    });

    const [imageStyle, setImageStyle] = useState({
        transform: "translateZ(0px) scale(1)",
        transition: "transform 900ms cubic-bezier(.18,.72,.23,1)",
    });

    const handleMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        const rotateY = clamp((px - 0.5) * 14, -14, 14);
        const rotateX = clamp((0.5 - py) * 12, -12, 12);

        const depth = clamp(18 + (0.5 - Math.abs(px - 0.5)) * 12, 10, 30);

        setCardStyle({
            transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });

        setImageStyle({
            transform: `translateZ(${depth}px) scale(1.08)`,
        });
    };

    const reset = () => {
        setCardStyle({
            transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)",
        });

        setImageStyle({
            transform: "translateZ(0px) scale(1)",
        });
    };

    const [parallaxY, setPY] = useState(0);
    useEffect(() => {
        const unsub = parallax.onChange((v) => setPY(v));
        return () => unsub();
    }, [parallax]);

    const [hover, setHover] = useState(false);

    return (
        <motion.div
            variants={variants}
            style={{ y: parallaxY }}
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            onMouseEnter={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            className="relative group rounded-2xl overflow-hidden p-[2px]
            bg-gradient-to-br from-purple-700/30 via-transparent to-transparent
            border border-purple-600/30
            backdrop-blur-xl
            shadow-[0_0_25px_rgba(168,85,247,0.3)]
            hover:shadow-[0_0_50px_rgba(168,85,247,0.85)]
            transition-all duration-700"
        >
            <div
                className="bg-black/60 rounded-2xl overflow-hidden"
                style={{ ...cardStyle, willChange: "transform" }}
            >
                {/* ⭐ IMAGE */}
                <div className="relative w-full h-40 overflow-hidden">
                    <div
                        ref={imageRef}
                        className="absolute inset-0"
                        style={{ ...imageStyle, willChange: "transform" }}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Shine */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
                            transform: hover ? "translateX(130%)" : "translateX(-130%)",
                            transition: "transform 1400ms cubic-bezier(.18,.72,.23,1)",
                            mixBlendMode: "overlay",
                        }}
                    />

                    {/* Floating Preview */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                            transition={{ duration: 0.55 }}
                            className="text-purple-300 text-lg font-semibold"
                        >
                            View Preview ✨
                        </motion.p>
                    </div>
                </div>

                {/* ⭐ CONTENT */}
                <div className="p-3">
                    <motion.h3
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl font-semibold"
                    >
                        {project.title}
                    </motion.h3>

                    <motion.p
                        animate={hover ? { opacity: 1 } : { opacity: 0.85 }}
                        className="text-gray-300 mt-2 text-sm"
                    >
                        {project.desc}
                    </motion.p>

                    {/* ⭐ TAGS */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-3 py-1 text-xs rounded-full bg-purple-900/40 text-purple-300 border border-purple-600/30"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>

                    {/* ⭐ BUTTON */}
                    <motion.a
                        href={
                            project.id === 1
                                ? import.meta.env.VITE_PORTFOLIO_GITHUB_LINK
                                : project.id === 2
                                    ? import.meta.env.VITE_DEX_GITHUB_LINK
                                    : undefined // Fallback if project.id is neither 1 nor 2
                        }
                        whileHover={{
                            scale: 1.08,
                            x: 4,
                            textShadow: "0 0 15px rgba(168,85,247,0.8)",
                        }}
                        transition={{ duration: 0.35 }}
                        className="inline-block mt-4 text-purple-400 hover:text-purple-200 text-sm font-semibold"
                    >
                        View Project →
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
