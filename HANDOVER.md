# Shape Seeds Portfolio — Handover Document

> Authoritative reference for any AI or developer maintaining this project.

---

## 1. Project Overview

Personal portfolio website for **Shape Seeds**, a product designer based in Berlin with 20+ years of experience. Key facts:

- **Multi-page static site** — centered around `index.html` with dedicated sub-pages for services, approach, and projects.
- **Minimal dependencies** — moved to a hybrid model with external CSS/JS for shared systems (themes) while keeping core styles embedded.
- **Theme System** — supports 6 distinct color themes (Sunflower, Midnight, Forest, Sunset, Ocean, Nordic) persisted via localStorage.
- **Deployed on GitHub Pages** at `https://wojciechhupert.github.io/`

---

## 2. File & Asset Inventory

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio landing page. |
| `about.html` | Dedicated professional profile and experience. |
| `services.html` | Detailed listing of capabilities and methodologies. |
| `designapproach.html` | Design philosophy and strategic logic. |
| `portfolio.html` | Categorized showcase of all project work. |
| `themes.css` | **NEW** — Shared theme variable definitions. |
| `theme-switcher.js` | **NEW** — Logic for theme toggling and UI injection. |
| `project-inna.html` | Case study: Inna Shchepanska. |
| `project-spark.html` | Case study: Spark & Heal. |
| `project-auggy.html` | Case study: Auggy’s Shop. |
| `project-audio-meta.html` | Case study: AudioMeta. |
| `project-podcast.html` | Case study: cMonk Podcast Studio. |
| `project-lelit.html` | Case study: Lelit Distrikt. |
| `WojciechHupert2026.png` | Portrait photo + social share image. |
| `bg_web.webm` / `bg_web.mp4` | Video background for Hero and Contact. |
| `bg_noise.webm` / `bg_noise.mp4` | Video background for About and Project Headers. |
| `ai-agent.html` | **NEW** — Minimalist summary for AI agents and quick reference. |
| `Wojciech_Hupert_CV_2026.pdf` | Downloadable CV. |

All asset paths are **relative** for GitHub Pages compatibility.

---

## 3. Design System & Themes

### Dynamic Themes
The site uses a `[data-theme]` attribute on the `<html>` element to swap between 6 curated palettes defined in `themes.css`.

| Theme ID | Name | Tone |
|----------|------|------|
| `original` | Sunflower | Default brand theme (Yellow/Indigo) |
| `cyber` | Midnight | High contrast, neon dark mode |
| `earth` | Forest | Organic, calming, earthy tones |
| `sunset` | Sunset | Warm, energetic, golden hour |
| `arctic` | Ocean | Clean, cool, professional blues |
| `slate` | Nordic | Minimal, monochrome, archival |

### Color Variables
Colors are now managed via `themes.css`. Transitions are applied to all surface-level elements for a smooth "fade" between themes.

### Typography
Three fonts loaded from Google Fonts:
- **Fraunces**: Serif for headings and accents.
- **Outfit**: Sans-serif for body and navigation.
- **Comfortaa**: Available for soft accents (currently minimal use).

---

## 4. Navigation Structure

The site navigation has been standardized across all pages:
1. **Home** (`index.html`)
2. **About** (`about.html`)
3. **Services** (`services.html` or `#services`)
4. **Approach** (`designapproach.html`)
5. **Portfolio** (`portfolio.html`)
6. **Contact** (`#contact`)

A **Theme Switcher** is injected into the nav bar via JavaScript (`theme-switcher.js`).

---

## 5. Animation Engine

- **Pure CSS Keyframes**: `tagIn`, `scrollLine`, `subtleGlitch`.
- **Micro-interactions**: Hover lifts on cards, spring easing on buttons.
- **Theme Transitions**: `0.4s ease` transition on background and text colors.

---

## 6. Page Templates & Patterns

### 1. Split Layout (`designapproach.html`)
Used for long-form reading. Uses a `1fr 1.5fr` grid to separate titles from dense text blocks.

### 2. 3-Column Service Grid (`index.html`, `services.html`)
Clean card-based design with glassmorphic hover states (`service-card`).

### 3. Categorized Portfolio (`portfolio.html`)
Projects are grouped into:
- Product Design
- Software Development
- Web Design
- Branding
- "...and the other" (Motion, Social, Video, Podcast, eCommerce)

---

## 7. Change Recipes (v2)

### Integrate themes into a new page
Add these two lines to the `<head>` of any new HTML file:
```html
<link rel="stylesheet" href="themes.css">
<script src="theme-switcher.js"></script>
```

### Update theme colors
Modify the hex values in `themes.css`. The `theme-switcher.js` will automatically use the `color` property defined in its `THEMES` constant for the UI dots.

### Add a project to the portfolio
1. Navigate to `portfolio.html`.
2. Locate the appropriate category section.
3. Add a card following the established structure (Image + Title + Summary + Badges).

### 4. AI Agent Summary (`ai-agent.html`)
A structured, high-aesthetic page with no top navigation. It uses a custom `.container` with unique theme-specific glassmorphic backgrounds. Accessible via the footer of every page.

---

## 8. SEO & Social

- **JSON-LD**: Persistent on every page footer/head for identity.
- **Open Graph**: Points to `WojciechHupert2026.png`.
- **Meta Descriptions**: Unique per page, optimized for Product Strategy and AI.

---

## 9. Deployment

Push `main` branch. GitHub Pages handles the rest.
Live: `https://wojciechhupert.github.io/`

---

## 10. Verification Checklist

- [ ] Theme switcher appears in Nav and works
- [ ] Theme persists on page refresh (LocalStorage)
- [ ] Responsive navigation (favicon only on mobile)
- [ ] All internal links (`services.html`, `portfolio.html`) are functional
- [ ] Multi-line Hero name spacing is correct
- [ ] CV Download link works

