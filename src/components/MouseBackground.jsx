"use client";

import React, { useEffect, useRef } from "react";

/**
 * MouseBackgroundUltra.jsx
 * Ultra+++ Edition: neon glow + parallax particle field + mouse trails
 *
 * Drop into a fixed -z-10 container:
 *  <div className="fixed inset-0 -z-10 pointer-events-none"><MouseBackgroundUltra/></div>
 *
 * Recommended: keep only one instance on the page.
 */

export default function MouseBackground({
  particleCount = 160,        // base number (multiplied by device size factor)
  layers = 3,                 // parallax layers (1..4)
  glowBlobCount = 3,          // large color blobs that slowly move
  maxFPS = 60,                // cap fps for power saving
  colors = [                  // neon palette used for blobs/particles
    "rgba(126, 58, 255, 0.9)",
    "rgba(255, 64, 129, 0.9)",
    "rgba(0, 210, 255, 0.9)",
  ],
  trailAlpha = 0.12,          // smaller = longer trails
  particleSize = 2.0,
  glowBlur = 44,
  performanceMode = false,    // if true reduces particlecount & effects
}) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    particles: [],
    blobs: [],
    mouse: { x: Infinity, y: Infinity, vx: 0, vy: 0 },
    w: 0,
    h: 0,
    dpr: 1,
    running: true,
    lastTime: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    // ---------------------------------------
    // Helpers & init
    // ---------------------------------------
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(100, Math.floor(window.innerWidth));
      const h = Math.max(100, Math.floor(window.innerHeight));
      stateRef.current.dpr = dpr;
      stateRef.current.w = w;
      stateRef.current.h = h;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // work in CSS pixels
      resetScene();
    };

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    // build particles & blobs
    const resetScene = () => {
      const { w, h } = stateRef.current;
      const sizeFactor = Math.sqrt((w * h) / (1366 * 768)); // scale for screen area
      const baseCount = performanceMode ? Math.round(particleCount * 0.25) : Math.round(particleCount * Math.max(0.6, sizeFactor));
      stateRef.current.particles = [];

      for (let layer = 0; layer < layers; layer++) {
        const depthFactor = 1 + layer * 0.6; // deeper layers move less
        const layerCount = Math.round(baseCount / (layer + 1));
        for (let i = 0; i < layerCount; i++) {
          stateRef.current.particles.push({
            id: `${layer}-${i}`,
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.3 / depthFactor,
            vy: (Math.random() - 0.5) * 0.3 / depthFactor,
            size: particleSize * (0.6 + Math.random() * 1.4) * (1 / (0.9 + layer * 0.25)),
            color: colors[i % colors.length],
            layer,
            depthFactor,
          });
        }
      }

      // Large slow-moving neon blobs (glow sources)
      stateRef.current.blobs = [];
      for (let i = 0; i < glowBlobCount; i++) {
        stateRef.current.blobs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.min(w, h) * (0.18 + Math.random() * 0.16),
          color: colors[i % colors.length],
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    // ---------------------------------------
    // Mouse / touch handlers (with smooth inertia)
    // ---------------------------------------
    let pointerDown = false;
    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const m = stateRef.current.mouse;
      // smooth update (store velocity for effects)
      const nx = m.x === Infinity ? x : x;
      const ny = m.y === Infinity ? y : y;
      m.vx = (nx - (m.x === Infinity ? nx : m.x)) * 0.35;
      m.vy = (ny - (m.y === Infinity ? ny : m.y)) * 0.35;
      m.x = nx;
      m.y = ny;
    };

    const onPointerLeave = () => {
      stateRef.current.mouse.x = Infinity;
      stateRef.current.mouse.y = Infinity;
      stateRef.current.mouse.vx = 0;
      stateRef.current.mouse.vy = 0;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", () => (pointerDown = true), { passive: true });
    window.addEventListener("pointerup", () => (pointerDown = false), { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    resize();

    // ---------------------------------------
    // Render loop
    // ---------------------------------------
    let rafId = 0;
    const targetFPS = Math.max(30, Math.min(60, maxFPS || 60));
    const frameDuration = 1000 / targetFPS;

    const step = (time) => {
      const st = stateRef.current;
      if (!st.running) return;

      // frame limiting
      if (!st.lastTime) st.lastTime = time;
      const dt = time - st.lastTime;
      if (dt < frameDuration) {
        rafId = requestAnimationFrame(step);
        return;
      }
      st.lastTime = time;

      const { w, h, particles, blobs, mouse } = st;

      // fade background slightly to create trails (draw translucent rect)
      ctx.clearRect(0, 0, w, h);

      // draw soft radial gradient backdrop (subtle)
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "rgba(8, 6, 17, 0.8)");
      g.addColorStop(0.5, "rgba(3, 2, 10, 0.76)");
      g.addColorStop(1, "rgba(0,0,0,0.9)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Draw glow blobs first (blurred)
      ctx.save();
      ctx.globalCompositeOperation = "lighter"; // add light
      ctx.filter = `blur(${glowBlur}px)`;
      blobs.forEach((b, i) => {
        // slow drift + subtle circular motion
        b.phase += 0.0006 * dt * (1 + i * 0.08);
        b.x += b.vx * (1 + i * 0.05);
        b.y += b.vy * (1 + i * 0.05);
        // wrap
        if (b.x < -b.radius) b.x = w + b.radius;
        if (b.x > w + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = h + b.radius;
        if (b.y > h + b.radius) b.y = -b.radius;

        const rad = Math.max(1, b.radius * (0.9 + 0.1 * Math.sin(b.phase)));
        const lg = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rad);
        // soft color stops
        lg.addColorStop(0, b.color.replace("0.9", "0.95"));
        lg.addColorStop(0.25, b.color.replace("0.9", "0.65"));
        lg.addColorStop(0.6, b.color.replace("0.9", "0.2"));
        lg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.fillStyle = lg;
        ctx.arc(b.x, b.y, rad, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.filter = "none";
      ctx.restore();

      // Particles (parallax layers)
      // Use additive composite for neon effect
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // Optionally create a faint trail by drawing a transparent rectangle
      if (!performanceMode) {
        ctx.fillStyle = `rgba(0,0,0,${trailAlpha})`;
        ctx.fillRect(0, 0, w, h);
      }

      particles.forEach((p) => {
        // repulsion from mouse with layer depth
        if (mouse.x !== Infinity) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
          const influenceRadius = repulsionRadiusForLayer(p.layer);
          if (dist < influenceRadius) {
            // push particle away proportionally
            const force = (1 - dist / influenceRadius) * (repulsionStrengthForLayer(p.layer));
            const nx = (dx / dist) * force;
            const ny = (dy / dist) * force;
            p.vx += nx * 0.12;
            p.vy += ny * 0.12;
          } else {
            // slight drift back to natural velocity
            p.vx += (Math.random() - 0.5) * 0.02;
            p.vy += (Math.random() - 0.5) * 0.02;
          }
        } else {
          // natural jitter
          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
        }

        // integrate velocity with slight damping
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx * p.depthFactor * (performanceMode ? 0.6 : 1);
        p.y += p.vy * p.depthFactor * (performanceMode ? 0.6 : 1);

        // wrap edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // draw
        const size = Math.max(0.4, p.size * (performanceMode ? 0.6 : 1));
        // radial gradient for particle
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4);
        grad.addColorStop(0, p.color.replace("0.9", "0.95"));
        grad.addColorStop(0.4, p.color.replace("0.9", "0.4"));
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 1.25, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // subtle vignette to keep center readable
      ctx.save();
      const vignette = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.3, w / 2, h / 2, Math.max(w, h) * 0.9);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.24)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      rafId = requestAnimationFrame(step);
    };

    // Map functions for repulsion based on layer
    const repulsionRadiusForLayer = (layer) => {
      // nearer layers have larger radius
      return (repulsionBaseRadius() * (1 + (layers - layer - 1) * 0.25));
    };

    const repulsionStrengthForLayer = (layer) => {
      return (repulsionBaseStrength() * (1 + (layers - layer - 1) * 0.35));
    };

    const repulsionBaseRadius = () => {
      const base = Math.min(stateRef.current.w, stateRef.current.h) * 0.14;
      return performanceMode ? base * 0.6 : base;
    };

    const repulsionBaseStrength = () => {
      return performanceMode ? 18 : 28;
    };

    // start loop
    rafId = requestAnimationFrame(step);

    // ---------------------------------------
    // Cleanup
    // ---------------------------------------
    return () => {
      stateRef.current.running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", () => (pointerDown = true));
      window.removeEventListener("pointerup", () => (pointerDown = false));
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    particleCount,
    layers,
    glowBlobCount,
    maxFPS,
    colors,
    trailAlpha,
    particleSize,
    glowBlur,
    performanceMode,
  ]);

  // Render single canvas that covers full screen - styled by parent container.
  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ display: "block", width: "100%", height: "100%", touchAction: "none", pointerEvents: "none" }}
    />
  );
}
