# Shape Seeds Portfolio — Handover Document

> Authoritative reference for any AI or developer maintaining this project.

---

## 1. Project Overview

Personal portfolio website for **Shape Seeds**, a product designer based in Berlin with 20+ years of experience. Key facts:

- **Multi-page static site** — centered around `index.html` with dedicated sub-pages for key projects.
- **Zero dependencies** — no JS libraries, no npm, no build step.
- **No separate CSS/JS files** — all CSS is embedded in `<style>` blocks within each HTML file for maximum portability and speed.
- **Deployed on GitHub Pages** at `https://wojciechhupert.github.io/`
- To deploy: push `index.html`, project files, + assets to the `main` branch.

---

## 2. File & Asset Inventory

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio landing page. |
| `project-lelit.html` | Case study: Lelit Distrikt Experience. |
| `project-auggy.html` | Case study: Auggy’s Shop. |
| `project-podcast.html` | Case study: cMonk Podcast Studio. |
| `project-audio-meta.html` | Case study: AudioMeta. |
| `WojciechHupert2026.png` | Portrait photo + social share image. |
| `bg_web.webm` / `bg_web.mp4` | Video background for Hero and Contact. |
| `bg_noise.webm` / `bg_noise.mp4` | Video background for About and Project Headers. |
| `Wojciech_Hupert_CV_2026.pdf` | Downloadable CV. |

All asset paths in the HTML are **relative** (no leading `/`). This is required for GitHub Pages to work correctly.

---

## 3. Design System

### Color Palette

All colors are defined as CSS custom properties in `:root` (around line 37).

| Variable | Hex | Primary Usage |
|----------|-----|---------------|
| `--yellow` | `#FFD600` | Hero bg, Contact bg, nav logo, tag hover, stat numbers |
| `--indigo` | `#1C1449` | Nav bg, AI Projects bg, Footer bg, primary buttons, body text on yellow |
| `--indigo-mid` | `#2D2260` | Primary button hover state |
| `--coral` | `#FF5638` | About section label; area card 3 accent |
| `--teal` | `#00C49A` | Areas section label; area card 2 accent |
| `--violet` | `#7C3AED` | Area card 4 accent |
| `--lime` | `#84CC16` | Area card 5 accent |
| `--cream` | `#F8F4EC` | Page background, Areas section bg |
| `--cream-dark` | `#EEE9DE` | Defined but **currently unused** in markup |
| `--white` | `#FFFFFF` | Text on dark backgrounds |
| `--charcoal` | `#1A1A1A` | Main body text |
| `--muted` | `#888070` | Subdued text, card descriptions |

### Typography

Three fonts loaded from Google Fonts (see `<link>` tags at line 30–32):

| Font | Category | Weights | Usage |
|------|----------|---------|-------|
| **Fraunces** | Serif | 300, 700, 900 + italics | Logo, all `.section-title`, project names, `.stat-number`, `.project-number` |
| **Outfit** | Sans-serif | 300, 400, 500, 600 | Body text, buttons, nav links, tags, labels |
| **Comfortaa** | Sans-serif | 300, 400, 700 | Imported but **currently unused** — safe to remove or repurpose |

### Key CSS Class Conventions

| Class | Description |
|-------|-------------|
| `.section-label` | Small uppercase overline above titles — 0.7rem, letter-spacing 0.18em |
| `.section-title` | Fraunces serif heading — clamp(2rem, 4vw, 3.25rem) |
| `.section-title .playful` | Italic serif variant inside a title, triggers `subtleGlitch` animation |
| `.project-title` | Hero title in project pages — serif, bold, large |
| `.project-subtitle` | Hero subtitle span within .project-title — smaller, lighter, block-level |
| `.btn-primary` | Filled indigo button with yellow text |
| `.btn-outline` | Transparent button with indigo border |
| `.tag` | Pill-shaped skill tag used in hero |
| `c-yellow`, `c-teal`, etc. | Color modifier classes on area cards and dots |

### Video Background Pattern

All three video-backed sections (Hero, About, Contact) follow the same z-index stacking pattern:

```html
<section class="[name]">
  <video class="[name]-video" autoplay muted loop playsinline>
    <source src="file.webm" type="video/webm">
    <source src="file.mp4" type="video/mp4">
  </video>
  <div class="[name]-overlay"></div>  <!-- semi-transparent colour tint -->
  <!-- content at z-index 3 -->
</section>
```

