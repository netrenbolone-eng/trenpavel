import type { ComponentType, SVGProps } from "react";
import { InstagramIcon, TelegramIcon, YoutubeIcon } from "@/components/ui/Icons";
import { LINKS } from "@/lib/site";

interface Social {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const SOCIALS: readonly Social[] = [
  { label: "Telegram", href: LINKS.telegram, Icon: TelegramIcon },
  { label: "Instagram", href: LINKS.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: LINKS.youtube, Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          © 2026 BODYSUPPORT
        </p>
        <nav aria-label="Социальные сети" className="flex items-center gap-2">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
