"use client";

/**
 * Client component'ler için çeviri context'i.
 *
 * Neden yalnızca `common`? Context'e verilen her şey RSC payload'u ile her
 * sayfada tarayıcıya gider. Sayfa ve bölüm metinleri Server Component'lerde
 * `getTranslations()` ile okunur; etkileşimli client bileşenler ihtiyaç
 * duydukları metni server parent'larından prop olarak alır.
 */

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import { localizedHref } from "./routing";
import type { ClientDictionary } from "./types";

type TranslationContextValue = {
  locale: Locale;
  t: ClientDictionary;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

export type TranslationProviderProps = {
  locale: Locale;
  dictionary: ClientDictionary;
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
