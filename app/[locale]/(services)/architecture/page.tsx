import ServiceDetail from "@/components/sections/services/ServiceDetail";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({
    locale,
    path: "/architecture",
    title: (t) => t.services.details["architecture"].breadcrumbTitle,
  });
}

export default function Page() {
  return <ServiceDetail slug="architecture" />;
}
