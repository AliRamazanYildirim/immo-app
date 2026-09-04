import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="active menu-item-has-children">
          <Link href="#">Home</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/">Home One</Link>
            </li>
            <li>
              <Link href="/index-2">Home Two</Link>
            </li>
            <li>
              <Link href="/index-3">Home Three</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Services</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/architecture">Architecture</Link>
            </li>
            <li>
              <Link href="/interior-design">Interior Design</Link>
            </li>
            <li>
              <Link href="/building-renovation">Building Renovation</Link>
            </li>
            <li>
              <Link href="/construction-site">Construction Site</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Pages</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team-details">Team Details</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/project-details">Project Details</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/faq">Faq</Link>
            </li>
            <li>
              <Link href="/error">Error</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Blog</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog-sidebar">Blog Sidebar</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
