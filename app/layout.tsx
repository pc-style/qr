import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NeuralCursor } from "@/components/ui/NeuralCursor";
import { CRTOverlay } from "@/components/ui/CRTOverlay";
import { MatrixBackground } from "@/components/ui/MatrixBackground";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "QR.PCSTYLE // GENERATOR",
  description: "Cybernetic QR code generation engine - pcstyle",
  openGraph: {
    title: "QR.PCSTYLE // GENERATOR",
    description: "Cybernetic QR code generation engine - pcstyle",
    url: "https://qr.pcstyle.dev",
    siteName: "QR.PCSTYLE",
    images: [
      {
        url: "https://og.pcstyle.dev/api/og?title=QR%20GENERATOR&subtitle=Cybernetic%20QR%20Engine&icon=box&theme=magenta",
        width: 1200,
        height: 630,
        alt: "QR Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR.PCSTYLE // GENERATOR",
    description: "Cybernetic QR code generation engine - pcstyle",
    images: ["https://og.pcstyle.dev/api/og?title=QR%20GENERATOR&subtitle=Cybernetic%20QR%20Engine&icon=box&theme=magenta"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-black overflow-x-hidden`}>
        <MatrixBackground />
        <CRTOverlay />
        <div className="relative z-10">{children}</div>
        <NeuralCursor />
      </body>
    </html>
  );
}
