"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { easeOutExpo } from "@/lib/motion";
import { navItems, siteConfig } from "@/content/site";

export function SiteHeader() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border/50 bg-background/65 backdrop-blur-xl backdrop-saturate-150"
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: easeOutExpo, delay: 0.05 }}
        >
          <Link
            href="#top"
            className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground transition-colors hover:text-primary"
          >
            {siteConfig.name.replace(" LLC", "")}
            <span className="text-primary">.</span>
          </Link>
        </motion.div>
        <nav
          className="flex flex-1 flex-wrap items-center justify-end gap-1 sm:gap-2"
          aria-label="Primary"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={reduce ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                ease: easeOutExpo,
                delay: reduce ? 0 : 0.08 + i * 0.04,
              }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground transition-colors hover:text-foreground"
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
