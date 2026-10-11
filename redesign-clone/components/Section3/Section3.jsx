"use client";

import React from "react";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

/**
 * Section 3: Demographic Specializations ("Who We Help").
 * Editorial grid presenting specialized focal areas without cards or borders.
 */
export default function Section3({ className = "" }) {
  return (
    <section
      id="who-we-help"
      aria-label="Who We Help"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-12 md:px-0 md:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec3 w-full">
            
            {/* Section Header */}
            <div className="sec3-title-block">
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-heading font-light text-[28px] sm:text-[38px] md:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-brand-heading m-0 mb-8 text-center sm:text-left">
                  Who we help
                </h2>
              </div>
            </div>

            {/* Column 1: Image (Aspect 4/3 on mobile) */}
            <div className="sec3-adults-media w-full h-full">
              <ImageReveal delay={0} className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-0 overflow-hidden mb-4 md:mb-0">
                <Image
                  src="/images/sections/anxiety-overthinking.webp"
                  alt="Anxiety, Panic & Overthinking therapy in Santa Monica"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover block"
                  style={{ objectPosition: "50% 30%" }}
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Column 1: Direct Content (No Card Container) */}
            <div className="sec3-adults-text w-full h-full mb-10 md:mb-0">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] lg:text-[27px] font-medium leading-[1.36] tracking-[-0.01em] text-brand-heading mb-2.5">
                    Anxiety, Panic &amp; Overthinking
                  </h3>
                  <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16.7px] leading-[1.7] text-[#2B2D2F]/85 m-0 mb-4">
                    Break the cycle of chronic worry, catastrophic thinking, and physical tension. Using Cognitive Behavioral Therapy (CBT) and body-oriented regulation, we help you quiet the mental chatter and restore daily calm.
                  </p>
                </div>
                <div className="pt-2 md:pt-4 mt-auto">
                  <UnderlineLink
                    href="#specialties"
                    className="text-[#C37F66]"
                  >
                    LEARN ABOUT ANXIETY CARE
                  </UnderlineLink>
                </div>
              </div>
            </div>

            {/* Column 2: Image (Aspect 4/3 on mobile) */}
            <div className="sec3-couples-media w-full h-full">
              <ImageReveal delay={120} className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-0 overflow-hidden mb-4 md:mb-0">
                <Image
                  src="/images/sections/trauma-emdr-stabilization.webp"
                  alt="Trauma Resolution & EMDR therapy in Santa Monica"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Column 2: Direct Content (No Card Container) */}
            <div className="sec3-couples-text w-full h-full mb-10 md:mb-0">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] lg:text-[27px] font-medium leading-[1.36] tracking-[-0.01em] text-brand-heading mb-2.5">
                    Trauma Resolution &amp; EMDR
                  </h3>
                  <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16.7px] leading-[1.7] text-[#2B2D2F]/85 m-0 mb-4">
                    Whether navigating single-incident trauma or longstanding patterns rooted in childhood and relationships, our EMDR and nervous-system-informed pacing prioritize safety, stabilization, and lasting emotional processing.
                  </p>
                </div>
                <div className="pt-2 md:pt-4 mt-auto">
                  <UnderlineLink
                    href="#specialties"
                    className="text-[#C37F66]"
                  >
                    EXPLORE EMDR THERAPY
                  </UnderlineLink>
                </div>
              </div>
            </div>

            {/* Column 3: Image (Aspect 4/3 on mobile) */}
            <div className="sec3-children-media w-full h-full">
              <ImageReveal delay={240} className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-0 overflow-hidden mb-4 md:mb-0">
                <Image
                  src="/images/sections/burnout-sustainable-living.webp"
                  alt="Burnout & High-Pressure Living therapy in Santa Monica"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Column 3: Direct Content (No Card Container) */}
            <div className="sec3-children-text w-full h-full">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] lg:text-[27px] font-medium leading-[1.36] tracking-[-0.01em] text-brand-heading mb-2.5">
                    Burnout &amp; High-Pressure Living
                  </h3>
                  <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16.7px] leading-[1.7] text-[#2B2D2F]/85 m-0 mb-4">
                    Tailored for entrepreneurs, creatives, and high-performing professionals dealing with perfectionism and emotional exhaustion. Slow down, dismantle unsustainable internal pressure, and build a resilient way of living.
                  </p>
                </div>
                <div className="pt-2 md:pt-4 mt-auto">
                  <UnderlineLink
                    href="#specialties"
                    className="text-[#C37F66]"
                  >
                    RESTORE BALANCE
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
