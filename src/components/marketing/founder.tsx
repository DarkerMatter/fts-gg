import Image from "next/image";
import { Globe, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { FadeItem, MotionSection, StaggerReveal } from "@/components/motion-primitives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { founderContent } from "@/content/site";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18A11 11 0 0 1 12 6.8c.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12 24 5.65 18.85.5 12 .5Z" />
    </svg>
  );
}

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  globe: Globe,
  github: GithubIcon,
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
