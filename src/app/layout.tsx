import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wiprosoft — IT & Web Marketing Agency",
    template: "%s | Wiprosoft",
  },
  description: "UK-based IT & Web Marketing Agency specializing in web development, digital marketing, and branding solutions that drive business growth.",
  metadataBase: new URL("https://wiprosoft.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Wiprosoft",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
