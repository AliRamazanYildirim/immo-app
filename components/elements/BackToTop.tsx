"use client";

import { useTranslation } from "@/lib/i18n/TranslationProvider";

export interface BackToTopProps {
  scroll?: boolean;
}

export default function BackToTop({ scroll }: BackToTopProps) {
  const { t } = useTranslation();

  if (!scroll) return null;

  return (
    <a
      className="scroll-top scroll-to-target"
      href="#top"
      aria-label={t.common.a11y.backToTop}
    >
      <i className="icon-top-arrow" aria-hidden="true"></i>
    </a>
  );
}
