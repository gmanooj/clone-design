"use client";

import React from "react";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

/**
 * Section 7: Narrative Transition ("Honoring Where You've Been").
 * Visual storytelling linking therapeutic history to future growth.
 */
export default function Section7({ className = "" }) {
  return (
    <section
      id="office"
      aria-label="The Santa Monica Office"
      className={`relative w-full bg-[#FBF9F6] overflow-hidden min-h-[66vh] flex items-center ${className}`}
    >
      <div className="w-full px-6 py-12 md:px-0 md:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec7 w-full">

            {/* Left Media Asset (Aspect 4/3 on mobile) */}
            <div className="sec7-media-block w-full h-full">
              <ImageReveal className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-0 overflow-hidden mb-6 md:mb-0">
                <Image
                  src="/images/office/santa-monica-office-sanctuary.jpg"
                  alt="A calm, sunlit Santa Monica therapy suite with natural California light, olive tree, and organic textures"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Right Content Block */}
            <div className="sec7-headline-block">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[12px] sm:text-[13px] font-medium tracking-[0.14em] uppercase text-brand-sage mb-3">
                  IN-PERSON &amp; CALIFORNIA TELEHEALTH
                </p>
                <h2 className="font-heading font-light text-[28px] sm:text-[36px] md:text-[42px] leading-[1.25] tracking-[-0.01em] text-brand-heading mb-4">
                  A calm, uncluttered sanctuary in Santa Monica.
                </h2>
                <p className="font-body font-light text-[14px] sm:text-[15.5px] leading-[1.75] text-brand-body mb-6">
                  Located at 123th Street 45 W, our Santa Monica therapy suite is an in-person sanctuary intentionally curated with natural coastal light, warm organic textures, and complete acoustic privacy. From the moment you arrive, the environment is crafted to help an overworked nervous system settle and decompress. For clients residing across the state, our secure, HIPAA-compliant California telehealth practice provides the identical depth of grounded, somatic, and trauma-informed care.
                </p>
                <div>
                  <UnderlineLink
                    href="#booking"
                    className="text-[#C37F66]"
                  >
                    EXPLORE OFFICE DETAILS
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
