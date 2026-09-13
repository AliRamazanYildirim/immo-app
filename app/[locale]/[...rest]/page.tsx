import { notFound } from "next/navigation";

/**
 * Neden? `[locale]` dinamik segment olduğu için eşleşmeyen yollar
 * (örn. /de/olmayan-sayfa) `app/[locale]/not-found.tsx`'e hiç ulaşmaz ve
 * Next'in çıplak 404'ü gösterilir. Bu catch-all, isteği locale layout'u
 * içinde notFound()'a düşürür; böylece çevrilmiş 404 sayfası render edilir.
 */
export default function CatchAllNotFound(): never {
  notFound();
}
