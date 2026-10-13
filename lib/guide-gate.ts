/** localStorage key set once a reader subscribes; unlocks every guide. */
export const GUIDE_UNLOCK_KEY = "mt_guide_unlocked";

/**
 * Runs inline before the guide paints so returning subscribers never see the
 * gate flash. Rendered from a server component inside the gate wrapper.
 */
export const GUIDE_UNLOCK_SCRIPT = `try{if(localStorage.getItem(${JSON.stringify(
  GUIDE_UNLOCK_KEY
)})){var s=document.currentScript,g=s&&s.closest(".guide-gate");if(g)g.setAttribute("data-unlocked","")}}catch(e){}`;

/**
 * Kit → Landing pages & forms → Forms → "Website guides" (double opt-in on:
 * Kit still answers "success", but the reader only joins the list once they
 * click Confirm in the email Kit sends from hello@mercythaddeus.xyz).
 * Readers post to it straight from the browser, exactly like Kit's own
 * embedded forms: Kit allows that cross-origin, but blocks the same request
 * when it comes from our Cloudflare Worker.
 */
export const KIT_FORM_URL = "https://app.kit.com/forms/9979993/subscriptions";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
