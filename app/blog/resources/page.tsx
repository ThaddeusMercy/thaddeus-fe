import { redirect } from "next/navigation";

export default function BlogResourcesRedirectPage() {
  redirect("/?tab=resources&sub=links");
}
