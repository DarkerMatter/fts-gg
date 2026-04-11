import { Button } from "@/components/ui/button";
import { contactContent, siteConfig } from "@/content/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-card/80 to-card/40 p-8 sm:p-12">
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
            <div>
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
            <div>
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
            <div className="sm:col-span-2 lg:col-span-1">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Headquarters
              </dt>
              <dd className="mt-1 text-lg text-muted-foreground">{siteConfig.location}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href={`mailto:${siteConfig.email}?subject=Project%20inquiry`}>
                Email the team
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${siteConfig.phoneTel}`}>Call {siteConfig.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
