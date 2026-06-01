import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WebinarRegistrationModal from "@/components/WebinarRegistrationModal";
import "./globals.css";

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
    default: "Mercy Thaddeus — Co-founder & CPO, Attention Factory · AI educator",
    template: "%s | Mercy Thaddeus"
  },
  description:
    "Mercy Thaddeus (@global_techgirl) — software engineer, AI educator, and Chief Product Officer at Attention Factory. Corporate AI training, consulting, custom builds, and technical content.",
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
    "Attention Factory",
    "Chief Product Officer",
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
    title: "Mercy Thaddeus — Co-founder & CPO, Attention Factory · AI educator",
    description:
      "Software engineer and AI educator. Attention Factory: training, consulting, and AI product builds. Workshops, talks, and applied AI content.",
    siteName: "Mercy Thaddeus Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mercy Thaddeus — Co-founder & CPO, Attention Factory · AI educator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@global_techgirl",
    creator: "@global_techgirl",
    title: "Mercy Thaddeus — Co-founder & CPO, Attention Factory · AI educator",
    description:
      "Software engineer and AI educator. Training, consulting, custom AI builds, and technical content.",
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
                "Software engineer, AI educator, and Chief Product Officer at Attention Factory — corporate AI training, consulting, custom builds, and technical content.",
              "jobTitle": [
                "Chief Product Officer",
                "Software Engineer",
                "AI Educator"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Attention Factory"
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
        className={`${GeistSans.className} ${sfpro.variable} antialiased max-w-[1370px] mx-auto`}
      >
        <GoogleAnalytics />
        {children}
        <WebinarRegistrationModal />
      </body>
    </html>
  );
}
