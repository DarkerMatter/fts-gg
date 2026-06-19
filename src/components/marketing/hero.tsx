"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { easeOutExpo } from "@/lib/motion";
import { heroContent, siteConfig } from "@/content/site";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/40"
      aria-labelledby="hero-heading"
    >
      {/* Local rim light - sits on top of global ambient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -15%, oklch(0.5 0.12 195 / 0.12), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        {reduce ? (
          <HeroStatic />
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="will-change-transform"
          >
            <motion.div variants={item}>
              <Badge
                variant="secondary"
                className="mb-6 font-mono text-[0.65rem] uppercase tracking-widest"
              >
                {siteConfig.tagline}
              </Badge>
            </motion.div>
            <motion.h1
              variants={item}
              id="hero-heading"
              className="max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {heroContent.headline}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
            >
              {heroContent.subhead}
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={`mailto:${siteConfig.email}?subject=Inquiry%20from%20fts.gg`}>
                  {heroContent.cta}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">View contact</a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function HeroStatic() {
  return (
    <>
      <Badge
        variant="secondary"
        className="mb-6 font-mono text-[0.65rem] uppercase tracking-widest"
      >
        {siteConfig.tagline}
      </Badge>
      <h1
        id="hero-heading"
        className="max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
      >
        {heroContent.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
        {heroContent.subhead}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button size="lg" asChild>
          <a href={`mailto:${siteConfig.email}?subject=Inquiry%20from%20fts.gg`}>
            {heroContent.cta}
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">View contact</a>
        </Button>
      </div>
    </>
  );
}
