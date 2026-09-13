import type { BlogDict } from "@/lib/i18n/locales/de/blog";

export type CommentFormProps = {
  form: BlogDict["details"]["form"];
  /** Gönderim sırasında butonda gösterilen metin. */
  loadingText: string;
};

export default function CommentForm({ form, loadingText }: CommentFormProps) {
  return (
    <div className="blog-details__content-form">
      <div className="title-box">
        <h2>{form.title}</h2>
        <p>{form.note}</p>
      </div>

      <form action="#" className="contact-page__form contact-form-validated">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="contact-page__input-box">
              <label htmlFor="comment-name" className="sr-only">
                {form.name}
              </label>
              <input
                id="comment-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder={form.name}
                required
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="contact-page__input-box">
              <label htmlFor="comment-email" className="sr-only">
                {form.email}
              </label>
              <input
                id="comment-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder={form.email}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="contact-page__input-box">
              <label htmlFor="comment-website" className="sr-only">
                {form.website}
              </label>
              <input
                id="comment-website"
                type="url"
                name="website"
                autoComplete="url"
                inputMode="url"
                placeholder={form.website}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="contact-page__input-box">
              <label htmlFor="comment-message" className="sr-only">
                {form.message}
              </label>
              <textarea
                id="comment-message"
                name="message"
                placeholder={form.message}
                required
              ></textarea>
            </div>
            <div className="contact-page__btn">
              <button
                className="thm-btn"
                type="submit"
                data-loading-text={loadingText}
              >
                <span className="txt">{form.submit}</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
