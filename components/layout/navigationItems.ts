/**
 * Navigasyon ağacı — Menu, MobileMenu ve Footer tek kaynaktan beslenir.
 * Link değiştiğinde yalnızca burası güncellenir.
 */

import type { ClientDictionary } from "@/lib/i18n/types";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/** Üst öğe, alt öğelerinden biri açıksa aktif sayılır. */
export function isNavItemActive(item: NavItem, pathWithoutLocale: string): boolean {
  if (item.children) {
    return item.children.some((child) => child.href === pathWithoutLocale);
  }
  return item.href === pathWithoutLocale;
}

export function buildNavigation(t: ClientDictionary): NavItem[] {
  const { nav } = t.common;

  return [
    {
      label: nav.home,
      href: "/",
      children: [
        { label: nav.homeOne, href: "/" },
        { label: nav.homeTwo, href: "/index-2" },
        { label: nav.homeThree, href: "/index-3" },
      ],
    },
    { label: nav.about, href: "/about" },
    {
      label: nav.services,
      href: "/service",
      children: [
        { label: nav.servicesOverview, href: "/service" },
        { label: nav.architecture, href: "/architecture" },
        { label: nav.interiorDesign, href: "/interior-design" },
        { label: nav.buildingRenovation, href: "/building-renovation" },
        { label: nav.constructionSite, href: "/construction-site" },
      ],
    },
    {
      label: nav.pages,
      href: "/team",
      children: [
        { label: nav.team, href: "/team" },
        { label: nav.teamDetails, href: "/team-details" },
        { label: nav.projects, href: "/projects" },
        { label: nav.projectDetails, href: "/project-details" },
        { label: nav.testimonials, href: "/testimonials" },
        { label: nav.faq, href: "/faq" },
        { label: nav.blog, href: "/blog" },
      ],
    },
    { label: nav.contact, href: "/contact" },
  ];
}
