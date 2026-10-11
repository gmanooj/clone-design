"use client";

import React from "react";
import Image from "next/image";
import UnderlineLink from "@/components/common/UnderlineLink";

/**
 * Above-the-fold Hero section introducing the core brand promise,
 * featuring fluid editorial grid, aesthetic image overlay, and pure typography.
 */
export default function Hero({ className = "" }) {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className={`relative w-full bg-[#FAF4EE] pt-[85px] md:pt-[115.3px] overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-12 md:px-0 md:py-0">
        <div className="fluid-grid-hero w-full md:min-h-[688px]">
          
          {/* Primary Left Media Asset (Dr. Maya Reynolds Portrait - Sharp Corners + Aesthetic Overlay) */}
          <div className="hero-media-left w-full h-full">
            <div className="hero-image-landing-1 relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-0 overflow-hidden shadow-xs">
              <Image
                src="/images/profile/dr-maya-reynolds-portrait.jpg"
                alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, California"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover block"
                style={{ objectPosition: "center 15%" }}
                priority
              />
              <div className="media-overlay" />
            </div>
          </div>

          {/* Tagline / Subtitle */}
          <div className="hero-tagline-block">
            <p className="font-body text-[11px] tracking-[0.16em] uppercase text-[#2B2D2F]/75 mb-3 leading-relaxed mt-[2.5px]">
              <strong>
                <span className="inline-block">LICENSED CLINICAL PSYCHOLOGIST • SANTA MONICA, CALIFORNIA &amp; TELEHEALTH</span>
              </strong>
            </p>
          </div>

          {/* Primary Editorial Headline & Narrative */}
          <div className="hero-headline-block">
            <h1 className="font-heading font-normal md:font-light text-[32px] sm:text-[38px] md:text-[50px] lg:text-[59.9px] leading-[1.18] tracking-[-0.01em] text-[#2B2D2F] mb-5">
              Therapy for thoughtful, high-achieving adults ready to finally{" "}
              <span
                style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                className="font-normal text-[#C37F66] inline-block ml-2 text-[1.45em] md:text-[1.65em] leading-none transform translate-y-[4px] md:translate-y-[6px]"
              >
                exhale.
              </span>
            </h1>
            <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-[#2B2D2F]/85 mb-6">
              Evidence-based anxiety, trauma, and burnout therapy in Santa Monica, California. Grounded, collaborative care designed to help you move out of constant overdrive and reconnect with yourself.
            </p>
          </div>

          {/* Action Row / Underline Link (Single Clean CTA) */}
          <div className="hero-cta-block flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <UnderlineLink href="#approach">
              EXPLORE MY APPROACH
            </UnderlineLink>
          </div>

          {/* Secondary Right Accent Media Asset (Sharp Corners + Aesthetic Overlay) - Hidden on mobile */}
          <div className="hero-media-right hidden md:block w-full h-full">
            <div className="hero-image-landing-2 relative w-full h-full min-h-0 overflow-hidden">
              <Image
                src="/images/office/santa-monica-office-brick.jpg"
                alt="Sunlit Santa Monica therapy office with natural coastal light and exposed brick"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover block"
                style={{ objectPosition: "50% 50%" }}
                priority
              />
              <div className="media-overlay" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
