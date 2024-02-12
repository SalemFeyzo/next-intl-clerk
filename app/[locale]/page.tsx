import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Button>Click</Button>
    </div>
  );
}
