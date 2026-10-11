"use client";

import React from "react";
import UnderlineLink from "@/components/common/UnderlineLink";

/**
 * Section 8: Specialties Grid.
 * Direct editorial layout presenting specialized therapy modalities on a clean white canvas.
 */
export default function Section8({ className = "" }) {
  return (
    <section
      id="specialties"
      aria-label="Clinical Modalities"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-12 md:px-0 md:py-0">
        <div className="w-full">
          <div className="fluid-grid-sec8 w-full">

            {/* Left Title "Our modalities include…" */}
            <div className="sec8-title-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <h3 className="font-heading font-light text-[30px] sm:text-[36px] md:text-[39.2px] leading-[1.32] tracking-[-0.01em] text-brand-heading m-0">
                  Our modalities include…
                </h3>
              </div>
            </div>

            {/* Modality Item 1: Cognitive Behavioral Therapy (CBT) */}
            <div className="sec8-card-1 flex flex-col items-start py-4 md:py-2">
              <div>
                <h4 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-[#2B2D2F] mb-[10px]">
                  Cognitive Behavioral Therapy (CBT)
                </h4>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-brand-heading m-0">
                  Practical cognitive tools to reframe perfectionistic loops, challenge automatic negative thoughts, and break avoidance patterns.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  className="text-[#C37F66] text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  LEARN MORE
                </UnderlineLink>
              </div>
            </div>

            {/* Modality Item 2: EMDR Therapy */}
            <div className="sec8-card-2 flex flex-col items-start py-4 md:py-2">
              <div>
                <h4 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-[#2B2D2F] mb-[10px]">
                  EMDR Therapy
                </h4>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-brand-heading m-0">
                  Bilateral stimulation and phased somatic preparation to safely process traumatic memories and release stuck nervous system charges.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  className="text-[#C37F66] text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  LEARN MORE
                </UnderlineLink>
              </div>
            </div>

            {/* Modality Item 3: Body-Oriented Regulation */}
            <div className="sec8-card-3 flex flex-col items-start py-4 md:py-2">
              <div>
                <h4 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-[#2B2D2F] mb-[10px]">
                  Body-Oriented Regulation
                </h4>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-brand-heading m-0">
                  Physiological awareness tools to soothe chronic physical tension, interrupt panic arousal, and restore deep diaphragmatic ease.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  className="text-[#C37F66] text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  LEARN MORE
                </UnderlineLink>
              </div>
            </div>

            {/* Modality Item 4: Mindfulness Practices */}
            <div className="sec8-card-4 flex flex-col items-start py-4 md:py-2">
              <div>
                <h4 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-[#2B2D2F] mb-[10px]">
                  Mindfulness Practices
                </h4>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-brand-heading m-0">
                  Present-moment grounding techniques to cultivate self-compassion, stay anchored in high-pressure environments, and protect emotional energy.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  className="text-[#C37F66] text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  LEARN MORE
                </UnderlineLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
