/** Blog kenar çubuğu — blog detayı ve kenar çubuklu liste paylaşır. */

import Link from "next/link";
import { getTranslations } from "@/lib/i18n/server";

/** Neden sabit? Server Component'te useId yok; sayfa başına tek kenar çubuğu var. */
const SEARCH_INPUT_ID = "blog-sidebar-search";

export default async function BlogSidebar() {
  const { t, href } = await getTranslations();
  const sidebar = t.blog.details.sidebar;

  return (
    <div className="sidebar">
      {/*Start Sidebar Single */}
      <div className="sidebar__single sidebar__search">
        <h3 className="sidebar__title">{sidebar.searchTitle}</h3>
        <form action="#" className="sidebar__search-form">
          <label htmlFor={SEARCH_INPUT_ID} className="sr-only">
            {sidebar.searchTitle}
          </label>
          <input
            id={SEARCH_INPUT_ID}
            type="search"
            name="search"
            placeholder={sidebar.searchPlaceholder}
          />
          <button type="submit" aria-label={t.common.search.submit}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
      {/*End Sidebar Single */}

      {/*Start Sidebar Single */}
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">{sidebar.categoriesTitle}</h3>

        <ul className="sidebar__category-list">
          {sidebar.categories.map((category, index) => (
            <li key={category}>
              <Link
                className={index === 0 ? "active" : undefined}
                href={href("/blog")}
              >
                {category}{" "}
                <span className="icon-left-arrow" aria-hidden="true"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*End Sidebar Single */}

      {/*Start Sidebar Single */}
      <div className="sidebar__single sidebar__recent-post">
        <h3 className="sidebar__title">{sidebar.recentTitle}</h3>

        <ul className="sidebar__recent-post-box">
          {sidebar.recentPosts.map((post) => (
            <li key={post.titleLine1}>
              <div className="inner">
                <div className="img-box">
                  <img
                    src={post.image}
                    alt=""
                    decoding="async"
                    loading="lazy"
                    width={95}
                    height={95}
                  />
                </div>

                <div className="content-box">
                  <h4>
                    <Link href={href("/blog-details")}>
                      {post.titleLine1} <br /> {post.titleLine2}
                    </Link>
                  </h4>
                  <p>
                    <span className="icon-clock" aria-hidden="true"></span>{" "}
                    {post.date}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/*End Sidebar Single */}

      {/*Start Sidebar Single */}
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">{sidebar.tagsTitle}</h3>
        <ul className="sidebar__tags-list clearfix">
          {sidebar.tags.map((tag) => (
            <li key={tag}>
              <Link href={href("/blog")}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/*End Sidebar Single */}
    </div>
  );
}
