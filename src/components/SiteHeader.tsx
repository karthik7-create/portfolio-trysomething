import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ClapperIcon } from "@/components/ClapperIcon";

const links = [
  { to: "/", label: "Home" },
  { to: "/videos", label: "Videos" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Work with us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold uppercase tracking-wide">Try</span>
            <div className="flex items-center gap-1">
              <ClapperIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="text-lg font-extrabold uppercase tracking-wide">Something</span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/70 transition-colors hover:text-coral"
              activeProps={{ className: "text-coral font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://youtube.com/@trysomething-c5?si=HS0kGmFXsDKHJZ2J"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-coral"
          >
            Subscribe
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/80"
                activeProps={{ className: "text-coral font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://youtube.com/@trysomething-c5?si=HS0kGmFXsDKHJZ2J"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
