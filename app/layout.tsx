import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divinearchitects.co.in"),

  title: {
    default:
      "Divine Architects | Best Architecture & Interior Design Studio in Lucknow",
    template: "%s | Divine Architects",
  },

  description:
    "Divine Architects is a leading architecture and interior design studio based in Lucknow, specializing in luxury residences, villas, row houses, commercial buildings, office interiors, cafés, restaurants, retail spaces, 3D visualization, architectural planning and complete design solutions across India.",

  keywords: [
    "Architect in Lucknow",
    "Architect in Uttar Pradesh",
    "Best Architect in Lucknow",
    "Residential Architect",
    "Commercial Architect",
    "Interior Designer",
    "House Design",
    "Villa Design",
    "Luxury Villa Design",
    "Row House Design",
    "Modern House Design",
    "Home Planning",
    "House Planning",
    "Architecture Firm",
    "Interior Design",
    "Commercial Design",
    "Office Interior",
    "Restaurant Design",
    "Cafe Design",
    "Retail Design",
    "Gym Design",
    "3D Visualization",
    "3D Elevation",
    "Architectural Walkthrough",
    "Divine Architects",
  ],

  authors: [
    {
      name: "Divine Architects",
      url: "https://divinearchitects.co.in",
    },
  ],

  creator: "Divine Architects",

  publisher: "Divine Architects",

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

  openGraph: {
    title:
      "Divine Architects | Luxury Architecture & Interior Design Studio",
    description:
      "Luxury residences, villas, row houses, interiors, commercial architecture and 3D visualization by Divine Architects.",

    url: "https://divinearchitects.co.in",

    siteName: "Divine Architects",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Divine Architects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Divine Architects | Luxury Architecture & Interior Design Studio",
    description:
      "Luxury residences, interiors, commercial architecture and 3D visualization by Divine Architects.",
    images: ["/images/hero.jpg"],
  },

  alternates: {
    canonical: "https://divinearchitects.co.in",
  },

  category: "Architecture",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}