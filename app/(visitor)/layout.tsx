import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GetSiteSettings } from "../../actions/siteSettings.js";

import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ChatWidget from "../../components/ui/ChatWidget.js";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton.js";

import "../globals.css";

const siteInfo = await GetSiteSettings();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteInfo?.seo?.metaTitle,
  description: siteInfo?.seo?.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer info={siteInfo?.footer} />
        <ChatWidget />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
