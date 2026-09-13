import type { Metadata } from "next";
import { createMetadata } from "@/lib/i18n/metadata";
import Content from "./Content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({
    locale,
    path: "/blog-details",
    title: (t) => t.blog.details.breadcrumbTitle,
  });
}

export default function Page() {
  return <Content />;
}
