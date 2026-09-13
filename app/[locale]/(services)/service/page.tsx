import type { Metadata } from "next";
import { createMetadata } from "@/lib/i18n/metadata";
import { initRequestLocale, type LocalePageProps } from "@/lib/i18n/server";
import Content from "./Content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({
    locale,
    path: "/service",
    title: (t) => t.services.overview.breadcrumbTitle,
  });
}

export default async function Page({ params }: LocalePageProps) {
  await initRequestLocale(params);

  return <Content />;
}
