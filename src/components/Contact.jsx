import { useState } from "react";
import { motion } from "framer-motion";

const email = "ananya.s.prof@gmail.com";
const phone = "7649094732";
const location = "Delhi, India";

// TEXT SPLIT ANIMATION
const splitText = (text) =>
    text.split("").map((char, i) => (
        <motion.span
            key={i}
            initial={{
                opacity: 0,
                y: 25,
                filter: "blur(6px)",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: i * 0.04,
                ease: "easeOut",
            }}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    ));

// UNIVERSAL STAGGER
const staggerParent = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

// FADE UP
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 25,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export default function ContactMe() {
    // FORM STATE
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // SUBMIT STATUS
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    // HANDLE INPUT
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // HANDLE FORM SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setStatus("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            setStatus("Please enter your email.");
            return;
        }

        if (!formData.message.trim()) {
            setStatus("Please enter your message.");
            return;
        }

        setIsSending(true);
        setStatus("Sending your message...");

        try {
            const response = await fetch("/api/contact-me", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to send message."
                );
            }

            setStatus("Message sent successfully! ✨");

            // CLEAR FORM
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Contact form error:", error);

            setStatus(
                error.message ||
                    "Something went wrong. Please try again."
            );
        } finally {
            setIsSending(false);
        }
    };

    // CONTACT INFORMATION
    const contactItems = [
        {
            icon: "📩",
            label: "Email",
            value: email,
            colorClass: "bg-purple-600/80",
            href: `mailto:${email}`,
        },
        {
            icon: "📞",
            label: "Phone",
            value: phone,
            colorClass: "bg-blue-600/80",
            href: `tel:${phone}`,
        },
        {
            icon: "📍",
            label: "Location",
            value: location,
            colorClass: "bg-pink-600/80",
            href: null,
        },
    ];

    return (
        <section
            id="contact"
            className="relative min-h-screen w-full bg-black text-white py-24 px-6 overflow-hidden"
        >
            {/* ============================= */}
            {/* FLOATING PARTICLES */}
            {/* ============================= */}

            {Array.from({ length: 45 }).map((_, i) => {
                const size = Math.random() * 4 + 2;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const xMovement = Math.random() * 35 - 20;
                const duration = 5 + Math.random() * 6;

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.9, 0],
                            y: [0, -40, 0],
                            x: [0, xMovement, 0],
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 4,
                        }}
                        className="absolute rounded-full bg-purple-500 pointer-events-none"
                        style={{
                            width: size,
                            height: size,
                            left: `${left}%`,
                            top: `${top}%`,
                            filter: "blur(2px)",
                        }}
                    />
                );
            })}

            {/* ============================= */}
            {/* HEADING */}
            {/* ============================= */}

            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerParent}
                className="text-5xl md:text-6xl font-extrabold text-center mb-4"
                style={{
                    textShadow:
                        "0 0 25px rgba(168,85,247,0.55), 0 0 40px rgba(139,92,246,0.65)",
                }}
            >
                {splitText("Get In Touch")}
            </motion.h1>

            {/* ============================= */}
            {/* DESCRIPTION */}
            {/* ============================= */}

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 text-center max-w-2xl mx-auto"
            >
                Whether it's a project, collaboration, or a simple
                hello — I'm always open to connecting and creating
                something amazing.
            </motion.p>

            {/* ============================= */}
            {/* MAIN BODY */}
            {/* ============================= */}

            <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
            >
                {/* ============================= */}
                {/* LEFT — CONTACT FORM */}
                {/* ============================= */}

                <motion.div
                    variants={fadeUp}
                    className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                >
                    <form onSubmit={handleSubmit}>
                        {/* NAME */}
                        <motion.div
                            className="mb-4"
                            variants={fadeUp}
                        >
                            <label
                                htmlFor="name"
                                className="text-gray-300 text-sm"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                autoComplete="name"
                                required
                                className="w-full p-3 mt-2 bg-black/40 text-white rounded-lg border border-purple-500/20 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all placeholder:text-gray-500"
                            />
                        </motion.div>

                        {/* EMAIL */}
                        <motion.div
                            className="mb-4"
                            variants={fadeUp}
                        >
                            <label
                                htmlFor="email"
                                className="text-gray-300 text-sm"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                autoComplete="email"
                                required
                                className="w-full p-3 mt-2 bg-black/40 text-white rounded-lg border border-purple-500/20 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all placeholder:text-gray-500"
                            />
                        </motion.div>

                        {/* MESSAGE */}
                        <motion.div variants={fadeUp}>
                            <label
                                htmlFor="message"
                                className="text-gray-300 text-sm"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Tell me about your project..."
                                required
                                className="w-full p-3 mt-2 bg-black/40 text-white rounded-lg border border-purple-500/20 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all placeholder:text-gray-500 resize-none"
                            />
                        </motion.div>

                        {/* SEND BUTTON */}
                        <motion.button
                            type="submit"
                            disabled={isSending}
                            whileHover={
                                !isSending
                                    ? {
                                          scale: 1.06,
                                          y: -4,
                                          boxShadow:
                                              "0 0 22px rgba(139,92,246,0.55), 0 0 40px rgba(168,85,247,0.45)",
                                      }
                                    : {}
                            }
                            whileTap={
                                !isSending
                                    ? { scale: 0.96 }
                                    : {}
                            }
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 18,
                            }}
                            className={`w-full mt-8 py-3 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-lg text-white font-semibold shadow-lg relative overflow-hidden ${
                                isSending
                                    ? "opacity-70 cursor-not-allowed"
                                    : "cursor-pointer"
                            }`}
                        >
                            <span className="relative z-10">
                                {isSending
                                    ? "Sending..."
                                    : "Send Message ✨"}
                            </span>

                            {!isSending && (
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        x: ["-120%", "120%"],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2.3,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        background:
                                            "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                                    }}
                                />
                            )}
                        </motion.button>

                        {/* STATUS MESSAGE */}
                        {status && (
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className={`mt-4 text-center text-sm ${
                                    status.includes(
                                        "successfully"
                                    )
                                        ? "text-green-400"
                                        : status.includes(
                                              "Sending"
                                          )
                                        ? "text-purple-300"
                                        : "text-red-400"
                                }`}
                            >
                                {status}
                            </motion.p>
                        )}
                    </form>
                </motion.div>

                {/* ============================= */}
                {/* RIGHT — CONTACT INFORMATION */}
                {/* ============================= */}

                <motion.div className="space-y-6">
                    {contactItems.map((item, idx) => {
                        const content = (
                            <>
                                {/* ICON */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.8,
                                        ease: "easeInOut",
                                        delay: idx * 0.2,
                                    }}
                                    className={`text-3xl p-3 rounded-full ${item.colorClass}`}
                                >
                                    {item.icon}
                                </motion.div>

                                {/* TEXT */}
                                <div>
                                    <p className="text-gray-300">
                                        {item.label}
                                    </p>

                                    <h3 className="text-white text-lg font-semibold break-all">
                                        {item.value}
                                    </h3>
                                </div>
                            </>
                        );

                        return item.href ? (
                            <motion.a
                                key={idx}
                                href={item.href}
                                variants={fadeUp}
                                whileHover={{
                                    scale: 1.05,
                                    y: -6,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 14,
                                }}
                                className="flex items-center gap-6 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] cursor-pointer"
                            >
                                {content}
                            </motion.a>
                        ) : (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                whileHover={{
                                    scale: 1.05,
                                    y: -6,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 14,
                                }}
                                className="flex items-center gap-6 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                            >
                                {content}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}
