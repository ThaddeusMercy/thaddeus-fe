"use client";
import {
  InstagramLogo,
  EnvelopeSimple,
  Globe,
  TiktokLogo,
  Check,
  Eye
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function KitPage() {
  const stats = [
    { label: "Following", value: "153,000+" },
    { label: "Platforms", value: "Instagram, TikTok" },
    { label: "Niche", value: "AI Tools & Content Creation" },
    { label: "Audience", value: "Tech-savvy creators, AI enthusiasts" }
  ];

  const packages = [
    {
      name: "Premium Package",
      price: "$2,500",
      bestFor: "Maximum reach & extended campaigns",
      includes: [
        "1 Professional Video",
        "Cross-post to TikTok",
        "3 Story slides (24-hour feature)",
        "30-day link in bio (prime placement)",
        "Collaboration post feature",
        "Performance report (7 days after posting)",
        "Usage rights for ads (60 days)"
      ]
    },
    {
      name: "Professional Package",
      price: "$1,800",
      bestFor: "Focused Instagram campaigns",
      includes: [
        "1 Professional Video (Instagram Reel)",
        "2 Story slides (24-hour feature)",
        "14-day link in bio",
        "Collaboration post feature",
        "Basic performance report",
        "Usage rights for ads (30 days)"
      ]
    },
    {
      name: "Standard Package",
      price: "$1,200",
      bestFor: "Budget-conscious brands",
      includes: [
        "1 Video (Instagram Reel OR TikTok)",
        "7-day link in bio",
        "Collaboration post feature (optional)"
      ]
    }
  ];

  const contentServices = [
    { title: "Instagram Reel/Video (standalone)", price: "$700" },
    { title: "TikTok Video (standalone)", price: "$600" },
    { title: "Carousel Post (5-10 slides)", price: "$600" },
    { title: "Story Feature (3-5 slides, 24hrs)", price: "$400" }
  ];

  const linkInBio = [
    { duration: "7 days", price: "$300" },
    { duration: "14 days", price: "$500" },
    { duration: "30 days", price: "$800" }
  ];

  const addOns = [
    { title: "Usage Rights (30 days)", price: "+$300" },
    { title: "Usage Rights (90 days)", price: "+$800" },
    { title: "Exclusivity Agreement (30 days)", price: "+$500" },
    { title: "Additional platform cross-post", price: "+$400-600/platform" },
    { title: "Rush delivery (48-72 hours)", price: "+$500" }
  ];

  const allPackagesInclude = [
    "Professional content creation",
    "Authentic brand integration",
    "FTC-compliant disclosure",
    "On-time delivery",
    "One round of revisions (if needed)",
    "Direct communication throughout project"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[url(/display_image.svg)] bg-center bg-cover bg-no-repeat mx-auto mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-1 uppercase">
            Mercy Thaddeus
          </h1>
          <p className="text-sm text-gray-600 mb-2">
            AI & Tech Content Creator
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Collaboration Rate Card
          </p>
        </motion.div>

        {/* Creator Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 border border-gray-200 rounded-2xl p-6"
        >
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            Creator Stats
          </h2>
          <div className="space-y-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between items-start py-1"
              >
                <span className="text-gray-500 text-sm">{stat.label}</span>
                <span className="text-gray-900 text-sm font-medium text-right max-w-[60%]">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            Collaboration Packages
          </h2>
          <div className="space-y-4">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`border rounded-2xl p-5 ${
                  index === 0 ? "border-pink-600" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-xs text-gray-500">Best for: {pkg.bestFor}</p>
                  </div>
                  <span className="text-xl font-bold text-pink-600">{pkg.price}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" weight="bold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* A La Carte Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 border border-gray-200 rounded-2xl p-6"
        >
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            A La Carte Services
          </h2>

          {/* Content Creation */}
          <div className="mb-6">
            <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-3">
              Content Creation
            </h3>
            <div className="space-y-2">
              {contentServices.map((service) => (
                <div
                  key={service.title}
                  className="flex justify-between items-center py-1"
                >
                  <span className="text-gray-700 text-sm">{service.title}</span>
                  <span className="font-medium text-gray-900 text-sm">{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link in Bio */}
          <div className="mb-6">
            <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-3">
              Link in Bio Placement
            </h3>
            <div className="space-y-2">
              {linkInBio.map((item) => (
                <div
                  key={item.duration}
                  className="flex justify-between items-center py-1"
                >
                  <span className="text-gray-700 text-sm">{item.duration}</span>
                  <span className="font-medium text-gray-900 text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add-Ons */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-3">
              Add-Ons
            </h3>
            <div className="space-y-2">
              {addOns.map((addon) => (
                <div
                  key={addon.title}
                  className="flex justify-between items-center py-1"
                >
                  <span className="text-gray-700 text-sm">{addon.title}</span>
                  <span className="font-medium text-gray-900 text-sm">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 border border-gray-200 rounded-2xl p-6"
        >
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            What&apos;s Included (All Packages)
          </h2>
          <ul className="space-y-2">
            {allPackagesInclude.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" weight="bold" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8 border border-gray-200 rounded-2xl p-6"
        >
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            Timeline
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Standard delivery</span>
              <span className="text-gray-900 font-medium">5-7 business days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Rush delivery</span>
              <span className="text-gray-900 font-medium">48-72 hours (+$500)</span>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-pink-600 text-white rounded-2xl p-6"
        >
          <h2 className="font-bold text-sm uppercase tracking-wide mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="space-y-3">
          <a
              href="https://attentionfactory.io?ref=mercythaddeus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Eye size={18} />
              <span className="text-sm">Attention Factory</span>
            </a>
            <a
              href="https://mercythaddeus.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Globe size={18} />
              <span className="text-sm">mercythaddeus.xyz</span>
            </a>
            <a
              href="https://instagram.com/mercythaddeus_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <InstagramLogo size={18} />
              <span className="text-sm">@mercythaddeus_</span>
            </a>
            <a
              href="https://tiktok.com/@global_techgirl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <TiktokLogo size={18} />
              <span className="text-sm">@global_techgirl</span>
            </a>
            <a
              href="mailto:collab@mercythaddeus.xyz?subject=Collaboration%20Inquiry"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <EnvelopeSimple size={18} />
              <span className="text-sm">collab@mercythaddeus.xyz</span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Rates effective January 2026. All prices in USD.
        </p>
      </div>
    </div>
  );
}
