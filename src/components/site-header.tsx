import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground"
        >
          {siteConfig.name.replace(" LLC", "")}
          <span className="text-primary">.</span>
        </Link>
        <nav
          className="flex flex-1 flex-wrap items-center justify-end gap-1 sm:gap-2"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
