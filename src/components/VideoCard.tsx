import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Video } from "@/data/mock";

type Props = {
  video: Video;
  size?: "sm" | "md" | "lg";
};

export function VideoCard({ video, size = "md" }: Props) {
  const aspect = size === "lg" ? "aspect-[16/10]" : "aspect-[4/3]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <div className={`relative overflow-hidden rounded-xl bg-muted ${aspect}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
          <span className="rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            {video.duration}
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coral text-white shadow-coral transition-transform group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
          {video.category}
        </span>
      </div>

      <div className="mt-4">
        <h3
          className={`font-display tracking-tight text-foreground transition-colors group-hover:text-coral ${
            size === "lg" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {video.title}
        </h3>
        {video.excerpt && size !== "sm" && (
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {video.excerpt}
          </p>
        )}
        <p className="mt-3 text-xs text-muted-foreground">
          {video.views} views · {video.publishedAt}
        </p>
      </div>
    </motion.article>
  );
}
