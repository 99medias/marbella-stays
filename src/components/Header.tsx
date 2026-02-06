"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, User, Globe } from "lucide-react";

const navLinks = [
  { label: "Villas", href: "#villas" },
  { label: "Apartments", href: "#apartments" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-navy"
          >
            Marbella
            <span className="text-golden"> Stays</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover-golden text-sm font-medium text-navy/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Search Pill */}
          <button
            className="flex items-center gap-2 rounded-full border border-golden/20 bg-white/60 px-4 py-2 text-sm text-navy/70 shadow-sm transition-all hover:border-golden/40 hover:shadow-md"
          >
            <Search className="h-4 w-4 text-golden" />
            <span>Search destinations</span>
          </button>

          {/* Language */}
          <button className="rounded-full p-2 transition-colors hover:bg-golden/10">
            <Globe className="h-5 w-5 text-navy/60" />
          </button>

          {/* User Menu */}
          <button className="flex items-center gap-2 rounded-full border border-navy/10 bg-white/80 py-1.5 pl-3 pr-1.5 shadow-sm transition-all hover:shadow-md">
            <Menu className="h-4 w-4 text-navy/60" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-golden text-white">
              <User className="h-4 w-4" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 rounded-lg p-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-navy/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] animate-slide-down bg-warm-white px-6 pt-24 shadow-2xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 font-[family-name:var(--font-heading)] text-lg text-navy transition-colors hover:bg-golden/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-golden/15 pt-8">
              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-navy/70 transition-colors hover:bg-golden/10">
                <Search className="h-5 w-5 text-golden" />
                <span>Search destinations</span>
              </button>
              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-navy/70 transition-colors hover:bg-golden/10">
                <Globe className="h-5 w-5 text-golden" />
                <span>Language</span>
              </button>
              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-navy/70 transition-colors hover:bg-golden/10">
                <User className="h-5 w-5 text-golden" />
                <span>Sign in</span>
              </button>
            </div>

            <div className="absolute bottom-8 left-6 right-6">
              <button className="btn-primary w-full">
                List your property
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
