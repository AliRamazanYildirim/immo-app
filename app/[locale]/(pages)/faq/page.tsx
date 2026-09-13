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
    path: "/faq",
    title: (t) => t.pages.faq.breadcrumbTitle,
  });
}

export default function Page() {
  return <Content />;
}
