import { getTranslations } from "@/lib/i18n/server";
import BeforeAfterGallery from "./BeforeAfterGallery";

export default async function BeforeAfter() {
  const { t } = await getTranslations();
  const { eyebrow, titleLine1, titleLine2, text, ...gallery } =
    t.home.beforeAfter;

  return (
    <section className="before-after-one" id="transformation">
      <div className="container">
        {/* Section Title Header */}
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>{eyebrow}</h5>
          </div>
          <h2>
            {titleLine1} <br />
            {titleLine2}
          </h2>
          <p>{text}</p>
        </div>

        <BeforeAfterGallery content={gallery} />
      </div>
    </section>
  );
}
