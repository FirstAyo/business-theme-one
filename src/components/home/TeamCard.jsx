import { Link } from "react-router-dom";
import { useState } from "react";

/**
 * TeamCard
 * - Card links to member detail page (route later)
 * - Image area lifts slightly on hover
 * - "+" button hover reveals social icons (absolute stack)
 */
export default function TeamCard({ member }) {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className="group">
      {/* Card */}
      <div className="rounded-3xl bg-white shadow-sm">
        {/* Clickable image area */}
        <Link to={`/team/${member.slug}`} className="block">
          <div className="relative overflow-hidden rounded-t-2xl">
            {/* Placeholder image */}
            <img
              src={member.image}
              className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:-translate-y-2"
            />

            {/* + button */}
            <div
              className="absolute bottom-4 right-4"
              onMouseEnter={() => setShowSocial(true)}
              onMouseLeave={() => setShowSocial(false)}
            >
              <button
                type="button"
                aria-label="Open social links"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F2A30] shadow-md"
              >
                +
              </button>

              {/* Social stack (shows on hover of + area) */}
              <div
                className={[
                  "absolute right-0 bottom-12 flex flex-col gap-3 transition-all duration-200",
                  showSocial
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0",
                ].join(" ")}
              >
                <SocialIcon href={member.social.youtube} label="YouTube" />
                <SocialIcon href={member.social.twitter} label="Twitter/X" />
                <SocialIcon href={member.social.instagram} label="Instagram" />
              </div>
            </div>
          </div>
        </Link>

        {/* Text */}
        <div className="px-6 pb-6 pt-5 text-center">
          <p className="text-lg font-extrabold text-[#1F2A30]">{member.name}</p>
          <p className="mt-1 text-sm text-[#5C6B73]">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

/** Small circular social icon button (placeholder letters) */
function SocialIcon({ href, label }) {
  return (
    <a
      href={href || "#"}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1F2A30] shadow-md hover:bg-black/5"
      target="_blank"
      rel="noreferrer"
    >
      {/* Placeholder: swap with real icons later */}
      {label.slice(0, 1)}
    </a>
  );
}
