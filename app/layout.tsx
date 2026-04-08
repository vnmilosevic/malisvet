import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mali Svet | Auto kamp i apartmani",
  description:
    "Demo prezentacioni sajt za Mali Svet auto kamp i apartmane u okolini Ivanjice, sa prirodom, turama i toplom atmosferom zapadne Srbije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col bg-background">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
