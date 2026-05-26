import Link from "next/link";

const AboutInfo = () => {
  // const pills = [
  //   "AI educator",
  //   "AI Creator",
  // ];

  return (
    <section className="space-y-10">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#999]">
        AI Creator · AI Educator
      </p>

      <div className="space-y-8">
        <div
          className="h-32 w-32 rounded-xl bg-[url(/display_image.svg)] bg-cover bg-center bg-no-repeat md:h-24 md:w-24"
          role="img"
          aria-label="Mercy Thaddeus professional photo"
        />

        {/* <div className="flex flex-wrap gap-3 font-medium">
          {pills.map((label) => (
            <span
              key={label}
              className="rounded-3xl bg-secondary px-4 py-3 capitalize"
            >
              {label}
            </span>
          ))}
        </div> */}
      </div>

      <div className="space-y-3 font-medium">
        <h1>Hey, I&apos;m Mercy! </h1>
        <p>
           I make AI  simple. 
           Whether you&apos;re growing or starting a
          business, creating content, working in teams or just trying not to get
          left behind, I&apos;ve got you covered.
        </p>
        <p>
          
          <Link
            href="https://attentionfactory.io?ref=mercythaddeus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a1a1a] underline underline-offset-2 hover:text-pink-500"
          >
          
          </Link>

          I am currently building Attention Factory, a platform for AI education, training, and consulting for marketing, creative, ops, and founder teams.
          
        </p>
       
      </div>
    </section>
  );
};

export default AboutInfo;
