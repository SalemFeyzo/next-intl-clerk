import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <ClerkProvider>
      <html lang={params.lang}>
        <body className={inter.className}>
          <Header lang={params.lang} />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
