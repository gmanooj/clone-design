"use client";

import React from "react";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

/**
 * Section 2: Narrative Philosophy & Hope.
 * Side-by-side editorial layout presenting the practice's empathetic philosophy.
 */
export default function Section2({ className = "" }) {
  return (
    <section
      id="about"
      aria-label="Philosophy & Approach"
      className={`relative w-full bg-[#FAF4EE] overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-12 md:px-0 md:py-[calc(70vmax/10)]">
        <div className="w-full">
          <div className="fluid-grid-sec2 w-full">
            
            {/* Headline Block (Eyebrow + H2) */}
            <div className="sec2-headline-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <p className="font-body text-[11px] sm:text-[14px] font-semibold leading-[1.8] tracking-[0.14em] uppercase text-brand-accent mb-3">
                  A GROUNDED, COLLABORATIVE APPROACH
                </p>
                <h2 className="font-heading font-light text-[26px] sm:text-[34px] md:text-[47.8px] leading-[1.25] tracking-[-0.01em] text-brand-heading m-0 mb-5">
                  Functional on the outside.<br className="hidden md:inline" /> Internally,{" "}
                  <span
                    style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                    className="font-normal text-[#C37F66] inline-block ml-1.5 text-[1.25em] md:text-[1.38em] leading-none transform translate-y-[2px] md:translate-y-[4px]"
                  >
                    you<span className="inline-block -mx-[0.14em]">&apos;</span>re exhausted.
                  </span>
                </h2>
              </div>
            </div>

            {/* Left Narrative Column */}
            <div className="sec2-text-left-block">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-brand-heading m-0 mb-6">
                  Many of the clients I support are high-functioning professionals, creatives, and thoughtful leaders who appear entirely composed and capable on the outside. Yet beneath the surface, you may be navigating relentless overthinking, silent perfectionism, chronic physical tension, and an exhausting feeling that you must constantly brace for what comes next.
                </p>
              </div>
            </div>

            {/* Santa Monica Suite Image (Aspect 4/3 full width on mobile) */}
            <div className="sec2-media-block w-full h-full">
              <ImageReveal className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-0 overflow-hidden mb-6 md:mb-0">
                <Image
                  src="/images/office/santa-monica-office-sanctuary.jpg"
                  alt="Quiet and grounding Santa Monica therapy workspace with natural coastal light"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Right Narrative Column */}
            <div className="sec2-text-right-block">
              <div className="flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-brand-heading mb-6">
                  Enduring healing requires more than intellectualizing your stress—it requires helping your somatic nervous system experience genuine, felt safety. In our tranquil Santa Monica sanctuary or via confidential California telehealth, we integrate evidence-based CBT, EMDR trauma processing, and somatic regulation so you can step out of chronic survival mode and restore lasting peace.
                </p>
                <div className="mt-1 md:mt-2">
                  <UnderlineLink
                    href="#office"
                    className="text-[#C37F66]"
                  >
                    READ ABOUT DR. REYNOLDS
                  </UnderlineLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
