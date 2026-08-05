export const SLUG = "how-to-set-up-claude";

export const CUSTOM_INSTRUCTIONS_TEMPLATE = `Who I am
I'm [name], based in [city]. I run [business or role] and my main work is [the two or three things you actually do all day].

Who I serve
[Describe your clients, customers or audience in one or two sentences. Include what they care about and what they already know.]

What I use you for most
[List the four or five tasks you bring here regularly. Be literal: drafting client emails, writing captions, reviewing code, planning lessons, summarising research.]

How I want you to write
[Your tone. Sentence length. Formal or casual. First person or third. Any word or phrase you never want to see.]

Rules
- Ask me a clarifying question when the brief is thin instead of guessing.
- Give me the answer first and the reasoning after.
- If I'm wrong about something, tell me plainly.
- [Add your own. The oddly specific ones are the useful ones.]`;

export const CUSTOM_INSTRUCTIONS_EXAMPLE = `I'm Ada, based in Lagos. I run a skincare brand with a small team of three and I handle marketing, customer messages and supplier follow-ups myself.

My customers are Nigerian women between 24 and 38 who have tried a lot of products and are tired of being sold to. They know the ingredient names. They can smell a sales pitch.

I come here mostly for Instagram captions, customer service replies, supplier emails and monthly numbers.

Write the way I talk to a customer in the DMs. Warm, direct, short paragraphs, no exclamation marks. Never use the word "elevate" and never open a caption with a question.

Rules
- Ask before you assume what the product does. Get it wrong and I lose trust with people who know their ingredients.
- Give me options when it's copy, one version when it's an email.
- Never write a caption longer than 90 words.`;

export const PROJECT_INSTRUCTIONS = `This project is for [client name], a [what they do] company.

My contract with them covers [scope]. My main contact is [name], who is [what they care about and how they like to be communicated with].

Their brand voice: [two or three lines].
Words and claims we are not allowed to use: [list].
Their approval process: [who signs off and how long it takes].

When I ask for anything in this project, assume it is for them and match their voice, not mine.`;

export const MORNING_BRIEF = `Every weekday at 7am, check my calendar for today and my inbox since 6pm yesterday.

Give me:
1. My meetings, with times, who is in them and anything I need to prepare.
2. Emails that need a reply from me, ordered by who has been waiting longest.
3. Anything that looks like it needs a decision rather than a reply.
4. One line on what I should handle first and why.

Keep it under 300 words. Skip newsletters and receipts. Do not send anything on my behalf.`;

export const SKILL_MD = `---
name: client-proposal
description: Write a client proposal in my format. Use whenever I say "write a proposal", "draft a proposal for [client]", "put together a scope for", or paste a client brief and ask for pricing.
---

# Client proposal

## Structure
1. What they told me their problem is, in their words.
2. What I think the real problem is.
3. The scope, broken into phases with a deliverable per phase.
4. Timeline with dates, not durations.
5. Investment, priced per phase.
6. What I need from them to start.

## Rules
- Never open with a paragraph about my company.
- Price in [currency]. Never show an hourly rate.
- Every deliverable is a noun the client can point at, not an activity.
- Maximum two pages.

## Tone
[Paste two or three sentences from a proposal that won, so it has something to match.]`;

export const CHECKLIST = [
  { text: "Write your custom instructions in Settings", time: "10 min" },
  { text: "Create your first project and add three files to it", time: "8 min" },
  { text: "Connect your email and your calendar", time: "3 min" },
  { text: "Set up the morning brief and pick your time", time: "5 min" },
  {
    text: "Describe one repeated task and ask Claude to build it into a skill",
    time: "6 min",
  },
] as const;
