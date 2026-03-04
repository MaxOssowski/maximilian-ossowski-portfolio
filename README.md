# Maximilian Ossowski Portfolio (V1)

High-performance personal portfolio website built with Astro and semantic HTML/CSS.

## Purpose

This site presents Maximilian Ossowski as an AI software builder and automation engineer with a strong engineering mindset, systems thinking, and practical software delivery experience.

## Stack

- Astro (static site generation)
- Semantic HTML
- Modular CSS (`global.css` + `components.css`)
- No client-side JavaScript required for v1

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```text
public/
  images/
src/
  components/
    Hero.astro
    Intro.astro
    Projects.astro
    Skills.astro
    About.astro
    Contact.astro
  data/
    projects.ts
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
    components.css
```

## Updating Project Cards

Edit `src/data/projects.ts`.

Each project uses this type:

- `title: string`
- `description: string`
- `technologies: string[]`
- `githubUrl: string`

The Projects section renders cards directly from this data source.

## Quality Goals

- Minimal JavaScript and static output for performance
- Semantic HTML and clear heading hierarchy
- Responsive layout for mobile/tablet/desktop
- Clean, maintainable structure for future expansion
