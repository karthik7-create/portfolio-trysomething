## TrySomething — YouTube Portfolio Site

A magazine-style portfolio for **TrySomething**, a social media marketing YouTube channel. Built with mock/dummy data that's easy to swap for real content later.

### Design direction

- **Palette:** Electric Coral — coral `#ff6b6b`, hot pink `#ee5a70`, magenta `#c44569`, deep violet `#574b90`. Off-white/cream background for editorial feel.
- **Typography:** Instrument Serif (display headlines) + Work Sans (body). Large oversized serif headers, tight tracking, uppercase eyebrow labels.
- **Layout:** Magazine — featured hero video, asymmetric grid of secondary stories, editorial section dividers, generous whitespace.
- **Motion:** Subtle fade/slide on scroll via framer-motion; coral hover states on cards.

### Pages (separate routes for SEO)

```
/             Home — magazine landing
/videos       All videos grid with category filters
/about        Channel story + creator bio
/services     Brand collab / sponsorship offerings
/contact      Booking form + socials
```

### Home page sections

1. **Top nav** — TrySomething wordmark, links, "Subscribe" CTA (coral button)
2. **Editorial hero** — Oversized serif headline ("Social media, decoded weekly."), latest featured video thumbnail, subscriber/view counters
3. **Featured story** — Large image left, headline + excerpt right
4. **Latest videos grid** — Asymmetric magazine grid, 6 mock videos with thumbnails, durations, view counts
5. **Stats strip** — Subscribers, total views, videos published, countries reached
6. **Categories** — Instagram, TikTok, YouTube Growth, Brand Building (chip cards)
7. **Testimonials / brand logos** — Mock brand collabs
8. **Newsletter signup** — Coral CTA band
9. **Footer** — Socials, links, copyright

### Mock data

Single source file `src/data/mock.ts` exporting:
- `channelInfo` (name, tagline, subscriberCount, totalViews, avatar)
- `videos[]` (title, thumbnail via Unsplash, duration, views, category, publishedAt)
- `categories[]`, `testimonials[]`, `brandLogos[]`, `socials[]`
Clearly commented `// TODO: replace with real data`.

### Technical notes

- Add `framer-motion` dependency
- Define coral palette tokens in `src/styles.css` (`--brand-coral`, `--brand-pink`, `--brand-magenta`, `--brand-violet`, gradients, shadows)
- Load Instrument Serif + Work Sans via Google Fonts in `__root.tsx` head links
- Each route gets its own `head()` with unique title/description/og tags
- Shared `<SiteHeader />` and `<SiteFooter />` components
- Reusable `<VideoCard />`, `<SectionHeading />`, `<StatBlock />`
- Replace placeholder `src/routes/index.tsx`; create `videos.tsx`, `about.tsx`, `services.tsx`, `contact.tsx`
- Thumbnails use Unsplash URLs (no asset generation needed)
- No backend — contact form is UI-only with toast confirmation