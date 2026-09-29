/** localStorage key set once a reader subscribes; unlocks every guide. */
export const GUIDE_UNLOCK_KEY = "mt_guide_unlocked";

/**
 * Runs inline before the guide paints so returning subscribers never see the
 * gate flash. Rendered from a server component inside the gate wrapper.
 */
export const GUIDE_UNLOCK_SCRIPT = `try{if(localStorage.getItem(${JSON.stringify(
  GUIDE_UNLOCK_KEY
)})){var s=document.currentScript,g=s&&s.closest(".guide-gate");if(g)g.setAttribute("data-unlocked","")}}catch(e){}`;
