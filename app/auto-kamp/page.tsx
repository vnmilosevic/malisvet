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
import { campFeatures, campReasons } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export default function AutoKampPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <PageIntro
          badge="Auto kamp"
          title="Stranica za kamp sada nosi glavni operativni sadrzaj."
          description="Ovde je prebacen sadrzaj koji govori o kapacitetu, infrastrukturi i iskustvu boravka u kamp delu projekta Mali Svet."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card>
            <CardHeader>
              <CardTitle>Sta kamp trenutno nudi</CardTitle>
              <CardDescription>
                Osnovna lista funkcionalnosti za prvu verziju stranice.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {campFeatures.map((feature) => (
                <div key={feature} className="rounded-md border px-4 py-3 text-sm text-muted-foreground">
                  {feature}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zasto ovaj deo ima potencijal</CardTitle>
              <CardDescription>
                Razlozi zbog kojih kamp moze biti vise od tranzitne tacke.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {campReasons.map((item) => (
                <div key={item.title} className="rounded-md border bg-muted/40 px-4 py-4">
                  <h2 className="text-base font-medium">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sledeci sloj za ovu stranicu</CardTitle>
            <CardDescription>
              Kada budemo nastavili, ovde logicno dolaze galerija, raspored parcela i detaljniji uslovi boravka.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/kontakt" className={cn(buttonVariants())}>
              Posaljite upit za kamp
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
