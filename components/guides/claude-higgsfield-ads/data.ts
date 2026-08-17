export const SLUG = "claude-higgsfield-ads";

export const NEED = [
  "A Claude account with access to custom connectors",
  "A Higgsfield account",
  "Enough Higgsfield credits for the batch you want to create",
  "Clear product photos you have permission to use",
  "Brand rules, approved claims, and the correct product details",
  "Written permission for any real person's face, voice, or likeness used in the ads",
] as const;

export const OFFICIAL_LINKS = [
  {
    label: "Higgsfield MCP page",
    href: "https://higgsfield.ai/mcp",
  },
  {
    label: "Higgsfield MCP connector URL",
    href: "https://mcp.higgsfield.ai/mcp",
  },
  {
    label: "Higgsfield Claude setup guide",
    href: "https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP",
  },
  {
    label: "Claude connector help",
    href: "https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp",
  },
] as const;

export const CONNECT_STEPS = [
  "Open Claude or Claude Desktop.",
  "Select Customize.",
  "Select Connectors.",
  "Click the plus icon or Add custom connector.",
  "Name it Higgsfield or Higgsfield MCP.",
  "Paste https://mcp.higgsfield.ai/mcp",
  "Select Connect.",
  "Sign in to your Higgsfield account and approve the connection.",
  "Open a new Claude chat and confirm that Higgsfield is available in the tools or connector list.",
] as const;

export const PREP_FILES = [
  "A front product photo",
  "A back or side product photo",
  "A close image of the label and packaging text",
  "Brand logo files",
  "Approved brand colors and fonts",
  "Three to five reference ads",
  "A text file with approved product claims",
  "A text file with claims and visuals that must not be used",
  "Any approved creator or model reference images",
] as const;

export const FILE_NAMES = `product-front.png
product-side.png
product-label-closeup.png
brand-guide.pdf
approved-claims.txt
forbidden-claims.txt
reference-ad-01.mp4`;

export const MCP_URL = "https://mcp.higgsfield.ai/mcp";

export const ANGLES = [
  {
    angle: "Problem and solution",
    changes: "Problem, audience, hook, setting, or demonstration",
  },
  {
    angle: "Product demonstration",
    changes: "Feature shown, camera view, use case, script, or objection",
  },
  {
    angle: "Routine",
    changes: "Morning, workday, travel, evening, or weekend use",
  },
  {
    angle: "Objection handling",
    changes: "Price, time, trust, effort, fit, or switching concern",
  },
  {
    angle: "Unboxing",
    changes: "First look, packaging, texture, setup, or reaction",
  },
  {
    angle: "Feature focus",
    changes: "One approved feature per creative",
  },
  {
    angle: "Founder or expert",
    changes: "Origin, method, explanation, myth, or question",
  },
  {
    angle: "Use case",
    changes: "Different jobs, locations, routines, or customer needs",
  },
  {
    angle: "Proof",
    changes:
      "Real review, demonstration, data, or case study supplied by the brand",
  },
  {
    angle: "Offer",
    changes: "Bundle, deadline, bonus, trial, or other approved offer",
  },
] as const;

export const CHECK_PRODUCT = [
  "Correct product shape and size",
  "Correct packaging and color",
  "Correct logo and label",
  "No mirrored or invented text",
  "Product remains consistent across shots",
] as const;

export const CHECK_PERSON = [
  "You have permission to use the person's identity or reference",
  "Hands, teeth, eyes, hair, and movement look natural",
  "The person does not make a fake personal testimonial",
  "Clothing and appearance remain consistent where required",
] as const;

export const CHECK_SCRIPT = [
  "Every claim is approved",
  "No fake statistic, review, award, price, ingredient, or guarantee",
  "The spoken words match the on-screen text",
  "Required legal text is present and readable",
] as const;

