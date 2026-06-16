# Sujata Khedekar — Portfolio (Next.js)

The portfolio rebuilt as a Next.js 14 App Router project, split into section-wise
components with Tailwind CSS and all the original interactions ported to React.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## Structure

```
app/
  layout.jsx        Google Fonts (Kanit + Instrument Serif), metadata, <body>
  page.jsx          Composes every section in order
  globals.css       Tailwind directives + all custom component styles
components/
  SectionRail.jsx   Right-side scroll-spy rail
  Hero.jsx          Hero banner (headline, portrait, CTA)
  Marquee.jsx       Draggable / auto-scrolling screenshot marquee (self-contained engine)
  Stats.jsx         "By the numbers" count-up band
  Stack.jsx         Services / tech-stack tilt cards
  About.jsx         Bio with inline word-shots + scroll char-reveal paragraph
  Projects.jsx      Sticky-stack project cards
  Archive.jsx       Project directory rows + hover preview
  Footer.jsx        Contact / footer
  Shot.jsx          Screenshot loader (shimmer + graceful fallback)
  Interactions.jsx  Client-only effects: cursor, magnetic buttons, 3D tilt,
                    spotlight, parallax, scroll progress, count-up, sticky stack,
                    char-reveal, fade-ins, local time, copy email, smooth scroll
lib/
  data.js           All section content (projects, stack, archive, marquee, etc.)
  shot.js           Screenshot URL + host helpers
public/
  assets/           Portrait + pre-rendered site screenshots (/assets/shots/*.webp)
```

## Notes

- Tailwind theme (custom colors + font families) lives in `tailwind.config.js`.
- Project accent color utilities are dynamic, so `text-green/red/orange/coral`
  are safelisted in the Tailwind config.
- Section content is data-driven — edit `lib/data.js` to update projects, pills,
  links, or copy without touching markup.
