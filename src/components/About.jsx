import React, { useRef, useState, useEffect } from "react";
import { delay, motion } from "framer-motion";

export default function About() {
    const unified = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.7 },
        },
    };

    const parent = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.18 } },
    };

    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const orbRef = useRef(null);
    const btn1Ref = useRef(null);
    const btn2Ref = useRef(null);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [btn1Hover, setBtn1Hover] = useState(false);
    const [btn2Hover, setBtn2Hover] = useState(false);

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
            transform: `perspective(900px) translate3d(${translateX}px, ${translateY}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            imgTransform: `translateZ(${depth}px) scale(${1 + (depth - 14) / 220})`,
        };
    };

    const magneticStyle = (btnRef, isHover) => {
        if (!btnRef.current || !sectionRef.current)
            return { transform: "translate3d(0,0,0)" };

        const rect = btnRef.current.getBoundingClientRect();

        if (!isHover)
            return {
                transform: "translate3d(0,0,0)",
                transition: "transform 450ms cubic-bezier(.2,.8,.2,1)",
            };

        const bx = rect.left + rect.width / 2;
        const by = rect.top + rect.height / 2;
        const dx = mouse.x - bx;
        const dy = mouse.y - by;

        const px = clamp(dx / rect.width, -1, 1);
        const py = clamp(dy / rect.height, -1, 1);

        const tx = px * 12;
        const ty = py * 12;

        return {
            transform: `translate3d(${tx}px, ${ty}px, 0)`,
            transition: "transform 120ms linear",
        };
    };

    const orbFloat = {
        y: [-6, 6, -6],
    };

    const leftInitial = { opacity: 0, x: -26 };
    const leftAnimate = {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.2, 0.9, 0.3, 1] },
    };

    const badgeBase =
        "px-5 py-2 rounded-full border border-white/10 bg-white/4 text-white transition-all duration-300";

    const aboutTitle = {
        hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut",

                staggerChildren: 0.04,
            },
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
        <section
            id="about"
            ref={sectionRef}
            className="scroll-mt-[80px] min-h-screen w-full bg-black text-white py-24 px-6 relative overflow-hidden"
        >
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
                    initial={leftInitial}
                    whileInView={leftAnimate}
                 
                    className="relative flex items-center justify-center"
                >
                    <motion.div
                        className="absolute -inset-32 rounded-full blur-[50px]"
                        style={{
                            background:
                                "radial-gradient(circle at 50% 40%, rgba(139,92,246,0.30), rgba(168,85,247,0.15), rgba(217,70,239,0.08), transparent 70%)",
                            zIndex: 0,
                        }}
                        animate={{ opacity: [0.75, 1, 0.75] }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute w-[20rem] h-[20rem] rounded-full blur-[100px]"
                        style={{
                            background:
                                "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.28), rgba(168,85,247,0.18), rgba(217,70,239,0.10), transparent 60%)",
                            zIndex: 0,
                        }}
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                            repeat: Infinity,
                            duration: 7,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute w-[12rem] h-[12rem] rounded-full blur-[70px]"
                        style={{
                            background:
                                "radial-gradient(circle at 30% 30%, rgba(217,70,239,0.20), rgba(255, 255, 255, 0.12), transparent 60%)",
                            zIndex: 0,
                        }}
                        animate={{ x: [-20, 20, -20], y: [15, -15, 15] }}
                        transition={{
                            repeat: Infinity,
                            duration: 9,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        ref={orbRef}
                        animate={orbFloat}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: "18rem",
                            height: "18rem",
                        }}
                        className="relative rounded-full flex items-center justify-center"
                    >
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                border: "2px solid rgba(139,92,246,0.25)",
                                boxShadow:
                                    "0 0 80px rgba(168,85,247,0.45)",
                                zIndex: 2,
                            }}
                        />

                        <div
                            className="absolute inset-6 rounded-full"
                            style={{
                                border: "2px solid rgba(168,85,247,0.15)",
                                boxShadow:
                                    "0 0 100px rgba(217,70,239,0.28)",
                                zIndex: 2,
                            }}
                        />

                        <motion.div
                            style={{
                                width: "14rem",
                                height: "14rem",
                                borderRadius: "9999px",
                                overflow: "hidden",
                                zIndex: 3,
                                willChange: "transform",
                                boxShadow:
                                    "0 14px 60px rgba(168,85,247,0.55)",
                                transition:
                                    "transform 220ms cubic-bezier(.2,.9,.3,1)",
                                ...orbStyle(),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                    "radial-gradient(circle at 50% 30%, rgba(139,92,246,0.12), rgba(0,0,0,0.22))",
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
                                }}
                                draggable={false}
                            />

                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                                    mixBlendMode: "screen",
                                    opacity: 0.5,
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    //  
                    variants={parent}
                    className="space-y-6"
                >
                    <motion.h2
                        variants={aboutTitle}
                        initial="hidden"
                        whileInView="visible"
                        //  
                        className="text-4xl md:text-5xl font-bold flex gap-1 mb-4"
                        style={{
                            textShadow: "0 0 35px rgba(139,92,246,0.35)",
                        }}
                    >
                        {["A", "b", "o", "u", "t", " ", "M", "e"].map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letter}
                                className={"text-purple-400"}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>


                    <motion.p
                        variants={unified}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        <motion.span className="block" variants={unified}>
                            Hi, I’m Ananya, an aspiring full-stack developer
                            with a growing foundation in JavaScript, React,
                            backend development, DBMS, and AI/ML.
                        </motion.span>

                        <motion.span className="block mt-3" variants={unified}>
                            I focus on building efficient, user-centric
                            applications and continuously improving my technical
                            skills through practical projects.
                        </motion.span>

                        <motion.span className="block mt-3" variants={unified}>
                            My goal is to develop modern, scalable solutions
                            while expanding my expertise across development and
                            emerging technologies.
                        </motion.span>
                    </motion.p>

                    <motion.p
                        variants={unified}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        I love clean UI, animations, and fast user-friendly
                        designs.
                    </motion.p>

                    <motion.div variants={parent} className="flex flex-wrap gap-3 items-center">

                        {/* V7 Premium Buttons */}
                        <div className="flex items-center gap-6 mt-8">

                            {/* <motion.button
                                whileHover={{
                                    scale: 1.06,
                                    y: -4,
                                    boxShadow:
                                        "0 0 22px rgba(139,92,246,0.55), 0 0 40px rgba(168,85,247,0.45), inset 0 0 18px rgba(217,70,239,0.35)",
                                }}
                                whileTap={{ scale: 0.97 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 240,
                                    damping: 16,
                                }}
                                className="
                                    relative px-8 py-3 rounded-xl font-semibold text-white
                                    bg-gradient-to-br from-purple-600/80 to-fuchsia-500/80
                                    border border-white/10 backdrop-blur-xl
                                    shadow-[0_0_20px_rgba(139,92,246,0.45)]
                                    hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]
                                    overflow-hidden
                                "
                            >
                                <span className="relative z-10">
                                    Hire Me
                                </span>

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
                            </motion.button> */}

                            {/* Frontend Development */}
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                    boxShadow:
                                        "0 0 15px rgba(168,85,247,0.35), 0 0 25px rgba(217,70,239,0.25)",
                                    background: "rgba(139,92,246,0.16)",
                                    borderColor: "rgba(217,70,239,0.45)",
                                }}
                                whileTap={{ scale: 0.96 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 230,
                                    damping: 16,
                                }}
                                className="
        relative px-6 py-2 rounded-lg font-medium text-sm text-white/90
        bg-white/4 border border-white/10 backdrop-blur-xl
        hover:text-white overflow-hidden
    "
                            >
                                <span className="relative z-10">Frontend Development</span>

                                <motion.div
                                    className="absolute inset-0 z-0"
                                    animate={{ opacity: [0.12, 0.2, 0.12] }}
                                    transition={{ repeat: Infinity, duration: 3.4, }}
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                                    }}
                                />
                            </motion.button>


                            {/* UI/UX & Design Systems */}
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                    boxShadow:
                                        "0 0 15px rgba(168,85,247,0.35), 0 0 25px rgba(217,70,239,0.25)",
                                    background: "rgba(139,92,246,0.16)",
                                    borderColor: "rgba(217,70,239,0.45)",
                                }}
                                whileTap={{ scale: 0.96 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 230,
                                    damping: 16,
                                }}
                                className="
        relative px-6 py-2 rounded-lg font-medium text-sm text-white/90
        bg-white/4 border border-white/10 backdrop-blur-xl
        hover:text-white overflow-hidden
    "
                            >
                                <span className="relative z-10">UI/UX & Design Systems</span>

                                <motion.div
                                    className="absolute inset-0 z-0"
                                    animate={{ opacity: [0.12, 0.2, 0.12] }}
                                    transition={{ repeat: Infinity, duration: 3.4 }}
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                                    }}
                                />
                            </motion.button>


                            {/* Backend & Databases */}
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                    boxShadow:
                                        "0 0 15px rgba(168,85,247,0.35), 0 0 25px rgba(217,70,239,0.25)",
                                    background: "rgba(139,92,246,0.16)",
                                    borderColor: "rgba(217,70,239,0.45)",
                                }}
                                whileTap={{ scale: 0.96 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 230,
                                    damping: 16,
                                }}
                                className="
                                            relative px-6 py-2 rounded-lg font-medium text-sm text-white/90
                                            bg-white/4 border border-white/10 backdrop-blur-xl
                                            hover:text-white overflow-hidden
                                        "
                            >
                                <span className="relative z-10">Backend & Databases</span>

                                <motion.div
                                    className="absolute inset-0 z-0"
                                    animate={{ opacity: [0.12, 0.2, 0.12] }}
                                    transition={{ repeat: Infinity, duration: 3.4 }}
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                                    }}
                                />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
