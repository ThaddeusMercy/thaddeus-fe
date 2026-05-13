"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TokenETH, TokenSOL } from "@web3icons/react";

// Add your bio images here - place them in /public/bio/ folder
const bioImages = [
  {
    id: 1,
    src: "/bio/headshot-1.jpg",
    alt: "Mercy Thaddeus - Professional Headshot",
    label: "Headshot",
  },
  {
    id: 2,
    src: "/bio/headshot-1.jpg",
    alt: "Mercy Thaddeus - Speaking at Conference",
    label: "Speaking",
  },
  // {
  //   id: 3,
  //   src: "/bio/casual-1.jpg",
  //   alt: "Mercy Thaddeus - Casual Portrait",
  //   label: "Casual",
  // },
  // {
  //   id: 4,
  //   src: "/bio/event-1.jpg",
  //   alt: "Mercy Thaddeus - Event Photo",
  //   label: "Event",
  // },
];

const BioPage = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://mercythaddeus.xyz/bio");
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  const handleDownload = async (src: string, filename: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      // Fallback: open in new tab
      window.open(src, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-5 left-5 z-50"
      >
        <Link
          href="/"
          className="bg-secondary hover:bg-border transition-colors py-2 px-4 rounded-full font-medium text-sm"
        >
          ← Home
        </Link>
      </motion.div>

      {/* Share Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-5 right-5 z-50"
      >
        <button
          onClick={handleCopyLink}
          className="bg-secondary hover:bg-border transition-colors py-2 px-4 rounded-full font-medium text-sm flex items-center gap-2"
        >
          {copiedLink ? (
            <>
              <span className="text-green-600">✓</span> Copied!
            </>
          ) : (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              Share
            </>
          )}
        </button>
      </motion.div>

      <div className="w-full px-5 md:px-0 md:max-w-[700px] mx-auto py-20 md:py-28 space-y-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Mercy Thaddeus
          </h1>
          <p className="text-lg text-[#676767]">Press Kit & Bio for Events</p>
        </motion.header>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">Photos ✦</h2>
            <span className="text-sm text-[#999]">
              Click to preview, download what you need
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {bioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative aspect-[4/5] bg-secondary rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-[#ccc] transition-all"
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-sm bg-black/50 py-2 px-4 rounded-full">
                    View
                  </span>
                </div>

                {/* Label */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium">
                  {image.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold text-[#1a1a1a]">About ✦</h2>

          <div className="bg-secondary rounded-2xl p-6 md:p-8 space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-white py-2 px-4 rounded-full text-sm font-medium border border-border">
                Software Engineer
              </span>
              <span className="bg-white py-2 px-4 rounded-full text-sm font-medium border border-border">
                AI Creator
              </span>
              <span className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center">
                <TokenETH variant="branded" size="20" />
              </span>
              <span className="bg-white py-2 px-4 rounded-full text-sm font-medium border border-border">
                Blockchain
              </span>
              <span className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center">
                <TokenSOL variant="branded" size="20" />
              </span>
              <span className="bg-white py-2 px-4 rounded-full text-sm font-medium border border-border">
                TechUp Founder
              </span>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-[#676767]">
              <p className="font-medium text-[#1a1a1a] text-lg">
                Hey, I&apos;m Mercy! ✦
              </p>
              <p className="font-medium text-[#1a1a1a]">
                Co-founder of{" "}
                <Link
                  href="https://attentionfactory.io?ref=mercythaddeus"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Attention Factory
                </Link>, software Engineer working at the intersection of AI, blockchain,
                and modern product thinking.
              </p>
              <p>
                I&apos;ve worked on and shipped products across blockchain and
                AI, with a strong focus on crafting clean, scalable interfaces
                that simplify complexity.
              </p>
              <p>
                I teach builders how to turn technical ideas into working
                prototypes and share my process with growing online communities.
                I&apos;m also an AI creator making simple, useful content that
                helps people understand and apply new tools.
              </p>
              <p>
                Outside of work, I run{" "}
                <span className="font-medium text-[#1a1a1a]">TechUp</span>, a
                nonprofit initiative helping young people access tech
                opportunities and bridge the digital divide.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-[#999] uppercase tracking-wide mb-1">
                  Focus
                </p>
                <p className="font-medium text-[#1a1a1a]">
                  AI, Blockchain, Product
                </p>
              </div>
              <div>
                <p className="text-xs text-[#999] uppercase tracking-wide mb-1">
                  Content
                </p>
                <p className="font-medium text-[#1a1a1a]">
                  AI Tools & Tutorials
                </p>
              </div>
              <div>
                <p className="text-xs text-[#999] uppercase tracking-wide mb-1">
                  Speaking
                </p>
                <p className="font-medium text-[#1a1a1a]">Available</p>
              </div>
              <div>
                <p className="text-xs text-[#999] uppercase tracking-wide mb-1">
                  Workshops
                </p>
                <p className="font-medium text-[#1a1a1a]">Available</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold text-[#1a1a1a]">Connect ✦</h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.linkedin.com/in/mercythaddeus"
              target="_blank"
              className="bg-secondary hover:bg-border transition-colors py-3 px-5 rounded-full font-medium flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://github.com/mercythaddeus"
              target="_blank"
              className="bg-secondary hover:bg-border transition-colors py-3 px-5 rounded-full font-medium flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>
            <Link
              href="https://x.com/global_techgirl"
              target="_blank"
              className="bg-secondary hover:bg-border transition-colors py-3 px-5 rounded-full font-medium flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X / Twitter
            </Link>
            <Link
              href="mailto:hello@mercythaddeus.xyz"
              className="bg-secondary hover:bg-border transition-colors py-3 px-5 rounded-full font-medium flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </Link>
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-[#999] pt-10 border-t border-border"
        >
          <p>
            For speaking inquiries, collaborations, or press requests,
            <br className="hidden md:block" /> please reach out via email or
            social media.
          </p>
        </motion.footer>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const image = bioImages.find((img) => img.id === selectedImage);
              if (!image) return null;
              return (
                <>
                  <div className="relative aspect-[4/5] bg-secondary">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">
                        {image.label}
                      </p>
                      <p className="text-sm text-[#999]">{image.alt}</p>
                    </div>
                    <button
                      onClick={() =>
                        handleDownload(
                          image.src,
                          `mercy-thaddeus-${image.label.toLowerCase()}.jpg`,
                        )
                      }
                      className="bg-[#1a1a1a] text-white py-2 px-5 rounded-full font-medium hover:bg-[#333] transition-colors flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7,10 12,15 17,10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download
                    </button>
                  </div>
                </>
              );
            })()}

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BioPage;
