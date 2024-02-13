import { auth } from "@clerk/nextjs";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = auth();
  const t = await getTranslations("default.Dashboard");
  if (!userId) {
    redirect("/");
  }
  return <div>{t("title")}</div>;
}
