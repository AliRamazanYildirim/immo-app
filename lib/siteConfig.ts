/**
 * Merkezi Site Konfigürasyonu
 * Tüm iletişim bilgileri ve site ayarları burada yönetilir.
 * Bu dosyayı düzenleyerek tüm sayfalardaki bilgiler otomatik güncellenir.
 */

export interface CompanyConfig {
  name: string;
  slogan: string;
  description: string;
  foundedYear: number;
  copyrightYear: number;
}

export interface ContactConfig {
  email: string;
  phone: string;
  phoneRaw: string;
}

export interface AddressConfig {
  street: string;
  zipCode: string;
  city: string;
  country: string;
  full: string;
  multiLine: string;
}

export interface MapsConfig {
  embedUrl: string;
}

export interface SocialConfig {
  facebook: string;
  instagram: string;
  twitter: string;
  tiktok: string;
  youtube: string;
  linkedin: string;
  dribbble: string;
}

export interface LogosConfig {
  main: string;
  light: string;
  redWhite: string;
  whiteRed: string;
  white: string;
  red: string;
  favicon: string;
}

export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: string;
  siteUrl: string;
}

export interface SiteConfig {
  company: CompanyConfig;
  contact: ContactConfig;
  address: AddressConfig;
  maps: MapsConfig;
  social: SocialConfig;
  logos: LogosConfig;
  seo: SEOConfig;
}

const siteConfig: SiteConfig = {
  // Şirket Bilgileri
  company: {
    name: "ARY Tech Solutions",
    slogan: "Creative Architecture",
    description:
      "Delivering excellence in contemporary architecture, luxury interior design, and turnkey construction management across Germany and Europe.",
    foundedYear: 2020,
    copyrightYear: new Date().getFullYear(),
  },

  // İletişim Bilgileri
  contact: {
    email: "aliramazanyildirim@gmail.com",
    phone: "+49 151 67145187",
    phoneRaw: "+4915167145187", // tel: link için boşluksuz versiyon
  },

  // Adres Bilgileri
  address: {
    street: "Hebelstraße 1",
    zipCode: "77880",
    city: "Sasbach",
    country: "Germany",
    full: "Hebelstraße 1, 77880 Sasbach Germany",
    multiLine: "Hebelstraße 1,\n77880 Sasbach Germany",
  },

  // Google Maps
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.8876374917186!2d7.9277!3d48.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790f6c2e3d1e5c5%3A0x1234567890abcdef!2sHebelstra%C3%9Fe%201%2C%2077880%20Sasbach%2C%20Germany!5e0!3m2!1sde!2sde!4v1234567890",
  },

  // Sosyal Medya Linkleri
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://x.com/",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
    dribbble: "#",
  },

  // Logo Yolları (Tüm logolar tek bir klasörde: /assets/img/logo/)
  logos: {
    main: "/assets/img/logo/logo-red-white.png", // Aktif Koyu Başlık Logosu (Kırmızı Üçgen + Beyaz Yazı)
    light: "/assets/img/logo/logo-red.png", // Açık Başlık Logosu (Tam Kırmızı)
    redWhite: "/assets/img/logo/logo-red-white.png", // 1. Varyant: Kırmızı Üçgen + Beyaz Yazı
    whiteRed: "/assets/img/logo/logo-white-red.png", // 2. Varyant: Beyaz Üçgen + Kırmızı Yazı
    white: "/assets/img/logo/logo-white.png", // 3. Varyant: Tam Beyaz
    red: "/assets/img/logo/logo-red.png", // 4. Varyant: Tam Kırmızı
    favicon: "/favicon.ico",
  },

  // SEO ve Meta Bilgileri
  seo: {
    defaultTitle: "ARY Tech Solutions - Creative Architecture",
    titleTemplate: "%s | ARY Tech Solutions",
    description: "Professional architecture and design services in Germany",
    keywords: ["architecture", "design", "construction", "Germany", "Sasbach"],
    ogImage: "/assets/img/og-image.jpg",
    siteUrl: "https://example.com",
  },
};

// Yardımcı fonksiyonlar
export const getMailtoLink = (): string => `mailto:${siteConfig.contact.email}`;
export const getTelLink = (): string => `tel:${siteConfig.contact.phoneRaw}`;
export const getFullAddress = (): string => siteConfig.address.full;

export default siteConfig;

