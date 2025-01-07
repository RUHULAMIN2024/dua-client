import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import Navber from "./components/Navber";
import Iconbar from "./components/Iconbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${interFont} ${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="flex h-screen p-6 bg-[#EBEEF2]">
          <Iconbar />
          <div className="flex-1">
            <Navber></Navber>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
