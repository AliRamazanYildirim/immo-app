"use client";

/**
 * Dil değiştirici — masaüstü dropdown varyantı.
 *
 * Tasarım notları:
 * - Bayrak ikonu YOK: bayrak ülkeyi temsil eder, dili değil (DE/EN/FR/TR + endonym).
 * - Projenin tasarım dili keskin: border-radius 0, uppercase, 700, DM Sans.
 * - Aktif dil rengi TEK başına taşımaz — check ikonu + aria-selected de verir.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { locales, localeMeta } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/routing";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

/** İmleç tetikleyiciden panele geçerken menünün kapanmaması için bekleme süresi. */
const HOVER_CLOSE_DELAY_MS = 180;

/** Listbox klavye gezinmesi: tuşa göre sıradaki seçenek; ilgisiz tuşta null. */
function getNextOptionIndex(
  key: string,
  index: number,
  lastIndex: number,
): number | null {
  switch (key) {
    case "ArrowDown":
      return index === lastIndex ? 0 : index + 1;
    case "ArrowUp":
      return index === 0 ? lastIndex : index - 1;
    case "Home":
      return 0;
    case "End":
      return lastIndex;
    default:
      return null;
  }
}

export type LanguageSwitcherProps = {
  /** Header varyantına göre tetikleyici rengini ayarlar. */
  tone?: "light" | "dark";
  className?: string;
};

export default function LanguageSwitcher({
  tone = "light",
  className,
}: LanguageSwitcherProps) {
  const { locale, t } = useTranslation();
  const pathname = usePathname() || "/";

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const listboxId = useId();

  const closeTimer = useRef<number | null>(null);
  /** Hover yalnızca gerçek imleci olan cihazlarda; dokunmatikte tıklama geçerli. */
  const hoverCapable = useRef(false);

  const close = useCallback((returnFocus = false) => {
    setIsOpen(false);
    setActiveIndex(-1);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    hoverCapable.current = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!hoverCapable.current) return;
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!hoverCapable.current) return;
    // Kısa gecikme: imleç tetikleyiciden panele geçerken menü kapanmasın
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
      setActiveIndex(-1);
      closeTimer.current = null;
    }, HOVER_CLOSE_DELAY_MS);
  };

  // Dışarı tıklama ve Escape ile kapat
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close(true);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  // Klavye ile açıldığında ilgili seçeneğe odaklan
  useEffect(() => {
    if (isOpen && activeIndex >= 0) itemRefs.current[activeIndex]?.focus();
  }, [isOpen, activeIndex]);

  const openAt = (index: number) => {
    setIsOpen(true);
    setActiveIndex(index);
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openAt(0);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      openAt(locales.length - 1);
    }
  };

  const handleItemKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Tab") {
      close();
      return;
    }

    const nextIndex = getNextOptionIndex(event.key, index, locales.length - 1);
    if (nextIndex === null) return;

    event.preventDefault();
    setActiveIndex(nextIndex);
  };

  const current = localeMeta[locale];

  return (
    <div
      ref={rootRef}
      className={`lang-switch lang-switch--${tone} ${isOpen ? "is-open" : ""} ${
        className ?? ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={triggerRef}
        type="button"
        className="lang-switch__trigger"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-label={t.common.language.switcherAria}
        onClick={() => (isOpen ? close() : setIsOpen(true))}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="lang-switch__code">{current.shortCode}</span>
        <span className="lang-switch__caret icon-down-arrow" aria-hidden="true" />
      </button>

      <ul
        id={listboxId}
        className="lang-switch__panel"
        role="listbox"
        aria-label={t.common.language.switcherLabel}
        aria-hidden={!isOpen}
      >
        {locales.map((item, index) => {
          const meta = localeMeta[item];
          const isActive = item === locale;

          return (
            <li key={item} role="none">
              <Link
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                href={switchLocalePath(pathname, item)}
                hrefLang={meta.hrefLang}
                lang={meta.htmlLang}
                role="option"
                aria-selected={isActive}
                className={`lang-switch__option ${
                  isActive ? "is-active" : ""
                }`}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => close()}
                onKeyDown={(event) => handleItemKeyDown(event, index)}
              >
                <span className="lang-switch__option-code">
                  {meta.shortCode}
                </span>
                <span className="lang-switch__option-name">
                  {meta.nativeName}
                </span>
                <span
                  className="lang-switch__option-check icon-check-mark"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
