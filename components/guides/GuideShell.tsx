import GuideEmailGate from "@/components/guides/GuideEmailGate";
import GuideWhatsAppCta from "@/components/guides/GuideWhatsAppCta";
import { GUIDE_UNLOCK_SCRIPT } from "@/lib/guide-gate";
import "./guide-fonts.css";

export default function GuideShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <GuideEmailGate>
        <script dangerouslySetInnerHTML={{ __html: GUIDE_UNLOCK_SCRIPT }} />
        {children}
      </GuideEmailGate>
      <GuideWhatsAppCta />
    </>
  );
}
