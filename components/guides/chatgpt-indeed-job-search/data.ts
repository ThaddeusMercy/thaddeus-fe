export const SLUG = "chatgpt-indeed-job-search";

export const NEED = [
  "A ChatGPT account with access to the Plugin Directory",
  "The Indeed plugin available for your plan, workspace, role, and region",
  "A clean master resume",
  "A clear target role, location, work style, and salary range",
  "Time to review every job and tailored document before applying",
] as const;

export const OFFICIAL_LINKS = [
  {
    label: "ChatGPT Plugin Directory (search Indeed)",
    href: "https://chatgpt.com/plugins?q=indeed",
  },
  {
    label: "OpenAI plugin instructions",
    href: "https://help.openai.com/en/articles/20001256",
  },
  {
    label: "Indeed",
    href: "https://www.indeed.com/",
  },
] as const;

export const REMOVE = [
  "Full home address",
  "National ID, passport, tax, or bank information",
  "Personal details about references",
  "Private client information",
  "Passwords, access links, or internal company data",
  "Salary history unless you intentionally want to use it",
] as const;

export const KEEP = [
  "Name",
  "Professional email",
  "City or country where relevant",
  "Work history",
  "Education and certifications",
  "Skills",
  "Portfolio, LinkedIn, or website links",
  "Measurable results you can prove",
] as const;

export const CONNECT_STEPS = [
  "Open ChatGPT on the web or desktop app.",
  "Select Plugins in the sidebar, or open Settings and select Plugins.",
  "Search for Indeed.",
  "Open the plugin listing.",
  "Select the plus icon or Connect.",
  "Complete any sign-in or permission step shown.",
  "Start a new chat.",
  "Add or mention the Indeed plugin when you want ChatGPT to search Indeed.",
] as const;

export const SCORE_WEIGHTS = [
  "Required experience",
  "Required skills",
  "Industry or domain experience",
  "Seniority",
  "Location and work arrangement",
  "Work authorization",
  "Salary when disclosed",
  "Responsibilities you want",
  "Responsibilities you want to avoid",
] as const;

export const WORKFLOW = [
  "Search for 15 strong matches.",
  "Remove roles you do not actually want.",
  "Read the full listing on Indeed.",
  "Choose three to five roles for the week.",
  "Tailor the resume for each role.",
  "Check every change against the master resume.",
  "Apply through the real employer or Indeed listing.",
  "Research one useful contact for the strongest roles.",
  "Review and send a short personal message yourself.",
  "Update the tracker.",
] as const;

export const CHECKLIST = [
  "The job is still open",
  "The location and work arrangement fit you",
  "Required work authorization is clear",
  "The salary fits when it is disclosed",
  "The resume contains only true information",
  "The most relevant experience appears early",
  "Dates, job titles, and company names are correct",
  "Links work",
  "Spelling and formatting are clean",
  "The file name is professional",
  "The cover letter or message names the correct company and role",
  "You have saved a copy of what you submitted",
] as const;

export const PRIVACY = [
  "Remove sensitive personal data before uploading a resume",
  "Review the Indeed plugin's permissions and privacy policy",
  "Do not paste passwords, login codes, identity documents, or banking details into ChatGPT",
  "Verify every job on the real listing before applying",
  "Be careful with jobs that ask for payment, gift cards, crypto, equipment fees, or sensitive information before a formal process",
  "Do not let an AI send messages or applications without your review",
  "Keep a record of every company and link you apply through",
] as const;

export const FAQS = [
  {
    q: "Can ChatGPT apply to the jobs for me?",
    a: "This guide keeps applications under your control. Review the job, resume, form answers, and message, then submit them yourself.",
  },
  {
    q: "Does the Indeed plugin work for everyone?",
    a: "Availability can vary by plan, workspace, role, surface, and region. Search the Plugin Directory from your own account.",
  },
  {
    q: "Can ChatGPT guarantee an interview?",
    a: "No. It can help you find and present relevant experience clearly. The employer decides who moves forward.",
  },
  {
    q: "Should I tailor every line of my resume?",
    a: "No. Keep a stable master resume and change only the summary, skills order, selected bullets, and projects that are genuinely relevant to the role.",
  },
  {
    q: "How many jobs should I apply to?",
    a: "There is no universal number. Choose a weekly target you can research and tailor properly rather than sending rushed applications everywhere.",
  },
  {
    q: "Should I message a recruiter for every job?",
    a: "No. Use outreach for roles that fit well and when you can write something specific. A vague message to hundreds of people is not personal outreach.",
  },
] as const;

