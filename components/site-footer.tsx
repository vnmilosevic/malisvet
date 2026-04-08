import Link from "next/link";

import { siteNav } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-2">
            <p className="text-base font-semibold">Mali Svet</p>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Auto kamp, apartmani, ture i lokalna iskustva u okolini Ivanjice. Footer je
              sada postavljen kao trajna osnova za dalji razvoj sajta.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>info@malisvet.rs</p>
          <p>Okolina Ivanjice, Zapadna Srbija</p>
        </div>
      </div>
    </footer>
  );
}
