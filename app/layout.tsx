import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WebinarRegistrationModal from "@/components/WebinarRegistrationModal";
import {
  OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_OG_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site-metadata";
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
    default: SITE_TITLE,
    template: "%s | Mercy Thaddeus",
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: "Mercy Thaddeus", url: SITE_URL }],
  creator: "Mercy Thaddeus",
  publisher: "Mercy Thaddeus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    siteName: "Mercy Thaddeus",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@global_techgirl",
    creator: "@global_techgirl",
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    images: [OG_IMAGE_PATH],
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
                "Co-founder and Chief Product Officer at Attention Factory. AI educator — corporate training, consulting, custom AI builds, and technical content.",
              "jobTitle": [
                "Chief Product Officer",
                "Co-founder",
                "AI Educator",
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Attention Factory",
                "url": "https://attentionfactory.io",
              },
              "url": SITE_URL,
              "sameAs": [
                "https://github.com/mercythaddeus",
                "https://linkedin.com/in/mercythaddeus",
                "https://x.com/global_techgirl",
                "https://www.instagram.com/mercythaddeus_",
              ],
              "knowsAbout": [
                "Applied AI",
                "AI Education",
                "Corporate AI Training",
                "AI Product Strategy",
                "Developer Education",
                "Technical Content",
              ],
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Chief Product Officer",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "Remote",
                  },
                  "skills": [
                    "AI product strategy",
                    "Applied AI",
                    "Team training",
                    "Product leadership",
                  ],
                },
                {
                  "@type": "Occupation",
                  "name": "AI Educator",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "Remote",
                  },
                  "skills": [
                    "Technical workshops",
                    "Applied AI literacy",
                    "Developer education",
                    "Technical writing",
                  ],
                },
              ],
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
