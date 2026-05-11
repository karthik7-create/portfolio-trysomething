import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { services, brandLogos } from "@/data/mock";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Work with us — TrySomething" },
      {
        name: "description",
        content:
          "Sponsorships, dedicated Shorts, and consulting from the TrySomething team — for brands that want a credible voice in social marketing.",
      },
      { property: "og:title", content: "Work with us — TrySomething" },
      {
        property: "og:description",
        content: "Sponsored deep-dives, Shorts packages, and 1:1 consulting.",
      },
    ],
  }),
  component: ServicesPage,
});

const includes = [
  "Creative-led, audience-respectful integration",
  "Full briefing & approval workflow",
  "Performance recap with first-party data",
  "Whitelisting & paid amplification optional",
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pt-24">
          <p className="eyebrow text-coral">Work with us</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.98] tracking-tight">
            Be in front of marketers
            <span className="italic text-coral"> who buy.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Our audience is in-house operators, agency leads, and founders.
            They watch to learn — and they make decisions about tools, hires,
            and budgets every week.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading eyebrow="Offerings" title="Three ways to partner." />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-soft"
              >
                <h3 className="font-display text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>

                <ul className="mt-6 space-y-2 text-sm">
                  {includes.slice(0, 3).map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-end justify-between border-t border-border/60 pt-6">
                  <p className="font-display text-2xl">{s.price}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-coral"
                  >
                    Inquire <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="eyebrow text-muted-foreground">Recent partners</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-4">
            {brandLogos.map((b) => (
              <span key={b} className="font-display text-3xl text-foreground/40 md:text-4xl">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="text-white"
        style={{ background: "var(--gradient-coral)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-end lg:px-10">
          <h2 className="max-w-2xl font-display text-5xl leading-[1.02] md:text-7xl">
            Have a brand we'd love? Let's talk.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-magenta hover:bg-cream"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
