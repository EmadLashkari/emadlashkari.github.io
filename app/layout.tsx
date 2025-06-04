import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Inter,
  Londrina_Outline,
  Londrina_Sketch,
  Josefin_Sans,
} from "next/font/google";
import "./globals.css";
import "@/public/styles/fonts.css";
import Header from "@/components/organisms/Header/Header";

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
  title: "Emad Lashkari",
  description: "Emad Lashkari Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${londrina.className} ${josefin_sans.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
