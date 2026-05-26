import { homeFooter, homeSocialCta } from "@/content/home-site";
import { sectionHeadingClass } from "@/lib/typography";

const HomeFooter = () => {
  return (
    <footer className="-mx-5 mt-4 md:-mx-0">
      <section className="space-y-5 border-t border-border px-5 py-14 text-center md:px-0">
        <p className={sectionHeadingClass}>{homeSocialCta.heading}</p>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-[#676767] md:text-base">
          {homeSocialCta.body}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {homeSocialCta.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[140px] items-center justify-center rounded-lg border border-border bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#1a1a1a] transition-colors hover:border-[#1a1a1a] hover:text-pink-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <div className="bg-[#1a1a1a] px-5 py-4 text-center">
        <p className="text-xs text-[#999]">{homeFooter.legal}</p>
      </div>
    </footer>
  );
};

export default HomeFooter;
