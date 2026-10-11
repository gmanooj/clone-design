"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageReveal from "@/components/common/ImageReveal";

/**
 * Section 9: Appointment Booking & Consultation CTA.
 * Direct editorial layout with soft neutral ivory background and sharp imagery.
 */
export default function Section9({ className = "" }) {
  return (
    <section
      id="booking"
      aria-label="Schedule an Intake Call"
      className={`relative w-full bg-[#FBF9F6] overflow-hidden min-h-[66vh] flex items-center ${className}`}
    >
      <div className="w-full px-6 py-12 md:px-0 md:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec9 w-full">

            {/* Left Media Asset (Reveals bottom-to-top) */}
            <div className="sec9-media-left w-full h-full">
              <ImageReveal direction="up" className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/office-grounding-space.webp"
                  alt="Serene Santa Monica therapy consultation space with warm wood and natural coastal textures"
                  fill
                  sizes="(max-width: 768px) 70vw, 20vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Eyebrow */}
            <div className="sec9-eyebrow-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <p className="font-sans text-[11px] sm:text-[14px] font-medium tracking-[0.14em] uppercase text-brand-accent m-0 mb-2">
                  TAKE THE FIRST STEP
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="sec9-headline-block">
              <div className="h-full flex flex-col justify-start">
                <h2 className="font-heading font-light text-[26px] sm:text-[36px] md:text-[47.8px] leading-[1.25] tracking-[-0.01em] text-brand-heading m-0 mb-4">
                  Ready to move out of survival mode and reclaim your{" "}
                  <span
                    style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                    className="font-normal text-[#C37F66] inline-block ml-1 text-[1.3em] md:text-[1.45em] leading-none transform translate-y-[2px] md:translate-y-[4px]"
                  >
                    energy
                  </span>
                  ?
                </h2>
              </div>
            </div>

            {/* Body Copy */}
            <div className="sec9-text-block">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-brand-heading m-0 mb-6">
                  Whether you meet in person in Santa Monica or online across California, let&apos;s collaborate to build sustainable resilience and peace.
                </p>
              </div>
            </div>

            {/* Action CTA Button (Responsive Touch Ergonomics) */}
            <div className="sec9-btn-block">
              <div className="h-full flex flex-col justify-center md:justify-start items-center md:items-start w-full">
                <Link
                  href="#booking"
                  className="btn-sharp-filled inline-block w-full sm:w-auto text-center py-4 px-6 text-[12px] tracking-[0.14em] uppercase font-medium bg-[#C37F66] text-white rounded-full shadow-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#B26F57] hover:-translate-y-[2px] active:translate-y-0 cursor-pointer"
                >
                  SCHEDULE A 15-MINUTE CONSULTATION
                </Link>
                <p className="font-sans text-[11px] sm:text-[12.5px] text-brand-sage tracking-[0.03em] mt-3.5 text-center md:text-left">
                  Complimentary 15-minute consultation &bull; No obligation &bull; Confidential &amp; HIPAA-compliant
                </p>
              </div>
            </div>

            {/* Right Media Feature (Reveals opposite top-to-bottom, aspect-4/3 on mobile) */}
            <div className="sec9-media-right w-full h-full">
              <ImageReveal direction="down" delay={140} className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-0 overflow-hidden mt-8 md:mt-0">
                <Image
                  src="/images/sections/booking-warm-stone.webp"
                  alt="Mindful journal, handmade ceramic cup, and grounding stone on warm oak in morning light"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover block"
                  style={{ objectPosition: "50% 50%" }}
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
