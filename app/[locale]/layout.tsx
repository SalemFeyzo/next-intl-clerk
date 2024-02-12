import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { arSA, enUS, trTR } from "@clerk/localizations";
import { NextIntlClientProvider, useMessages } from "next-intl";
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
} from "next-intl/server";

import Header from "@/components/Header";
import "./globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });

  return {
    metadataBase: new URL(
      process.env.SITE_URL ? process.env.SITE_URL : "http://localhost:3000"
    ),
    title: t("title"),
    description: t("description"),
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone: timeZone || "N/A",
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <ClerkProvider
          localization={locale === "ar" ? arSA : locale === "tr" ? trTR : enUS}
        >
          <Header />
          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
