import type { Metadata } from "next";
import "./globals.css";

import {Inter} from "next/font/google";


export const metadata: Metadata = {
  title: "DTC Brokers",
  description: "Welcome to DTC Brokers, where market leaders buy and sell e-commerce brands.",
};



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
