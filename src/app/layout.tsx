import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: "TeamSync Pro",
  description: "Transform your team through innovative team building experiences",
  keywords: ["team building", "corporate events", "team activities", "virtual team building"],
  authors: [{ name: "TeamSync Pro" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teamsyncpro.com",
    siteName: "TeamSync Pro",
    title: "TeamSync Pro - Build Stronger Teams Through Shared Experiences",
    description: "Transform your team through innovative team building experiences",
    images: [
      {
        url: "https://teamsyncpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeamSync Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeamSync Pro - Build Stronger Teams Through Shared Experiences",
    description: "Transform your team through innovative team building experiences",
    images: ["https://teamsyncpro.com/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-surface-50 font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}
