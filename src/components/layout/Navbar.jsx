import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import SidePanel from "./SidePanel";

/**
 * Navbar (shared across all pages)
 * - Desktop: Top utility bar + main nav
 * - Mobile: Compact header + slide-in menu with accordions
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null); // mobile accordion
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  // Main nav items (desktop center + mobile list)
  const navItems = useMemo(
    () => [
      { label: "Home", to: "/", hasDropdown: true },
      { label: "Pages", to: "/pages", hasDropdown: true },
      { label: "Service", to: "/services", hasDropdown: true },
      { label: "Project", to: "/projects", hasDropdown: true },
      { label: "Blog", to: "/blog", hasDropdown: true },
      { label: "Contact", to: "/contact", hasDropdown: true },
    ],
    [],
  );

  // Close mobile menu on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleGroup = (key) => {
    setOpenGroup((prev) => (prev === key ? null : key));
  };

  return (
    <header className="w-full">
      {/* Top utility bar (desktop) */}
      <div className="hidden w-full bg-[#1F2A30] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Left info */}
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              {/* Icon placeholder */}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10 text-xs">
                @
              </span>
              <span>support@invena.com</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Icon placeholder */}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10 text-xs">
                ⏱
              </span>
              <span>Working: 8.00am - 5.00pm</span>
            </div>
          </div>

          {/* Right links + socials */}
          <div className="flex items-center gap-6 text-sm">
            <nav className="flex items-center gap-6">
              <a className="opacity-90 hover:opacity-100" href="#company-news">
                Company news
              </a>
              <a className="opacity-90 hover:opacity-100" href="#faq">
                Faq
              </a>
              <a className="opacity-90 hover:opacity-100" href="#contact-top">
                Contact
              </a>
            </nav>

            <span className="h-4 w-px bg-white/20" />

            {/* Socials (placeholders) */}
            <div className="flex items-center gap-4">
              <SocialDot label="f" />
              <SocialDot label="t" />
              <SocialDot label="ig" />
              <SocialDot label="in" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            {/* Logo mark placeholder */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2A30] text-white">
              ↗
            </div>
            <div className="leading-tight">
              <div className="text-2xl font800 font-extrabold text-[#1F2A30]">
                Invena
              </div>
              <div className="-mt-1 text-sm text-[#5C6B73]">
                Business Solution
              </div>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-2 text-[16px] font-semibold text-[#1F2A30] hover:text-black",
                    isActive ? "text-black" : "",
                  ].join(" ")
                }
              >
                <span>{item.label}</span>
                {item.hasDropdown ? (
                  <span className="text-xs opacity-70">▾</span> // dropdown caret placeholder
                ) : null}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC]"
              aria-label="Search"
            >
              🔍
            </button>

            {/* Desktop CTA */}
            <button
              type="button"
              className="hidden py-3 rounded-2xl bg-[#1F2A30] px-7 font-semibold text-white hover:bg-black md:inline-flex"
            >
              Get Quote
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC] md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>

            {/* Desktop toggle icon (open side panel) */}
            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC] md:inline-flex"
              aria-label="Open side panel"
              onClick={() => setSidePanelOpen(true)}
            >
              ≡
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu backdrop"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <aside className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-xl">
            {/* Close button */}
            <div className="p-4">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center bg-[#1F2A30] text-white"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Panel content */}
            <div className="px-6 pb-8">
              {/* Logo (mobile panel) */}
              <div className="flex items-center gap-3 pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2A30] text-white">
                  ↗
                </div>
                <div className="leading-tight">
                  <div className="text-2xl font-extrabold text-[#1F2A30]">
                    Invena
                  </div>
                  <div className="-mt-1 text-sm text-[#5C6B73]">
                    Business Solution
                  </div>
                </div>
              </div>

              {/* Mobile menu list (accordion style) */}
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                <MobileAccordionRow
                  label="Demos"
                  isOpen={openGroup === "demos"}
                  onToggle={() => toggleGroup("demos")}
                />
                <MobileAccordionRow
                  label="Onepage"
                  isOpen={openGroup === "onepage"}
                  onToggle={() => toggleGroup("onepage")}
                />
                <MobileAccordionRow
                  label="Pages"
                  isOpen={openGroup === "pages"}
                  onToggle={() => toggleGroup("pages")}
                />
                <MobileAccordionRow
                  label="Services"
                  isOpen={openGroup === "services"}
                  onToggle={() => toggleGroup("services")}
                />
                <MobileAccordionRow
                  label="Projects"
                  isOpen={openGroup === "projects"}
                  onToggle={() => toggleGroup("projects")}
                />
                <MobileAccordionRow
                  label="Shop Pages"
                  isOpen={openGroup === "shop"}
                  onToggle={() => toggleGroup("shop")}
                />

                {/* Simple link row */}
                <a
                  href="/blog"
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Contact Us
                </a>
              </div>

              {/* Socials at bottom */}
              <div className="mt-10 flex items-center gap-6">
                <SocialDot label="f" />
                <SocialDot label="t" />
                <SocialDot label="yt" />
                <SocialDot label="in" />
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Side Panel (desktop off-canvas) */}
      <SidePanel open={sidePanelOpen} onClose={() => setSidePanelOpen(false)} />
    </header>
  );
}

/** Small social icon placeholder (swap with real icons later) */
function SocialDot({ label }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-xs font-semibold text-[#1F2A30]">
      {label}
    </span>
  );
}

/** Mobile accordion row (label + chevron) */
function MobileAccordionRow({ label, isOpen, onToggle }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold text-[#1F2A30]"
      onClick={onToggle}
    >
      <span>{label}</span>
      <span
        className={[
          "text-sm opacity-70 transition",
          isOpen ? "rotate-180" : "",
        ].join(" ")}
      >
        ▾
      </span>
    </button>
  );
}
