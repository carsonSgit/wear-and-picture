import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "WP",
  description: "Wear & Picture"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href=".test.ico" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
