import type { Metadata, Viewport } from "next";
import { Playfair_Display, Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Daji – Premium Ghanaian Smock Brand",
    template: "%s | Daji",
  },
  description:
    "The Wilderness. The Weaver. The Way. Discover authentic Northern Ghanaian handwoven smocks for professionals. Premium craftsmanship meeting modern leadership.",
  keywords: [
    "Daji",
    "Ghanaian smock",
    "heritage fashion",
    "African apparel",
    "professional wear",
    "Northern Ghana",
    "handwoven",
    "fugu",
    "batakari",
    "African professional",
    "cultural fashion",
  ],
  authors: [{ name: "Daji" }],
  creator: "Daji",
  metadataBase: new URL("https://wear-daji.com"),
  openGraph: {
    title: "Daji – Premium Ghanaian Smock Brand",
    description:
      "The Wilderness. The Weaver. The Way. Authentic Northern Ghanaian smocks for professionals.",
    type: "website",
    locale: "en_US",
    siteName: "Daji",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daji - Premium Ghanaian Smock Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daji – Premium Ghanaian Smock Brand",
    description: "The Wilderness. The Weaver. The Way.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A2F23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${crimson.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-off-white font-body text-dark antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
