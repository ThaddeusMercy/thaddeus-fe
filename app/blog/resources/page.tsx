import { redirect } from "next/navigation";

export default function BlogResourcesRedirectPage() {
  redirect("/guide?sub=links");
}
