"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavDropdown from "./NavDropdown";
import MobileDrawer from "./MobileDrawer";
import PillButton from "@/components/common/PillButton";

const practiceLinks = [
  { name: "About Dr. Reynolds", href: "/about" },
  { name: "Santa Monica Sanctuary", href: "/office" },
  { name: "California Telehealth", href: "/telehealth" },
  { name: "Practice Policies & Fees", href: "/faqs" },
];

const specialtiesLinks = [
  { name: "Anxiety & Panic", href: "#specialties" },
  { name: "Trauma & EMDR", href: "#specialties" },
  { name: "Burnout & Perfectionism", href: "#specialties" },
];

/**
 * Site Navigation Header with desktop dropdowns and responsive mobile drawer.
 */
export default function Header({ className = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);

  const toggleMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setActiveFolder(null);
    } else {
      setMobileMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveFolder(null);
  };

  return (
    <>
      <header
        className={`${
          mobileMenuOpen ? "fixed z-50 shadow-xs" : "absolute z-40"
        } top-0 left-0 right-0 w-full bg-[#FAF4EE] pointer-events-auto transition-colors duration-700 ${className}`}
      >
        {/* Navigation Bar Container */}
        <div className="w-full px-[6vw] py-[6vw] md:px-[5vw] md:py-[1.4vw] flex items-center justify-between">
          
          {/* Brand Logo / Text */}
          <div className="flex-shrink-0 leading-none">
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-block leading-tight group"
              aria-label="Dr. Maya Reynolds, PsyD"
            >
              <span className="font-heading text-[18px] sm:text-[21px] md:text-[22px] tracking-[0.06em] text-brand-heading font-normal uppercase block">
                DR. MAYA REYNOLDS, PSYD
              </span>
              <span className="font-sans text-[10px] sm:text-[10.5px] tracking-[0.2em] text-brand-sage uppercase font-medium block mt-[3px]">
                FICTIONAL THERAPIST • SANTA MONICA, CA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center text-right font-[family-name:var(--font-body)]">
              <div>
                <Link
                  href="#about"
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-brand-heading font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  About
                </Link>
              </div>

              <NavDropdown title="Specialties" links={specialtiesLinks} id="specialties-dropdown" />

              <div className="ml-[1.5vw] lg:ml-[2.5vw]">
                <Link
                  href="#approach"
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-brand-heading font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  Approach
                </Link>
              </div>

              <div className="ml-[1.5vw] lg:ml-[2.5vw]">
                <Link
                  href="#office"
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-brand-heading font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  Office
                </Link>
              </div>
            </nav>

            {/* Desktop Action CTA */}
            <div className="ml-[1.5vw] lg:ml-[2.5vw]">
              <Link
                href="#booking"
                className="btn-sharp-filled inline-block text-[12.5px] lg:text-[13px] font-semibold tracking-[0.14em] text-white uppercase bg-[#C37F66] border-2 border-[#C37F66] rounded-none px-8 py-3.5 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#B26F57] hover:border-[#B26F57] hover:-translate-y-[2px] hover:shadow-[0_8px_15px_rgba(195,127,102,0.35)] active:translate-y-0 active:shadow-none cursor-pointer"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Mobile & Tablet Hamburger / X Toggle Button with 4s smooth animation */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="p-2 text-brand-heading focus:outline-none flex flex-col justify-center items-center cursor-pointer relative"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-[32px] h-[20px] relative flex flex-col justify-between items-center py-[1px]">
                {/* 1st Line (Top) - Rotates 45deg down to form \ slowly over 4s */}
                <span
                  style={{
                    transitionProperty: "transform",
                    transitionDuration: "4000ms",
                    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  className={`w-[32px] h-[1.5px] bg-brand-heading block origin-center ${
                    mobileMenuOpen
                      ? "translate-y-[8.5px] rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
                
                {/* 2nd Line (Middle) - Slowly fades out over 4s */}
                <span
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDuration: "4000ms",
                    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  className={`w-[32px] h-[1.5px] bg-brand-heading block origin-center ${
                    mobileMenuOpen
                      ? "opacity-0 scale-x-0"
                      : "opacity-100 scale-x-100"
                  }`}
                />
                
                {/* 3rd Line (Bottom) - Rotates -45deg up to form / slowly over 4s */}
                <span
                  style={{
                    transitionProperty: "transform",
                    transitionDuration: "4000ms",
                    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  className={`w-[32px] h-[1.5px] bg-brand-heading block origin-center ${
                    mobileMenuOpen
                      ? "-translate-y-[8.5px] -rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={closeMenu}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        ourTeamLinks={practiceLinks}
        specialtiesLinks={specialtiesLinks}
      />
    </>
  );
}
