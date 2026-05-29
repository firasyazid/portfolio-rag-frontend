import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ChatWidget, ChatProvider } from "@/components/chat";
import InitialLoader from "@/components/InitialLoader";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firasyazid.me"),
  title: {
    default: "Firas Yazid | Full-Stack Developer & AI Engineer | React, Next.js, Python",
    template: "%s | Firas Yazid",
  },
  description: "Firas Yazid is a Full Stack Engineer bridging the gap between AI innovation and Software excellence.",
  keywords: [
    "Firas Yazid",
    "Full Stack AI Engineer",
    "Software Engineer in Full-Stack & AI",
    "Ingénieur Full Stack IA",
    "Software Engineer",
    "Développeur Logiciel",
    "AI Developer",
    "Développeur IA",
    "Machine Learning Engineer",
    "Ingénieur Machine Learning",
    "GenAI",
    "Generative AI",
    "IA Générative",
    "Python",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "RAG",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "LLM",
    "LangChain",
    "Vector Databases",
    "Portfolio",
    "Tech Lead",
    "Remote",
    "Télétravail",
    "Open to relocation",
    "Ouvert à la relocalisation",
    "Mobilité géographique",
    "France",
    "Europe",
    "Paris",
    "International"
  ],
  openGraph: {
    title: "Firas Yazid | Software Engineer in Full-Stack & AI",
    description: "Firas Yazid is a Full Stack AI Engineer bridging the gap between AI innovation and Software excellence.",
    url: "https://firasyazid.me",
    siteName: "Firas Yazid Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firas Yazid | Full Stack AI Engineer",
    description: "Firas Yazid is a Full Stack AI Engineer bridging the gap between AI innovation and Software excellence.",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '612x612', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Firas Yazid",
  jobTitle: "Full Stack Engineer",
  url: "https://firasyazid.me",
  sameAs: [
    "https://www.linkedin.com/in/firas-yazid-32a499222/",
    "https://github.com/firasyazid"
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Artificial Intelligence", "Large Language Models", "Full Stack Development"],
  description: "Firas Yazid is a Full Stack Engineer bridging the gap between AI innovation and Software excellence.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Await the routing params in Next.js 15
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <InitialLoader>
            <ChatProvider>
              {children}
              <ChatWidget />
            </ChatProvider>
          </InitialLoader>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
