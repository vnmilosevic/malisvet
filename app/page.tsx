import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  contactDetails,
  landingHighlights,
  roadmap,
  siteNav,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main>
      <section className="border-b">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
          <div className="space-y-6">
            <PageIntro
              badge="Mali Svet"
              title="Naslovna sada radi kao landing stranica za ceo projekat."
              description="Ovo je pregledna pocetna strana koja sabira najvaznije delove ponude: kamp, apartmane, ture, Kafaniku i kontakt. Svaka sekcija sada ima i svoju posebnu stranicu."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt" className={cn(buttonVariants({ size: "lg" }))}>
                Posaljite upit
              </Link>
              <Link
                href="/auto-kamp"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Pogledajte auto kamp
              </Link>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Struktura sajta</CardTitle>
              <CardDescription>
                Novi header i meni vode kroz sve osnovne stranice sajta.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {siteNav.map((item) => (
                <div key={item.href} className="rounded-md border bg-muted/40 px-4 py-3 text-sm">
                  {item.label}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {landingHighlights.map((item) => (
            <Card key={item.href}>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                <Link href={item.href} className={cn(buttonVariants({ variant: "outline" }))}>
                  Otvorite stranicu
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Kontakt na jednom mestu</CardTitle>
              <CardDescription>
                Osnovne informacije ostaju vidljive i na naslovnoj za brzi pregled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {contactDetails.map((item) => (
                <div key={item} className="rounded-md border px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sledece faze</CardTitle>
              <CardDescription>
                Naslovna sada sabira ceo koncept, a sledeca iteracija moze ici dublje po svakoj temi.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {roadmap.map((item) => (
                <div key={item} className="rounded-md border bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
