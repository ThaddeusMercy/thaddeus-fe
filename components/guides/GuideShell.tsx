import BootcampCta from "@/components/guides/BootcampCta";
import GuideWhatsAppCta from "@/components/guides/GuideWhatsAppCta";
import "./guide-fonts.css";

export default function GuideShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BootcampCta variant="section" />
      {children}
      <BootcampCta variant="footer" />
      <GuideWhatsAppCta />
    </>
  );
}
