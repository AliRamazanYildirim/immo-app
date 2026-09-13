"use client";

import Link from "next/link";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export interface BreadcrumbProps {
  breadcrumbTitle: string;
  breadcrumbBg?: string;
}

export default function Breadcrumb({
  breadcrumbTitle,
  breadcrumbBg,
}: BreadcrumbProps) {
  const { t } = useTranslation();
  const href = useLocalizedHref();

  const bgImage = breadcrumbBg
    ? breadcrumbBg.startsWith("/")
      ? breadcrumbBg
      : `/${breadcrumbBg}`
    : "/assets/img/background/page-header-bg.webp";

  const webpImage = bgImage.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <section className="page-header">
      <div className="page-header__bg">
        <picture>
          <source srcSet={webpImage} type="image/webp" />
          <img
            src={bgImage}
            alt=""
            className="page-header__bg-img"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={1920}
            height={500}
          />
        </picture>
      </div>

      <div className="container">
        <div className="page-header__inner text-center">
          <ul className="thm-breadcrumb">
            <li>
              <Link href={href("/")}>{t.common.breadcrumb.home}</Link>
            </li>
            <li className="active">{breadcrumbTitle}</li>
          </ul>
          <h1>{breadcrumbTitle}</h1>
        </div>
      </div>
    </section>
  );
}
