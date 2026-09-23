import type { MainLink } from "@/lib/profile-data"
import { ExternalLink } from "lucide-react"

type LinkButtonProps = {
  link: MainLink
}

export function LinkButton({ link }: LinkButtonProps) {
  const Icon = link.icon

  return (
    <div className="group relative w-full">
      {/* Sombreado degradado idéntico al logo que se enciende en hover y al hacer clic */}
      <div
        aria-hidden="true"
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-orange-400 via-amber-300 to-emerald-400 opacity-30 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:blur-md group-active:opacity-100 group-active:scale-[0.99]"
      />

      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex w-full items-center justify-between gap-4 rounded-2xl border border-orange-100 bg-white/95 px-5 py-4 text-black shadow-md transition-all duration-200 active:scale-[0.98]"
      >
        <div className="flex items-center gap-3.5">
          {Icon && (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-black">
              <Icon className="size-5 text-black" />
            </div>
          )}
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-black">{link.title}</span>
            {link.subtitle && <span className="text-xs font-semibold text-black/80">{link.subtitle}</span>}
          </div>
        </div>
        <ExternalLink className="size-4 shrink-0 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  )
}
