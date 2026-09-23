import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cardamom House — Slow Brunch & Strong Coffee in Lisbon",
  description:
    "Cardamom House menu. Slow brunch, strong coffee, sourdough toasties and specialty coffee in Lisbon, Portugal since 2021.",
  keywords: ["Cardamom House", "Lisbon brunch", "Lisbon cafe", "Cardamom House menu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-[#F7F2E8] text-[#2B211B] antialiased selection:bg-[#C45A08]/20 selection:text-[#C45A08]">
        {children}
      </body>
    </html>
  );
}

