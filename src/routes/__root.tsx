import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LoadingScreen } from "@/components/LoadingScreen";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-coral">404</h1>
        <h2 className="mt-4 font-display text-3xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page wandered off. Try the homepage instead.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-coral"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TrySomething — Social media, decoded weekly." },
      {
        name: "description",
        content:
          "TrySomething is a YouTube channel about social media marketing — Instagram, YouTube growth experiments, hooks, and brand building.",
      },
      { name: "author", content: "TrySomething" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@trysomething" },
      { property: "og:title", content: "TrySomething — Social media, decoded weekly." },
      { name: "twitter:title", content: "TrySomething — Social media, decoded weekly." },
      { name: "description", content: "Demo Portfolio Hub creates a digital marketing portfolio for YouTube channels using mock data." },
      { property: "og:description", content: "Demo Portfolio Hub creates a digital marketing portfolio for YouTube channels using mock data." },
      { name: "twitter:description", content: "Demo Portfolio Hub creates a digital marketing portfolio for YouTube channels using mock data." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66564592-f5fc-4a59-8f9e-4e4a4be62d65/id-preview-1c73d8de--c186d390-c6d9-40dc-81cf-2267fc36b615.lovable.app-1778425298023.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66564592-f5fc-4a59-8f9e-4e4a4be62d65/id-preview-1c73d8de--c186d390-c6d9-40dc-81cf-2267fc36b615.lovable.app-1778425298023.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      {loading && <LoadingScreen onComplete={handleComplete} />}
      <Outlet />
    </QueryClientProvider>
  );
}
