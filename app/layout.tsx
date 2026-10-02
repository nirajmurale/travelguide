import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://travelguide.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "travelguide — Hyderabad Travel Guide: Must-Visit Places & Food Stalls by Travellers", template: "%s | travelguide Hyderabad" },
  description: "Discover Hyderabad's must-visit places and must-try food stalls, with real addresses — all recommended by travellers and locals, not ads.",
  keywords: ["Hyderabad travel guide", "must visit places in Hyderabad", "Hyderabad food stalls", "things to do in Hyderabad", "Hyderabad street food guide", "Hyderabad local recommendations", "best places to eat in Hyderabad", "Hyderabad tourist spots with address"],
  alternates: { canonical: siteUrl },
  openGraph: { title: "travelguide — Hyderabad Travel Guide", description: "Hyderabad, recommended by the people who've actually been there.", url: siteUrl, siteName: "travelguide", locale: "en_IN", type: "website", images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "travelguide — Hyderabad, recommended by travellers" }] },
  twitter: { card: "summary_large_image", title: "travelguide — Hyderabad Travel Guide", description: "Must-visit places and must-try food stalls recommended by travellers and locals.", images: ["/images/og-image.png"] },
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "LocalBusiness", name: "travelguide", url: siteUrl,
    telephone: "+91234567890", email: "nirajmurale@gmail.com", areaServed: "Hyderabad, Telangana, India",
    description: "A community-driven Hyderabad travel guide for places and food discovery.",
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" }
  };
  return <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}><body className="paper">
    <a href="#main" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition focus:translate-y-0">Skip to content</a>
    <Header />
    <main id="main">{children}</main>
    <Footer />
    <WhatsAppButton />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </body></html>;
}