- Video: `z-index: 1`
- Overlay: `z-index: 2` (yellow at 82% opacity for Hero/Contact; dark at 55% for About)
- Content: `z-index: 3`

---

## 4. Page Sections

Sections appear in this order in the HTML:

| # | Element / Class | Anchor ID | Background | Layout |
|---|----------------|-----------|------------|--------|
| 1 | `<nav>` | — | `--indigo` (fixed, z-index 200) | Flexbox, space-between |
| 2 | `<section class="hero">` | `#home` | `--yellow` + `bg_web` video | Flex column, content at bottom |
| 3 | `<section class="about">` | `#about` | Black + `bg_noise` video | CSS Grid 1.1fr / 0.9fr |
| 4 | `<section class="areas">` | `#work` | `--cream` | CSS Grid 3-col cards |
| 5 | `<section class="ai-projects">` | `#ai-projects` | `--indigo` | Flex column list |
| 6 | `<section class="contact">` | `#contact` | `--yellow` + `bg_web` video | CSS Grid 1fr / 1fr |
| 7 | `<footer>` | — | `--indigo` | Flexbox, space-between |

---

## 5. Content Inventory

### Nav Links
- About → `#about`
- Work → `#work`
- AI Projects → `#ai-projects`
- Contact → `#contact`

### Hero
- **Name**: Shape Seeds
- **Tagline**: "Product designer bridging AI workflows, 3D environments, and interactive experiences."
- **CTA buttons**: "Get in touch" (`mailto:whupert@gmail.com`) + "Download CV" (`Wojciech_Hupert_CV_2026.pdf`)
- **Skill tags** (11, staggered animation 600–1060ms delays):
  Product Design, AI Workflows, 3D & Unreal, Game Design, VFX & Motion, Podcast, Spatial Design, Interaction Design, Design Systems, Creative Direction, Brand Strategy

### About
- **Stats**: 20+ Years Experience · 3 Industries · 40+ Projects
- Photo: `WojciechHupert2026.png`

### Areas of Expertise (6 cards)

| # | Title | Color Class | Description |
|---|-------|-------------|-------------|
| 1 | Product Design & UX | `c-yellow` | 20+ years of digital product design |
| 2 | 3D & Unreal Engine | `c-teal` | Realtime environments and virtual production |
| 3 | Game Design | `c-coral` | Narrative mechanics and gameplay systems |
| 4 | VFX & Motion | `c-violet` | After Effects, DaVinci Resolve, compositing |
| 5 | Podcast & Audio | `c-lime` | End-to-end podcast production |
| 6 | Video Production | `c-indigo` | Broadcast-quality video and editing |

### AI Projects (4 items)

| # | Name | Description | Badge |
|---|------|-------------|-------|
| 01 | Lelit Distrikt | AI product strategy & design | AI Strategy |
| 02 | Auggy Chat | AI-first UX design | AI UX |
| 03 | Podcast Studio App | AI workflow design | AI Workflow |
| 04 | Audio Meta | AI metadata tooling | AI Tooling |

All project items currently have `href="#"` — not yet linked to case study pages.

### Contact
- **Email**: `whupert@gmail.com` (appears in 3 places: hero CTA, contact link, JSON-LD)
- **Location**: Berlin, Germany
- **LinkedIn**: `https://www.linkedin.com/in/wojciechhupert/`

---

## 6. Animations & Interactivity

All animations are **pure CSS `@keyframes`** — there are no JavaScript animation libraries.

| Animation Name | Trigger | Duration | Effect |
|----------------|---------|----------|--------|
| `tagIn` | Page load (each tag) | 0.45s | Hero tags fade in + slide up, staggered via `--tag-delay` CSS var |
| `scrollLine` | Page load | 1.8s infinite | Scroll hint vertical line grows downward |
| `subtleGlitch` | Section load | 2.5s, runs once | `.playful` italic text resolves from shadow blur (dark-bg variant) |
| `subtleGlitchLight` | Section load | 2.5s, runs once | Same effect for light-text-on-dark sections (About, AI Projects) |
| Nav underline | Hover / `.active` | 0.3s | `::after` pseudo-element width expands 0 → 100% |
| Area cards | Hover | 0.22s | `translateY(-5px)` lift with spring easing |
| Project items | Hover | 0.25s | `padding-left` increases to 1rem (content slides right) |
| `.btn-primary` | Hover | 0.15s | `translateY(-2px)` lift |
| `.btn-outline` | Hover | 0.2s | Background fills to indigo, text turns yellow |

