import Link from "next/link";
import Layout from "@/components/layout/Layout";
import BlogSidebar from "@/components/sections/blog/BlogSidebar";
import { getTranslations } from "@/lib/i18n/server";

export default async function BlogSidebarPage() {
  const { t, href } = await getTranslations();
  const page = t.blog.sidebarPage;
  const posts = t.blog.sidebarPosts;

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={page.breadcrumbTitle}
      breadcrumbBg={page.breadcrumbBg}
    >
      <section className="blog-sidebar">
        <div className="container">
          <div className="row">
            {/*Start Blog Sidebar Content */}
            <div className="col-xl-8">
              <div className="blog-sidebar__content">
                {posts.map((post) => (
                  <div key={post.titleLine1} className="blog-sidebar__single">
                    <div className="blog-sidebar__single-img">
                      <div className="inner">
                        <img
                          src={post.image}
                          alt={post.alt}
                          decoding="async"
                          loading="lazy"
                          width={740}
                          height={450}
                        />
                      </div>
                    </div>

                    <div className="blog-sidebar__single-content">
                      <ul className="meta-box">
                        <li>
                          <div className="icon">
                            <span className="icon-calendar" aria-hidden="true"></span>
                          </div>
                          <div className="text">
                            <p>{post.date}</p>
                          </div>
                        </li>

                        <li>
                          <div className="icon">
                            <span className="icon-user" aria-hidden="true"></span>
                          </div>
                          <div className="text">
                            <p>{post.author}</p>
                          </div>
                        </li>
                      </ul>

                      <h2>
                        <Link href={href("/blog-details")}>
                          {post.titleLine1} <br />
                          {post.titleLine2}
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link className="thm-btn" href={href("/blog-details")}>
                          <span className="txt">
                            {t.common.actions.readMore}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*End Blog Sidebar Content */}

            {/*Start Sidebar */}
            <div className="col-xl-4">
              <BlogSidebar />
            </div>
            {/*End Sidebar */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
