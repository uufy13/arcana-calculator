# Arcana Calculator

A lightweight Tarot Birth Card / Major Arcana calculator built with Astro, TypeScript, and Tailwind CSS.

## Project

- GitHub: [https://github.com/uufy13/arcana-calculator](https://github.com/uufy13/arcana-calculator)
- Production: [https://arcana.uufy.top](https://arcana.uufy.top)

## Features

- Tarot Birth Card calculator
- Client-side date calculation
- 22 Major Arcana pages
- How It Works page
- Privacy page
- SEO metadata
- Canonical URLs
- Open Graph metadata
- JSON-LD
- Sitemap
- `robots.txt`
- Static output for Cloudflare Pages

## Calculation Method

This project uses the following simplified birth-card calculation method:

1. Add the birth month.
2. Add the birth day.
3. Add the full four-digit birth year.
4. If the result is greater than 22, add its digits together.
5. Repeat until the result is within the 1–22 range.
6. A result of 22 is mapped to The Fool and displayed at `/arcana/0/`.

Example:

```text
March 21, 1985

3 + 21 + 1985 = 2009

2 + 0 + 0 + 9 = 11

Result: Justice
```

Different Tarot traditions may use different calculation methods and numbering conventions. This website uses one clearly documented method for consistency.

## Privacy

- No account is required.
- No email is required.
- The birth date is used only for calculation.
- Calculation is performed locally in the browser.
- The birth date is not sent to a server for calculation.
- No database is used to store birth dates.

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Create a production build:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

## Cloudflare Pages

Use the following settings for a static Cloudflare Pages deployment:

- Build command: `pnpm run build`
- Build output directory: `dist`
- Node.js package manager: pnpm

The project is statically generated and does not require a backend, database, account system, or AI API.