**Note**: There is no `IntersectionObserver` or scroll-triggered JS. Animations that look scroll-triggered actually run once on page load — they're visible when the user scrolls to them only because of natural timing.

---

## 7. Responsive Breakpoints

Two media query breakpoints in the CSS:

### `@media (max-width: 900px)` — Tablet/Mobile
- Nav links hidden (no hamburger menu implemented yet)
- Hero: padding reduced, tags wrap
- About: switches from 2-column grid to single column
- Areas: 3-col grid → single column
- Contact: 2-col grid → single column

### `@media (max-width: 600px)` — Small Mobile
- Further reduction of font sizes, padding, and spacing
- Hero name font size floor kicks in from `clamp()`

---

## 8. SEO & Structured Data

### Meta Tags
- **Canonical**: `https://wojciechhupert.github.io/`
- **Description**: "Shape Seeds — Product Designer in Berlin with 20+ years of experience. Specialising in AI-driven design workflows, product strategy, 3D, and interactive experiences."
- **Robots**: `index, follow`

### Open Graph / Twitter Card
- **OG Image**: `https://wojciechhupert.github.io/WojciechHupert2026.png`
- **Twitter Card**: `summary_large_image`
- **OG Type**: `website`

### JSON-LD (Schema.org `Person`)
Located at the bottom of `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shape Seeds",
  "jobTitle": "Product Designer",
  "url": "https://wojciechhupert.github.io/",
  "email": "whupert@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Berlin",
    "addressCountry": "DE"
  },
  "sameAs": ["https://www.linkedin.com/in/wojciechhupert/"]
}
```

---

## 9. Common Change Recipes

### Update email address
Search for `whupert@gmail.com` — it appears in **3 places**:
1. Hero CTA button `href="mailto:..."`
2. Contact section link `href="mailto:..."`
3. JSON-LD `"email"` field

### Add a new AI project
Copy an existing `.project-item` `<a>` block inside `#ai-projects > .projects-list`. Increment the `.project-number`, update `.project-name`, `.project-desc`, and `.project-badge` text. Update `href` when a case study URL exists.

### Add a new area card
Copy an `.area-card` block inside `.areas-grid`. Assign one of the existing color modifier classes (`c-yellow`, `c-teal`, `c-coral`, `c-violet`, `c-lime`, `c-indigo`) to both the `<a>` and the `.area-dot`. Update `.area-title` and `.area-desc`. If adding a 7th color, add a new CSS variable in `:root` and new `.c-[name]` rules following the existing pattern.

### Swap the hero/contact video
Replace `bg_web.webm` and `bg_web.mp4` with new files of the **same names**. Both the Hero and Contact sections share this video. If using different filenames, update the two `<source>` tags in each of the two `<video class="hero-video">` and `<video class="contact-video">` elements.

### Swap the about video
Replace `bg_noise.webm` and `bg_noise.mp4`. Only used in the About section `<video class="about-video">`.

### Update the portrait photo
Replace `WojciechHupert2026.png`. If using a different filename, update:
1. `<img>` src in the `.about-photo` div
2. `og:image` meta tag content URL
3. `twitter:image` meta tag content URL

### Add a mobile hamburger menu
At `<900px`, `.nav-links` is hidden. To implement:
1. Add a `<button class="nav-toggle">` in the `<nav>` HTML
2. Add CSS to show it at `<900px` and toggle `.nav-links` visibility
3. Add ~10 lines of JS to toggle an `.open` class on click

### Link an AI project to a case study
Find the matching `.project-item` `<a>` tag and replace `href="#"` with the case study URL.

---

## 10. Deployment

1. Edit `index.html` (and/or replace assets)
2. `git add` the changed files
3. `git commit -m "..."`
4. `git push origin main`

GitHub Pages picks up the `main` branch automatically. Live at `https://wojciechhupert.github.io/` within ~1 minute.

**No build step. No npm. No configuration.**

---

## 11. Verification

To check any change locally: open `index.html` directly in a browser via `file://` — no local server needed.

Checklist after edits:
- [ ] Page renders correctly at full width
- [ ] Page renders correctly at 900px (DevTools responsive mode)
- [ ] Page renders correctly at 375px (mobile)
- [ ] Videos autoplay (muted) in all three sections
- [ ] Hero CTA buttons link correctly
- [ ] CV download works
- [ ] No broken image paths
