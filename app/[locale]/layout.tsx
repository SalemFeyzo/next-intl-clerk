import type { Metadata } from "next";
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
} from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MyClerkProvider from "@/components/clerk-provider";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "default.LocaleLayout",
  });
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
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MyClerkProvider>
              <Header />
              <main>{children}</main>
            </MyClerkProvider>
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
