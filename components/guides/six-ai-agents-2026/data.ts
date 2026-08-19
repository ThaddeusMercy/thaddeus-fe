export const SLUG = "six-ai-agents-2026";

export const INSIDE = [
  "A sales assistant that qualifies new leads and drafts replies.",
  "A research assistant that creates source-backed Google Docs.",
  "A social media manager that researches trends and fills a content calendar.",
  "A financial visibility agent that spots unusual spending and cash flow problems.",
  "A customer support agent that answers routine questions and escalates sensitive cases.",
  "A personal productivity agent that prepares your daily plan and morning briefing.",
] as const;

export const OFFICIAL_LINKS = [
  { label: "Source video", href: "https://www.youtube.com/watch?v=drSytiIe6Jg" },
  { label: "Open Base44", href: "https://app.base44.com" },
  {
    label: "Superagent setup guide",
    href: "https://docs.base44.com/superagents/creating-a-superagent",
  },
  {
    label: "Connector catalog",
    href: "https://docs.base44.com/Integrations/connectors-catalog",
  },
  { label: "Base44 pricing", href: "https://base44.com/pricing" },
  {
    label: "Creating automations",
    href: "https://docs.base44.com/Building-your-app/Creating-automations",
  },
] as const;

export const COMMON_TOOLS = [
  "Gmail",
  "Google Calendar",
  "Google Docs",
  "Google Sheets",
  "Google Drive",
  "Google Tasks or Notion",
  "QuickBooks or FreshBooks",
  "HubSpot or another CRM",
  "Gorgias or Intercom",
] as const;

export const FORMULA = [
  { item: "A trigger that tells it when to start.", example: "A new email arrives." },
  { item: "Access to the information it needs.", example: "The email thread, your offers, and your pricing." },
  { item: "Rules for making decisions.", example: "Decide whether the lead is qualified." },
  { item: "A clear output format.", example: "A lead score and reply." },
  { item: "An action it is allowed to take.", example: "Create a Gmail draft." },
  { item: "A list of situations that require human review.", example: "Ask you to review large or unusual deals." },
  { item: "A record of what it did.", example: "Add the lead to Google Sheets." },
] as const;

export const SETUP_STEPS = [
  "Sign in to Base44.",
  "Open Superagents.",
  'Select "Create a new Superagent."',
  "Describe the job you want the agent to do.",
  "Open Plugins and connect the required tools.",
  "Upload the files the agent should use as its source of truth.",
  "Ask the agent to create a scheduled or triggered automation.",
  "Run the workflow manually before turning it on.",
  "Review its output and correct any mistakes.",
  "Keep email sending and other sensitive actions in draft or approval mode until the agent is reliable.",
] as const;

export const CHOOSER = [
  { problem: "Leads wait too long for replies", agent: "Sales assistant" },
  { problem: "Research takes several hours", agent: "Research assistant" },
  { problem: "You struggle to post consistently", agent: "Social media manager" },
  { problem: "You do not know where money is going", agent: "Financial visibility agent" },
  { problem: "Your inbox repeats the same questions", agent: "Customer support agent" },
  { problem: "Your day feels scattered", agent: "Personal productivity agent" },
] as const;

export const TEST_CASES = [
  "A normal request.",
  "A request with missing information.",
  "A request that should be rejected.",
  "A sensitive request that should be escalated.",
  "A message containing misleading information.",
  "A duplicate event or record.",
  "A case where two uploaded files disagree.",
  'A case where the correct answer is "I do not know."',
] as const;

export const TEST_CHECKS = [
  "What information it used.",
  "Why it made its decision.",
  "Whether it followed your rules.",
  "Whether it took an action it was not allowed to take.",
  "Whether the output was recorded.",
  "Whether the correct person was notified.",
] as const;

export const ROLLOUT_WEEK1 = [
  "Use read-only access.",
  "Run the agent manually.",
  "Keep all email replies as drafts.",
  "Keep all social content in Draft status.",
  "Keep financial workflows read-only.",
  "Review every output.",
] as const;

export const ROLLOUT_WEEK2 = [
  "Schedule the workflow.",
  "Allow low-risk actions only.",
  "Continue reviewing sensitive cases.",
  "Record common mistakes and update the instructions.",
] as const;

