"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { arSA, enUS, trTR } from "@clerk/localizations";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useLocale } from "next-intl";

type Props = {
  children: React.ReactNode;
};

export default function MyClerkProvider({ children }: Readonly<Props>) {
  const locale = useLocale();
  const { theme } = useTheme();

  return (
    <ClerkProvider
      localization={locale === "ar" ? arSA : locale === "tr" ? trTR : enUS}
      appearance={{
        layout: {
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms",
        },
        baseTheme: theme === "dark" ? dark : undefined,
        variables: {
          colorPrimary: "hsl(24.6 95% 53.1%)",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