export const PROBLEMS = [
  {
    q: "Indeed does not appear in Plugins",
    a: "Plugin availability can depend on plan, workspace settings, role, supported surface, and region. Check the Plugin Directory, try ChatGPT web or desktop, and ask your workspace admin whether the plugin is allowed.",
  },
  {
    q: "ChatGPT returns old or closed jobs",
    a: "Ask it to refresh the Indeed search, include the date posted, remove duplicates, and open every selected listing before you tailor a resume.",
  },
  {
    q: "Salary is missing",
    a: "Do not let ChatGPT rank the role as high-paying based on an estimate. Keep salary marked Not listed unless the listing gives a range.",
  },
  {
    q: "The tailored resume contains made-up experience",
    a: "Stop and return to the master resume. Repeat the instruction that the master resume is the only source of truth and ask for a change log.",
  },
  {
    q: "The recruiter research gives the wrong person",
    a: "Require a public source and confidence level. Contact a general recruiting team instead of guessing when the exact hiring manager is unclear.",
  },
  {
    q: "The output is too generic",
    a: "Give ChatGPT the full job description, your real project details, measurable results, and the exact type of work you want.",
  },
] as const;

export const PROMPT_MATCHES = `Use the Indeed plugin and my uploaded resume to find current jobs that match my real experience.

Before searching, ask me for any missing information from this list:
- Target job titles
- Industry
- Location
- Remote, hybrid, or on-site preference
- Willingness to relocate
- Minimum salary or pay range
- Employment type
- Seniority level
- Work authorization or visa needs
- Skills I want to use more
- Skills or responsibilities I want to avoid

Search rules:
- Use only current job listings
- Prefer jobs posted recently
- Do not treat a missing salary as a high salary
- Rank by the highest listed pay only when a salary is shown
- Do not say I qualify for a requirement that is not supported by my resume
- Remove duplicates and expired listings
- Give me the direct job link
- Do not apply or send anything

Return the 15 strongest matches in a table with:
1. Job title
2. Company
3. Location
4. Remote, hybrid, or on-site
5. Salary or pay if the listing shows it
6. Date posted if available
7. Direct Indeed link
8. Main requirements
9. Evidence from my resume that matches
10. Important gaps
11. Match score out of 100
12. Why the role is worth reviewing

After the table:
- Recommend the five roles I should review first
- Explain the score in plain language
- Separate true gaps from skills that can be learned quickly
- Tell me which job descriptions need more information before I decide
- Ask me to choose the roles I want to continue with`;

export const PROMPT_TAILOR = `Tailor my resume for this job using my master resume as the only source of truth.

Job description:
[PASTE THE FULL JOB DESCRIPTION]

Rules:
- Do not invent a skill, result, job title, employer, project, certification, date, or responsibility
- Do not change my real level of experience
- Do not copy full sentences from the job description
- Use the employer's important terms only when they truthfully describe my experience
- Keep the resume easy for a person and an applicant tracking system to read
- Use simple headings and no tables, columns, icons, or text boxes
- Keep measurable results only when they are supported by my master resume
- If an important fact is missing, ask me instead of guessing

First, return:
1. The five requirements that matter most
2. Where my resume proves each one
3. The true gaps
4. Keywords I can use honestly
5. Questions you need me to answer

Then create:
1. A tailored professional summary
2. A tailored skills section
3. Revised experience bullets in the best order for this role
4. A short project section if relevant
5. A clean final resume draft
6. A change log showing what you changed and why

Write achievement bullets with a clear action, the work completed, and the measurable result when a real number is available. Do not force a number into every bullet.`;

export const PROMPT_OUTREACH = `Help me research the likely recruiter or hiring manager for this role.

Company: [COMPANY]
Job title: [JOB TITLE]
Job link: [LINK]
Location or team: [LOCATION OR TEAM]

Use public professional sources only.
Do not guess a person's identity from a vague title.
Do not collect private contact information or bypass a site's access rules.

Return:
1. The most likely hiring contact or recruiting team
2. Their public role and source link
3. Why they may be relevant
4. Your confidence level: high, medium, or low
5. Another contact option if the first person is uncertain

Then draft:
- One LinkedIn connection note under 250 characters
- One LinkedIn message under 500 characters
- One short email under 120 words only if a public professional email is available

The message should mention one specific reason I fit the role, based on my resume and the job description.
Do not exaggerate. Do not say I have applied unless I confirm that I have. Do not send anything. I will review and send it myself.`;

export const PROMPT_TRACKER = `Create a job application tracker from the roles I selected.

Use these columns:
- Company
- Job title
- Job link
- Location
- Work arrangement
- Salary if listed
- Date posted
- Application deadline if listed
- Match score
- Resume version
- Contact person
- Contact link
- Application status
- Date applied
- Follow-up date
- Interview stage
- Next action
- Notes

Use these status options:
Saved, Reviewing, Tailoring, Applied, Follow-up due, Interviewing, Offer, Rejected, Withdrawn, Closed.

Do not mark any role as applied unless I tell you it was submitted.
At the end, show me the five next actions ordered by urgency.`;

export const WEAK_BULLET = "Managed social media accounts.";

export const STRONG_BULLET =
  "Planned and published weekly content across three social platforms, increasing average monthly reach from [REAL NUMBER] to [REAL NUMBER].";
