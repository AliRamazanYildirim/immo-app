"use client";

import { useTranslation } from "@/lib/i18n/TranslationProvider";

export interface SearchPopupProps {
  isPopup: boolean;
  handlePopup: () => void;
}

export default function SearchPopup({
  isPopup,
  handlePopup,
}: SearchPopupProps) {
  const { t } = useTranslation();

  return (
    <div className={`search-popup ${isPopup ? "active" : ""}`}>
      <div className="search-popup__overlay search-toggler" onClick={handlePopup}>
        <button
          type="button"
          className="search-popup__close-icon"
          onClick={(event) => {
            // Neden? Buton overlay'in içinde; yayılırsa handlePopup iki kez çalışır.
            event.stopPropagation();
            handlePopup();
          }}
          aria-label={t.common.a11y.closeSearch}
        >
          <span className="icon-plus" aria-hidden="true"></span>
        </button>
      </div>
      <div className="search-popup__content">
        <form action="#">
          <label htmlFor="search" className="sr-only">
            {t.common.search.label}
          </label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder={t.common.search.placeholder}
          />
          <button
            type="submit"
            aria-label={t.common.search.submit}
            className="btn-box"
          >
            <i className="icon-search-interface-symbol" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