export const CHECK_PLATFORM = [
  "Correct aspect ratio",
  "Hook appears early",
  "Important text is inside safe areas",
  "Captions are readable",
  "The final call to action is clear",
] as const;

export const CHECK_TECH = [
  "No visual jumps or broken objects",
  "No unwanted logos or watermarks",
  "Audio, lip movement, and timing match where used",
  "File name and creative ID match the manifest",
] as const;

export const SAFETY = [
  "Follow the ad rules of the platform and country where the asset will run",
  "Do not create fake customer stories or medical, financial, or income claims",
  "Do not use a real person's face or voice without permission",
  "Tell the brand when a person, voice, scene, or demonstration is synthetic",
  "Add AI or synthetic media disclosure where the platform, client, or law requires it",
  "Keep records of approved claims, source assets, and final approvals",
  "Never let an unattended workflow publish directly to an ad account",
] as const;

export const PROBLEMS = [
  {
    q: "Higgsfield does not appear in Claude",
    a: "Open Customize, check Connectors, confirm Higgsfield is connected, then start a new chat and select the connector from the tool menu if needed.",
  },
  {
    q: "Claude creates concepts but no videos",
    a: "Tell Claude to use the connected Higgsfield tool after you approve the test concepts. Confirm that your Higgsfield account has credits and permission to use the selected model.",
  },
  {
    q: "The product label changes",
    a: "Add close product references, repeat the exact preservation rule, reduce camera movement, and create a still test before another video.",
  },
  {
    q: "The results all look the same",
    a: "Require different audience insights, objections, stories, settings, and demonstrations. Do not count a wardrobe or camera change as a new concept.",
  },
  {
    q: "The batch stops overnight",
    a: "Check credits, account limits, queue status, permission requests, and failed tool calls. Run a small unattended test before relying on an overnight batch.",
  },
  {
    q: "Claude starts creating before approval",
    a: "Begin the prompt with a hard planning stage and write: Do not use Higgsfield until I type APPROVE TEST BATCH.",
  },
] as const;

export const FAQS = [
  {
    q: "Does the connector need an API key?",
    a: "Higgsfield's current MCP setup uses a sign-in flow rather than asking you to paste a separate API key into Claude.",
  },
  {
    q: "Is Higgsfield free?",
    a: "You can connect it, but image and video creation may use credits under your Higgsfield plan. Check the current pricing and credit rules before starting a large batch.",
  },
  {
    q: "Will I always get 50 completed ads by morning?",
    a: "No fixed number is guaranteed. Completion depends on credits, models, queue time, clip length, errors, and your computer or session setup. Plan 50 concepts, test five, then scale in controlled batches.",
  },
  {
    q: "Can Claude publish the ads automatically?",
    a: "Do not begin with automatic publishing. Review and approve each asset, then upload it through the brand's normal process.",
  },
  {
    q: "Can I use another image or video tool?",
    a: "Yes. The creative director prompt can be adapted to another approved connector. Replace the tool instructions and keep the planning, approval, tracking, and review stages.",
  },
] as const;

export const NAMING_PATTERN = `brand_product_angle_variation_platform_v01.mp4`;

export const NAMING_EXAMPLE = `attentionhq_ai-course_objection-01_instagram_v01.mp4`;

