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
import { contactDetails } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <PageIntro
            badge="Kontakt"
            title="Kontakt stranica sada stoji kao zasebna tacka za upite."
            description="Za sada je ovo jednostavan kontakt blok sa osnovnim informacijama. Kasnije ovde moze da dodje puna forma, mapa i razdvojeni tokovi za kamp, apartmane i ture."
          />
          <Link href="mailto:info@malisvet.rs" className={cn(buttonVariants())}>
            info@malisvet.rs
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Osnovne informacije</CardTitle>
            <CardDescription>
              Sadrzaj koji je ranije bio rasut po naslovnoj sada je okupljen na jednom mestu.
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
      </div>
    </main>
  );
}
