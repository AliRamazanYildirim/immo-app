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
    path: "/team",
    title: (t) => t.pages.team.breadcrumbTitle,
  });
}

export default function Page() {
  return <Content />;
}
