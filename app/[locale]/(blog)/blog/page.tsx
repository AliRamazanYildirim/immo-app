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
    path: "/blog",
    title: (t) => t.blog.list.breadcrumbTitle,
  });
}

export default function Page() {
  return <Content />;
}
