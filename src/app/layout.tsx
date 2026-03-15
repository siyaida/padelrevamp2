import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Padel Society — Tunisia's Premier Padel Club",
  description:
    "Welcome to Padel Society, your premier destination for padel in Tunisia. Professional courts, expert coaching, and a vibrant community.",
  openGraph: {
    title: "Padel Society — Tunisia's Premier Padel Club",
    description:
      "Professional courts, expert coaching, and a vibrant community of padel enthusiasts in Tunis.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
