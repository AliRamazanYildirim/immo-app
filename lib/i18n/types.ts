/**
 * Sözlük tip sözleşmesi.
 *
 * Almanca sözlük kaynak dildir; tipler ondan türetilir. Böylece bir dilde
 * eksik veya fazla anahtar varsa build sırasında tip hatası alınır.
 */

import type { CommonDict } from "./locales/de/common";
import type { HomeDict } from "./locales/de/home";
import type { PagesDict } from "./locales/de/pages";
import type { ServicesDict } from "./locales/de/services";
import type { BlogDict } from "./locales/de/blog";
import type { SharedDict } from "./locales/de/shared";

export type Dictionary = {
  common: CommonDict;
  home: HomeDict;
  pages: PagesDict;
  services: ServicesDict;
  blog: BlogDict;
  shared: SharedDict;
};

/** İstemciye giden kısım: yalnızca site geneli (header, menü, butonlar) metinleri. */
export type ClientDictionary = Pick<Dictionary, "common">;
