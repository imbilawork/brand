# Imbila.AI Agent Brand Kit

> The brand system for Imbila.AI — designed to be consumed by AI agents, websites, and build tools.

**Problem:** The visual brand guide at [brand.imbila.ai](https://brand.imbila.ai) is a single-page HTML site. Agents and automated tools can't easily parse it for colors, fonts, and rules. This repo fixes that.

## Quick start

### For agents (Claude, GPT, Cursor, etc.)

Point the agent at this repo and tell it to read `brand-tokens.json` for structured data or `BRAND.md` for a readable overview.

```
# Raw JSON tokens (recommended for agents)
https://raw.githubusercontent.com/imbilawork/brand/main/brand-tokens.json

# Markdown guide (good for context windows)
https://raw.githubusercontent.com/imbilawork/brand/main/BRAND.md
```

### For websites

Drop the CSS file into any project:

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/imbilawork/brand/main/brand-tokens.css">
```

Or import in your stylesheet:

```css
@import url('https://raw.githubusercontent.com/imbilawork/brand/main/brand-tokens.css');
```

Then use the variables:

```css
body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text-body);
}

.btn-primary {
  background: var(--honey);
  color: var(--black);
  border-radius: var(--radius-pill);
}
```

### For Tailwind projects

```js
// tailwind.config.js
module.exports = {
  presets: [require('./agentbrand/tailwind.preset.js')],
  // ... your config
};
```

Then use classes like `bg-honey`, `text-honey-dark`, `rounded-pill`, `text-display`, etc.

## What's in the box

| File | What it does |
|------|-------------|
| `brand-tokens.json` | Complete structured brand data — colors, fonts, spacing, voice, architecture, logo SVGs inline |
| `brand-tokens.css` | CSS custom properties — import into any project |
| `tailwind.preset.js` | Tailwind preset with all brand tokens |
| `BRAND.md` | Human-readable brand guide |
| `brand-guide.html` | Visual HTML render of the full brand system |
| `logos/imbila-mark-traced.svg` | Full honey badger mark (primary logo, 1024x1024) |
| `logos/imbila-mark.svg` | Circle+dot mark (dark backgrounds, nav) |
| `logos/imbila-mark-light.svg` | Circle+dot mark (light backgrounds) |
| `logos/imbila-dot.svg` | Minimal honey dot (favicons, avatars) |
| `logos/logomark.html` | Interactive logomark reference page |

## The 30-second brand

- **Font:** DM Sans (only font allowed)
- **Primary color:** Honey `#EDAF42`
- **Background:** Black `#0A0A0A` (dark), White `#FAFAFA` (light)
- **Radii:** Cards `16px`, Buttons `100px` (pill), Inputs `10px`
- **Voice:** Sharp colleague, anti-hype, South African
- **Tagline:** "AI Strategy & Implementation That Actually Delivers ROI"

## License

Proprietary brand assets of Imbila.AI. Use only with permission from Craig Leppan.
