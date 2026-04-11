"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { easeOutExpo } from "@/lib/motion";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      className="border-t border-border/60 bg-card/30 backdrop-blur-sm"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-mono text-sm font-semibold tracking-wider text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a
                  className="text-primary transition-colors hover:text-primary/80 hover:underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground hover:underline"
                  href={`tel:${siteConfig.phoneTel}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Headquarters
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{siteConfig.location}</p>
          </div>
        </div>

        <Separator className="bg-border/60" />

        <div className="space-y-3 text-xs leading-relaxed text-muted-foreground">
          <p>
            <span className="font-medium text-foreground/90">Legal entity:</span>{" "}
            {siteConfig.legal.entity}, a registered {siteConfig.legal.structure}.
          </p>
          <p>
            <span className="font-medium text-foreground/90">Nevada Business ID:</span>{" "}
            {siteConfig.legal.businessId}
            <span className="mx-1.5 text-border">·</span>
            <span className="font-medium text-foreground/90">
              State business license expiration:
            </span>{" "}
            {siteConfig.legal.licenseExpiration}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
