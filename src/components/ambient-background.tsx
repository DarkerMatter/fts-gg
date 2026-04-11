"use client";

import { Starfield } from "@/components/starfield";

/**
 * Deep space stage: animated starfield (pointer-parallax) + soft nebula pools,
 * sheen, vignette, and grain. Pointer events pass through (`pointer-events-none` on root).
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Richer than flat black — nebula wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,oklch(0.14_0.06_250)_0%,oklch(0.045_0.03_264)_45%,oklch(0.035_0.02_270)_100%)]" />

      <div className="absolute inset-0 opacity-90">
        <Starfield />
      </div>

      {/* Soft chroma pools — toned so stars stay visible */}
      <div className="ambient-blob ambient-blob-a opacity-70" />
      <div className="ambient-blob ambient-blob-b opacity-55" />
      <div className="ambient-blob ambient-blob-c opacity-50" />

      <div className="ambient-sheen opacity-80" />

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_88%_70%_at_50%_42%,transparent_18%,oklch(0.02_0.02_270/0.92)_100%)]"
        style={{ mixBlendMode: "multiply" }}
      />

      <div
        className="ambient-noise absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
