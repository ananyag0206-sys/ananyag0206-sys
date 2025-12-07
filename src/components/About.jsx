import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
    // =============== VARIANTS ===============
    const unified = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const parent = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.18 } },
    };

    const letterVariant = {
        hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.30, ease: "easeOut" },
        },
    };

    const subtitleParent = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.015,
            },
        },
    };

    // Util → Convert sentence to animated letter array
    const animateSentence = (text) =>
        text.split("").map((char, i) => (
            <motion.span
                key={i}
                variants={letterVariant}
                style={{ display: "inline-block" }}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ));

    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const orbRef = useRef(null);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const particles = React.useMemo(() => {
        return Array.from({ length: 18 }).map(() => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 5 + Math.random() * 6,
            size: 1 + Math.random() * 3,
            dir: Math.random() > 0.5 ? 1 : -1,
        }));
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const handleMove = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("touchmove", handleMove, { passive: true });

        return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("touchmove", handleMove);
        };
    }, []);

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const orbStyle = () => {
        const ref = leftRef.current;
        if (!ref) return {};

        const rect = ref.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouse.x - cx;
        const dy = mouse.y - cy;

        const nx = clamp(dx / (rect.width / 2), -1, 1);
        const ny = clamp(dy / (rect.height / 2), -1, 1);

        const rotateY = -nx * 10;
        const rotateX = ny * 8;
        const translateX = nx * 6;
        const translateY = ny * 6;
        const depth = 18 + (1 - Math.abs(nx)) * 8;

        return {
            transform: `perspective(900px) translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            imgTransform: `translateZ(${depth}px) scale(${1 + (depth - 14) / 220})`,
        };
    };

    const orbFloat = {
        y: [-6, 6, -6],
    };

    const titleParent = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, staggerChildren: 0.05 },
        },
    };

    const titleLetter = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="scroll-mt-[80px] min-h-screen w-full bg-black text-white py-24 px-6 relative overflow-hidden"
        >
            {/* Particle Orbs */}
            {particles.map((p, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.7, 0],
                        y: [-10 * p.dir, -40 * p.dir, -10 * p.dir],
                        x: [0, idx % 2 ? 18 : -18, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: p.delay,
                    }}
                    style={{
                        position: "absolute",
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        borderRadius: "9999px",
                        background: "rgba(255,255,255,0.06)",
                        filter: "blur(3px)",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
            ))}

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                {/* LEFT — ORB */}
                <motion.div
                    ref={leftRef}
                    initial={{ opacity: 0, x: -26 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1, ease: [0.2, 0.9, 0.3, 1] },
                    }}
                    className="relative flex items-center justify-center"
                >
                    {/* AURORA PREMIUM GLOW */}
                    <motion.div
                        className="absolute -inset-48 rounded-full blur-[100px]"
                        style={{
                            background:
                                "conic-gradient(from 140deg at 50% 40%, rgba(168,85,247,0.45), rgba(147,51,234,0.25), rgba(236,72,153,0.18), transparent 70%)",
                        }}
                        animate={{ opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* ORB MAIN */}
                    <motion.div
                        ref={orbRef}
                        animate={orbFloat}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{ width: "22rem", height: "22rem" }}
                        className="relative rounded-full flex items-center justify-center"
                    >
                        {/* === RING #1 – LUX MAIN RING === */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                            style={{
                                border: "3px solid rgba(168,85,247,0.6)",
                                boxShadow:
                                    "0 0 120px rgba(168,85,247,0.55), inset 0 0 40px rgba(168,85,247,0.45)",
                                backdropFilter: "blur(5px)",
                            }}
                        />

                        {/* === RING #2 – HOLOGRAPHIC SHIMMER RING === */}
                        <motion.div
                            className="absolute inset-6 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                            style={{
                                border: "1.3px solid transparent",
                                borderImage:
                                    "linear-gradient(90deg, rgba(168,85,247,0.6), rgba(236,72,153,0.4), rgba(168,85,247,0.6)) 1",
                                filter: "blur(0.3px)",
                                opacity: 0.85,
                            }}
                        />

                        {/* === RING #3 – INNER SOFT HALO === */}
                        <motion.div
                            className="absolute inset-12 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                            style={{
                                border: "1px solid rgba(255,255,255,0.12)",
                                boxShadow: "0 0 35px rgba(255,255,255,0.15)",
                                opacity: 0.7,
                            }}
                        />

                        {/* PREMIUM SHIMMER PASSING LINE */}
                        <motion.div
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                                maskImage:
                                    "radial-gradient(circle at center, black 60%, transparent 100%)",
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                        />

                        {/* == PROFILE IMAGE (CRYSTAL LOOK) == */}
                        <motion.div
                            style={{
                                width: "15rem",
                                height: "15rem",
                                borderRadius: "9999px",
                                overflow: "hidden",
                                willChange: "transform",
                                boxShadow:
                                    "0 18px 75px rgba(168,85,247,0.55), 0 0 40px rgba(168,85,247,0.35) inset",
                                ...orbStyle(),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                    "radial-gradient(circle at 50% 30%, rgba(156,81,247,0.18), rgba(0,0,0,0.25))",
                            }}
                        >
                            <motion.img
                                src="/image.jpeg"
                                alt="profile"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transform: orbStyle().imgTransform,
                                    filter: "contrast(1.05) saturate(1.08)",
                                }}
                                draggable={false}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>



                {/* ================================
                    RIGHT CONTENT — TITLE + SUBTEXT
                ================================= */}
                <motion.div initial="hidden" whileInView="visible" variants={parent} className="space-y-6">

                    {/* About Me Title */}
                    <motion.h2
                        variants={titleParent}
                        initial="hidden"
                        whileInView="visible"
                        className="text-4xl md:text-5xl font-bold flex gap-1 mb-4"
                        style={{ textShadow: "0 0 35px rgba(139,92,246,0.35)" }}
                    >
                        {"About Me".split("").map((char, i) => (
                            <motion.span key={i} variants={titleLetter} className="text-purple-400">
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* ===========================
                        PREMIUM SUBTITLE (ANIMATED)
                    ============================ */}
                    <motion.div variants={subtitleParent} initial="hidden" whileInView="visible" className="text-gray-300 text-lg md:text-1xl leading-relaxed space-y-4">

                        <p className="block">
                            {animateSentence(
                                "Hi, I’m Ananya, an aspiring full-stack developer with a growing foundation in JavaScript, React, backend development, DBMS, and AI/ML"
                            )}
                        </p>

                        <p className="block">
                            {animateSentence(
                                "I focus on building efficient, user-centric applications and continuously improving my technical skills through practical projects."
                            )}
                        </p>

                        <p className="block">
                            {animateSentence(
                                "My goal is to develop modern, scalable solutions while expanding my expertise across development and emerging technologies."
                            )}
                        </p>

                        <p className="block">
                            {animateSentence("I love clean UI, animations, and fast user-friendly designs.")}
                        </p>
                    </motion.div>

                    {/* Buttons Row */}
                    {/* V7 Premium Buttons */}
                    <div className="flex items-center gap-6 mt-8">

                        {/* === PAGE ENTRY ANIMATION WRAPPER === */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex items-center gap-6"
                        >

                            {/* ====== BUTTON STYLE v8 PREMIUM ====== */}
                            {[
                                "Frontend Development",
                                "UI/UX & Design Systems",
                                "Backend & Databases"
                            ].map((label, i) => (
                                <motion.button
                                    key={i}
                                    whileHover={{
                                        scale: 1.07,
                                        y: -4,
                                        background: "rgba(139,92,246,0.20)",
                                        borderColor: "rgba(217,70,239,0.55)",
                                        boxShadow:
                                            "0 0 20px rgba(168,85,247,0.45), 0 0 40px rgba(217,70,239,0.35)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                    className="relative px-7 py-2.5 rounded-xl font-medium text-sm text-white/90 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:text-white group"
                                >
                                    <span className="relative z-20">{label}</span>

                                    {/* Background shimmer pulsing */}
                                    <motion.div
                                        className="absolute inset-0 z-0"
                                        animate={{ opacity: [0.1, 0.18, 0.1] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                                        }}
                                    />

                                    {/* HOLOGRAPHIC BORDER SWEEP */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: [0.15, 0.35, 0.15] }}
                                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                        style={{
                                            border: "1px solid transparent",
                                            borderImage:
                                                "linear-gradient(120deg, rgba(168,85,247,0.65), rgba(217,70,239,0.55), rgba(168,85,247,0.65)) 1",
                                        }}
                                    />

                                    {/* SHIMMER LINE */}
                                    <motion.div
                                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100"
                                        animate={{ x: ["-150%", "150%"] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.8,
                                            ease: "linear",
                                        }}
                                        style={{
                                            background:
                                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                                            width: "120%",
                                        }}
                                    />

                                    {/* SOFT INNER GLOW */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            background:
                                                "radial-gradient(circle at 50% 60%, rgba(168,85,247,0.25), transparent 70%)",
                                            filter: "blur(18px)",
                                            zIndex: 1,
                                        }}
                                    />
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
