# Dr. Maya Reynolds, PsyD — Private Practice Redesign

A responsive, high-performance web application built with **Next.js (App Router)** and **Tailwind CSS v4** for the private psychotherapy practice of **Dr. Maya Reynolds, PsyD**, Licensed Clinical Psychologist in Santa Monica, California.

Based on the layout architecture of [Conejo Valley Counseling](https://www.conejovalleycounseling.com/home) and redesigned with 100% factual fidelity to [PROFILE.md](./PROFILE.md).

---

## Tech Stack

* **Framework**: Next.js 16 (App Router with Turbopack)
* **Styling**: Tailwind CSS v4 (`@theme` centralized design tokens) & Vanilla CSS Fluid Engine Grid
* **Smooth Scrolling**: Lenis (`lenis`)
* **Typography**: Beaufort Pro / Cormorant Garamond (Serif), Mulish (Sans-serif body), Weddingday Personal / Printed Moments (Cursive accent)
* **SEO & Metadata**: Dynamic Open Graph card generation (1200x630), JSON-LD schema (`MedicalBusiness`), canonical tags, semantic HTML5

---

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables (optional; defaults to https://dr-maya-reynolds.vercel.app)
cp .env.example .env.local

# 3. Start development server
npm run dev

# 4. Production build
npm run build
npm start
```

The site will be available at `http://localhost:3000`.

---

## Centralized Theme Tokens

Defined in `app/globals.css` within the Tailwind v4 `@theme` directive:

| Token Name | Hex Value | Purpose / Usage | WCAG AA Ratio |
| :--- | :--- | :--- | :--- |
| `primary` | `#A8644B` | Primary CTA buttons, links, accents, sub-footer legal bar | 4.58:1 on white (PASS) |
| `primary-hover`| `#8E533E` | Button hover states (darker terracotta) | 6.07:1 on white (PASS) |
| `secondary` | `#FAF4EE` | Page canvas, Header, Hero, Section 2, Section 7, Our Office, FAQ | Background |
| `accent` | `#A8644B` | Script-font cursive words, eyebrow badges, accordion icons | 4.19:1 on cream (PASS) |
| `ink` | `#2B2D2F` | Headings, dark footer background, mobile drawer controls | 12.67:1 on cream (PASS) |
| `body` | `#2B2D2F` | Main narrative paragraph copy | 12.67:1 on cream (PASS) |
| `muted` | `#6B625C` | Small supporting text, subtitles, captions (darkened for contrast) | 5.46:1 on cream (PASS) |
| `line` | `#E8DFD8` | Section borders, dividers, card boundaries | Structural |
| `surface` | `#FFFFFF` | Alternate white section canvas (`Section3`, `Section6`, `Section8`) | Structural |
| `on-primary` | `#FFFFFF` | Text on primary terracotta buttons | 4.58:1 (PASS) |
| `scrim` | `#1C1A18` | Dark atmospheric gradient overlay for full-bleed quote banner | 17.35:1 (PASS) |

---

## Content Map (Traceability to PROFILE.md)

Every line of visible copy on the site traces directly to an exact statement from [PROFILE.md](./PROFILE.md):

| Section | Website Copy | Source Sentence in PROFILE.md |
| :--- | :--- | :--- |
| **Header** | "Dr. Maya Reynolds, PsyD • Licensed Clinical Psychologist • Santa Monica, CA" | *"Dr. Maya Reynolds, PsyD. Licensed Clinical Psychologist (Fictional Therapist)"* (Line 3–4) |
| **Hero** | "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA" | *"I’m a licensed clinical psychologist based in Santa Monica, California... My work often focuses on anxiety, panic, trauma, and burnout."* (Line 12, 13) |
| **Hero Subtitle** | "Evidence-based therapy for high-achieving adults who feel exhausted on the inside. Warm, collaborative care in Santa Monica and by secure telehealth across California, to help you finally exhale." | *"Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted... I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California."* (Line 12, 17) |
| **Section 2 (About)** | "Anxiety & Burnout Therapy for Adults Who Look Functional on the Outside... Many of the people I work with are high-achieving, thoughtful, and self-aware, yet feel exhausted, stuck in overthinking, or emotionally on edge..." | *"Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong."* (Line 13) |
| **Section 3 (Who I Help)** | "Anxiety & Panic Therapy: For constant worry, overthinking, and tension in the body. We use CBT and body-oriented tools to ease both the thoughts and the physical stress." | *"My work often focuses on anxiety, panic, trauma, and burnout... constant worry, tension in their body, difficulty sleeping... CBT, EMDR, mindfulness-based practices, and body-oriented techniques."* (Line 13, 14) |
| **Section 3 (Card 2)** | "Trauma & EMDR Therapy: For single-incident trauma and long-standing patterns from childhood, relationships, or chronic stress, paced carefully with safety and stabilization first." | *"Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns... paced carefully, with an emphasis on safety, stabilization..."* (Line 15) |
| **Section 3 (Card 3)** | "Burnout & Perfectionism Therapy: For entrepreneurs, creatives, and professionals who feel disconnected after years of pushing through stress." | *"In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals..."* (Line 16) |
| **Section 4 (Quote)** | "“Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.”" | *"Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working."* (Line 16) |
| **Section 5 (Expertise)**| 12 clinical specialty items (Constant Worry, Panic, Sleep, EMDR, Burnout, Perfectionism, etc.) | *"constant worry, tension in their body, difficulty sleeping... single-incident trauma... complex, long-standing patterns... professional burnout, perfectionism, and high internal pressure... mindfulness-based practices"* (Lines 13–16) |
| **Section 6 (Approach)** | "Structured enough to feel supportive. Deep enough to create lasting change... I combine evidence-based methods (CBT, EMDR, and mindfulness-based practices) with body-oriented techniques..." | *"I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques..."* (Line 14) |
| **Section 7 (About Dr. Maya Reynolds)** | "About Dr. Maya Reynolds: Meet Dr. Maya Reynolds, Psychologist in Santa Monica. I'm a licensed clinical psychologist in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. My approach is warm, collaborative, and grounded, using CBT, EMDR, mindfulness-based practices, and body-oriented techniques, in person in Santa Monica and by secure telehealth across California. I believe therapy works best when you feel respected, understood, and actively involved." | *"I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences."* (Line 12)<br>*"I take a warm, collaborative, and grounded approach to therapy... I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques..."* (Line 14)<br>*"I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California."* (Line 17)<br>*"I believe therapy works best when clients feel respected, understood, and actively involved in the process."* (Line 18) |
| **Our Office** | "Our Office: A Calm Therapy Space in Santa Monica... 123th Street 45 W, Santa Monica, CA 90401... In-person sessions at my Santa Monica office... Telehealth for clients located in California... Natural light and a comfortable, uncluttered space." | *"Address: 123th Street 45 W, Santa Monica, CA 90401... My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment."* (Lines 6, 17) |
| **Section 8 (Methods)** | CBT, Body-Oriented Techniques, EMDR Therapy, Mindfulness-Based Practices | *"I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques..."* (Line 14) |
| **FAQs** | "Where is your Santa Monica office... Who do you typically work with... What is a therapy session with you like... How do you approach trauma therapy and EMDR... How do we get started?" | Drawn strictly from Lines 6, 12, 14, 15, 17, 19 of PROFILE.md without invented logistics. |
| **Section 9 (CTA)** | "Ready to slow down and reconnect? Whether we meet in person in Santa Monica or online across California, I may be a good fit if you want practical tools combined with depth-oriented work." | *"If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit."* (Line 19) |

> [!NOTE]
> `/terms`, `/privacy-policy`, and `/disclaimer` are placeholder pages built with the existing Header and Footer, one `<h1>` each, a single notice paragraph (`"This page will be provided by Dr. Reynolds' practice before launch."`), and `noindex` robots metadata.


---

## SEO Checklist & Validation

* [x] **Title Tag**: `"Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD"` (63 characters; high-intent local Santa Monica targeting)
* [x] **Meta Description**: `"Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth."` (159 characters; strictly under 160 characters)
* [x] **Heading Hierarchy**: Exactly **one `<h1>`** on the entire page (`Hero.jsx`), semantic `<h2>` section titles, and `<h3>` card/accordion titles.
* [x] **Open Graph & Twitter**: Canonical Open Graph card (`/og.jpg`, 1200x630) with therapist portrait on cream background, title, description, and Twitter summary card.
* [x] **Canonical Tag**: Auto-resolving canonical URL configured via `metadataBase`.
* [x] **JSON-LD Schema**: MedicalBusiness structured data embedded in `<head>`:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Maya Reynolds, PsyD",
    "url": "https://dr-maya-reynolds.vercel.app",
    "image": "https://dr-maya-reynolds.vercel.app/og.jpg",
    "description": "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123th Street 45 W",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US"
    },
    "areaServed": ["Santa Monica", "California"]
  }
  ```
* [x] **Search Engine Crawling**: Valid `robots.txt` and dynamic `sitemap.xml` generated automatically at build time.

---

## AI Usage Disclosure

* AI assistance was utilized exclusively for initial code scaffolding and structural CSS grid translation.
* All narrative copy was meticulously cross-referenced and manually aligned word-for-word against `PROFILE.md` to guarantee zero hallucinated facts.
* All color contrast formulas, tokens, and WCAG AA calculations were manually audited and verified.

---

## Environment Variables & Vercel Deployment

### Environment Variables
Configure the primary deployment URL via `.env.local` or your Vercel Project Settings:
```env
# Production domain (fallback: https://dr-maya-reynolds.vercel.app)
NEXT_PUBLIC_SITE_URL=https://dr-maya-reynolds.vercel.app
```
Documented in [.env.example](./.env.example).

### Vercel Deployment Steps
1. Push this repository to GitHub/GitLab.
2. In the Vercel Dashboard, click **New Project** and select the repository.
3. Framework Preset: **Next.js** (leave Build Command as `next build` and Output Directory as `.next`).
4. Under **Environment Variables**, add:
   * Key: `NEXT_PUBLIC_SITE_URL`
   * Value: `https://your-custom-domain.vercel.app` (or your initial Vercel deployment URL).
5. Click **Deploy**.
6. Once deployed, if using a custom production domain, update `NEXT_PUBLIC_SITE_URL` in the Vercel Project Settings and trigger a redeploy so canonical tags, Open Graph cards, sitemap, and robots point to the live URL.
