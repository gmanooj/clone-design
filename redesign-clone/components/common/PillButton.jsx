import React from "react";
import Link from "next/link";

/**
 * Editorial action button with sharp corners and smooth expansion animation.
 */
export default function PillButton({
  href,
  children,
  variant = "outline",
  className = "",
  ariaLabel,
}) {
  const baseClass = variant === "outline" ? "btn-sharp" : "btn-sharp-filled";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${baseClass} ${className}`}
    >
      {children}
    </Link>
  );
}
