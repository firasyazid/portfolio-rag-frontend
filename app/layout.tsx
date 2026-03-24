import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatWidget, ChatProvider } from "@/components/chat";
import InitialLoader from "@/components/InitialLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Firas Yazid - Full Stack AI Engineer",
  description: "Where AI innovation meets Software excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitialLoader>
          <ChatProvider>
            {children}
            <ChatWidget />
          </ChatProvider>
        </InitialLoader>
      </body>
    </html>
  );
}
