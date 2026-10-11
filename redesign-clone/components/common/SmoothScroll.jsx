"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global smooth scroll provider using Lenis.
 * Delivers continuous buttery inertia for manual user scrolling (wheel & touch),
 * and cinematic, easing-driven smooth auto-scrolling for all anchor links (#target).
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with smooth physics
    const lenis = new Lenis({
      duration: 1.6, // Smooth glide duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential decay
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Expose lenis instance globally
    window.__lenis = lenis;

    // RAF loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global anchor link smooth scroll interceptor
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId) || document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -40, // Account for header breathing room
            duration: 2.0, // Long, ultra-smooth auto-scroll animation
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          // Update browser address bar hash without instant jump
          if (window.history && window.history.pushState) {
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Handle initial hash on page load (e.g. #approach, #specialties)
    if (window.location.hash) {
      const initialTarget = document.querySelector(window.location.hash);
      if (initialTarget) {
        setTimeout(() => {
          lenis.scrollTo(initialTarget, {
            offset: -40,
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }, 150);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
