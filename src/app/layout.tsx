import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "74th IPC 2025 | Indian Pharmaceutical Congress",
    template: "%s | 74th IPC 2025",
  },
  description:
    "Join the 74th Indian Pharmaceutical Congress 2025 featuring 'AI & Technology in Pharma: Educate, Innovate, Empower' - December 19-21, 2025 at Bangalore International Exhibition Centre.",
  keywords: [
    "74th IPC",
    "Indian Pharmaceutical Congress",
    "AI in Pharma",
    "Technology in Pharmaceuticals",
    "pharmaceutical conference",
    "healthcare innovation",
    "drug discovery",
    "pharmaceutical research",
    "artificial intelligence",
    "digital health",
    "Bangalore",
    "December 2025",
    "IPCA",
  ],
  authors: [{ name: "74th IPC Organizing Committee" }],
  creator: "74th Indian Pharmaceutical Congress",
  publisher: "Indian Pharmaceutical Congress",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://74ipc2025.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://74ipc2025.org",
    title:
      "74th Indian Pharmaceutical Congress 2025 - AI & Technology in Pharma",
    description:
      "Join the premier pharmaceutical conference featuring AI & Technology in Pharma: Educate, Innovate, Empower. December 19-21, 2025, Bangalore.",
    siteName: "74th IPC 2025",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "74th Indian Pharmaceutical Congress 2025 - AI & Technology in Pharma",
    description:
      "Join the premier pharmaceutical conference featuring AI & Technology in Pharma: Educate, Innovate, Empower. December 19-21, 2025, Bangalore.",
    creator: "@74IPC2025",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
