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
const bolden = localFont({
  src: "/fonts/bolden-regular-webfont.woff",
  display: "swap",
  variable: "--font-bolden",
});
const agelia = localFont({
  src: "/fonts/Agelia.otf",
  display: "swap",
  variable: "--font-agelia",
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
      <body
        className={`${londrina.className} ${josefin_sans.className} ${bolden.className} ${agelia.className}`}
      >
        {children}
      </body>
    </html>
  );
}
