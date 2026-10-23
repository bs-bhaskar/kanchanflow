
"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand" aria-label="KanchanFlow home">
          <span className="brand-mark">K</span>
          <span>
            Kanchan<span className="brand-accent">Flow</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/pricing"
            className="btn btn-primary nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Book a Demo <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
