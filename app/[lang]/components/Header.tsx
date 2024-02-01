import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
