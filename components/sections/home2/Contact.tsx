"use client";

import CounterUp from "@/components/elements/CounterUp";
import { useTranslation } from "@/lib/i18n/TranslationProvider";

export default function Contact() {
  const { t } = useTranslation();
  const form = t.home.contactForm;

  return (
    <section className="contact-one">
      <div
        className="contact-one__bg"
        style={{
          backgroundImage: "url(/assets/img/background/contact-v1-bg.webp)",
        }}
      >
        <div className="contact-one__counter">
          <ul>
            {form.counters.map((counter) => (
              <li key={counter.labelLine1}>
                <div className="content-box">
                  <h2 className="count">
                    <CounterUp end={counter.value} />{" "}
                    <span className="plus">+</span>
                  </h2>
                  <p>
                    {counter.labelLine1} <br />
                    {counter.labelLine2}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="contact-one__pattern"
        style={{
          backgroundImage: "url(/assets/img/pattern/contact-v1-pattern.webp)",
        }}
      ></div>
      <div className="contact-one__img">
        <img
          src="/assets/img/resource/contact-v1-img1.webp"
          alt={form.imageAlt}
          decoding="async"
          loading="lazy"
          width={502}
          height={690}
        />
      </div>
      <div className="container clearfix">
        <div className="contact-one__inner">
          <div
            className="contact-one__form wow animated fadeInRight"
            data-wow-delay="0.1s"
          >
            <div className="title-box">
              <p>{form.eyebrow}</p>
              <h2>{form.title}</h2>
            </div>

            <form action="#">
              <div className="form-group">
                <label htmlFor="home-contact-name" className="sr-only">
                  {form.fields.name}
                </label>
                <input
                  id="home-contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder={form.fields.name}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="home-contact-email" className="sr-only">
                  {form.fields.email}
                </label>
                <input
                  id="home-contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={form.fields.email}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="home-contact-phone" className="sr-only">
                  {form.fields.phone}
                </label>
                <input
                  id="home-contact-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder={form.fields.phone}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="home-contact-message" className="sr-only">
                  {form.fields.message}
                </label>
                <textarea
                  id="home-contact-message"
                  name="message"
                  placeholder={form.fields.message}
                  required
                ></textarea>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="button-box">
                    <button
                      className="thm-btn"
                      type="submit"
                      data-loading-text={form.loading}
                    >
                      <span className="txt">{form.submit}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
