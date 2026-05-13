import { redirect } from "next/navigation";

export default function PromptVaultRedirectPage() {
  redirect("/?tab=resources&sub=prompts");
}
