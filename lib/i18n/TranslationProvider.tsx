"use client";

/**
 * Client component'ler için çeviri context'i.
 *
 * Sözlük sunucuda (app/[locale]/layout.tsx) yüklenir ve buradan aşağıya
 * aktarılır; böylece 4 dilin tamamı bundle'a girmez, sadece aktif dil gelir.
 */

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import { localizedHref } from "./routing";
import type { Dictionary } from "./types";

type TranslationContextValue = {
  locale: Locale;
  t: Dictionary;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

export type TranslationProviderProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
};

export function TranslationProvider({
  locale,
  dictionary,
  children,
}: TranslationProviderProps) {
  return (
    <TranslationContext value={{ locale, t: dictionary }}>
      {children}
    </TranslationContext>
  );
}

export function useTranslation(): TranslationContextValue {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used inside a TranslationProvider");
  }
  return context;
}

/** Aktif dile göre iç link üretir: href("/about") -> "/de/about" */
export function useLocalizedHref(): (path: string) => string {
  const { locale } = useTranslation();
  return (path: string) => localizedHref(locale, path);
}
