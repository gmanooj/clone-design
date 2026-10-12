"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

/**
 * Fullscreen mobile drawer with animated multi-level folder transitions,
 * solid token background, focus trapping, and Escape key listener.
 */
export default function MobileDrawer({
  isOpen,
  onClose,
  activeFolder,
  setActiveFolder,
  specialtiesLinks,
  menuButtonRef,
}) {
  const drawerRef = useRef(null);

  // Prevent background body scrolling when drawer is open, handle Escape & focus trapping
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Focus first element inside drawer
      const focusable = drawerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        } else if (e.key === "Tab") {
          const focusableElements = drawerRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements || focusableElements.length === 0) return;
          const first = focusableElements[0];
          const last = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        if (menuButtonRef?.current) {
          menuButtonRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose, menuButtonRef]);

  return (
    <div
      ref={drawerRef}
      style={{
        backgroundColor: "var(--color-secondary)",
        transitionProperty: "opacity, transform, visibility",
        transitionDuration: "4000ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`fixed inset-0 z-50 w-full h-full bg-secondary flex flex-col justify-between p-8 sm:p-12 overflow-y-auto font-[family-name:var(--font-body)] ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 -translate-y-6 pointer-events-none invisible"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      aria-hidden={!isOpen}
    >
      {/* Navigation Body with smooth 4s card scale/fade animation */}
      <div
        style={{
          transitionProperty: "opacity, transform",
          transitionDuration: "4000ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`px-[8vw] py-6 pt-20 sm:pt-24 flex-1 flex flex-col justify-center transition-all ${
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
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-ink font-light hover:text-accent transition-colors"
              >
                About
              </Link>
            </div>

            <div>
              <button
                onClick={() => setActiveFolder("specialties")}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-ink font-light hover:text-accent transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Specialties</span>
                <span className="text-[20px] font-light text-ink/60 font-sans">&gt;</span>
              </button>
            </div>

            <div>
              <Link
                href="#approach"
                onClick={onClose}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-ink font-light hover:text-accent transition-colors"
              >
                Approach
              </Link>
            </div>

            <div>
              <Link
                href="#office"
                onClick={onClose}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-ink font-light hover:text-accent transition-colors"
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
              className="border border-ink px-4 py-1.5 text-[14px] uppercase tracking-[0.1em] text-ink inline-flex items-center gap-2 mb-8 self-start cursor-pointer hover:bg-ink hover:text-white transition-colors"
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
                    className="font-heading text-[20px] sm:text-[24px] uppercase tracking-[0.06em] text-ink font-light hover:text-accent transition-colors"
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
          className="btn-sharp-filled inline-block w-full max-w-[280px] text-[13px] font-semibold tracking-[0.14em] text-on-primary uppercase bg-primary border-2 border-primary rounded-none py-3.5 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-[2px] hover:shadow-[0_8px_15px_rgba(168,100,75,0.35)] active:translate-y-0 active:shadow-none cursor-pointer"
        >
          BOOK NOW
        </Link>
      </div>
    </div>
  );
}
