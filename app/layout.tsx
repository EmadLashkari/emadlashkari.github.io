import type { Metadata } from "next";
import {
  Inter,
  Londrina_Outline,
  Londrina_Sketch,
  Josefin_Sans,
} from "next/font/google";
import "./globals.css";
import "@/public/styles/fonts.css";
const londrina = Londrina_Sketch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--londrina",
});
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "100", "600"],
  variable: "--josefin",
});

export const metadata: Metadata = {
  title: "Emad dev",
  description: "Emad Lashkari is a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${londrina.className} ${josefin_sans.className}`}>
        {children}
      </body>
    </html>
  );
}
