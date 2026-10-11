"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

/**
 * Section 6: Process & Philosophy ("How We Work").
 * Multi-column editorial layout detailing client-centered care.
 */
export default function Section6({ className = "" }) {
  return (
    <section
      id="approach"
      aria-label="Clinical Methodology"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-12 md:px-0 md:py-0">
        <div className="w-full">
          <div className="fluid-grid-sec6 w-full">

            {/* Eyebrow "OUR METHODOLOGY" */}
            <div className="sec6-eyebrow-block">
              <div className="h-full flex flex-col justify-center md:justify-start">
                <p className="font-sans text-[11px] sm:text-[14px] font-normal tracking-[0.14em] uppercase text-brand-heading m-0 mb-2">
                  OUR METHODOLOGY
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="sec6-headline-block">
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-heading font-light text-[24px] sm:text-[34px] md:text-[47.8px] leading-[1.25] tracking-[-0.01em] text-brand-heading m-0 mb-4">
                  Structured enough to feel supportive. Deep enough to create lasting change.
                </h2>
              </div>
            </div>

            {/* Media Asset (Santa Monica Office Detail - Aspect 4/3 on mobile) */}
            <div className="sec6-media-block w-full h-full">
              <ImageReveal className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-0 overflow-hidden my-6 md:my-0">
                <Image
                  src="/images/office/santa-monica-office-brick.jpg"
                  alt="Santa Monica therapy office suite with quiet coastal atmosphere and exposed brick"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover block"
                  style={{ objectPosition: "center 50%" }}
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Left Narrative Column */}
            <div className="sec6-col1-text">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-brand-heading m-0 mb-3 md:mb-0">
                  I combine evidence-based methods—Cognitive Behavioral Therapy (CBT), EMDR, and mindfulness—with somatic awareness. We examine not just your thought patterns, but the physiological signals your body uses to alert you to stress.
                </p>
              </div>
            </div>

            {/* Second Narrative Column */}
            <div className="sec6-col2-text">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-brand-heading m-0 mb-6 md:mb-0">
                  We pace sessions carefully. Our focus is helping you feel regulated, grounded, and confident in your daily life, not just during our weekly hour together.
                </p>
              </div>
            </div>

            {/* Underline CTA Link */}
            <div className="sec6-cta-block">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <UnderlineLink
                  href="#about"
                  className="text-[#C37F66]"
                >
                  LEARN MORE ABOUT DR. REYNOLDS
                </UnderlineLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
