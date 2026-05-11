import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VideoCard } from "@/components/VideoCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  channelInfo,
  videos,
  categories,
  stats,
  testimonials,
  brandLogos,
} from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrySomething — Social media, decoded weekly." },
      {
        name: "description",
        content:
          "Honest, hands-on social media marketing experiments from TrySomething — Reels, YouTube, paid ads, and brand building.",
      },
      { property: "og:title", content: "TrySomething — Social media, decoded weekly." },
      {
        property: "og:description",
        content:
          "A YouTube channel about what actually works on Instagram and YouTube. New experiment every week.",
      },
      { property: "og:image", content: videos[0].thumbnail },
      { name: "twitter:image", content: videos[0].thumbnail },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = videos.find((v) => v.featured) ?? videos[0];
  const secondary = videos.filter((v) => v.id !== featured.id).slice(0, 4);
  const grid = videos.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO — editorial */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pt-20">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-coral" />
            Issue 24 · {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-tight"
          >
            Social media,
            <br />
            <span className="italic text-coral">decoded</span> weekly.
          </motion.h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              {channelInfo.bio} Hosted by a team of marketers who'd rather
              show you the spreadsheet than sell you a course.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={channelInfo.channelUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-medium text-white shadow-coral transition-transform hover:-translate-y-0.5"
              >
                Watch on YouTube <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/videos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-coral hover:text-coral"
              >
                Browse the archive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center justify-between">
            <p className="eyebrow text-coral">This week's feature</p>
            <Link
              to="/videos"
              className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-coral md:inline-flex"
            >
              All features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-magenta/40 via-transparent to-coral/30 mix-blend-multiply" />
              <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                {featured.category}
              </span>
            </motion.div>

            <div>
              <h2 className="font-display text-4xl leading-[1.02] md:text-6xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featured.views} views</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>{featured.duration}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>{featured.publishedAt}</span>
              </div>
              <a
                href={channelInfo.channelUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-coral"
              >
                Watch the breakdown <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
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

      {/* MAGAZINE GRID */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The archive"
              title="Latest experiments."
              description="Six fresh breakdowns. New uploads every Thursday."
            />
            <Link
              to="/videos"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-coral md:inline-flex"
            >
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Asymmetric magazine layout */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <VideoCard video={grid[0]} size="lg" />
            </div>
            <div className="grid gap-8 lg:col-span-5">
              <VideoCard video={grid[1]} />
              <VideoCard video={grid[2]} />
            </div>
            <div className="lg:col-span-4">
              <VideoCard video={grid[3]} />
            </div>
            <div className="lg:col-span-4">
              <VideoCard video={grid[4]} />
            </div>
            <div className="lg:col-span-4">
              <VideoCard video={grid[5]} />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-border/60 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Browse by topic"
            title="What we cover."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex cursor-pointer items-start justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-soft"
              >
                <div>
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                </div>
                <span className="ml-4 shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70 group-hover:bg-coral group-hover:text-white">
                  {c.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading eyebrow="Said about us" title="Trusted by teams that ship." />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <span className="font-display text-5xl leading-none text-coral">"</span>
                <blockquote className="mt-2 font-display text-xl leading-snug text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <p className="font-medium">{t.author}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* brand strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-t border-border/60 pt-10">
            {brandLogos.map((b) => (
              <span
                key={b}
                className="font-display text-2xl tracking-tight text-foreground/40 md:text-3xl"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section
        className="text-white"
        style={{ background: "var(--gradient-sunset)" }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:px-10 lg:py-24">
          <div>
            <p className="eyebrow text-white/80">The newsletter</p>
            <h2 className="mt-3 font-display text-5xl leading-[1.02] md:text-7xl">
              The week, in one email.
            </h2>
            <p className="mt-4 max-w-lg text-white/85">
              The single biggest social media insight of the week — plus the
              data to back it up. Free, every Friday morning.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@studio.com"
              className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white placeholder:text-white/60 backdrop-blur focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-magenta hover:bg-cream"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
