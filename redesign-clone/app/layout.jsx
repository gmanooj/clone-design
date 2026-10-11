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

export const metadata = {
  metadataBase: new URL("https://drmayareynolds.com"),
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & EMDR Therapy Santa Monica, CA",
  description: "Licensed Clinical Psychologist in Santa Monica, CA. Grounded, evidence-based therapy integrating CBT, EMDR, and somatic regulation for high-functioning professionals, burnout, and trauma in Santa Monica and throughout California.",
  keywords: [
    "Psychologist Santa Monica",
    "Anxiety therapy Santa Monica",
    "EMDR therapy Santa Monica",
    "Trauma therapy California",
    "Burnout psychologist Santa Monica",
    "Therapy for high-functioning professionals",
    "Somatic nervous system therapy Santa Monica",
    "CBT therapy Santa Monica CA",
    "Licensed Clinical Psychologist California",
    "Telehealth therapy California",
    "Santa Monica psychologist 90401"
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drmayareynolds.com",
    title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & EMDR Therapy Santa Monica, CA",
    description: "Evidence-based psychological care integrating CBT, EMDR, and somatic nervous system regulation for high-functioning professionals in Santa Monica and across California.",
    siteName: "Dr. Maya Reynolds Psychological Services",
    images: [
      {
        url: "/images/profile/dr-maya-reynolds.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & EMDR Therapy Santa Monica, CA",
    description: "Evidence-based therapy integrating CBT, EMDR, and somatic regulation for thoughtful, high-achieving adults in Santa Monica and across California.",
    images: ["/images/profile/dr-maya-reynolds.webp"],
  },
  alternates: {
    canonical: "https://drmayareynolds.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Psychologist", "MedicalBusiness"],
  "name": "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
  "image": "https://drmayareynolds.com/images/profile/dr-maya-reynolds.webp",
  "url": "https://drmayareynolds.com",
  "telephone": "+1-310-555-0194",
  "email": "hello@drmayareynolds.com",
  "description": "Licensed Clinical Psychologist in Santa Monica, CA. Providing evidence-based therapy integrating CBT, EMDR, and somatic nervous system regulation for high-functioning professionals and adults navigating anxiety, trauma, and burnout in-person and statewide via telehealth.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123th Street 45 W",
    "addressLocality": "Santa Monica",
    "addressRegion": "CA",
    "postalCode": "90401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0195,
    "longitude": -118.4912
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Santa Monica"
    },
    {
      "@type": "AdministrativeArea",
      "name": "California"
    }
  ],
  "medicalSpecialty": ["Psychology", "ClinicalPsychology", "Psychotherapy"],
  "availableService": [
    { "@type": "MedicalTherapy", "name": "Cognitive Behavioral Therapy (CBT)" },
    { "@type": "MedicalTherapy", "name": "EMDR Therapy for Trauma" },
    { "@type": "MedicalTherapy", "name": "Somatic & Nervous System Regulation" },
    { "@type": "MedicalTherapy", "name": "Burnout & High-Achiever Stress Counseling" },
    { "@type": "MedicalTherapy", "name": "Telehealth Therapy California" }
  ]
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
      <body className="bg-white text-[#2B2D2F]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
