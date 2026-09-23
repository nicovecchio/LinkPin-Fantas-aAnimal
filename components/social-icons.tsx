import type { SocialLink } from "@/lib/profile-data"

type SocialIconsProps = {
  links: SocialLink[]
}

export function SocialIcons({ links }: SocialIconsProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {links.map((social) => {
        const Icon = social.icon
        return (
          <div key={social.label} className="group relative">
            {/* Sombreado degradado alrededor de cada ícono social */}
            <div
              aria-hidden="true"
              className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-orange-400 via-amber-300 to-emerald-400 opacity-40 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:blur-sm"
            />
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="relative flex size-11 items-center justify-center rounded-full border border-orange-100 bg-white text-black shadow-sm transition-all duration-200 active:scale-95"
            >
              <Icon className="size-5 text-black" />
            </a>
          </div>
        )
      })}
    </div>
  )
}
