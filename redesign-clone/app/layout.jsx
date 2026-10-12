import { Cormorant_Infant, Mulish } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./fluid-engine.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/common/SmoothScroll";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const weddingDay = localFont({
  src: "../public/WeddingdayPersonalUseRegular-1Gvo0.ttf",
  variable: "--font-wedding-day",
  display: "swap",
});

import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD",
  description: "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD",
    description: "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
    type: "website",
    url: SITE_URL,
    siteName: "Dr. Maya Reynolds, PsyD",
    images: [
      {
        url: "/og-portrait-only.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD — Therapy in Santa Monica, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds, PsyD",
    description: "Licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR and burnout therapy for adults. In-person sessions and secure California telehealth.",
    images: [
      {
        url: "/og-portrait-only.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD — Therapy in Santa Monica, CA",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Maya Reynolds, PsyD",
  "url": SITE_URL,
  "image": `${SITE_URL}/images/profile/dr-maya-reynolds-portrait.jpg`,
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${weddingDay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-ink">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
