import facebookIcon from "../../assets/social-icons/facebook.svg";
import twitterIcon from "../../assets/social-icons/twitter.svg";
import instagramIcon from "../../assets/social-icons/instagram.svg";
import linkedinIcon from "../../assets/social-icons/linkedin.svg";

export default function BlogDetailTagsShare() {
  const tags = ["Services", "Business", "Growth"];
  const socialIcons = [facebookIcon, twitterIcon, instagramIcon, linkedinIcon];

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold text-[#1F2A30]">Tags:</span>
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-[#F5F7F9] px-3 py-1 text-[11px] font-semibold text-black/55"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-[#1F2A30]">Share:</span>
        <div className="flex items-center gap-2">
          {socialIcons.map((icon, i) => (
            <span
              key={i}
              className="grid h-8 w-8 place-items-center rounded-full bg-[#F5F7F9] text-xs font-bold text-[#1F2A30]/70"
            >
              <img src={icon} alt="social icon" className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
