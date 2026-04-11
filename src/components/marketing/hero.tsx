import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroContent, siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.55 0.14 195 / 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, oklch(0.4 0.08 260 / 0.25), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <Badge variant="secondary" className="mb-6 font-mono text-[0.65rem] uppercase tracking-widest">
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
      </div>
    </section>
  );
}
