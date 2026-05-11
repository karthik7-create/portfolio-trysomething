import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VideoCard } from "@/components/VideoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { videos } from "@/data/mock";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "All Videos — TrySomething" },
      {
        name: "description",
        content:
          "Browse every TrySomething video — Instagram, YouTube, paid ads, and brand-building deep dives.",
      },
      { property: "og:title", content: "All Videos — TrySomething" },
      {
        property: "og:description",
        content: "The full TrySomething archive of social media marketing experiments.",
      },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  const allCategories = useMemo(
    () => ["All", ...Array.from(new Set(videos.map((v) => v.category)))],
    [],
  );
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? videos : videos.filter((v) => v.category === active);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:px-10 lg:pt-20">
          <SectionHeading
            eyebrow="The archive"
            title="Every experiment we've shipped."
            description="Filter by topic. New uploads every Thursday."
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {allCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === c
                    ? "border-coral bg-coral text-white"
                    : "border-border bg-card hover:border-coral hover:text-coral"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
