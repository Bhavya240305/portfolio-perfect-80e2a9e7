import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhavya Dixit | Product Manager Portfolio",
  description:
    "Product-minded builder turning user insight, strategy, and data into shipped decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="page-shell min-h-screen font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-nav">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
