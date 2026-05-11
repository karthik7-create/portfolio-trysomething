// TODO: replace with real data when ready
export const channelInfo = {
  name: "TrySomething",
  handle: "@trysomething",
  tagline: "Social media, decoded weekly.",
  bio: "We dissect what actually works on Instagram and YouTube — no hype, no guru fluff. Just hands-on experiments and honest results from real campaigns.",
  subscriberCount: "248K",
  totalViews: "12.4M",
  videoCount: "186",
  countries: "92",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  channelUrl: "https://youtube.com/@trysomething-c5?si=HS0kGmFXsDKHJZ2J",
};

export type Video = {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
};

export const videos: Video[] = [
  {
    id: "v1",
    title: "I posted 100 Reels in 30 days. Here's what actually grew.",
    excerpt:
      "An honest breakdown of the hooks, edits, and posting times that moved the needle — and the ones that wasted my weekends.",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=800&fit=crop",
    duration: "14:22",
    views: "412K",
    category: "Instagram",
    publishedAt: "3 days ago",
    featured: true,
  },
  {
    id: "v2",
    title: "The YouTube algorithm in 2026 — what changed",
    excerpt: "New ranking signals, watch-time thresholds, and a refreshed homepage.",
    thumbnail:
      "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=900&h=700&fit=crop",
    duration: "09:47",
    views: "238K",
    category: "YouTube",
    publishedAt: "1 week ago",
  },
  {
    id: "v3",
    title: "Why your YouTube Shorts aren't getting views",
    excerpt: "Five technical mistakes killing your Shorts impressions.",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&h=700&fit=crop",
    duration: "11:03",
    views: "189K",
    category: "YouTube",
    publishedAt: "2 weeks ago",
  },
  {
    id: "v4",
    title: "Building a brand on Instagram from zero",
    excerpt: "A 90-day playbook for founders who hate posting.",
    thumbnail:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&h=700&fit=crop",
    duration: "18:41",
    views: "324K",
    category: "Brand Building",
    publishedAt: "3 weeks ago",
  },
  {
    id: "v5",
    title: "I ran $10K in Meta ads. Here's what I learned.",
    excerpt: "Creative that worked, audiences that didn't, and the dashboard.",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop",
    duration: "22:15",
    views: "501K",
    category: "Paid Ads",
    publishedAt: "1 month ago",
  },
  {
    id: "v6",
    title: "The content calendar I actually use",
    excerpt: "A simple Notion system you can copy this weekend.",
    thumbnail:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&h=700&fit=crop",
    duration: "07:58",
    views: "156K",
    category: "Workflow",
    publishedAt: "1 month ago",
  },
  {
    id: "v7",
    title: "Hook writing — a masterclass in 12 minutes",
    excerpt: "The 9 hook formats I rotate across every platform.",
    thumbnail:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=900&h=700&fit=crop",
    duration: "12:34",
    views: "278K",
    category: "Content",
    publishedAt: "2 months ago",
  },
  {
    id: "v8",
    title: "Going viral on purpose (it's possible)",
    excerpt: "Pattern, payoff, and the math behind reproducible reach.",
    thumbnail:
      "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=900&h=700&fit=crop",
    duration: "16:09",
    views: "612K",
    category: "Strategy",
    publishedAt: "2 months ago",
  },
];

export const categories = [
  { name: "Instagram", count: 42, blurb: "Reels, stories, growth experiments." },
  { name: "YouTube", count: 28, blurb: "Long-form, Shorts, thumbnails." },
  { name: "Brand Building", count: 24, blurb: "Voice, positioning, narrative." },
  { name: "Paid Ads", count: 19, blurb: "Meta, creative testing." },
  { name: "Workflow", count: 14, blurb: "Tools, calendars, batching." },
];

export const stats = [
  { label: "Subscribers", value: "248K" },
  { label: "Total views", value: "12.4M" },
  { label: "Videos", value: "186" },
  { label: "Countries", value: "92" },
];

export const testimonials = [
  {
    quote:
      "TrySomething's breakdowns helped us 3x our Reels reach in a quarter. Practical, no fluff.",
    author: "Maya Chen",
    role: "Head of Social, Northwind",
  },
  {
    quote:
      "Finally a marketing channel that shows the spreadsheet behind the strategy.",
    author: "Diego Alvarez",
    role: "Founder, Folio Studio",
  },
  {
    quote:
      "Our team watches every new upload during Monday standup. It's that good.",
    author: "Priya Raman",
    role: "Brand Director, Lumen",
  },
];

export const brandLogos = [
  "Northwind",
  "Folio",
  "Lumen",
  "Habitat",
  "Nova&Co",
  "Pressroom",
];

export const services = [
  {
    title: "Sponsored deep-dives",
    blurb:
      "Long-form, research-led videos that integrate your product into a story our audience actually wants to watch.",
    price: "From $8,000",
  },
  {
    title: "Dedicated Shorts",
    blurb:
      "A pack of 3 vertical videos across YouTube Shorts and Reels — written, shot, and edited by us.",
    price: "From $3,500",
  },
  {
    title: "Strategy consulting",
    blurb:
      "Private 1:1 sessions for in-house teams. Audit your channel, plan a quarter, ship better content.",
    price: "From $1,200/hr",
  },
];

export const socials = [
  { name: "YouTube", href: "https://youtube.com/@trysomething-c5?si=HS0kGmFXsDKHJZ2J" },
  { name: "Instagram", href: "https://www.instagram.com/try_something_official?igsh=NThjNDg4eDJ3NzFm&utm_source=qr" },
];
