import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
import {
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
} from "@/navigation";

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },
  publicRoutes: (req) => !req.url.includes("/dashboard"),
  // debug: true,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
