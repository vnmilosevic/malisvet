import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteNav } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Mali Svet
            </Link>
            <p className="text-sm text-muted-foreground">Auto kamp i apartmani</p>
          </div>
          <Link
            href="/kontakt"
            className={cn(buttonVariants({ size: "sm" }), "w-fit sm:w-auto")}
          >
            Posaljite upit
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
