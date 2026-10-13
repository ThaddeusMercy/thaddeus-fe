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
    { label: "Instagram followers", value: "205K" },
    { label: "Platforms", value: "Instagram, TikTok, Youtube" },
    { label: "Niche", value: "AI Tools & Content Creation" },
    { label: "Audience", value: "Tech-savvy creators, AI enthusiasts, GenAI Creators" }
  ];

  const brands = ["Kimi", "Gamma", "Napkin", "Higgsfield", "Emergent", "Recall", "Relume"];

  const selectedWork = [
    {
      title: "Emergent",
      description: "A practical tutorial on building business websites with AI.",
      href: "https://www.instagram.com/reel/DXXEDstDYGm/"
    },
    {
      title: "Napkin",
      description: "A demonstration of creating slides that fit a presenter’s brand and goal.",
      href: "https://www.instagram.com/reel/DavaN_8OII2/"
    }
  ];

  const reelIncludes = [
    "1 original Instagram Reel",
    "Caption, brand tag and call to action",
    "1 revision within the agreed brief",
    "Results report 7 days after posting"
  ];

  const packages = [
    { name: "Instagram Reel", price: "$1,200", includes: reelIncludes },
    {
      name: "Instagram Campaign",
      price: "$1,800",
      includes: [...reelIncludes, "3 Story frames", "7-day bio placement"]
    }
  ];

  const allPackagesInclude = [
    "Professional content creation",
    "Authentic brand integration",
    "FTC-compliant disclosure",
    "On-time delivery",
    "One revision within the agreed brief",
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
            Brand Partnerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <a
              href="mailto:collab@mercythaddeus.xyz?subject=Collaboration%20Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-600"
            >
              Discuss a partnership
            </a>
            <a
              href="/Mercy_Thaddeus_Partnerships_2026.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-pink-600 px-5 py-3 text-sm font-semibold text-pink-600 transition-colors hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-600"
            >
              Download media kit
            </a>
          </div>
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

        {/* Previous Brands */}
        <section className="mb-8 border border-gray-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            Brands I&apos;ve Worked With
          </h2>
          <ul className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <li key={brand} className="rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700">
                {brand}
              </li>
            ))}
          </ul>
        </section>

        {/* Selected Work */}
        <section className="mb-8">
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            Selected Work
          </h2>
          <div className="border border-pink-600 rounded-2xl p-6 mb-4">
            <p className="text-4xl font-bold text-pink-600">28M</p>
            <p className="text-sm font-medium text-gray-900 mt-1">Selected public view count</p>
            <h3 className="font-bold text-gray-900 mt-5">Food-bed AI video guide</h3>
            <p className="text-xs text-gray-500 mt-1">Posted 4 January 2026</p>
            <a
              href="https://www.instagram.com/mercythaddeus_/reel/DTF77lnDR-1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-pink-600 underline underline-offset-4 mt-3"
            >
              View the Reel
            </a>
            <p className="text-xs text-gray-500 leading-relaxed mt-4">
              Rounded count shown on the Instagram Reel grid, captured 13 October 2026.
              Organic/paid and Instagram/Facebook breakdowns are unavailable.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {selectedWork.map((work) => (
              <div key={work.title} className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900">{work.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{work.description}</p>
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-pink-600 underline underline-offset-4 mt-3"
                >
                  View the {work.title} Reel
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            Partnership Options
          </h2>
          <div className="space-y-4">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`border rounded-2xl p-5 ${
                  index === 0 ? "border-pink-600" : "border-gray-200"
                }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                  <span className="text-xl font-bold text-pink-600 whitespace-nowrap">{pkg.price}</span>
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
            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className="font-bold text-gray-900">Custom</h3>
                <span className="text-sm font-medium text-pink-600">Quoted separately</span>
              </div>
              <p className="text-sm text-gray-700 mt-3">
                YouTube, TikTok, multi-platform campaigns and ongoing work.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mt-4">
            Ad rights, reposting, raw footage and exclusivity are quoted separately.
          </p>
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

        {/* Partnership Terms */}
        <section className="mb-8 border border-gray-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
            Partnership Terms
          </h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium text-gray-900">Payment</dt>
              <dd className="text-gray-600 mt-1">50% upfront; balance before posting.</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">First draft</dt>
              <dd className="text-gray-600 mt-1">
                Within 5–7 business days after the brief, access and deposit are received.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Revision</dt>
              <dd className="text-gray-600 mt-1">One revision within the agreed brief.</dd>
            </div>
          </dl>
        </section>

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
          Rates effective October 2026. All prices in USD.
        </p>
      </div>
    </div>
  );
}
