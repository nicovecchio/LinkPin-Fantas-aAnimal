import type { ComponentType, SVGProps } from "react"
import { MapPin, Star } from "lucide-react"
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from "@/components/brand-icons"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type SocialLink = {
  label: string
  url: string
  icon: IconType
}

export type MainLink = {
  title: string
  subtitle?: string
  url: string
  icon?: IconType
}

export type ProfileData = {
  avatarUrl: string
  name: string
  bio: string
  socialLinks: SocialLink[]
  links: MainLink[]
}

export const profileData: ProfileData = {
  avatarUrl: "/profile.png",
  name: "Fantasía Animal",
  bio: "¡Aquí, tu mascota va primero!🐾",
  socialLinks: [
    {
      label: "Ubicación",
      url: "https://www.google.com/maps/place/Fantas%C3%ADa+Animal+Pet+Shop+C.A/@10.4887355,-66.8549322,19z/data=!4m6!3m5!1s0x8c2a5976e122e0e9:0x5d69c03f58d7a1ff!8m2!3d10.4887627!4d-66.8543723!16s%2Fg%2F11n9g5vfbn?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
      icon: MapPin,
    },
    {
      label: "Reseñas",
      url: "https://www.google.com/maps/place/Fantas%C3%ADa+Animal+Pet+Shop+C.A/@10.4887355,-66.8549322,19z/data=!4m6!3m5!1s0x8c2a5976e122e0e9:0x5d69c03f58d7a1ff!8m2!3d10.4887627!4d-66.8543723!16s%2Fg%2F11n9g5vfbn?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
      icon: Star,
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/584127258189",
      icon: WhatsAppIcon,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/fantasiaanimal/?hl=en",
      icon: InstagramIcon,
    },
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@fantasiaanimal?_r=1&_t=ZS-99F2e7oD3HJ",
      icon: TikTokIcon,
    },
  ],
  links: [
    {
      title: "Ubicación / Reseñas",
      subtitle: "Pet Shop C.A. · Encuéntranos y déjanos tu opinión",
      url: "https://www.google.com/maps/place/Fantas%C3%ADa+Animal+Pet+Shop+C.A/@10.4887355,-66.8549322,19z/data=!4m6!3m5!1s0x8c2a5976e122e0e9:0x5d69c03f58d7a1ff!8m2!3d10.4887627!4d-66.8543723!16s%2Fg%2F11n9g5vfbn?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
      icon: MapPin,
    },
    {
      title: "WhatsApp",
      subtitle: "Atención directa para tu mascota",
      url: "https://wa.me/584127258189",
      icon: WhatsAppIcon,
    },
    {
      title: "Instagram",
      subtitle: "@fantasiaanimal",
      url: "https://www.instagram.com/fantasiaanimal/?hl=en",
      icon: InstagramIcon,
    },
    {
      title: "TikTok",
      subtitle: "@fantasiaanimal",
      url: "https://www.tiktok.com/@fantasiaanimal?_r=1&_t=ZS-99F2e7oD3HJ",
      icon: TikTokIcon,
    },
  ],
}
