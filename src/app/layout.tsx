import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Aurora from "@/Components/Aurora";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KenithDev",
  description: "Frontend Developer",
  icons: {
    icon: "/Assets/LogoDev.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen `}
      >
        <div className="fixed inset-0 z-[-1]">
          <Aurora
            colorStops={["#3A29FF", "#66A1FF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
            
          />
        </div>
        <div className="relative ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
