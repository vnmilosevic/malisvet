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
import { tours } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export default function TurePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <PageIntro
          badge="Ture"
          title="Ture su izdvojene kao zasebna stranica za dozivljaje oko smestaja."
          description="Ovde je prebacen sadrzaj koji opisuje ritam boravka van same smestajne jedinice: setnje, obilaske i porodicne dane u prirodi."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {tours.map((tour) => (
            <Card key={tour.title}>
              <CardHeader>
                <CardTitle className="text-xl">{tour.title}</CardTitle>
                <CardDescription>Predlog sadrzaja za ovu kategoriju ture.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{tour.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link href="/kontakt" className={cn(buttonVariants({ variant: "outline" }))}>
          Posaljite upit za ture
        </Link>
      </div>
    </main>
  );
}
