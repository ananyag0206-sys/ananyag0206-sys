import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            id: 2,
            title: "Universal Multi-Database Client (DEX Project)",
            desc: "Designed and developed an advanced multi-database client featuring a modern interactive GUI, seamless connectivity with SQL & NoSQL databases, real-time query execution, visual insights, and enhanced user experience. Built to overcome limitations of existing tools and provide a faster, cleaner, and developer-friendly workflow.",
            img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
            tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "MySQL", "REST API", "Cloud"]
        }
        // ,
        // {
        //     id: 2,
        //     title: "3D Portfolio Website – Interactive & Animated",
        //     desc: "A visually stunning portfolio using 3D animations with GSAP, React, and Tailwind for smooth transitions.",
        //     img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
        //     tags: ["React", "GSAP", "Three.js", "Tailwind CSS", "Frontend"],
        // },
        // {
        //     id: 3,
        //     title: "3D Website Landing Page",
        //     desc: "A modern 3D landing UI built using Spline, HTML & CSS with polished animations and interactive UI.",
        //     img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
        //     tags: ["HTML", "CSS", "Spline", "UI/UX"],
        // },
    ];

    return (
        <section
            id="projects"
            className="scroll-mt-[10px] min-h-screen w-full bg-black text-white py-24 px-6"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-4xl md:text-5xl font-bold"
            >
                Featured{" "}
                <span className="text-purple-400 underline underline-offset-8">
                    Projects
                </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center text-gray-300 max-w-3xl mx-auto mt-5 text-lg"
            >
                A curated collection of modern full-stack projects showcasing strong UI,
                smooth animations and efficient backend logic.
            </motion.p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-14">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.12 }}
                        viewport={{ once: true }}
                        className="bg-black/40 rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_10px_#6b21a8] hover:shadow-[0_0_25px_#a855f7] transition p-4 backdrop-blur-xl"
                    >
                        {/* Image */}
                        <div className="w-full h-32 overflow-hidden rounded-xl">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Title + Description */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                                {project.desc}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-purple-900/40 text-purple-300 px-3 py-1 text-xs rounded-full border border-purple-500/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Button */}
                        <a
                            href="#"
                            className="inline-block mt-5 text-purple-400 hover:text-purple-300 text-sm font-semibold"
                        >
                            View Project →
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
