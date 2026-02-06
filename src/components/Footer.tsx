import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, Globe } from "lucide-react";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Villas", href: "#" },
      { label: "Apartments", href: "#" },
      { label: "Penthouses", href: "#" },
      { label: "Beachfront", href: "#" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Puerto Banus", href: "#" },
      { label: "Golden Mile", href: "#" },
      { label: "Nueva Andalucia", href: "#" },
      { label: "Old Town", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Safety", href: "#" },
      { label: "Cancellation", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* Golden divider at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-golden to-transparent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 lg:gap-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 font-[family-name:var(--font-heading)] text-base font-semibold text-white">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block rounded-md px-2 py-2 text-sm text-white/60 transition-all duration-200 hover:text-golden hover:translate-x-1 active:text-golden-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
              Marbella<span className="text-golden"> Stays</span>
            </span>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Marbella Stays. All rights
              reserved.
            </p>
          </div>

          {/* Social Links — 44px touch targets */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-golden/40 hover:text-golden hover:scale-110 active:scale-95"
              >
                <social.icon className="h-[18px] w-[18px]" />
              </Link>
            ))}
          </div>

          {/* Language Selector — 44px min height */}
          <button className="flex h-11 items-center gap-2 rounded-full border border-white/10 px-5 text-sm text-white/60 transition-all duration-200 hover:border-golden/30 hover:text-white active:scale-[0.97]">
            <Globe className="h-4 w-4" />
            <span>English (US)</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
