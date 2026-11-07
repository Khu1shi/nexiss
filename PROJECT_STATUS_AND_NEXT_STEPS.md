# NexisGEO Project Status and Execution Document

Last updated: April 1, 2026 (Asia/Kolkata)  
Project mode: Pre-launch concept validation  
Current test case: Cafes in Andheri, Mumbai (dates, work, coffee, friends meetup)

## 1) Project Objective
NexisGEO is positioned as an intelligence platform for Generative Engine Optimization (GEO), focused on how businesses are recommended in AI-generated answers.

For current validation, the website and portal mock workflows are centered around a concrete local scenario:
- Discoverability of cafes in Andheri, Mumbai
- Query intents: date spots, work-friendly cafes, coffee quality, and friends meetups
- Multi-model monitoring context: ChatGPT, Gemini, Claude, Perplexity

## 2) What Is Implemented Today

### Landing and pre-launch flow
1. `/` (Landing page): fully built with complete section flow and polished UI.
2. `/early-access`: fully built with working form UX and request pipeline visual.
3. `/login`: fully built operator login experience (UI-level auth preview, not real auth).
4. `/investors`: fully built investor-facing page with thesis, rollout, and investor brief form.

### Portal and tool pages
1. `/dashboard`: fully built overview page (user-facing operational summary).
2. `/global-monitoring`: fully built monitoring page with dense demo visualizations.
3. `/geo-ranking-check`: fully built ranking diagnostics page with prompt-level views.
4. `/geo-boost`: fully built optimization workflow page with action planning.
5. `/competitor-analysis`: fully built competitor intelligence page.
6. `/reports`: fully built reporting/export page (admin-oriented).
7. `/onboarding`: fully built admin onboarding queue page.
8. `/contact`: fully built inbound ops queue page (admin-oriented).

### API and shared infrastructure
1. `/api/signup` endpoint exists and captures form data (console/log-level only).
2. Shared portal shell, navigation, section components, dashboard preview components are in place.
3. App is Next.js App Router + TypeScript + Tailwind CSS + Vercel-ready structure.

## 3) Route-by-Route Use Cases

| Route | Status | Primary Use Case |
|---|---|---|
| `/` | Completed | Explain GEO category and demonstrate why AI answer visibility matters for Andheri cafes. |
| `/early-access` | Completed | Capture early operator and partner interest for pilot onboarding. |
| `/login` | Completed (UI-only) | Show intended operator entry point and product maturity direction before real auth. |
| `/dashboard` | Completed | High-level “command center” for cafe visibility health and opportunity prioritization. |
| `/global-monitoring` | Completed | Track multi-model answer coverage by area/intents and monitor signal shifts. |
| `/geo-ranking-check` | Completed | Track ranking movement for specific cafe discovery prompts. |
| `/geo-boost` | Completed | Convert ranking gaps into prioritized optimization tasks. |
| `/competitor-analysis` | Completed | Compare competing cafes and identify contested prompts/citation gaps. |
| `/reports` | Completed | Produce stakeholder-ready summaries for operators and investors. |
| `/onboarding` | Completed | Internal queue to approve and activate cafe workspaces/cohorts. |
| `/contact` | Completed | Manage inbound requests and follow-up workflows. |
| `/investors` | Completed | Present investor narrative and collect investor brief requests. |
| `/docs` | Pending (placeholder) | Documentation center for GEO and product usage. |
| `/privacy` | Pending (placeholder) | Privacy policy page. |
| `/terms` | Pending (placeholder) | Terms and conditions page. |

## 4) Current Product Boundary (Important)
This is still a concept validation system, not a production application.

Not implemented yet:
1. Real authentication/authorization.
2. Database persistence for forms and analytics.
3. Real integrations with AI models or SERP pipelines.
4. Real event ingestion, scheduling, alerting, and reporting backends.
5. Multi-tenant user management and permissions.

## 5) Pages Pending
The only remaining placeholder pages are:
1. `/docs`
2. `/privacy`
3. `/terms`

## 6) Recommended Next Build Sequence

### Immediate (high priority)
1. Complete `/docs` with:
- GEO overview
- “How scoring works” explanation
- Prompt and intent taxonomy
- FAQ for cafe operators

2. Complete `/privacy` and `/terms` with basic pre-launch legal copy:
- Data collection intent (forms only)
- Consent and communication usage
- Liability and platform pre-launch disclaimers

### Product readiness (next)
1. Implement real auth foundation:
- NextAuth or custom auth
- Role mapping for `user` and `admin`

2. Add persistence layer:
- Store signup and investor requests in DB (e.g., Postgres)
- Add admin-readable request dashboard

3. Stabilize role routes:
- Separate admin dashboard route (internal)
- Restrict admin-only pages by role

## 7) Andheri Cafe Brand Study Plan

### Study goal
Identify which factors most influence AI recommendation position for Andheri cafe intents and build repeatable optimization actions.

### Core intent buckets
1. Date cafes
2. Work-friendly cafes (Wi-Fi, charging, quiet)
3. Coffee-quality focused cafes
4. Friends meetup/group seating cafes

### Suggested competitor seed set (for pilot)
1. Subko Andheri
2. Blue Tokai Andheri
3. Leaping Windows Cafe
4. Prithvi Cafe Juhu (nearby benchmark)
5. Additional Andheri East and Lokhandwala local competitors

### Query pack (starter)
1. Best cafes in Andheri for dates
2. Best cafes in Andheri for work
3. Best coffee in Andheri West
4. Best cafes in Andheri for friends meetup
5. Quiet cafes in Andheri East
6. Budget cafes in Andheri
7. Late-night cafes in Andheri

### Data points to collect
1. Rank position by model and query.
2. Mention frequency and answer share.
3. Citation/source domain patterns.
4. Query-intent alignment signals (ambience/work/coffee/group).
5. Volatility over time (daily/weekly).

### Evaluation framework
1. Visibility score per intent bucket.
2. Competitive gap index (vs top 3).
3. Citation quality score.
4. Action impact score (predicted lift by task).

### Output artifacts
1. Weekly “Andheri Cafe GEO Report”.
2. Top movers and losers list.
3. Priority action backlog (content, metadata, listings, citations).
4. Investor-facing category progress snapshot.

## 8) UX and Design Optimization Backlog
1. Cross-page visual consistency audit (spacing, typography scale, chip styles).
2. Loading-state stabilization plan for local dev and HMR behavior.
3. Add skeleton states for heavy dashboard panels.
4. Build a shared chart/metric card system to reduce per-page duplication.

## 9) Technical Debt and Risks
1. Many dashboards use hardcoded demo arrays in page files.
2. Repeated chart blocks can be componentized.
3. Frequent local hot-reload cache staleness requires occasional reset.
4. Placeholder legal/docs pages still missing, blocking go-live readiness.

## 10) Suggested 2-Week Execution Plan

### Week 1
1. Finish `docs/privacy/terms`.
2. Add DB-backed lead capture.
3. Add admin request list page (from captured forms).
4. Extract shared dashboard widgets into reusable components.

### Week 2
1. Add authentication and role guards.
2. Split user/admin home routes cleanly.
3. Implement first “real” ingestion prototype for query snapshots.
4. Publish first Andheri cafe baseline report from structured data.

## 11) Definition of Done for “Phase 1 Ready”
1. All public routes complete (no placeholders).
2. Lead and investor forms persist to database.
3. Role-based access works for user vs admin.
4. Docs/legal pages complete.
5. First real data pipeline run for at least 20 Andheri cafe prompts.
6. Weekly automated report generated and reviewable in admin panel.

