import Link from "next/link";
import { getTranslations } from "@/lib/i18n/server";

export type NewsProps = {
  /** Başlık bloğu gösterilsin mi (blog liste sayfasında gizlenir). */
  showHeading?: boolean;
  /** home3 bölümü arka planlı `style2` varyantını kullanır. */
  variant?: "style2";
};

/** style2 varyantı kendi görsel setini ve kart ölçüsünü kullanır. */
const variantImages = [
  "/assets/img/blog/blog-v2-img1.webp",
  "/assets/img/blog/blog-v2-img2.webp",
  "/assets/img/blog/blog-v2-img3.webp",
];

/** Blog kartları — home2, home3 ve blog listesi aynı içeriği paylaşır. */
export default async function News({ showHeading = true, variant }: NewsProps) {
  const { t, href } = await getTranslations();
  const { eyebrow, title } = t.home.news;
  const posts = t.blog.posts;

  const isStyle2 = variant === "style2";
  const animations = ["fadeInLeft", "fadeInRight", "fadeInLeft"];

  return (
    <section className={`blog-one ${isStyle2 ? "style2" : ""}`.trim()}>
      {isStyle2 && (
        <div
          className="blog-two__bg"
          style={{
            backgroundImage: "url(/assets/img/background/blog-v2-bg.webp)",
          }}
        ></div>
      )}
      <div className="container">
        {showHeading && (
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>{eyebrow}</h5>
            </div>
            <h2>{title}</h2>
          </div>
        )}

        <div className="row">
          {posts.map((post, index) => {
            const image = isStyle2 ? variantImages[index] : post.image;
            const postTitle = `${post.titleLine1} ${post.titleLine2}`;

            return (
              <div
                key={post.titleLine1}
                className={`col-xl-4 col-lg-4 wow ${animations[index % animations.length]}`}
                data-wow-delay={`${index * 100}ms`}
                data-wow-duration="1500ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <div className="inner">
                      <img
                        src={image}
                        alt={post.alt}
                        decoding="async"
                        loading="lazy"
                        width={370}
                        height={isStyle2 ? 300 : 330}
                      />
                      <div className="overlay-icon">
                        <Link
                          href={href("/blog-details")}
                          aria-label={postTitle}
                        >
                          <span className="icon-plus" aria-hidden="true"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-one__single-content">
                    <ul className="meta-info">
                      <li>
                        <p>
                          <Link href={href("/blog")}>{post.category}</Link>
                        </p>
                      </li>
                      <li>
                        <p>{post.date}</p>
                      </li>
                    </ul>
                    <h2>
                      <Link href={href("/blog-details")}>
                        {post.titleLine1} <br />
                        {post.titleLine2}
                      </Link>
                    </h2>
                    <div className="btn-box">
                      <Link href={href("/blog-details")}>
                        {t.common.actions.readMore}{" "}
                        <span
                          className={isStyle2 ? "icon-plus" : "icon-left-arrow"}
                          aria-hidden="true"
                        ></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
