import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import { socials } from "@/data/mock";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TrySomething" },
      {
        name: "description",
        content:
          "Get in touch with TrySomething for sponsorships, consulting, or press inquiries.",
      },
      { property: "og:title", content: "Contact — TrySomething" },
      {
        property: "og:description",
        content: "Sponsorships, consulting, and press — let's talk.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section>
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pt-24">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="eyebrow text-coral">Get in touch</p>
              <h1 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.98] tracking-tight">
                Let's make
                <br />
                <span className="italic text-coral">something</span>.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Sponsorships, consulting, podcast invites, or just a hello —
                drop a note and we'll respond within two business days.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <div>
                  <p className="eyebrow text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@trysomething.tv"
                    className="mt-1 inline-block font-display text-2xl hover:text-coral"
                  >
                    hello@trysomething.tv
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-muted-foreground">Elsewhere</p>
                  <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                    {socials.map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base hover:text-coral"
                        >
                          {s.name} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  toast.success("Thanks! We'll be in touch shortly.");
                  (e.target as HTMLFormElement).reset();
                }, 700);
              }}
              className="rounded-2xl border border-border bg-card p-6 lg:p-8"
            >
              <div className="grid gap-5">
                <Field label="Name" name="name" placeholder="Maya Chen" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@studio.com"
                  required
                />
                <Field label="Company (optional)" name="company" placeholder="Northwind" />
                <div>
                  <label className="eyebrow text-muted-foreground" htmlFor="topic">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none"
                  >
                    <option>Sponsored video</option>
                    <option>Shorts package</option>
                    <option>Consulting</option>
                    <option>Press / podcast</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className="eyebrow text-muted-foreground" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you have in mind…"
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-medium text-white shadow-coral transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Toaster />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none"
      />
    </div>
  );
}
