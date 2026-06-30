import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa JohnSUN | The Journey. The Build. The Legacy.",
  description:
    "A luxury documentary series following the Johnson family as they build their dream home in Scottsdale, Arizona. Every decision. Every milestone. Documented and shared.",
  metadataBase: new URL("https://www.casajohnsun.com"),
  alternates: {
    canonical: "https://www.casajohnsun.com",
  },
  keywords: [
    "Casa JohnSUN",
    "Johnson family",
    "Scottsdale Arizona home build",
    "luxury home documentary",
    "custom home build series",
    "family home documentary",
    "Scottsdale real estate",
    "home building journey",
  ],
  openGraph: {
    title: "Casa JohnSUN | The Journey. The Build. The Legacy.",
    description:
      "A real family. A real home. Every moment documented. Follow the Johnson family as they build their dream home in Scottsdale, Arizona.",
    url: "https://www.casajohnsun.com",
    siteName: "Casa JohnSUN",
    images: [
      {
        url: "/house.webp",
        width: 1200,
        height: 630,
        alt: "Casa JohnSUN – Johnson Family Home Build in Scottsdale, Arizona",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa JohnSUN | The Journey. The Build. The Legacy.",
    description:
      "A real family. A real home. Every moment documented. Follow the Johnson family build their dream home in Scottsdale, Arizona.",
    images: ["/house.webp"],
  },
  verification: {
    google: "ujda9uGoF03Es0GwCCUSmExl_X8vqEKhzejeuk3wk8U",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preload" as="image" href="/house.webp" fetchPriority="high" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