export const ROLLOUT_AFTER = [
  "Turn on selected automatic actions.",
  "Keep high-risk actions behind human approval.",
  "Review the logs every week.",
  "Update the source files when your prices, policies, offers, or priorities change.",
] as const;

export const VIDEO_TIMESTAMPS = [
  { agent: "Sales assistant", time: "05:34" },
  { agent: "Research assistant", time: "09:48" },
  { agent: "Social media manager", time: "15:43" },
  { agent: "Financial visibility agent", time: "19:51" },
  { agent: "Customer support agent", time: "24:22" },
  { agent: "Personal productivity agent", time: "29:17" },
] as const;

export const AGENTS = [
  {
    id: "sales",
    num: "01",
    name: "Sales assistant",
    intro:
      "The sales assistant watches your Gmail inbox for new enquiries. When a possible customer contacts you, it reads the full email thread, extracts key details, checks whether the lead matches your ideal customer, gives the lead a score, creates a personalised reply, sends qualified leads to your booking page, and adds the lead to your CRM or Google Sheet.",
    tools: ["Gmail", "Google Sheets or HubSpot", "Google Drive", "Google Calendar or Calendly"],
    files: [
      "Your business overview",
      "Your products or services",
      "Your current prices",
      "Your ideal customer profile",
      "Your lead qualification rules",
      "Frequently asked sales questions",
      "Examples of good sales replies",
      "Your booking link",
    ],
    trigger:
      'Run whenever a new message arrives in a Gmail label called "New Leads". You can create a Gmail filter that automatically applies this label to messages sent through your contact form or business enquiry email.',
    checks: [
      "Does not treat every email as a lead.",
      "Does not invent prices or case studies.",
      "Reads previous messages in the thread.",
      "Sends people to the correct booking page.",
      "Creates drafts instead of sending immediately.",
      "Records its decision in your CRM or spreadsheet.",
    ],
    prompt: `Create a Superagent called Sales Assistant for [BUSINESS NAME].

Its job is to monitor my Gmail inbox for new inbound sales enquiries, qualify each lead using my business rules, and prepare a fast personalised reply.

Connect the following tools:

1. Gmail
2. [HUBSPOT OR GOOGLE SHEETS]
3. Google Drive
4. [GOOGLE CALENDAR OR CALENDLY]

Use the files I upload as the source of truth for my offers, pricing, ideal customers, sales process, writing style, and frequently asked questions.

TRIGGER

Run whenever a new email receives the Gmail label [NEW LEADS].

WORKFLOW

For each new message:

1. Read the full email thread.
2. Decide whether it is a genuine sales enquiry.
3. Ignore newsletters, spam, job applications, customer support messages, and existing client conversations.
4. Extract:
   - Name
   - Email address
   - Company
   - Role
   - Location
   - What they need
   - Budget, if provided
   - Timeline, if provided
   - How they found us
   - Any questions or objections
5. Score the lead out of 100:
   - Fit with our service: 30 points
   - Strength of the problem or need: 20 points
   - Budget fit: 20 points
   - Timeline: 15 points
   - Decision-making authority: 15 points
6. Classify the lead:
   - Qualified: 70 to 100
   - Needs more information: 40 to 69
   - Not qualified: 0 to 39
7. Prepare a personalised reply.

For qualified leads:

- Thank them for reaching out.
- Refer directly to the problem they described.
- Explain briefly how our service may help.
- Answer questions using the uploaded files.
- Include this booking link: [BOOKING LINK].
- Keep the reply concise.

For leads that need more information:

- Ask no more than three clear questions.
- Only ask for information needed to make a qualification decision.
- Do not send the booking link yet.

For unqualified leads:

- Write a polite reply.
- Do not pressure them into booking.
- Suggest a relevant free resource only if one exists in the uploaded files.

RULES

- Never invent a service, price, result, testimonial, deadline, or policy.
- Never offer a discount unless it is written in the pricing file.
- Never agree to legal, payment, partnership, or contract terms.
- Escalate messages involving custom pricing, enterprise deals, legal terms, procurement, unusual requests, or negative complaints.
- Read the full thread before preparing a reply.
- Do not repeat questions the lead has already answered.
- Match the writing style in my examples.

For the first 14 days, create Gmail drafts only. Do not send emails automatically.

LOGGING

Add every genuine lead to [HUBSPOT OR GOOGLE SHEETS] with these fields:

- Date received
- Name
- Company
- Email
- Need
- Budget
- Timeline
- Lead score
- Qualification status
- Recommended next step
- Reply status
- Email thread link

After building the workflow, run it against five test emails:

1. A strong qualified lead
2. A lead with missing information
3. An unqualified lead
4. A support request
5. A spam message

Show me the classification and draft for each test before enabling the automation.`,
  },
  {
    id: "research",
    num: "02",
    name: "Research assistant",
    intro:
      "The research assistant takes a topic or question, searches for current information, compares multiple sources, checks who published each claim, separates confirmed facts from assumptions, identifies conflicting evidence, creates a structured report, and saves the finished report in Google Docs.",
    tools: ["Google Docs", "Google Drive", "Gmail (optional)", "A browser or web research tool"],
    files: [
      "Your usual research report structure",
      "Examples of reports you like",
      "Your preferred citation format",
      "A list of trusted sources",
      "A list of sources or content farms to treat carefully",
      "Your audience description",
      "Your business or project background",
    ],
    trigger:
      "Use this agent manually when you have a research request. You can also schedule a weekly report, for example: Every Friday at 9:00 AM, research the most useful developments in [TOPIC] from the previous seven days.",
    checks: [
      "Every source link opens.",
      "The report does not cite a source that says something different.",
      "Recent claims use recent sources.",
      "The agent distinguishes evidence from opinion.",
      "The summary matches the longer report.",
      'It says when there is not enough evidence.',
    ],
    prompt: `Create a Superagent called Research Assistant.

Its job is to research topics, evaluate sources, compare evidence, and create structured reports in Google Docs.

Connect:

1. Google Docs
2. Google Drive
3. Gmail
4. Web browsing

Use my uploaded report examples, audience description, source rules, and writing instructions.

RESEARCH WORKFLOW

When I give you a topic:

1. Restate the research question clearly.
2. Identify the important sub-questions.
3. Search for relevant sources.
4. Prioritise:
   - Official documentation
   - Original research
   - Government or public institution sources
   - Company announcements
   - Direct interviews
   - Well-established publications
5. For current topics, check the publication date and the date the event happened.
6. Cross-check important claims with another independent source where possible.
7. Record every source you use.
8. Identify disagreements, missing data, and uncertainty.
9. Separate:
   - Confirmed facts
   - Reported claims
   - Reasonable inferences
   - Opinions
10. Do not invent quotations, statistics, publication dates, authors, or links.

SOURCE EVALUATION

For every major source, record:

- Title
- Author or organisation
- Publication
- Publication date
- Link
- Type of source
- What claim it supports
- Whether it is a primary or secondary source
- Authority score from 1 to 5
- Evidence score from 1 to 5
- Recency score from 1 to 5
- Limitations or possible bias

REPORT FORMAT

Create a Google Doc with:

1. Title
2. Research question
3. Executive summary
4. Scope and method
5. Main findings
6. Evidence supporting each finding
7. Conflicting evidence
8. Comparison table, where useful
9. Risks or limitations
10. Practical recommendations
11. Questions that remain unanswered
12. Full source list

Every factual claim that is not common knowledge must have a source.

Do not add a recommendation unless the evidence in the report supports it.

If the available evidence is weak, say that clearly.

OUTPUT

- Save the report in this Google Drive folder: [FOLDER NAME OR LINK]
- Use this file name format:
  [YYYY-MM-DD] - [RESEARCH TOPIC]
- Email the Google Doc link to [EMAIL ADDRESS].
- Include a five-point summary in the email.

Before creating the final report, show me:

1. The proposed outline
2. The sources you plan to use
3. Any missing information or unclear parts of the request

Do not create fake citations under any circumstances.`,
  },
  {
    id: "social",
    num: "03",
    name: "Social media manager",
    intro:
      "The social media manager looks for recent topics and discussions in your industry, checks whether those topics are genuinely current, turns useful ideas into posts for each platform, adapts the writing to Instagram, TikTok, LinkedIn, X, and Facebook, adds the posts to a weekly Google Sheets calendar, and keeps track of draft, approved, scheduled, and posted content.",
    tools: [
      "Google Sheets",
      "Google Docs",
      "Google Drive",
      "Web browsing",
      "Your social platforms, where useful",
    ],
    files: [
      "Your brand voice guide",
      "Your audience description",
      "Your products and offers",
      "Your content pillars",
      "Examples of your best posts",
      "Words and phrases you avoid",
      "Your usual calls to action",
      "Your weekly posting schedule",
    ],
    trigger: "Schedule it for: Every Monday at 8:00 AM. The agent should plan the next seven days.",
    calendarColumns: [
      "Date",
      "Day",
      "Platform",
      "Content pillar",
      "Topic",
      "Trend or source",
      "Source link",
      "Why this matters now",
      "Hook",
      "Script or caption",
      "Visual idea",
      "Call to action",
      "Status",
      "Reviewer notes",
      "Published link",
      "Results",
    ],
    checks: [
      "The trends are actually recent.",
      "Every source supports the idea attached to it.",
      "The posts sound different on each platform.",
      "The writing sounds like you.",
      "The agent is not copying another creator.",
      "The spreadsheet dates and statuses are correct.",
    ],
    prompt: `Create a Superagent called Social Media Manager for [BRAND OR CREATOR NAME].

Its job is to find relevant recent topics, create platform-specific content, and fill my weekly Google Sheets content calendar.

Connect:

1. Google Sheets
2. Google Docs
3. Google Drive
4. Web browsing
5. [OPTIONAL SOCIAL PLATFORM CONNECTORS]

Use my uploaded brand voice, audience information, offers, content pillars, successful posts, banned phrases, and posting schedule.

SCHEDULE

Run every Monday at [TIME] in [TIMEZONE].

RESEARCH

1. Research developments from the previous seven days in:
   - [TOPIC 1]
   - [TOPIC 2]
   - [TOPIC 3]
2. Prioritise original announcements, official sources, product documentation, direct statements, and trusted publications.
3. Do not call something a trend only because one person posted about it.
4. Use at least two credible sources for a broad trend, or one direct primary source for a product announcement.
5. Record the source link and publication date.
6. Do not copy another creator's caption, hook, thread, script, or examples.
7. Explain why each topic is relevant to my audience.

CONTENT PLAN

Create content for the next seven days based on my posting schedule.

For every post, include:

- Platform
- Content pillar
- Topic
- Source
- Hook
- Main point
- Script or caption
- Visual or filming idea
- Call to action
- Suggested publishing date
- Status set to Draft

PLATFORM RULES

Instagram:

- Write a clear caption.
- Where appropriate, include a carousel outline with one idea per slide.
- Do not fill the caption with generic motivational language.

TikTok and Reels:

- Write a 40 to 90 second spoken script.
- Open with the main point.
- Include suggested on-screen text and visual changes.
- Keep the language natural when spoken aloud.

LinkedIn:

- Write for professionals.
- Use a clear point of view and practical examples.
- Do not use inflated business language.

X:

- Create either one concise post or a short thread.
- Do not split one sentence across several posts just to make a thread.

Facebook:

- Write a complete caption that can be understood without watching the video.
- Use simple language.

GOOGLE SHEETS

Add every finished draft to [GOOGLE SHEET NAME OR LINK].

Use these columns:

Date
Day
Platform
Content pillar
Topic
Trend or source
Source link
Why this matters now
Hook
Script or caption
Visual idea
Call to action
Status
Reviewer notes
Published link
Results

RULES

- Do not publish automatically.
- Do not create fake trends, statistics, quotations, or product announcements.
- Do not reuse the same caption across every platform.
- Do not mention my product unless it fits the topic naturally.
- Match my uploaded writing examples.
- Avoid every word and writing pattern in my banned-language file.
- Mark uncertain information for review.
- Keep all posts in Draft status until I approve them.

At the end of each run, email me:

1. The link to the updated content calendar
2. The five strongest ideas
3. Any topic that needs fact-checking
4. Any content gap you noticed`,
  },
  {
    id: "finance",
    num: "04",
    name: "Financial visibility agent",
    intro:
      "The financial visibility agent reviews your financial records and flags duplicate charges, unusual spending, overdue invoices, customers with unpaid balances, sudden increases in recurring costs, possible cash flow shortages, and missing or unclear transactions. This agent should provide visibility, not make payments or change your books without review.",
    tools: [
      "QuickBooks or FreshBooks",
      "Google Sheets",
      "Gmail",
      "Google Docs",
      "Google Drive",
    ],
    files: [
      "Your expense categories",
      "Your recurring expenses",
      "Your expected monthly income",
      "Your minimum cash reserve",
      "Your invoice payment terms",
      "Your list of approved vendors",
      "Your rules for unusual transactions",
      "Your financial report format",
    ],
    trigger:
      "Run every Monday morning for a weekly report, on the first day of every month for a monthly report, or whenever a new transaction or invoice is added, where supported.",
    checks: [
      "Does not treat normal recurring payments as duplicates.",
      "Currency differences are handled correctly.",
      "Shows the transactions behind each alert.",
      "Does not change accounting records.",
      "Its cash flow estimate states what data was included.",
      "A person reviews every financial alert.",
    ],
    note: "This agent does not replace an accountant, bookkeeper, or financial adviser.",
    prompt: `Create a Superagent called Financial Visibility Agent for [BUSINESS NAME].

Its job is to review my income, expenses, invoices, payments, and available cash data, then alert me to possible financial problems.

Connect:

1. [QUICKBOOKS, FRESHBOOKS, OR GOOGLE SHEETS]
2. Gmail
3. Google Docs
4. Google Drive

Use my uploaded financial rules, expense categories, approved vendors, cash reserve, payment terms, and reporting format.

ACCESS RULE

Use read-only access wherever possible.

Never:

- Move money
- Pay an invoice
- Create a transfer
- Delete a transaction
- Change an accounting record
- Send an invoice
- Contact a customer
- Approve a purchase

unless I give separate written approval for that exact action.

SCHEDULE

Run every Monday at [TIME] in [TIMEZONE].

Review:

- The previous seven days
- The current month
- The previous 90 days for comparison
- Expected income and expenses for the next 30 days

CHECKS

1. Duplicate charges

Flag transactions with the same vendor, amount, currency, or reference within [NUMBER] days.

Do not declare them duplicates automatically. Mark them as possible duplicates and show the matching transactions.

2. Unusual spending

Flag:

- A transaction above [AMOUNT]
- Spending that is at least [PERCENTAGE] above the vendor's normal amount
- A new vendor with a large charge
- A recurring cost that increased
- Several small charges from the same vendor within a short period

Compare current spending with the previous 90 days where enough data exists.

3. Overdue invoices

List:

- Invoice number
- Customer
- Amount
- Due date
- Number of days overdue
- Last reminder date, if available
- Recommended next step

Use my uploaded payment terms.

4. Cash flow risk

Estimate the next 30 days using only available data.

Include:

- Current available cash, if available
- Expected incoming payments
- Expected expenses
- Overdue receivables
- Large upcoming payments
- Estimated closing balance
- Difference between estimated closing balance and my minimum cash reserve

If important data is missing, explain what is missing. Do not invent an estimate.

5. Summary

Create:

- Total income
- Total expenses
- Net cash movement
- Outstanding invoices
- Possible duplicate charges
- Unusual spending
- Recurring cost increases
- Cash flow concerns
- Actions that need my attention

OUTPUT

Create a Google Doc called:

[YYYY-MM-DD] - Weekly Financial Visibility Report

Use these sections:

1. Summary
2. Immediate attention
3. Possible duplicate charges
4. Unusual spending
5. Overdue invoices
6. Cash flow forecast
7. Missing information
8. Recommended actions
9. Source transactions

Email the document link to [EMAIL ADDRESS].

The email should include only:

- Three highest-priority findings
- Total overdue invoices
- Any possible cash shortfall
- Link to the full report

RULES

- Never call a transaction fraudulent.
- Use phrases such as "possible duplicate" or "requires review."
- Show the records behind every alert.
- Never give tax, accounting, investment, or legal advice.
- Mark any uncertain calculation.
- Do not hide missing data.
- Escalate anything that appears to involve account compromise or unauthorised access.

Run the workflow manually using test data before scheduling it.`,
  },
  {
    id: "support",
    num: "05",
    name: "Customer support agent",
    intro:
      "The customer support agent reads new customer emails, identifies the customer's question, searches your policies and FAQs, drafts a clear answer, reviews previous messages in the thread, escalates sensitive or repeated cases, and logs what happened. It should answer routine questions, but it should not independently handle refunds, legal matters, repeated complaints, or threats to post a public review.",
    tools: [
      "Gmail, Gorgias, or Intercom",
      "Google Drive",
      "Google Docs",
      "Google Sheets (optional)",
      "Slack (optional)",
    ],
    files: [
      "Frequently asked questions",
      "Refund policy",
      "Cancellation policy",
      "Delivery or fulfilment information",
      "Terms and conditions",
      "Privacy policy",
      "Product instructions",
      "Troubleshooting steps",
      "Examples of good customer replies",
      "Escalation rules",
      "Team contact list",
    ],
    trigger:
      'Run whenever a new email receives the label "Customer Support", a new support ticket is created, or a customer replies to an open ticket.',
    checks: [
      "Uses your actual policies.",
      "Reads the full thread.",
      "Does not promise refunds.",
      "Does not argue with angry customers.",
      "Escalates repeat complaints.",
      "Escalates public-review threats.",
      "Does not expose private information.",
      "Creates a clear summary for your team.",
    ],
    prompt: `Create a Superagent called Customer Support Agent for [BUSINESS NAME].

Its job is to answer routine customer questions using my approved policies and FAQs, then escalate sensitive or unusual cases to a person.

Connect:

1. [GMAIL, GORGIAS, OR INTERCOM]
2. Google Drive
3. Google Docs
4. [GOOGLE SHEETS OR SLACK]

Use my uploaded FAQs, policies, product information, troubleshooting instructions, writing examples, and escalation rules as the only source of truth.

TRIGGER

Run whenever a new customer support message or reply is received.

WORKFLOW

1. Read the full conversation.
2. Identify:
   - Customer name
   - Email
   - Order number, if provided
   - Product or service
   - Main issue
   - What the customer has already tried
   - What outcome they want
   - Number of previous complaints about the same issue
3. Categorise the message:
   - Routine question
   - Account or access issue
   - Technical problem
   - Delivery or fulfilment question
   - Billing question
   - Refund request
   - Cancellation request
   - Legal issue
   - Privacy or security issue
   - Repeated complaint
   - Threat to post publicly
   - Abuse or harassment
   - Unknown
4. Search the uploaded files for the approved answer.
5. Draft a concise reply.
6. Log the result.

ROUTINE QUESTIONS

For routine questions:

- Answer directly.
- Use the exact policy where relevant.
- Include clear steps.
- Avoid unnecessary apologies.
- Do not blame the customer.
- Do not promise something the policy does not allow.
- Include the relevant help link where available.

ESCALATION

Do not send an automatic reply for:

- Refund requests
- Chargebacks
- Legal threats or legal questions
- Privacy or security concerns
- Repeated complaints
- A customer who has contacted us more than [NUMBER] times about the same issue
- Threats to post a negative public review
- Requests for compensation
- Media enquiries
- Requests from regulators or law enforcement
- Situations where the policy is unclear
- Situations where the uploaded files conflict

For these cases:

1. Create a draft acknowledgement.
2. Tell the customer that the matter has been passed to the relevant person.
3. Do not promise a result or deadline unless the policy provides one.
4. Create an escalation summary containing:
   - Customer
   - Issue
   - Conversation history
   - Requested outcome
   - Relevant policy
   - Risk
   - Recommended next step
   - Draft reply
5. Send the escalation summary to [PERSON, EMAIL, OR SLACK CHANNEL].

RULES

- Never invent a policy.
- Never issue or promise a refund.
- Never admit legal liability.
- Never reveal internal notes.
- Never expose another customer's information.
- Never ask for a password, PIN, one-time code, or complete payment card details.
- Never ignore earlier messages in the thread.
- If you cannot find a supported answer, escalate.
- Match the tone in my approved examples.

For the first 14 days, create drafts only.

After the testing period, routine questions may be sent automatically only after I approve the categories that are safe for automatic replies.

LOGGING

Record:

- Date
- Customer
- Category
- Issue
- Sentiment
- Policy used
- Draft or sent
- Escalated or not
- Assigned person
- Resolution status
- Conversation link

Run tests using:

1. A basic FAQ
2. A technical problem
3. A refund request
4. A repeated complaint
5. A legal threat
6. A threat to post a public review
7. A question not covered by the uploaded files

Show me the result for every test before enabling the automation.`,
  },
  {
    id: "productivity",
    num: "06",
    name: "Personal productivity agent",
    intro:
      "The personal productivity agent acts like a daily chief of staff. Every morning, it reads your calendar, checks your current projects and commitments, ranks your top priorities, prepares notes for your meetings, creates a realistic daily plan, identifies reminders and conflicts, and emails you a morning briefing.",
    tools: [
      "Google Calendar",
      "Gmail",
      "Google Docs",
      "Google Drive",
      "Google Tasks, Todoist, ClickUp, or Notion",
    ],
    files: [
      "Your goals for the year or quarter",
      "Your active projects",
      "Your deadlines",
      "Your priority rules",
      "Your regular responsibilities",
      "Your preferred working hours",
      "Your meeting note template",
      "Your daily planning template",
      "A list of people and projects that need special attention",
    ],
    trigger:
      "Run every weekday at a time that gives you enough time to read the briefing before work. For example: Every weekday at 6:30 AM in Africa/Lagos.",
    checks: [
      "Understands your real goals.",
      "Limits your priorities to three.",
      "Does not overfill your day.",
      "Prepares notes using real information.",
      "Does not move meetings.",
      "Does not email other people.",
      "The morning briefing arrives in the correct timezone.",
    ],
    prompt: `Create a Superagent called Personal Productivity Agent.

Its job is to read my calendar and work information, rank my priorities, prepare meeting notes, build a realistic daily plan, and email me a morning briefing.

Connect:

1. Google Calendar
2. Gmail
3. Google Docs
4. Google Drive
5. [GOOGLE TASKS, TODOIST, CLICKUP, OR NOTION]

Use my uploaded goals, projects, deadlines, working hours, priority rules, meeting note template, and daily planning template.

SCHEDULE

Run every weekday at [TIME] in [TIMEZONE].

MORNING WORKFLOW

1. Review today's calendar.
2. Review the next seven days for deadlines, preparation work, or scheduling conflicts.
3. Review my task system for:
   - Tasks due today
   - Overdue tasks
   - High-priority tasks
   - Tasks connected to today's meetings
4. Review important or flagged Gmail messages from the previous [NUMBER] hours.
5. Identify commitments I have made in recent emails.
6. Rank my three most important priorities for today.

PRIORITY RULES

Rank work using:

- Deadlines
- Consequences of delay
- Importance to my current goals
- Commitments already made to other people
- Revenue or customer impact
- Work required before a meeting
- Available time
- Dependencies blocking other work

Do not rank tasks only because they are easy or recently added.

For each priority, explain in one sentence why it is included.

MEETING PREPARATION

For every important meeting today, prepare:

- Meeting title and time
- Attendees
- Purpose
- Relevant project
- Previous decisions or commitments
- Relevant emails or files
- Questions I should ask
- Decisions I may need to make
- Follow-up items from the previous meeting
- Any preparation still required

Do not invent information about an attendee or project.

DAILY PLAN

Create a realistic time-blocked plan.

Include:

- My top three priorities
- Fixed meetings
- Focus blocks
- Preparation time
- Breaks
- Administrative work
- A buffer for unexpected work
- End-of-day review

Do not schedule every minute.

Do not place two activities at the same time.

Do not schedule focus work during an existing calendar event.

REMINDERS

Flag:

- Overdue tasks
- Deadlines within seven days
- Meetings that need preparation
- Unanswered important emails
- Scheduling conflicts
- Commitments that may be missed

MORNING BRIEFING FORMAT

Create a Google Doc with:

1. Date
2. Top three priorities
3. Today's schedule
4. Focus blocks
5. Meeting preparation
6. Important emails and commitments
7. Reminders
8. Risks or conflicts
9. A short end-of-day success checklist

Email the briefing to [EMAIL ADDRESS].

The email body should contain:

- Top three priorities
- First meeting
- Most urgent reminder
- Link to the complete Google Doc

RULES

- Do not reschedule or cancel meetings.
- Do not send messages to other people.
- Do not accept invitations.
- Do not delete tasks.
- Do not mark work complete.
- Do not expose private calendar details in reports sent to other people.
- Ask for approval before changing anything.
- Use read-only access during the testing period.
- If calendar, email, and task information conflict, flag the conflict rather than guessing.

TESTING

Run the agent manually for three different days before scheduling it.

Check:

1. A quiet day
2. A meeting-heavy day
3. A day with an urgent deadline

Show me the proposed plan before emailing it.`,
  },
] as const;
