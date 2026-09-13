/**
 * Sosyal medya bağlantıları için tek kaynak.
 *
 * Neden hook yok? Hem Server Component'lerden (footer, detay sayfaları) hem
 * client bileşenlerden (slider, mobil menü) kullanılıyor; erişilebilirlik
 * metni çağıran taraftan `ariaLabelTemplate` olarak gelir.
 */

import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

/** Marka adları dile göre değişmez, sözlükte tutulmaz. */
const networkLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  twitter: "X",
  linkedin: "LinkedIn",
  dribbble: "Dribbble",
} as const;

export type SocialNetwork = keyof typeof networkLabels;

export type SocialIcon = {
  network: SocialNetwork;
  icon: string;
  className?: string;
};

/** Şablon tasarımındaki ikon setleri — her set bir header/bölüm varyantına ait. */
export const socialIconSets = {
  outline: [
    { network: "facebook", icon: "icon-facebook" },
    { network: "instagram", icon: "icon-instagram" },
    { network: "tiktok", icon: "icon-tik-tok" },
    { network: "youtube", icon: "icon-youtube" },
  ],
  slider: [
    { network: "facebook", icon: "icon-facebook-1" },
    { network: "twitter", icon: "icon-x-twitter" },
    { network: "dribbble", icon: "icon-dribbble" },
    { network: "instagram", icon: "icon-letter-v" },
  ],
  profile: [
    { network: "facebook", icon: "icon-facebook" },
    { network: "twitter", icon: "icon-x-twitter", className: "tw" },
    { network: "instagram", icon: "icon-instagram", className: "ins" },
    { network: "linkedin", icon: "icon-linkedin-big-logo", className: "in" },
  ],
  fontAwesome: [
    { network: "facebook", icon: "fab fa-facebook-f" },
    { network: "twitter", icon: "fa-brands fa-x-twitter" },
    { network: "instagram", icon: "fab fa-instagram" },
    { network: "linkedin", icon: "fab fa-linkedin-in" },
    { network: "youtube", icon: "fab fa-youtube" },
  ],
} as const satisfies Record<string, readonly SocialIcon[]>;

/** Sözlükteki "… {network}" şablonunu ağ adıyla doldurur. */
export function socialProfileLabel(
  template: string,
  network: SocialNetwork,
): string {
  return template.replace("{network}", networkLabels[network]);
}

export type SocialLinkProps = SocialIcon & {
  /** Sözlükteki `common.a11y.socialProfile` şablonu. */
  ariaLabelTemplate: string;
  /** Font Awesome seti <i> ile işaretlenir. */
  iconTag?: "span" | "i";
};

export default function SocialLink({
  network,
  icon,
  className,
  ariaLabelTemplate,
  iconTag: Icon = "span",
}: SocialLinkProps) {
  return (
    <Link
      href={siteConfig.social[network]}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={socialProfileLabel(ariaLabelTemplate, network)}
    >
      <Icon className={icon} aria-hidden="true" />
    </Link>
  );
}
