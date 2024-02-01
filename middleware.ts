import { chain } from "@/middlewares/chain";
import { withAuthMiddleware } from "@/middlewares/clerkMiddleware";
import { withI18nMiddleware } from "@/middlewares/localizationMiddleware";

export default chain([withI18nMiddleware, withAuthMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
