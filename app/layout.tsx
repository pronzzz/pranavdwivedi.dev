import type { Metadata } from "next";
import { Michroma, Handjet } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav Dwivedi",
  description: "IT Graduate specializing in Robotics, AI, and Cloud Technologies.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Handjet:wght,ELSH@100..900,2&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ruslan+Display&display=swap" rel="stylesheet" />
      </head>
      <body className={`${michroma.variable} ${handjet.variable} antialiased bg-background text-foreground`}>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
