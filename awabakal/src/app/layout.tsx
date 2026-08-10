import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Cambay, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const cambay = Cambay({
  variable: "--font-cambay",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awabakal",
  description: "Awabakal home page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${cambay.variable} ${dmSans.variable} antialiased`}
    >
      <body className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
