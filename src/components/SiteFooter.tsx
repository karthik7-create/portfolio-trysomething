import { Link } from "@tanstack/react-router";
import { socials, channelInfo } from "@/data/mock";
import { ClapperIcon } from "@/components/ClapperIcon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-extrabold uppercase tracking-wide">Try</span>
              <div className="flex items-center gap-1">
                <ClapperIcon className="h-5 w-5" />
                <span className="text-lg font-extrabold uppercase tracking-wide">Something</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {channelInfo.bio}
            </p>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/videos" className="hover:text-coral">All videos</Link></li>
              <li><Link to="/about" className="hover:text-coral">About</Link></li>
              <li><Link to="/services" className="hover:text-coral">Work with us</Link></li>
              <li><Link to="/contact" className="hover:text-coral">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Follow</p>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-coral">
                    {s.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TrySomething. All rights reserved.</p>
          <p>Made with care, for marketers who try things.</p>
        </div>
      </div>
    </footer>
  );
}
