import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatWidget, ChatProvider } from "@/components/chat";
import InitialLoader from "@/components/InitialLoader";
import { Analytics } from "@vercel/analytics/react";

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
    default: "Firas Yazid | Full Stack Engineer",
    template: "%s | Firas Yazid",
  },
  description: "Firas Yazid is a Full Stack  Engineer bridging the gap between AI innovation and Software excellence.",
  keywords: [
    "Firas Yazid",
    "Full Stack AI Engineer",
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
    title: "Firas Yazid | Full Stack AI Engineer",
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
    icon: '/icon.png',
    shortcut: '/icon.png',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitialLoader>
          <ChatProvider>
            {children}
            <ChatWidget />
          </ChatProvider>
        </InitialLoader>
        <Analytics />
      </body>
    </html>
  );
}
