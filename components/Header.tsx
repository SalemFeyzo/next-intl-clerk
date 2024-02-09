import { Link } from "@/i18n";
import {
  OrganizationSwitcher,
  SignedIn,
  UserButton,
  auth,
} from "@clerk/nextjs";

export default async function Header() {
  const { userId } = auth();
  return (
    <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
      <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
        Hello
      </Link>
      <div className="grow" />
      {!userId && <Link href="/sign-in">Sign In</Link>}
      <SignedIn>
        <div className="hidden sm:block">
          <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
        </div>
        <div className="block sm:hidden">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/dashboard"
            appearance={{
              elements: {
                organizationSwitcherTriggerIcon: `hidden`,
                organizationPreviewTextContainer: `hidden`,
                organizationSwitcherTrigger: `pr-0`,
              },
            }}
          />
        </div>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}
