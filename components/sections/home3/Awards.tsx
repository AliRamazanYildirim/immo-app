import { getTranslations } from "@/lib/i18n/server";

export default async function Awards() {
  const { t } = await getTranslations();
  const awards = t.home.awards;

  return (
    <section className="awards-one">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>{awards.eyebrow}</h5>
          </div>
          <h2>{awards.title}</h2>
        </div>
        <div className="awards-one__inner">
          <ul>
            {awards.items.map((item) => (
              <li key={item.project} className="awards-one__single">
                <div className="content-box">
                  <div className="date-box">
                    <span>{awards.month}</span>
                    <h2>{awards.day}</h2>
                  </div>
                  <div className="logo-box">
                    <img
                      src="/assets/img/resource/awards-v1-logo1.webp"
                      alt={awards.logoAlt}
                      decoding="async"
                      loading="lazy"
                      width={80}
                      height={77}
                    />
                  </div>
                  <div className="text-box">
                    <p>{item.project}</p>
                    <h2>{item.award}</h2>
                  </div>
                </div>
                <div className="awards-one__img">
                  <img
                    className="awards-one__img-hover"
                    src={item.image}
                    alt={`${item.award} — ${item.project}`}
                    decoding="async"
                    loading="lazy"
                    width={220}
                    height={95}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
