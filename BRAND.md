# Imbila.AI Brand Guide

> Machine-readable and human-readable brand reference.
> Source of truth: [brand.imbila.ai](https://brand.imbila.ai)

---

## Identity

**Name:** Imbila.AI
**Origin:** isiZulu — "Imbila yeswela umsila ngokuyalezela" (the creature that lost its tail by sending others). Don't delegate your own AI journey.
**Animal:** Honey Badger (not hyrax/dassie)
**Traits:** Fearless, Tenacious, Resourceful, Direct, Punches above its weight
**Location:** Johannesburg, South Africa
**Founder:** Craig Leppan

**Tagline:** AI Strategy & Implementation That Actually Delivers ROI
**Supporting:** Clarity, not chaos. Speed, not risk.

---

## Colors

### Honey (Primary Accent)

| Token | Hex | Usage |
|-------|-----|-------|
| `--honey` | `#EDAF42` | Primary accent — CTAs, links (dark), tags, highlights |
| `--honey-light` | `#F5C96E` | Hover states (dark theme) |
| `--honey-dark` | `#C8922F` | Links (light theme), section labels |
| `--honey-deep` | `#A67720` | Text on light backgrounds |
| `--honey-wash` | `#FAE0A5` | Very light tint backgrounds |

**Rule:** Honey is never a background colour for large areas. It punctuates — it doesn't fill.

### Neutrals

| Token | Hex | Dark theme usage | Light theme usage |
|-------|-----|-----------------|-------------------|
| `--black` | `#0A0A0A` | Page background | — |
| `--grey-900` | `#1F1E1E` | Card backgrounds | — |
| `--grey-800` | `#2A2A2A` | Borders | — |
| `--grey-300` | `#BBBBBB` | Body text | — |
| `--white` | `#FAFAFA` | Headings | Page background |
| `--grey-50` | `#F5F5F5` | — | Card backgrounds, code blocks |
| `--grey-100` | `#EEEEEE` | — | Borders |
| `--grey-600` | `#555555` | — | Body text |

### Color Ratio
Black 60% · Dark Grey 20% · Honey 12% · White 8%

### Semantic
Success `#3A9E6B` · Warning `#E8A838` · Error `#D94F4F` · Info `#4A90B8`

---

## Typography

**Font:** DM Sans — the only permitted font.
**No:** Inter, Roboto, or any serif face.
**Fallback:** `system-ui, -apple-system, sans-serif`

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&display=swap
```

### Scale

| Role | Size | Weight | Extra |
|------|------|--------|-------|
| Display (h1) | `clamp(40px, 5vw, 56px)` | 800 | letter-spacing: -0.035em |
| Section (h2) | `clamp(28px, 3.5vw, 36px)` | 700 | letter-spacing: -0.025em |
| Label (h3) | `11px` | 700 | uppercase, letter-spacing: 0.14em |
| Subhead (h4) | `18px` | 600 | — |
| Body | `16px` | 400 | line-height: 1.7, max-width: 64ch |
| Small | `13px` | 500 | — |
| Section label | `10px` | 700 | uppercase, letter-spacing: 0.2em, pattern: `01 · Name` |

---

## Spacing & Radii

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Small elements, code inline |
| `--radius-md` | `10px` | Inputs |
| `--radius-lg` | `16px` | Cards, callouts |
| `--radius-pill` | `100px` | Buttons, tags |
| Page max width | `1120px` | — |
| Body max width | `64ch` | Prose text |
| Nav height | `56px` | — |

---

## Logo

Geometric angular honey badger head in profile. Honey gold and black.

### Variants
- **Primary mark:** `logos/imbila-mark-traced.svg` — full honey badger silhouette (1024x1024), gold+black
- **Circle mark (dark bg):** `logos/imbila-mark.svg` — black circle, grey stroke, honey dot (nav/small contexts)
- **Circle mark (light bg):** `logos/imbila-mark-light.svg` — white circle, grey stroke, honey dot
- **Dot only:** `logos/imbila-dot.svg` — honey dot (favicon, avatars)
- **Logomark page:** `logos/logomark.html` — interactive logomark reference

### Wordmark HTML
```html
<span style="font-family:'DM Sans',system-ui,sans-serif;font-weight:600;">
  Imbila<em style="font-style:normal;color:#EDAF42;font-weight:700;">.AI</em>
</span>
```

### Rules
- Only on approved backgrounds: `#0A0A0A`, `#1F1E1E`, `#FFFFFF`
- No gradients, rotation, distortion, colour changes, glows, or drop shadows

---

## Voice & Tone

**Personality:** Sharp, experienced colleague. Not a corporate brochure. Anti-hype.
**SA voice:** Natural, not performative. Not Silicon Valley.

### By tier
- **Enterprise:** Measured, authoritative, governance-aware
- **Studio:** Energetic, direct, action-oriented
- **Dojo:** Conversational, opinionated, insightful

### Approved phrases
- Clarity into execution
- Working solutions, not just advice
- Weeks, not months
- Capability, not dependency
- No transformation theater

### Banned phrases
- Digital transformation
- Leverage synergies
- AI revolution / AI disruption (without context)
- Cutting-edge / state-of-the-art
- Paradigm shift / next-gen

---

## Architecture

### Tiers

| Tier | Audience | Key services |
|------|----------|-------------|
| Enterprise | 50+ employees, regulated, board-level | AI Readiness Assessment, Fractional AI Leadership, Implementation |
| Studio | Consultants, agencies <20, small biz | AI Clarity Audits, Co-Design Labs, AI Sprints |
| Dojo | Community, newsletter, self-learners | Blog, AI Mastery Workshops, AI Assessment, Podcast |

### Domains
- `imbila.ai` — Main site (Ghost)
- `brand.imbila.ai` — Brand guide (Static HTML)
- `claude.imbila.ai` — Anthropic Academy (Static HTML)

### Key links
- Website: https://imbila.ai
- LinkedIn: https://www.linkedin.com/company/imbila-ai
- Contact: https://imbila.ai/contact_us/
- AI Assessment: https://imbila.ai/ai-workshop-mastery-assessment/
- Workshop: https://imbila.ai/ai-workshop-mastery-session/

---

## Files in this repo

| File | Format | Use case |
|------|--------|----------|
| `brand-tokens.json` | JSON | Agents, build scripts, CMS config |
| `brand-tokens.css` | CSS | Drop into any HTML/web project |
| `tailwind.preset.js` | JS | Tailwind CSS preset — `presets: [require('./tailwind.preset')]` |
| `BRAND.md` | Markdown | Human-readable reference, agent context |
| `brand-guide.html` | HTML | Visual render — host on Cloudflare/GitHub Pages |
| `logos/imbila-mark-traced.svg` | SVG | Primary honey badger mark (full detail) |
| `logos/imbila-mark.svg` | SVG | Circle+dot mark (dark bg, nav use) |
| `logos/imbila-mark-light.svg` | SVG | Circle+dot mark (light bg) |
| `logos/imbila-dot.svg` | SVG | Minimal honey dot (favicon) |
| `logos/logomark.html` | HTML | Interactive logomark reference page |
