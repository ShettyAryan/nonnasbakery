import type { Metadata } from "next";
import { Abril_Fatface, Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nonna's | Artisan Italian-Heritage Bakery",
  description:
    "Baked with Memory. Served with Love. Nonna's is an artisan Italian-heritage bakery baking the finest breads, pastries, and confections daily.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${abrilFatface.variable} ${bebasNeue.variable} ${dmSans.variable} font-sans antialiased grain-overlay`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
