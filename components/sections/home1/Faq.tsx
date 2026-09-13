import Accordion from "@/components/elements/Accordion";
import { getTranslations } from "@/lib/i18n/server";

export default async function Faq() {
  const { t } = await getTranslations();
  const { bigTitle, items } = t.home.faq1;

  return (
    <section className="faq-one">
      <div className="shape1">
        <img
          src="/assets/img/shape/faq-v1-shape1.webp"
          alt=""
          loading="lazy"
          decoding="async"
          width={469}
          height={736}
        />
      </div>
      <div className="container clearfix">
        <div className="faq-one__inner">
          <div className="big-title">
            <h2>{bigTitle}</h2>
          </div>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
