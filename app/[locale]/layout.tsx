import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { arSA, enUS } from "@clerk/localizations";
import { NextIntlClientProvider, useMessages } from "next-intl";

import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <ClerkProvider localization={locale === "ar" ? arSA : enUS}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main>{children}</main>
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
