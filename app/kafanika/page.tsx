import { PageIntro } from "@/components/page-intro";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { kafanikaHighlights, kafanikaMoments } from "@/lib/site-content";

export default function KafanikaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <PageIntro
          badge="Kafanika"
          title="Kafanika je izdvojena kao posebna komsijska preporuka."
          description="Umesto da ostane samo usput pomenuta na naslovnoj, Kafanika sada dobija svoju stranicu kao deo sireg iskustva boravka u Malom Svetu."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Kako ulazi u pricu sajta</CardTitle>
              <CardDescription>
                Ovo nije glavna usluga Malog Sveta, ali je vazan deo lokalnog dozivljaja.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {kafanikaHighlights.map((item) => (
                <div key={item} className="rounded-md border px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Najlogicniji momenti upotrebe</CardTitle>
              <CardDescription>
                Sadrzaj je rasporedjen po situacijama koje gost najlakse razume.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {kafanikaMoments.map((item) => (
                <div key={item.title} className="rounded-md border bg-muted/40 px-4 py-4">
                  <h2 className="text-base font-medium">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
