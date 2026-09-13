"use client";

import { useScrolled } from "@/lib/hooks/useScrolled";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function BackToTop() {
  const { t } = useTranslation();
  const isScrolled = useScrolled();

  if (!isScrolled) return null;

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
