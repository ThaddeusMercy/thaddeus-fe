import BootcampCta from "@/components/guides/BootcampCta";

export default function GuideShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BootcampCta variant="section" />
      {children}
      <BootcampCta variant="footer" />
    </>
  );
}
