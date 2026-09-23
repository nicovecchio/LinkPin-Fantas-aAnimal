import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#FAF8F5] px-4 py-12 text-slate-900">
      {/* Fondo con gradiente cálido y sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,107,53,0.12),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_50%)]"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-8">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-orange-400 via-amber-300 to-emerald-400 opacity-60 blur-md"
            />
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-white bg-white object-cover shadow-xl"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{name}</h1>
            <p className="mx-auto max-w-xs text-pretty text-sm leading-relaxed text-slate-600">{bio}</p>
          </div>
        </header>

        {/* Redes sociales */}
        <SocialIcons links={socialLinks} />

        {/* Enlaces principales */}
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkButton key={link.title} link={link} />
          ))}
        </div>

        <footer className="pt-2 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {name}
        </footer>
      </section>
    </main>
  )
}
