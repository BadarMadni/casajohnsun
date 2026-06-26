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
    "A luxury documentary series following the Johnson family as they build their 7,184 sq ft forever home in Scottsdale, Arizona. Every decision. Every milestone. Documented and shared.",
  metadataBase: new URL("https://casajohnsun.vercel.app"),
  openGraph: {
    title: "Casa JohnSUN | The Journey. The Build. The Legacy.",
    description: "A real family. A $2.4M build. Every moment documented.",
    url: "https://casajohnsun.com",
    siteName: "Casa JohnSUN",
    images: [{ url: "/house.webp", width: 1200, height: 630 }],
    type: "website",
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
