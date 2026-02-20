import { useEffect } from "react";

/**
 * SidePanel (Desktop off-canvas modal)
 * - Slides in from the right
 * - Backdrop click + ESC closes
 * - Locks body scroll while open
 */
export default function SidePanel({ open, onClose }) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 hidden md:block">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/40"
        aria-label="Close side panel backdrop"
        onClick={onClose}
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-[420px] max-w-[92vw] bg-white shadow-xl">
        {/* Close button */}
        <div className="p-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center bg-[#1F2A30] text-white"
            aria-label="Close side panel"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="px-8 pb-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Logo placeholder */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F2A30] text-white">
              ↗
            </div>
            <div className="leading-tight">
              <div className="text-3xl font-extrabold text-[#1F2A30]">
                Invena
              </div>
              <div className="-mt-1 text-sm text-[#5C6B73]">
                Business Solution
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-[#6B7780]">
            We must explain to you how all seds this mistaken idea denouncing
            pleasures and praising account. All seds this mistaken idea
            denouncing pleasures.
          </p>

          {/* Contact block */}
          <h3 className="mt-8 text-lg font-extrabold text-[#1F2A30]">
            Get In Touch
          </h3>

          <ul className="mt-5 space-y-4 text-[15px] text-[#5C6B73]">
            <li className="flex items-center gap-3">
              <IconBubble>📞</IconBubble>
              <span>+8801234566789</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>✉️</IconBubble>
              <span>example@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>🌐</IconBubble>
              <span>www.webexample.com</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>📍</IconBubble>
              <span>13/A, New Pro State, NYC</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            <SocialCircle label="f" />
            <SocialCircle label="t" />
            <SocialCircle label="ig" />
            <SocialCircle label="in" />
          </div>
        </div>
      </aside>
    </div>
  );
}

/** Small icon bubble (placeholder icons) */
function IconBubble({ children }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
      {children}
    </span>
  );
}

/** Social circle placeholder */
function SocialCircle({ label }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2A30] text-sm font-semibold text-white">
      {label}
    </span>
  );
}
