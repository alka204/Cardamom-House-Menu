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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body className="font-sans bg-[#F8F4EE] text-[#2A221C] dark:bg-[#14110F] dark:text-[#F5EFE6] antialiased selection:bg-[#B45309]/20 selection:text-[#B45309]">
        {children}
      </body>
    </html>
  );
}

