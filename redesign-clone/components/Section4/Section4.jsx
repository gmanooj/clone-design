"use client";

import React from "react";
import Image from "next/image";

/**
 * Section 4: Full-bleed Atmospheric Quote Banner.
 * Emphasizes validation and psychological safety with responsive typography.
 */
export default function Section4({ className = "" }) {
  return (
    <section
      id="quote"
      aria-label="Quote Banner"
      className={`relative w-full overflow-hidden min-h-[66vh] flex items-center bg-[#2B2D2F] ${className}`}
    >
      {/* Background Image Container with atmospheric golden-hour coastal mist */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/sections/quote-somatic-safety.jpg"
          alt="Serene Pacific coastal shoreline at golden hour with quiet waves and grounding mist"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center block"
          style={{ objectPosition: "50% 60%" }}
        />
        {/* Soft pale peach aesthetic tone */}
        <div className="media-overlay" />
        {/* Subtle cinematic dark scrim for white typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1A18]/45 via-[#1C1A18]/40 to-[#1C1A18]/55" />
      </div>

      <div className="relative z-10 w-full px-6 py-12 md:px-0 md:py-[95px]">
        <div className="w-full">
          <div className="fluid-grid-sec4 w-full">
            
            {/* Centered Quotation Text */}
            <div className="sec4-quote-block">
              <div className="h-full flex flex-col justify-end">
                <h2 className="font-heading font-light text-[30px] sm:text-[38px] md:text-[44px] leading-[1.35] tracking-[-0.01em] text-white m-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
                  &ldquo;Therapy is not just about symptom relief—it is a space to slow down, reconnect with your physiology, and build an enduring sense of safety within yourself.&rdquo;
                </h2>
                <p className="font-sans text-[12px] sm:text-[13px] tracking-[0.16em] uppercase text-white/90 font-normal mt-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                  — DR. MAYA REYNOLDS, PSYD • SANTA MONICA, CALIFORNIA
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
