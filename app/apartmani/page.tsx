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
import { apartmentFeatures, apartmentScenarios } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export default function ApartmaniPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <PageIntro
          badge="Apartmani"
          title="Apartmani dobijaju svoju mirniju, zasebnu stranicu."
          description="Na ovu rutu je premesten sadrzaj koji govori o manjim kucicama, privatnosti, toplini prostora i tipovima gostiju kojima taj smestaj najvise odgovara."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Osnovne karakteristike</CardTitle>
              <CardDescription>Prva verzija informacija za prikaz apartmanskih jedinica.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {apartmentFeatures.map((feature) => (
                <div key={feature} className="rounded-md border px-4 py-3 text-sm text-muted-foreground">
                  {feature}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Za koga su apartmani</CardTitle>
              <CardDescription>
                Sadrzaj je rasporedjen po scenarijima boravka umesto po dekorativnim blokovima.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {apartmentScenarios.map((item) => (
                <div key={item.title} className="rounded-md border bg-muted/40 px-4 py-4">
                  <h2 className="text-base font-medium">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Link href="/kontakt" className={cn(buttonVariants())}>
          Posaljite upit za apartmane
        </Link>
      </div>
    </main>
  );
}
