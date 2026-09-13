import { DM_Sans } from "next/font/google";

/**
 * DM Sans — build sırasında indirilip projeyle birlikte sunulur.
 *
 * Neden next/font: ziyaretçinin tarayıcısı Google'a istek atmaz. Almanya'da
 * Google Fonts'u doğrudan gömmek Datenschutz açısından sorunlu olduğu için
 * (LG München I, 3 O 17493/20) fontun self-hosted olması gerekir.
 *
 * latin-ext altkümesi Türkçe (ğ, ş, ı, İ) karakterleri için gerekli.
 */
export const dM_Sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});
