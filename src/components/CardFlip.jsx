"use client";
import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CardFlip({
  title,
  description,
  img,
  features = [],
  github,
}) {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Magnetic Tilt Effect
  const handleTilt = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateX = (py - 0.5) * -15;
    const rotateY = (px - 0.5) * 15;

    el.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.06)
    `;

    el.style.setProperty("--px", `${px * 100}%`);
    el.style.setProperty("--py", `${py * 100}%`);
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      className="relative w-full max-w-[320px] h-[430px] group"
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ULTRA+ Ambient Aura Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -inset-8 blur-[80px] opacity-25 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-purple-900 rounded-3xl" />
      </div>

      {/* MAIN CARD */}
      <div
        ref={cardRef}
        onMouseMove={handleTilt}
        onMouseLeave={() => {
          resetTilt();
          setIsFlipped(false);
        }}
        onMouseEnter={() => setIsFlipped(true)}
        className="
          relative w-full h-full rounded-3xl overflow-hidden
          bg-[rgba(255,255,255,0.04)] backdrop-blur-2xl
          border border-white/10 shadow-xl
          transition-all duration-500
          hover:shadow-[0_0_35px_rgba(170,70,255,0.45)]
        "
        style={{
          backgroundImage: `
            radial-gradient(600px circle at var(--px, 50%) var(--py, 50%),
            rgba(255,255,255,0.14), transparent 40%)
          `,
        }}
      >
        {/* FLIP WRAPPER */}
        <div
          className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d]
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
        >
          {/* -------- FRONT -------- */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden [backface-visibility:hidden]"
            aria-hidden={isFlipped}
          >
            <div className="relative w-full h-[76%] overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-t-3xl transition-all duration-700 group-hover:scale-110"
              />

              {/* Shine Animation */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                  transform: "translateX(-150%)",
                  animation: "shine 1.3s ease-out forwards",
                }}
              />
            </div>

            {/* Title Section */}
            <div className="absolute bottom-0 left-0 right-0 p-5 
                bg-[rgba(0,0,0,0.45)] backdrop-blur-sm border-t border-white/10 
                flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {title}
                </h3>
                <p className="text-xs text-white/60 mt-0.5 line-clamp-1">
                  {description?.slice(0, 64)}
                </p>
              </div>

              <ArrowRight className="w-5 h-5 text-purple-300" />
            </div>
          </div>

          {/* -------- BACK -------- */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl p-5 flex flex-col justify-between
            bg-[rgba(10,8,16,0.75)] backdrop-blur-2xl border border-white/10 
            [transform:rotateY(180deg)] [backface-visibility:hidden]"
            aria-hidden={!isFlipped}
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-200 mb-2">
                {title}
              </h3>

              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-2">
                {features.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-[rgba(255,255,255,0.04)] border border-white/10 text-purple-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* VIEW PROJECT (underline, no box) */}
            <div className="flex items-center justify-end">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm
                  text-purple-300 hover:text-white transition-colors"
              >
                <span className="underline decoration-purple-400/40 underline-offset-2">
                  View Project
                </span>
                <ArrowRight className="w-4 h-4 text-purple-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
