import { DollarSign, HeartHandshake, Shield } from "lucide-react";

import { FadeItem, MotionSection, StaggerReveal } from "@/components/motion-primitives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { advantageContent } from "@/content/site";

const icons = [DollarSign, Shield, HeartHandshake] as const;

export function AdvantageSection() {
  return (
    <MotionSection
      id="advantage"
      className="scroll-mt-24 border-b border-border/40 py-20 sm:py-24"
      aria-labelledby="advantage-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="advantage-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {advantageContent.title}
        </h2>
        <StaggerReveal className="mt-12 grid gap-6 md:grid-cols-3">
          {advantageContent.items.map((item, i) => {
            const Icon = icons[i] ?? Shield;
            return (
              <FadeItem key={item.title}>
                <Card className="group h-full border-border/60 bg-card/50 backdrop-blur-sm transition duration-300 ease-out hover:border-primary/35 hover:shadow-[0_0_0_1px_oklch(0.78_0.14_195/0.12)]">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <CardTitle className="font-heading text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeItem>
            );
          })}
        </StaggerReveal>
      </div>
    </MotionSection>
  );
}
