import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marbella Stays | Luxury Villas & Apartments",
  description:
    "Discover handpicked luxury vacation rentals in Marbella, Spain. Premium villas, beachfront apartments, and exclusive penthouses along the Costa del Sol.",
  keywords: [
    "Marbella",
    "luxury rentals",
    "villas",
    "Costa del Sol",
    "vacation homes",
    "Spain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
