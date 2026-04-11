import { MotionSection } from "@/components/motion-primitives";
import { missionContent } from "@/content/site";

export function MissionSection() {
  return (
    <MotionSection
      id="mission"
      className="scroll-mt-24 border-b border-border/40 py-20 sm:py-24"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="mission-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {missionContent.title}
        </h2>
        <div className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
          {missionContent.body.map((p, i) => (
            <p key={i} className="text-pretty text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