export const PROMPT_FULL = `Act as the creative director for a batch of UGC-style ads for this product.

Use the connected Higgsfield tools for image and video creation, but do not create any final asset until you complete the planning stage and I approve a small test batch.

CAMPAIGN INFORMATION
Brand: [BRAND NAME]
Product: [PRODUCT NAME]
What it does: [PLAIN FACTUAL DESCRIPTION]
Audience: [WHO THE AD IS FOR]
Main problem: [PROBLEM]
Approved result or benefit: [APPROVED BENEFIT]
Offer: [OFFER]
Call to action: [CTA]
Platforms: [INSTAGRAM, TIKTOK, FACEBOOK, YOUTUBE SHORTS, OR OTHER]
Country or market: [MARKET]
Language: [LANGUAGE]
Aspect ratio: [9:16, 1:1, OR 16:9]
Target length: [NUMBER OF SECONDS]
Number of final variations requested: [NUMBER, UP TO 50]
Brand tone: [TONE]
Creator type: [AGE RANGE, STYLE, SETTING, AND OTHER APPROVED DETAILS]
Required product details: [DETAILS THAT MUST REMAIN ACCURATE]
Approved claims: [PASTE CLAIMS]
Forbidden claims: [PASTE CLAIMS]
Required legal text: [TEXT OR NONE]
Visual references: [NAME THE UPLOADED FILES]

PRODUCT ACCURACY RULES
- Preserve the product's real shape, color, packaging, logo, label, and visible text
- Do not mirror, rewrite, remove, or invent label text
- Do not change product size between shots without a clear camera reason
- Do not add an ingredient, feature, award, certification, price, result, or guarantee that I did not provide
- Do not create a fake customer testimonial or imply that an AI character personally used the product
- Do not use a real person's face, voice, or likeness unless I provided written permission
- Flag any claim or visual that needs legal or brand approval

CREATIVE PROCESS
Phase 1: Study the files
1. List every product fact you found
2. List every approved claim
3. List anything unclear or contradictory
4. Ask me the questions needed before planning

Phase 2: Plan the campaign
Create 10 different creative angles with five variations per angle, for a total of 50 planned creatives.
The angles should cover a useful mix such as:
- Problem and solution
- Product demonstration
- Routine or day-in-the-life
- Objection handling
- Comparison without unsupported competitor claims
- Founder or expert explanation
- Before and after only when approved and truthful
- Unboxing
- Feature focus
- Social proof only when real proof is supplied

For every planned creative, return a table with:
- Creative ID
- Angle
- Audience insight
- Opening hook
- Spoken script
- Shot list
- On-screen text
- Product close-up requirement
- Higgsfield image or video prompt
- Call to action
- Length
- Risk or approval note

Do not repeat one idea with only a different shirt, room, or camera angle. Each variation should change the hook, objection, story, demonstration, or audience insight.

Phase 3: Select a test batch
Recommend five test creatives that cover different angles.
Explain why each one should be tested.
Estimate how many Higgsfield creations the test will require and remind me that it will use credits.
Wait for my written approval before using Higgsfield.

Phase 4: Create the approved test batch
After I approve, use Higgsfield to create only the five selected test creatives.
Work one creative at a time.
After each result, check:
- Product accuracy
- Label accuracy
- Visual consistency
- Script and on-screen text accuracy
- Framing for the target platform
- Obvious AI errors

Do not silently accept a broken result. Mark it for review and explain the problem.

Phase 5: Scale the batch
Only after I approve the test results, ask whether I want to continue with the remaining variations.
Create them in batches of no more than 10 so I can control credits and quality.
Retry a failed creation no more than once without asking me.

TRACKING
Create a manifest containing:
- Creative ID
- Status
- Angle
- Hook
- Output link or file name
- Model used
- Creation date
- Credits used if available
- Review result
- Required fix

At the end, give me:
1. The completed manifest
2. The strongest five creatives and why
3. The creatives that need another review
4. The unused ideas worth testing later
5. A reminder that every ad must be checked before publishing`;

export const PROMPT_SHORT = `Use Higgsfield to help me create five UGC-style ad variations for this product.

Product: [PRODUCT]
Audience: [AUDIENCE]
Offer: [OFFER]
Approved claims: [CLAIMS]
Platform: [PLATFORM]
Length: [SECONDS]
References: [UPLOADED FILES]

First, create five different concepts with a hook, short script, shot list, on-screen text, and Higgsfield prompt.
Preserve the exact product packaging and do not invent claims.
Wait for me to approve the concepts before creating any image or video.
After approval, create one sample first. Continue only when I approve the sample.`;
