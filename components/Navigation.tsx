"use client";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`bg-cream sticky top-0 z-40 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(139,0,0,0.08)]" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden lg:flex gap-10 items-center flex-1">
          {["Our Story", "Menu", "Press", "Catering"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-near-black text-sm font-sans font-bold small-caps nav-link-hover transition-colors hover:text-crimson"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 text-center">
          <div className="font-serif text-2xl sm:text-3xl text-crimson leading-none tracking-tight">
            NONNA&apos;S
          </div>
          <div className="text-[8px] sm:text-[9px] font-sans font-bold small-caps text-near-black/50 tracking-[0.2em] mt-0.5">
            EST. 1982 · HANDMADE DAILY
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
          <button className="relative text-near-black hover:text-crimson transition-colors group">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 11H4L5 9z"
              />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-raspberry text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              2
            </span>
          </button>
          <button className="bg-crimson text-white px-7 py-2.5 rounded-full font-sans font-bold small-caps text-sm hover:bg-dark-maroon transition-colors duration-300">
            Order Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-near-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cream border-t border-crimson/10 mt-4 pt-4 pb-6 flex flex-col gap-4 px-2">
          {["Our Story", "Menu","Press", "Catering", ].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="font-serif text-2xl text-crimson"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            )
          )}
          <button className="mt-4 bg-crimson text-white px-7 py-3 rounded-full font-bold small-caps text-sm w-fit">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
