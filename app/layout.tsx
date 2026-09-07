import type { Metadata } from "next";
import "react-modal-video/css/modal-video.css";
import "../public/assets/css/style.css";
import "../public/assets/css/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { dM_Sans } from "@/lib/font";
import siteConfig from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    siteName: siteConfig.company.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.defaultTitle,
      },
    ],
  },
  icons: {
    icon: siteConfig.logos.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dM_Sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
