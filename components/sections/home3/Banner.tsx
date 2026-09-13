import { getTranslations } from "@/lib/i18n/server";
import BannerSlider from "./BannerSlider";

/** Slider client'ta çalışır; metin sunucuda seçilip prop olarak verilir. */
export default async function Banner() {
  const { t } = await getTranslations();

  return <BannerSlider content={t.home.banner3} />;
}
