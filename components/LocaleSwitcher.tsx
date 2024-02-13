"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");

  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   router.push(pathname, { locale: e.target.value });
  // };

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
  };

  return (
    <>
      {/* <select value={locale} onChange={handleChange}>
        <option value="en">English</option>
        <option value="ar">العربية</option>
        <option value="tr">Türkçe</option>
      </select> */}

      <Select
        defaultValue={locale}
        onValueChange={handleChange}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar">العربية</SelectItem>
          <SelectItem value="tr">Türkçe</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
