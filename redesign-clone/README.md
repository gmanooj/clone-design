# Dr. Maya Reynolds, PsyD — Creative Redesign

An editorial, high-performance responsive web application built with **Next.js 16 (App Router)** and **Tailwind CSS v4** for the fictional private practice of **Dr. Maya Reynolds, PsyD**, Licensed Clinical Psychologist based in Santa Monica, California.

This project preserves 100% of the proportional editorial layout, grid coordinates, and responsive architecture from the baseline clone, while fully executing Part 2: brand redesign, color token evolution, clinical copywriting, high-resolution imagery, and SEO metadata.

---

## Brand Identity & Clinical Profile

* **Clinician**: Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist
* **Location**: 123th Street 45 W, Santa Monica, CA 90401 (In-person Santa Monica sanctuary + secure California telehealth)
* **Core Demographics**: High-achieving, thoughtful adults, creatives, entrepreneurs, and professionals who feel functional externally but struggle internally with anxiety, overthinking, bodily tension, or past trauma.
* **Core Modalities**: Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness-Based Practices, and Body-Oriented / Somatic Regulation Techniques.
* **Primary Specialties**: Anxiety & Panic, Single-Incident & Complex Trauma, and Professional Burnout / Perfectionism.
* **Office Aesthetic**: Quiet, private, uncluttered sanctuary with warm linen, natural light, and grounding elements.

---

## Design System Tokens (`app/globals.css`)

The design tokens implement the grounded Santa Monica coastal editorial color palette under Tailwind CSS v4 `@theme`:

```css
@theme {
  --color-brand-bg: #F9F8F5;       /* Warm Linen / Off-White */
  --color-brand-heading: #1C2422;  /* Deep Slate Graphite */
  --color-brand-body: #323A38;     /* Muted Charcoal Body Text */
  --color-brand-surface: #F0ECE1;  /* Soft Warm Sand Card Background */
  --color-brand-accent: #C07053;   /* Coastal Terracotta (Accent / Underlines) */
  --color-brand-teal: #C07053;     /* Mapped to Terracotta for cursive accents */
  --color-brand-sage: #5C7367;     /* Pacific Sage for secondary badges/borders */
  --color-brand-border: #E5E0D5;   /* Soft Hairline Divider Beige */
  --color-brand-dark: #1C2422;     /* Deep Slate */
}
```

---

## Structure & Page Sections

1. **Header**: Dr. Maya Reynolds editorial logo, responsive navigation (Practice, Specialties, Modalities, FAQs), and mobile drawer with nested views.
2. **Hero**: Sunlit Santa Monica therapy sanctuary imagery, clear in-person & telehealth value proposition, and priority asset loading.
3. **Section 2 (Philosophy & Hope)**: Narrative on high functioning vs. internal exhaustion, establishing deep empathy and clinical grounding.
4. **Section 3 (Who We Support)**: Three demographic focus cards tailored to high-achieving professionals, creatives & entrepreneurs, and trauma recovery.
5. **Section 4 (Atmospheric Banner)**: Deep slate quote card validating client experience and psychological safety.
6. **Section 5 (Areas of Expertise)**: Responsive two-column divider list of 12 clinical focus areas.
7. **Section 6 (Our Clinical Approach)**: Detailed exploration of nervous system regulation, CBT, EMDR, and Dr. Reynolds' clinical session imagery.
8. **Section 7 (Honoring Where You've Been)**: Transition banner connecting therapeutic history with future vitality.
9. **Section 8 (Specialties Grid)**: Four deep-dive specialty cards with active learn-more pathways.
10. **Section 9 (Sanctuary Consultation)**: Call-to-action for scheduling a complimentary initial consultation.
11. **Footer & Subfooter**: Practice address, contact details, clinical focus directory, Pacific Sage legal subfooter, and compliance notices.

---

## Getting Started

### Development Server
Run the local development server:
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```
