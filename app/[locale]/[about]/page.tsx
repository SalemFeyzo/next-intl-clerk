import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("About");
  return <h1>{t("title")}</h1>;
}
