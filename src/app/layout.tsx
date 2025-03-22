import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CheckAuthToken from "@/components/check-auth-token";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const segoeUi = localFont({
  variable: "--font-segoe-ui",
  src: [
    {
      path: "./fonts/segoeuithis.ttf",
      weight: "400",
      style: "normal", // Regular
    },
    {
      path: "./fonts/segoeuithisi.ttf",
      weight: "400",
      style: "italic", // Italic
    },
    {
      path: "./fonts/segoeuithisz.ttf",
      weight: "700",
      style: "italic", // Bold Italic
    },
    {
      path: "./fonts/segoeuithibd.ttf",
      weight: "700",
      style: "normal", // Bold
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "COSER Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${segoeUi.variable} font-[family-name:var(--font-segoe-ui)] antialiased`}
      >
        <SessionProvider session={session}>
          <CheckAuthToken />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
