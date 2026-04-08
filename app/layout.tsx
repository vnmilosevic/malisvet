import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="sr" className={`${display.variable} ${body.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
