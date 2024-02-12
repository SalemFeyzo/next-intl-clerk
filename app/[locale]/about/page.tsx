import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("About");
  return {
    title: t("title"),
  };
}

export default function Home() {
  const t = useTranslations("About");
  return <h1>{t("title")}</h1>;
}
