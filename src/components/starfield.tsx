"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseOpacity: number;
  twinkle: number;
  twinkleSpeed: number;
  layer: number;
};

function makeStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00014,
      vy: (Math.random() - 0.5) * 0.00014,
      r: Math.random() * 1.35 + 0.25,
      baseOpacity: Math.random() * 0.45 + 0.2,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.018 + 0.006,
      layer: Math.pow(Math.random(), 1.35),
    });
  }
  return stars;
}

function starCountForViewport(w: number): number {
  if (w < 480) return 72;
  if (w < 768) return 115;
  if (w < 1100) return 175;
  return 245;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const lastTRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = makeStars(starCountForViewport(w));
    };

    resize();

    const onPointer = (e: PointerEvent) => {
      const cx = window.innerWidth * 0.5;
      const cy = window.innerHeight * 0.5;
      const nx = (e.clientX - cx) / Math.max(cx, 1);
      const ny = (e.clientY - cy) / Math.max(cy, 1);
      pointerTargetRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onPointer);
      };
    }

    const drawFrame = (t: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (lastTRef.current === null) lastTRef.current = t;
      const dt = Math.min(48, Math.max(0, t - lastTRef.current));
      lastTRef.current = t;

      const pt = pointerRef.current;
      const tgt = pointerTargetRef.current;
      const ease = prefersReduced ? 1 : 0.075;
      pt.x += (tgt.x - pt.x) * ease;
      pt.y += (tgt.y - pt.y) * ease;

      const swayX = Math.sin(t * 0.00032) * 0.14;
      const swayY = Math.cos(t * 0.00026) * 0.11;
      const mx = pt.x + swayX;
      const my = pt.y + swayY;

      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!prefersReduced) {
          s.x += s.vx * dt;
          s.y += s.vy * dt;
          if (s.x < 0) s.x += 1;
          if (s.x > 1) s.x -= 1;
          if (s.y < 0) s.y += 1;
          if (s.y > 1) s.y -= 1;
          s.twinkle += s.twinkleSpeed * (dt * 0.055);
        }

        const parallax = (10 + s.layer * 56) * (prefersReduced ? 0.4 : 1);
        const ox = mx * parallax;
        const oy = my * parallax;

        const px = s.x * w + ox;
        const py = s.y * h + oy;

        const tw = prefersReduced ? 1 : 0.62 + Math.sin(s.twinkle) * 0.38;
        const alpha = s.baseOpacity * tw * (0.72 + s.layer * 0.28);

        ctx.beginPath();
        ctx.fillStyle = `rgba(215, 235, 255, ${alpha})`;
        ctx.arc(px, py, s.r * (0.88 + s.layer * 0.4), 0, Math.PI * 2);
        ctx.fill();

        if (s.layer > 0.62 && !prefersReduced) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(140, 210, 255, ${alpha * 0.32})`;
          ctx.arc(px, py, s.r * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReduced) {
        rafRef.current = requestAnimationFrame(drawFrame);
      }
    };

    if (prefersReduced) {
      drawFrame(performance.now());
    } else {
      rafRef.current = requestAnimationFrame(drawFrame);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(rafRef.current);
      lastTRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
