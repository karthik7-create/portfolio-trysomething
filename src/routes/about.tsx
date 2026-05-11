import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { channelInfo, stats } from "@/data/mock";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TrySomething" },
      {
        name: "description",
        content:
          "The story behind TrySomething — a YouTube channel run by working marketers who test, measure, and share what actually moves the needle on social.",
      },
      { property: "og:title", content: "About — TrySomething" },
      {
        property: "og:description",
        content: "Working marketers running real experiments — and showing the receipts.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-14 lg:px-10 lg:pt-24">
          <p className="eyebrow text-coral">About the channel</p>
          <h1 className="mt-4 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.98] tracking-tight">
            We test things in
            <br />
            <span className="italic text-coral">public.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {channelInfo.bio}
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow text-muted-foreground">The premise</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Most marketing advice ages badly.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Algorithms shift. Formats rise and fall. The team behind
              TrySomething ships campaigns full-time across consumer brands —
              every video on this channel is built from a real experiment we
              ran the week prior.
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">The format</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Hypothesis, test, receipts.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every episode follows the same structure: a clear hypothesis, a
              measured test, and the dashboard at the end. No vague "grow on
              Instagram" platitudes. Specifics or it didn't happen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl tracking-tight md:text-6xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-background/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="The host"
            title="Hi, we're the team."
            description="A small group of strategists, editors, and a producer who refuses to let anything boring leave the building."
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <figure className="rounded-2xl border border-border bg-card p-6">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <img
                  src={channelInfo.avatar}
                  alt="Lead host"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-2xl">Sam Okafor</p>
                <p className="text-sm text-muted-foreground">Host & lead strategist</p>
              </figcaption>
            </figure>
            <figure className="rounded-2xl border border-border bg-card p-6">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop"
                  alt="Producer"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-2xl">June Hamada</p>
                <p className="text-sm text-muted-foreground">Producer & editor</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
