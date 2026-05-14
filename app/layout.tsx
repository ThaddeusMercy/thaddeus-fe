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
    default: "Mercy Thaddeus — Software Engineer & AI Educator",
    template: "%s | Mercy Thaddeus"
  },
  description:
    "Mercy Thaddeus (@global_techgirl) — software engineer and AI educator. Production systems, applied AI, workshops & talks; React, Next.js, and web3. Building and teaching from first principles.",
  keywords: [
    "Mercy Thaddeus",
    "Software Engineer",
    "AI Educator",
    "Applied AI",
    "Developer Education",
    "Web3 Developer",
    "React Developer",
    "Next.js Developer",
    "Blockchain Developer",
    "Technical Workshops",
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
    title: "Mercy Thaddeus — Software Engineer & AI Educator",
    description:
      "Software engineer and AI educator — production systems, applied AI, workshops & talks. React, Next.js, web3, and technical education.",
    siteName: "Mercy Thaddeus Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mercy Thaddeus — Software Engineer & AI Educator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@global_techgirl",
    creator: "@global_techgirl",
    title: "Mercy Thaddeus — Software Engineer & AI Educator",
    description:
      "Software engineer and AI educator — systems, applied AI, workshops & talks. React, Next.js, web3.",
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
              "description":
                "Software engineer and AI educator — production systems, applied AI, workshops and technical content; React, Next.js, and web3.",
              "jobTitle": ["Software Engineer", "AI Educator"],
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
                "Applied AI",
                "AI Education",
                "Blockchain Development",
                "Web3",
                "Ethereum",
                "Solana",
                "Developer Education",
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
                    "Applied AI",
                    "Blockchain Development",
                    "Web3"
                  ]
                },
                {
                  "@type": "Occupation",
                  "name": "AI Educator",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "Remote"
                  },
                  "skills": [
                    "Technical workshops",
                    "Applied AI literacy",
                    "Developer education",
                    "Technical writing"
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
