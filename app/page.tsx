import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#FAF8F5] px-4 py-12 text-black">
      {/* Fondo texturizado con patrón de huellas de mascotas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M12 11.5c-1.8 0-3.3 1.2-3.8 2.8-.4 1.3.1 2.7 1.2 3.5 1.1.8 2.6.8 3.7 0 1.1-.8 1.6-2.2 1.2-3.5-.5-1.6-2-2.8-3.8-2.8zm-4.5-2.5c.8 0 1.5-.7 1.5-1.5S8.3 6 7.5 6 6 6.7 6 7.5 6.7 9 7.5 9zm9 0c.8 0 1.5-.7 1.5-1.5S17.3 6 16.5 6 15 6.7 15 7.5 15.7 9 16.5 9zm-12 3c.8 0 1.5-.7 1.5-1.5S10.3 9 9.5 9 8 9.7 8 10.5 8.7 12 9.5 12zm15 0c.8 0 1.5-.7 1.5-1.5S19.3 9 18.5 9 17 9.7 17 10.5 17.7 12 18.5 12z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Resplandor ambiental de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,107,53,0.15),transparent_60%)]"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-8">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-orange-400 via-amber-300 to-emerald-400 opacity-80 blur-md"
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
            <h1 className="text-balance text-2xl font-black tracking-tight text-black sm:text-3xl">{name}</h1>
            <p className="mx-auto max-w-xs text-pretty text-sm font-semibold leading-relaxed text-black">{bio}</p>
          </div>
        </header>

        {/* Redes sociales */}
        <SocialIcons links={socialLinks} />

        {/* Enlaces principales */}
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkButton key={link.title} link={link} />
          ))}
        </div>

        <footer className="pt-2 text-center text-xs font-bold text-black/70">
          © {new Date().getFullYear()} {name}
        </footer>
      </section>
    </main>
  )
}
