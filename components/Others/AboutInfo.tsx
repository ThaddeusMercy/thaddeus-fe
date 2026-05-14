import Link from "next/link";
import { TokenETH, TokenSOL } from "@web3icons/react";

const AboutInfo = () => {
  return (
    <section className="space-y-10">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#999]">
        Software engineer · AI educator
      </p>
      {/* Image & Title(s) */}
      <div className="space-y-8">
        {/* Display Picture */}
        <div className="w-32 h-32 md:w-24 md:h-24 rounded-xl bg-[url(/display_image.svg)] bg-center bg-cover bg-no-repeat" role="img" aria-label="Mercy Thaddeus professional photo"></div>

        {/* Title(s) md*/}
        <div className="md:flex gap-3 items-center font-medium hidden">
          <span className="bg-secondary py-3 px-4 rounded-3xl">
            Software Engineer
          </span>
          <span className="bg-secondary py-3 px-4 rounded-3xl">
            AI Educator
          </span>
          <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
            <TokenETH variant="branded" size="25" />
          </span>
          <span className="bg-secondary py-3 px-4 rounded-3xl">Blockchain</span>
          <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
            <TokenSOL variant="branded" size="25" />
          </span>
        </div>

        {/* Title(s) sm*/}
        <div className="flex flex-col gap-5 font-medium md:hidden">
          <div className="flex gap-3 items-center">
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              Software Engineer
            </span>
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              AI Educator
            </span>
            <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
              <TokenETH variant="branded" size="30" />
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <span className="bg-secondary py-3 px-4 rounded-3xl">
              Blockchain
            </span>
            <span className="w-14 h-12 rounded-3xl bg-secondary flex items-center justify-center">
              <TokenSOL variant="branded" size="30" />
            </span>
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className="space-y-3 font-medium">
        <h1>Hey, I&apos;m Mercy! ✦</h1>
        <p>
          Software engineer and AI educator — I build production systems and help people ship with AI without sacrificing clarity or quality.
        </p>
        <p>
          Day to day that means full-stack product work across AI-native features, web apps, and web3 — plus workshops, talks, and practical content so teams can adopt new models and tools with confidence.
          <br /><br />
          Outside of work, I run <span className="text-[#1a1a1a]">TechUp</span> — a nonprofit helping young people access tech opportunities.
        </p>
        <div className="flex gap-2 items-center">
          <Link href="https://www.linkedin.com/in/mercythaddeus" className="hover:text-pink-500 transition-colors">LinkedIn</Link>
          <span>✦</span>
          <Link href="https://github.com/mercythaddeus" className="hover:text-pink-500 transition-colors">Github</Link>
          <span>✦</span>
          <Link href="https://x.com/global_techgirl" className="hover:text-pink-500 transition-colors">X</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
