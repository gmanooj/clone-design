"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Fullscreen mobile drawer with animated multi-level folder transitions.
 */
export default function MobileDrawer({
  isOpen,
  onClose,
  activeFolder,
  setActiveFolder,
  ourTeamLinks,
  specialtiesLinks,
  methodsLinks,
}) {
  return (
    <div
      style={{
        transitionProperty: "opacity, transform, visibility",
        transitionDuration: "4000ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`fixed inset-0 z-40 bg-[#FAF4EE] flex flex-col justify-between pt-[100px] md:pt-[125px] pb-10 overflow-y-auto font-[family-name:var(--font-body)] ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 -translate-y-6 pointer-events-none invisible"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Navigation Body with smooth 4s card scale/fade animation */}
      <div
        style={{
          transitionProperty: "opacity, transform",
          transitionDuration: "4000ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`px-[8vw] py-6 flex-1 flex flex-col justify-center transition-all ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {activeFolder === null ? (
          /* Main Menu */
          <div className="flex flex-col space-y-6 text-left">
            <div>
              <Link
                href="#about"
                onClick={onClose}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-accent transition-colors"
              >
                About
              </Link>
            </div>

            <div>
              <button
                onClick={() => setActiveFolder("specialties")}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-accent transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Specialties</span>
                <span className="text-[20px] font-light text-brand-heading/60 font-sans">&gt;</span>
              </button>
            </div>

            <div>
              <Link
                href="#approach"
                onClick={onClose}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-accent transition-colors"
              >
                Approach
              </Link>
            </div>

            <div>
              <Link
                href="#office"
                onClick={onClose}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-accent transition-colors"
              >
                Office
              </Link>
            </div>
          </div>
        ) : (
          /* Subfolder View */
          <div className="flex flex-col text-left">
            <button
              onClick={() => setActiveFolder(null)}
              className="border border-brand-heading px-4 py-1.5 text-[14px] uppercase tracking-[0.1em] text-brand-heading inline-flex items-center gap-2 mb-8 self-start cursor-pointer hover:bg-brand-heading hover:text-white transition-colors"
            >
              <span className="text-[12px]">&lt;</span>
              <span>Back</span>
            </button>

            <div className="flex flex-col space-y-4">
              {activeFolder === "specialties" &&
                specialtiesLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="font-heading text-[20px] sm:text-[24px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action CTA */}
      <div className="px-[8vw] pb-10 flex-shrink-0 text-center">
        <Link
          href="#booking"
          onClick={onClose}
          className="btn-sharp-filled inline-block w-full max-w-[280px] text-[13px] font-semibold tracking-[0.14em] text-white uppercase bg-[#C37F66] border-2 border-[#C37F66] rounded-none py-3.5 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#B26F57] hover:border-[#B26F57] hover:-translate-y-[2px] hover:shadow-[0_8px_15px_rgba(195,127,102,0.35)] active:translate-y-0 active:shadow-none cursor-pointer"
        >
          BOOK A CONSULTATION
        </Link>
      </div>
    </div>
  );
}
