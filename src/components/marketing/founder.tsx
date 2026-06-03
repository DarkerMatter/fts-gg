import Image from "next/image";
import { GitFork, Globe, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { FadeItem, MotionSection, StaggerReveal } from "@/components/motion-primitives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { founderContent } from "@/content/site";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  globe: Globe,
  github: GitFork,
  mail: Mail,
};

export function FounderSection() {
  return (
    <MotionSection
      id="founder"
      className="scroll-mt-24 border-b border-border/40 py-20 sm:py-24"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Badge
          variant="secondary"
          className="mb-6 font-mono text-[0.65rem] uppercase tracking-widest"
        >
          {founderContent.eyebrow}
        </Badge>
        <h2
          id="founder-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {founderContent.title}
        </h2>
        <StaggerReveal className="mt-10 grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
          <FadeItem>
            <Image
              src={founderContent.image.src}
              alt={founderContent.image.alt}
              width={440}
              height={550}
              className="aspect-[4/5] w-full max-w-[220px] rounded-2xl border border-border/60 object-cover"
              priority={false}
            />
          </FadeItem>
          <FadeItem>
            <h3 className="font-heading text-2xl font-semibold tracking-tight">
              {founderContent.name}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {founderContent.role}
            </p>
            <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-muted-foreground">
              {founderContent.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {founderContent.links.map((link) => {
                const Icon = iconMap[link.icon] ?? Globe;
                const external = link.external
                  ? { target: "_blank" as const, rel: "noreferrer" as const }
                  : {};
                return (
                  <Button key={link.href} variant="outline" size="sm" asChild>
                    <a href={link.href} {...external}>
                      <Icon className="h-4 w-4" aria-hidden />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </FadeItem>
        </StaggerReveal>
      </div>
    </MotionSection>
  );
}
