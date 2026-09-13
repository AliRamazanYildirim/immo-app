"use client";

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import BlogSidebar from "@/components/sections/blog/BlogSidebar";
import {
  useLocalizedHref,
  useTranslation,
} from "@/lib/i18n/TranslationProvider";

export default function BlogDetailsPage() {
  const { t } = useTranslation();
  const href = useLocalizedHref();
  const page = t.blog.details;
  const { comments, form, meta } = page;

  const metaLine = [
    meta.date,
    meta.category,
    `${meta.byLabel} ${meta.author}`,
    meta.commentsLabel.replace("{count}", String(comments.items.length)),
  ].join(" _ ");

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      {/*Start Blog Details */}
      <section className="blog-details">
        <div className="container">
          <div className="row">
            {/*Start Blog Details Content */}
            <div className="col-xl-8">
              <div className="blog-details__content">
                <div className="blog-details__content-img1">
                  <img
                    src="/assets/img/blog/blog-details-img1.webp"
                    alt={page.imageAlts.main}
                    decoding="async"
                    loading="lazy"
                    width={740}
                    height={450}
                  />
                </div>

                <div className="blog-details__content-text1">
                  <h2>{page.heading1}</h2>
                  <p className="text1">{metaLine}</p>
                  <p className="text2">{page.text1}</p>
                </div>

                <div className="blog-details__content-img2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="blog-details__content-img2-single">
                        <img
                          src="/assets/img/blog/blog-details-img2.webp"
                          alt={page.imageAlts.secondary1}
                          decoding="async"
                          loading="lazy"
                          width={355}
                          height={240}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="blog-details__content-img2-single">
                        <img
                          src="/assets/img/blog/blog-details-img3.webp"
                          alt={page.imageAlts.secondary2}
                          decoding="async"
                          loading="lazy"
                          width={355}
                          height={240}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-details__content-text2">
                  <h2>{page.heading2}</h2>
                  <p>{page.text2}</p>
                </div>

                <blockquote className="blog-details__content-text3 text-center">
                  <div className="icon-box">
                    <span
                      className="icon-right-quotation-mark"
                      aria-hidden="true"
                    ></span>
                  </div>

                  <div className="text-box">
                    <h4>{page.quote}</h4>
                    <p>{page.quoteAuthor}</p>
                  </div>
                </blockquote>

                <div className="blog-details__content-text4">
                  <div className="tag-box">
                    <div className="title">
                      <h2>{page.postedIn}</h2>
                    </div>

                    <div className="tag-box-list">
                      <ul>
                        {page.tags.map((tag) => (
                          <li key={tag}>
                            <Link href={href("/blog")}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="icon-box">
                    <Link href={href("/blog")} aria-label={page.shareAria}>
                      <span className="icon-share" aria-hidden="true"></span>
                    </Link>
                  </div>
                </div>

                <div className="comment-one">
                  <h3 className="comment-one__title">
                    {comments.title.replace(
                      "{count}",
                      String(comments.items.length),
                    )}
                  </h3>
                  {comments.items.map((comment) => (
                    <div key={comment.author} className="comment-one__single">
                      <div className="comment-one__image">
                        <img
                          src={comment.avatar}
                          alt=""
                          decoding="async"
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="comment-one__content">
                        <h3>{comment.author}</h3>
                        <p>{comment.text}</p>
                        <span>
                          {comment.date}{" "}
                          <Link href="#" className="comment-one__btn">
                            {comments.replyLabel}
                          </Link>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="blog-details__content-form">
                  <div className="title-box">
                    <h2>{form.title}</h2>
                    <p>{form.note}</p>
                  </div>

                  <form
                    action="#"
                    className="contact-page__form contact-form-validated"
                  >
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
                            data-loading-text={t.pages.contact.loading}
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
            {/*End Blog Details Content */}

            {/*Start Sidebar */}
            <div className="col-xl-4">
              <BlogSidebar />
            </div>
            {/*End Sidebar */}
          </div>
        </div>
      </section>
      {/*End Blog Details */}
    </Layout>
  );
}
