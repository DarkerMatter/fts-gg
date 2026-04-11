import { Cpu, ShoppingBag } from "lucide-react";

import {
  FadeItem,
  MotionSection,
  StaggerReveal,
} from "@/components/motion-primitives";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { capabilitiesContent } from "@/content/site";

export function CapabilitiesSection() {
  const { ecommerce, ctrl } = capabilitiesContent;

  return (
    <MotionSection
      id="capabilities"
      className="scroll-mt-24 border-b border-border/40 py-20 sm:py-24"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="capabilities-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {capabilitiesContent.title}
        </h2>
        <StaggerReveal className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeItem>
            <Card className="group h-full border-border/60 bg-card/50 backdrop-blur-sm transition duration-300 ease-out hover:border-primary/35 hover:shadow-[0_0_0_1px_oklch(0.78_0.14_195/0.12)]">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 text-primary transition-transform duration-300 group-hover:scale-105">
                  <ShoppingBag className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-xl">{ecommerce.title}</CardTitle>
                <CardDescription className="text-base">{ecommerce.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {ecommerce.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeItem>

          <FadeItem>
            <Card
              id="ctrl"
              className="group scroll-mt-24 h-full border-border/60 bg-card/50 backdrop-blur-sm transition duration-300 ease-out hover:border-primary/35 hover:shadow-[0_0_0_1px_oklch(0.78_0.14_195/0.12)] lg:scroll-mt-28"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Cpu className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-xl">{ctrl.title}</CardTitle>
                <CardDescription className="text-base">{ctrl.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {ctrl.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeItem>
        </StaggerReveal>
      </div>
    </MotionSection>
  );
}
