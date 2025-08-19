import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/navbar/page"
import {Fotter} from "./_component/fotter/page"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cinema AM",
  description: "Cinema AM to watching movies and series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-[100vh] flex flex-col`}
      >
          
        <Navbar/>
        
    <div className="mt-[60px]">
    {children}
    </div>
<div className="mt-auto">

        <Fotter/>
</div>
        
      </body>
    </html>
  );
}
