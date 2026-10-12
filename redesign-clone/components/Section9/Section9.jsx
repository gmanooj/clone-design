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
      className={`relative w-full bg-secondary overflow-hidden min-h-0 lg:min-h-[66vh] flex items-center ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec9 w-full">

            {/* Left Media Asset (Reveals bottom-to-top) */}
            <div className="sec9-media-left w-full h-full">
              <ImageReveal direction="up" className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/cta-sanctuary-detail.jpg"
                  alt="Armchair with cushions and vase beside a warm textured wall"
                  fill
                  sizes="(max-width: 1024px) 70vw, 20vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Eyebrow */}
            <div className="sec9-eyebrow-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <p className="font-sans text-[11px] sm:text-[14px] font-medium tracking-[0.14em] uppercase text-accent m-0 mb-2">
                  Take the first step
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="sec9-headline-block">
              <div className="h-full flex flex-col justify-start">
                <h2 className="font-heading font-light text-[26px] sm:text-[34px] md:text-[40px] lg:text-[47.8px] leading-[1.25] tracking-[-0.01em] text-ink m-0 mb-4">
                  Ready to slow down and{" "}
                  <span
                    style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                    className="font-normal text-accent inline-block ml-1 text-[1.45em] md:text-[1.6em] leading-none transform translate-y-[2px] md:translate-y-[4px]"
                  >
                    reconnect?
                  </span>
                </h2>
              </div>
            </div>

            {/* Body Copy */}
            <div className="sec9-text-block">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[15.5px] lg:text-[16.7px] leading-[1.7] text-ink m-0 mb-6">
                  Whether we meet in person in Santa Monica or online across California, I may be a good fit if you want practical tools combined with depth-oriented work.
                </p>
              </div>
            </div>

            {/* Action CTA Button (Responsive Touch Ergonomics) */}
            <div className="sec9-btn-block">
              <div className="h-full flex flex-col justify-center md:justify-start items-center md:items-start w-full">
                <Link
                  href="#booking"
                  className="btn-sharp-filled inline-block w-full sm:w-auto text-center py-4 px-8 text-[12.5px] sm:text-[13px] tracking-[0.14em] uppercase font-semibold bg-primary text-on-primary border-2 border-primary rounded-none shadow-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-[2px] active:translate-y-0 cursor-pointer"
                >
                  Schedule a consultation
                </Link>
                <p className="font-sans text-[11px] sm:text-[12.5px] text-muted tracking-[0.03em] mt-3.5 text-center md:text-left">
                  In-person in Santa Monica &bull; Secure telehealth in California
                </p>
              </div>
            </div>

            {/* Right Media Feature (Reveals opposite top-to-bottom, aspect-4/3 on mobile/tablet) */}
            <div className="sec9-media-right w-full h-full">
              <ImageReveal direction="down" delay={140} className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 overflow-hidden mt-8 md:mt-0">
                <Image
                  src="/images/sections/booking-warm-stone.webp"
                  alt="Journal, ceramic cup, and smooth stone on a wooden table in morning light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
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
