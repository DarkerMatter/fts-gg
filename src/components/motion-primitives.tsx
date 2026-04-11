"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { easeOutExpo, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type SectionProps = HTMLMotionProps<"section">;

export function MotionSection({ children, className, ...props }: SectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      {...props}
    >
      {children}
    </motion.section>
  );
}

type DivProps = HTMLMotionProps<"div">;

export function StaggerReveal({ children, className, ...props }: DivProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeItem({ children, className, ...props }: DivProps) {
  return (
    <motion.div variants={fadeUp} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/** Prominent panel (e.g. contact CTA) — scale + fade on scroll */
export function MotionInViewCard({ children, className }: DivProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
