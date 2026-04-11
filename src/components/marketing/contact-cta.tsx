import { Button } from "@/components/ui/button";
import { MotionInViewCard } from "@/components/motion-primitives";
import { contactContent, siteConfig } from "@/content/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionInViewCard className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/85 to-card/35 p-8 shadow-[0_24px_80px_-32px_oklch(0.2_0.08_260/0.5)] backdrop-blur-sm transition duration-500 hover:border-primary/25 sm:p-12">
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {contactContent.title}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            {contactContent.subtitle}
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="transition-transform duration-300 hover:translate-x-0.5">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Support &amp; engineering
              </dt>
              <dd className="mt-1">
                <a
                  className="text-lg font-medium text-primary hover:underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div className="transition-transform duration-300 hover:translate-x-0.5">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Business line
              </dt>
              <dd className="mt-1">
                <a
                  className="text-lg font-medium hover:underline"
                  href={`tel:${siteConfig.phoneTel}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="transition-transform duration-300 hover:translate-x-0.5 sm:col-span-2 lg:col-span-1">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Headquarters
              </dt>
              <dd className="mt-1 text-lg text-muted-foreground">{siteConfig.location}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <a href={`mailto:${siteConfig.email}?subject=Project%20inquiry`}>
                Email the team
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href={`tel:${siteConfig.phoneTel}`}>Call {siteConfig.phoneDisplay}</a>
            </Button>
          </div>
        </MotionInViewCard>
      </div>
    </section>
  );
}
