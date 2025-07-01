import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const notoSansTC = Noto_Sans_TC({
  weight: "variable",
  preload: false,
});

export const metadata: Metadata = {
  title: "GDG on Campus Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${notoSansTC.className} antialiased bg-brand-beige`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
