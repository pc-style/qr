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
