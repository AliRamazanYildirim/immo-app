import Link from "next/link";
import Layout from "@/components/layout/Layout";
import BlogSidebar from "@/components/sections/blog/BlogSidebar";
import { getTranslations } from "@/lib/i18n/server";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default async function BlogDetailsPage() {
  const { t, href } = await getTranslations();
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

                <CommentList comments={comments} />

                <CommentForm form={form} loadingText={t.pages.contact.loading} />
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
