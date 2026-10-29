import GuideNewsletterCard from "@/components/guides/GuideNewsletterCard";
import GuideWhatsAppCta from "@/components/guides/GuideWhatsAppCta";

/** Same email box and WhatsApp footer the individual guides use, without hiding the page. */
export default function GuideCapture() {
  return (
    <div className="space-y-6">
      <GuideNewsletterCard />
      <GuideWhatsAppCta />
    </div>
  );
}
