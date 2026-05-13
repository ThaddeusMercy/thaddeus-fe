import type { Metadata } from "next";
import localFont from "next/font/local";
import { Romanesco } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const romanesco = Romanesco({
  variable: "--font-romanesco",
  subsets: ["latin"],
  weight: "400",
});

const sfpro = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
    },
    {
      path: "./fonts/SF-Pro-Display-Ultralight.otf",
      weight: "200",
    },
    {
      path: "./fonts/SF-Pro-Display-Light.otf",
      weight: "300",
    },

    {
      path: "./fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/SF-Pro-Display-Heavy.otf",
      weight: "800",
    },
    {
      path: "./fonts/SF-Pro-Display-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-sfpro",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Mercy Thaddeus - Software Engineer",
    template: "%s | Mercy Thaddeus"
  },
  description: "Mercy Thaddeus (@global_techgirl) - Software Engineer specializing in React, Next.js, blockchain development, and AI integration. Building innovative software experiences from scribble to unicorn.",
  keywords: [
    "Mercy Thaddeus",
    "Software Engineer",
    "Web3 Developer",
    "React Developer",
    "Next.js Developer",
    "Blockchain Developer",
    "AI Integration",
    "global_techgirl",
    "Ethereum Developer",
    "Solana Developer",
    "TypeScript Developer",
    "Open Source Contributor",
    "Tech Mentor",
    "Women in Tech"
  ],
  authors: [{ name: "Mercy Thaddeus", url: "https://mercythaddeus.xyz" }],
  creator: "Mercy Thaddeus",
  publisher: "Mercy Thaddeus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mercythaddeus.xyz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercythaddeus.xyz",
    title: "Mercy Thaddeus - Software Engineer",
    description: "Software Engineer specializing in React, Next.js, blockchain development, and AI integration. Building innovative software experiences from scribble to unicorn.",
    siteName: "Mercy Thaddeus Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mercy Thaddeus - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@global_techgirl",
    creator: "@global_techgirl",
    title: "Mercy Thaddeus - Software Engineer",
    description: "Software Engineer specializing in React, Next.js, blockchain development, and AI integration. Building innovative software experiences.",
    images: ["/og-image.png"],
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mercy Thaddeus",
              "alternateName": "global_techgirl",
              "description": "Software Engineer specializing in React, Next.js, blockchain development, and AI integration",
              "jobTitle": ["Software Engineer"],
              "worksFor": {
                "@type": "Organization",
                "name": "Hindsight VIP"
              },
              "url": "https://mercythaddeus.xyz",
              "sameAs": [
                "https://github.com/mercythaddeus",
                "https://linkedin.com/in/mercythaddeus",
                "https://x.com/global_techgirl"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Blockchain Development",
                "Web3",
                "Ethereum",
                "Solana",
                "AI Integration",
                "Frontend Development",
                "Software Engineering"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Software Engineering"
              },
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Software Engineer",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "Remote"
                  },
                  "skills": [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Blockchain Development",
                    "Web3",
                    "AI Integration"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${romanesco.variable} ${sfpro.variable} antialiased max-w-[1440px] mx-auto`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
