import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("default.About");
  return {
    title: t("title"),
  };
}

export default async function Home() {
  const t = await getTranslations("default.About");
  return <h1>{t("title")}</h1>;
}
