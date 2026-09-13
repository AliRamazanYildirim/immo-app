/**
 * Paylaşılan iletişim formu (`contact-two`).
 * İletişim, ekip detayı ve blog detayı sayfalarında aynı işaretleme
 * kopyalanmıştı; alanlar artık parametreyle seçiliyor.
 */

import { getTranslations } from "@/lib/i18n/server";

/** İkili satırda gösterilecek alanlar ve tam genişlik mesaj alanı. */
export type ContactFormField = "name" | "email" | "phone" | "subject" | "website";

export type ContactFormProps = {
  /** Varsayılan: ad, e-posta, telefon, konu. */
  fields?: ContactFormField[];
  /** Gönder butonu metni; verilmezse sözlükteki varsayılan kullanılır. */
  submitLabel?: string;
  title?: string;
  note?: string;
  /**
   * Input id'lerinin öneki. Neden useId değil? Bu bir Server Component;
   * aynı sayfada iki form olursa farklı önek verilmeli.
   */
  idPrefix?: string;
};

const fieldInputProps: Record<
  ContactFormField,
  { type: string; autoComplete?: string; inputMode?: "tel" | "url" }
> = {
  name: { type: "text", autoComplete: "name" },
  email: { type: "email", autoComplete: "email" },
  phone: { type: "tel", autoComplete: "tel", inputMode: "tel" },
  subject: { type: "text" },
  website: { type: "url", autoComplete: "url", inputMode: "url" },
};

export default async function ContactForm({
  fields = ["name", "email", "phone", "subject"],
  submitLabel,
  title,
  note,
  idPrefix = "contact-form",
}: ContactFormProps) {
  const { t } = await getTranslations();
  const page = t.pages.contact;

  // İkili satırlara böl
  const rows: ContactFormField[][] = [];
  for (let index = 0; index < fields.length; index += 2) {
    rows.push(fields.slice(index, index + 2));
  }

  return (
    <div className="contact-two">
      <div className="container">
        <div className="contact-two__inner">
          <div className="title-box">
            <h2>{title ?? page.formTitle}</h2>
            <p>{note ?? page.formNote}</p>
          </div>
          <div className="contact-two__inner-box">
            <form
              action="#"
              className="contact-page__form contact-form-validated"
            >
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                  {row.map((field) => {
                    const inputId = `${idPrefix}-${field}`;
                    const label = page.fields[field];

                    return (
                      <div
                        key={field}
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                      >
                        <div className="contact-page__input-box">
                          <label htmlFor={inputId} className="sr-only">
                            {label}
                          </label>
                          <input
                            id={inputId}
                            name={field}
                            placeholder={label}
                            required={field === "name" || field === "email"}
                            {...fieldInputProps[field]}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="contact-page__input-box">
                    <label htmlFor={`${idPrefix}-message`} className="sr-only">
                      {page.fields.message}
                    </label>
                    <textarea
                      id={`${idPrefix}-message`}
                      name="message"
                      placeholder={page.fields.message}
                      required
                    ></textarea>
                  </div>
                  <div className="contact-page__btn">
                    <button
                      className="thm-btn"
                      type="submit"
                      data-loading-text={page.loading}
                    >
                      <span className="txt">{submitLabel ?? page.submit}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
