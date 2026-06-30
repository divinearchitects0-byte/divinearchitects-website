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
    default: "Divine Architects | Architecture, Interior & Commercial Design",
    template: "%s | Divine Architects",
  },

  description:
    "Divine Architects is a Lucknow-based architecture and interior design studio specializing in residential architecture, commercial spaces, luxury villas, row houses, cafés, offices, retail stores, restaurants, gyms, 3D visualization and planning services across India.",

  keywords: [
    "Architect in Lucknow",
    "Architect in Uttar Pradesh",
    "Residential Architect",
    "Commercial Architect",
    "Interior Designer",
    "House Design",
    "Villa Design",
    "Row House Design",
    "Luxury Home Design",
    "Modern House Design",
    "Cafe Design",
    "Restaurant Design",
    "Office Interior",
    "Retail Design",
    "Gym Design",
    "3D Elevation",
    "House Planning",
    "Divine Architects",
  ],

  authors: [
    {
      name: "Divine Architects",
    },
  ],

  creator: "Divine Architects",

  publisher: "Divine Architects",

  openGraph: {
    title: "Divine Architects",
    description:
      "Architecture • Interiors • Commercial Spaces",
    url: "https://divinearchitects.co.in",
    siteName: "Divine Architects",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}