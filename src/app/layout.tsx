import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AmbientBackground } from "@/components/ambient-background";
import { siteConfig } from "@/content/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Nevada-based software development and managed infrastructure. Custom e-commerce, the CTRL hosting platform, and resilient cloud environments with predictable pricing.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Precision infrastructure, bespoke storefronts, and the CTRL orchestration platform. Veteran-owned. Based in Reno, Nevada.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Enterprise-grade hosting and custom e-commerce engineering. Predictable pricing. Resilience by default.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden">
        <AmbientBackground />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
