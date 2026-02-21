import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import SidePanel from "./SidePanel";
import ServiceDropdown from "./ServiceDropdown";
import { Mail, Clock, Search, Menu, X, ChevronDown } from "lucide-react";

/**
 * Navbar (shared across all pages)
 * - Desktop: Top utility bar + main nav + hover dropdown (Services)
 * - Mobile: Compact header + slide-in menu with accordions
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null); // mobile accordion
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  // Services dropdown state (desktop)
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", to: "/", hasDropdown: true },
      { label: "Pages", to: "/pages", hasDropdown: true },
      { label: "Service", to: "/services", hasDropdown: true }, // dropdown here
      { label: "Project", to: "/projects", hasDropdown: true },
      { label: "Blog", to: "/blog", hasDropdown: true },
      { label: "Contact", to: "/contact", hasDropdown: true },
    ],
    [],
  );

  // Close menus on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
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
              <span className="grid h-6 w-6 place-items-center rounded bg-white/10">
                <Mail className="h-4 w-4 text-white/90" />
              </span>
              <span>support@invena.com</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded bg-white/10">
                <Clock className="h-4 w-4 text-white/90" />
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

            {/* Socials placeholders */}
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
      {/* IMPORTANT: z-50 keeps dropdown above hero sections */}
      <div className="relative z-50 w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
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
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              if (item.label === "Service") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 text-[16px] font-semibold text-[#1F2A30] hover:text-black",
                          isActive ? "text-black" : "",
                        ].join(" ")
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </NavLink>

                    {/* Dropdown (positioned to viewport center, not service link width) */}
                    <ServiceDropdown
                      open={servicesOpen}
                      onClose={() => setServicesOpen(false)}
                    />
                  </div>
                );
              }

              return (
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
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  ) : null}
                </NavLink>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="hidden rounded-2xl bg-[#1F2A30] px-7 py-3 font-semibold text-white hover:bg-black md:inline-flex"
            >
              Get Quote
            </button>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC] md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

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
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu backdrop"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-xl">
            <div className="p-4">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center bg-[#1F2A30] text-white"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 pb-8">
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

      <SidePanel open={sidePanelOpen} onClose={() => setSidePanelOpen(false)} />
    </header>
  );
}

/** Small social placeholder */
function SocialDot({ label }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-xs font-semibold text-[#1F2A30]">
      {label}
    </span>
  );
}

/** Mobile accordion row */
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
