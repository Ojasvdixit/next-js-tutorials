<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** (created): Initializes PostHog client-side using `posthog-js` via the `instrumentation-client` convention for Next.js 15.3+. Configured with a reverse proxy path (`/ingest`), exception capture enabled, and debug mode in development.
- **`next.config.ts`** (updated): Added reverse proxy rewrites routing `/ingest/*` to `https://us.i.posthog.com` and `/ingest/static/*` to `https://us-assets.i.posthog.com`, along with `skipTrailingSlashRedirect: true` for PostHog compatibility.
- **`components/ExploreBtn.tsx`** (updated): Added `posthog.capture('explore_events_clicked')` in the button's click handler to track when users engage with the hero CTA.
- **`components/EventCard.tsx`** (updated): Converted to a client component (`'use client'`) and added `posthog.capture('event_card_clicked', { event_title, event_slug, event_location, event_date })` on card click to track event browsing intent.
- **`.env.local`** (created): Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (covered by `.gitignore`).

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the 'Explore Events' button on the home page hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on a featured event card to view the event detail page | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/321113/dashboard/1336217)
- **Insight**: [Event Engagement Overview](https://us.posthog.com/project/321113/insights/k8NAa2Ih) — Daily trend comparing Explore Events clicks vs Event Card clicks
- **Insight**: [Browse-to-Event Conversion Funnel](https://us.posthog.com/project/321113/insights/LDjzn3uq) — Funnel tracking users from the Explore button through to clicking an event card
- **Insight**: [Daily Active Event Browsers](https://us.posthog.com/project/321113/insights/2IW1Ptjg) — Unique users clicking event cards per day
- **Insight**: [Top Clicked Events by Title](https://us.posthog.com/project/321113/insights/qef8FVBh) — Bar chart breakdown of which event titles attract the most clicks

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
