import GuideWhatsAppCta from "@/components/guides/GuideWhatsAppCta";
import "./guide-fonts.css";

export default function GuideShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <GuideWhatsAppCta />
    </>
  );
}
