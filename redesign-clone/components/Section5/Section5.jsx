"use client";

import React from "react";
import UnderlineLink from "@/components/common/UnderlineLink";

const specialtiesColumn1 = [
  "Generalized Anxiety & Chronic Worry",
  "Panic Attacks & Bodily Tension",
  "Single-Incident & Complex Trauma",
  "EMDR Trauma Processing",
  "Executive & Creative Burnout",
  "Perfectionism & High Internal Pressure",
];

const specialtiesColumn2 = [
  "Sleep Difficulties & Insomnia",
  "Imposter Phenomenon & Self-Doubt",
  "Mind-Body Stress Regulation",
  "Life & Career Transitions",
  "Mindfulness-Based Stabilization",
  "Relational & Family Patterning",
];

/**
 * Section 5: Areas of Expertise.
 * Balanced 2-column editorial list with equal vertical spacing,
 * exact horizontal alignment, and animated interactive underline links.
 */
export default function Section5({ className = "" }) {
  return (
    <section
      id="expertise"
      aria-label="Areas of Expertise"
      className={`relative w-full bg-[#FBF9F6] overflow-hidden ${className}`}
    >
      <div className="w-full relative z-10 px-6 py-12 md:px-0 md:py-[calc(80vmax/10)]">
        <div className="w-full">
          <div className="fluid-grid-sec5 w-full">
            
            {/* Title: Comprehensive Psychological Care Rooted in Science & Warmth */}
            <div className="sec5-title-block">
              <div className="h-full flex flex-col justify-start">
                <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-brand-sage font-medium mb-3 block">
                  SUPPORTING ADULTS ACROSS SANTA MONICA &amp; THROUGHOUT CALIFORNIA
                </span>
                <h3 className="font-heading font-light text-[26px] sm:text-[32px] leading-[1.28] tracking-[-0.01em] text-brand-heading m-0">
                  Comprehensive Psychological Care Rooted in{" "}
                  <span
                    style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                    className="font-normal text-[#C37F66] inline-block ml-1 text-[1.25em] sm:text-[1.38em] leading-none transform translate-y-[2px] sm:translate-y-[4px]"
                  >
                    Science &amp; Warmth
                  </span>
                </h3>
              </div>
            </div>

            {/* Specialties 2-Column Balanced Grid */}
            <div className="sec5-content-block w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 w-full">
                
                {/* Column 1 */}
                <div className="flex flex-col w-full">
                  {specialtiesColumn1.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 md:py-[18px] border-b border-[#E8E2DC] flex items-center min-h-[46px] md:min-h-[58px]"
                    >
                      <UnderlineLink
                        href="#specialties"
                        className="font-sans text-[12px] sm:text-[13.5px] md:text-[14.5px] leading-[1.4] font-normal tracking-[0.14em] text-brand-heading uppercase transition-colors duration-200 hover:text-brand-accent block w-full"
                      >
                        {item}
                      </UnderlineLink>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col w-full">
                  {specialtiesColumn2.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 md:py-[18px] border-b border-[#E8E2DC] flex items-center min-h-[46px] md:min-h-[58px]"
                    >
                      <UnderlineLink
                        href="#specialties"
                        className="font-sans text-[12px] sm:text-[13.5px] md:text-[14.5px] leading-[1.4] font-normal tracking-[0.14em] text-brand-heading uppercase transition-colors duration-200 hover:text-brand-accent block w-full"
                      >
                        {item}
                      </UnderlineLink>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
