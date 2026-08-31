export const SLUG = "ai-second-brain";

export const LAST_CHECKED = "August 13, 2026";

export const USE_CASES = [
  "Finding information you saved months ago",
  "Preparing for meetings from old notes and documents",
  "Reviewing sales calls or customer feedback",
  "Connecting ideas from different projects",
  "Turning research into articles, scripts, reports, or plans",
  "Tracking decisions and why they were made",
  "Asking questions based on your own files instead of one chat",
] as const;

export const NEED = [
  "Obsidian Desktop",
  "Claude Code",
  "A folder on your computer for the vault",
  "A backup plan for the folder",
  "Files you have permission to store and process",
] as const;

export const OFFICIAL_LINKS = [
  { label: "Download Obsidian", href: "https://obsidian.md/download" },
  { label: "Obsidian Help", href: "https://obsidian.md/help/" },
  {
    label: "Claude Code overview and installation",
    href: "https://code.claude.com/docs/en/overview",
  },
] as const;

export const VAULT_STEPS = [
  "Download and open Obsidian.",
  "Select Create new vault.",
  "Name it something clear, such as Mercy Second Brain or Business Second Brain.",
  "Choose a folder on your computer.",
  "Select Create.",
] as const;

export const INSTALL_MAC = "curl -fsSL https://claude.ai/install.sh | bash";
export const INSTALL_WIN =
  "irm https://claude.ai/install.ps1 | iex";

export const OPEN_VAULT = `cd "/path/to/your/second-brain"
claude`;

export const FOLDER_TREE = `Second Brain/
├── 00 Inbox/
├── 10 Knowledge/
├── 20 Projects/
├── 30 People/
├── 40 Meetings/
├── 50 Content/
├── 60 Decisions/
├── 90 Archive/
├── _System/
│   ├── Home.md
│   ├── Rules.md
│   ├── Glossary.md
│   ├── Sources.md
│   └── Ingest Log.md
└── _Outputs/`;

export const FOLDER_GUIDE = [
  {
    folder: "00 Inbox",
    use: "New files and notes waiting to be processed",
  },
  {
    folder: "10 Knowledge",
    use: "Clean notes about ideas, topics, methods, and facts",
  },
  {
    folder: "20 Projects",
    use: "Active project notes and project indexes",
  },
  {
    folder: "30 People",
    use: "Notes about people and organizations you work with",
  },
  {
    folder: "40 Meetings",
    use: "Meeting notes and transcripts",
  },
  {
    folder: "50 Content",
    use: "Content ideas, drafts, scripts, and published work",
  },
  {
    folder: "60 Decisions",
    use: "Important decisions, options considered, and reasons",
  },
  {
    folder: "90 Archive",
    use: "Completed or inactive material",
  },
  {
    folder: "_System",
    use: "The rules, index, glossary, and processing log",
  },
  {
    folder: "_Outputs",
    use: "Reports, briefs, plans, and other work created from the vault",
  },
] as const;

export const TEST_FILES = [
  "A meeting note",
  "A PDF or article you own or are allowed to store",
  "A project brief",
  "A document containing your own ideas",
  "A transcript with private details removed",
] as const;

export const DAILY_WORKFLOW = [
  "Drop new files or quick notes into 00 Inbox.",
  "Ask Claude to process a small batch.",
  "Review the notes it creates or updates.",
  "Ask questions with the query prompt.",
  "Save any useful result in _Outputs.",
  "Run the weekly maintenance prompt once a week.",
] as const;

export const IMPROVEMENT_TIPS = [
  "Add your own notes, not only things written by other people",
  "Record decisions and why you made them",
  "Keep project summaries current",
  "Store customer questions and feedback with dates and sources",
  "Correct wrong notes as soon as you find them",
  "Use the same names for the same people, products, and projects",
  "Keep an index of active work",
] as const;

export const PRIVACY_RULES = [
  "Do not store passwords, recovery codes, API keys, full bank details, or identity documents in the vault",
  "Remove customer and employee personal data unless you have a clear reason and permission to keep it",
  "Keep a local backup on a separate drive or approved encrypted service",
  "Check where any Obsidian sync service stores your files before enabling it",
  "Review what Claude creates before treating it as accurate",
  "Do not let Claude delete or reorganize large parts of the vault without a backup",
] as const;

export const TROUBLESHOOTING = [
  {
    title: "Claude cannot see the vault",
    body: "Exit Claude Code, open Terminal inside the vault folder, and run claude again. Ask Claude to print the current working directory before continuing.",
  },
  {
    title: "Claude creates too many notes",
    body: "Tell it to update existing notes first and create a new note only when the subject is truly different.",
  },
  {
    title: "The graph looks busy but is not useful",
    body: "Remove automatic linking rules. Keep only links that help you move between related information.",
  },
  {
    title: "Answers are not based on your files",
    body: "Use the query prompt and require a file path beside each important claim.",
  },
  {
    title: "The inbox keeps growing",
    body: "Process a small batch on a fixed schedule. Do not add more information than you can review.",
  },
  {
    title: "A PDF is not read correctly",
    body: "Try a text-based copy, export the relevant pages, or add a short note explaining what the file contains. Scanned image-only PDFs may need another extraction step.",
  },
] as const;

export const FAQS = [
  {
    q: "Does Obsidian train Claude on my files?",
    a: "No. Obsidian stores the files. Claude Code reads files it can access while working in the folder. The model is not being retrained on your vault during this process.",
  },
  {
    q: "Do I need Obsidian?",
    a: "No. Claude Code can work with a normal folder of Markdown and other files. Obsidian gives you a useful interface for reading, linking, and editing them.",
  },
  {
    q: "Can I use ChatGPT or another AI with the same folder?",
    a: "Yes, if the tool can access local files or you upload the relevant files. The folder is not locked to one AI provider.",
  },
  {
    q: "Should I add every file I own?",
    a: "No. Begin with information you expect to use. A smaller reviewed vault is easier to trust than a large unreviewed one.",
  },
  {
    q: "Can it organize everything automatically?",
    a: "It can help, but you should approve naming rules, major moves, deletions, and any conclusion that affects your work.",
  },
] as const;

export const INSPIRATION_LINKS = [
  "https://vt.tiktok.com/ZS4cvBEf7/",
  "https://vt.tiktok.com/ZS4cvQqr7/",
  "https://vt.tiktok.com/ZS4cvnHL4/",
  "https://vt.tiktok.com/ZS4cvTtvQ/",
  "https://vt.tiktok.com/ZS4ccJY7W/",
] as const;

export const SETUP_PROMPT = `I want you to set up this folder as my AI second brain.

Before changing anything, inspect the current files and ask me up to 10 questions about:
1. The main areas of my life or business this vault should cover
2. The types of files I will add
3. My active projects
4. The people or organizations I need to track
5. The outputs I want to create from this information
6. My preferred naming style
7. Whether I want dates in file names
8. Any private information that should be excluded
9. My timezone
10. How often I want the vault reviewed

After I answer, create a simple structure with these folders unless my answers require a better one:
- 00 Inbox
- 10 Knowledge
- 20 Projects
- 30 People
- 40 Meetings
- 50 Content
- 60 Decisions
- 90 Archive
- _System
- _Outputs

Inside _System, create:
- Home.md: a clear index with links to the main sections and active projects
- Rules.md: the rules for naming, organizing, updating, and citing notes
- Glossary.md: important names, products, abbreviations, and terms
- Sources.md: the approved source list and how each source should be treated
- Ingest Log.md: a dated record of files processed, notes created, notes updated, and problems found

Use these rules:
- Preserve every original file
- Never delete or overwrite an original without asking me
- Do not invent facts, dates, names, links, or relationships
- Keep the source file path in every note created from another file
- Separate direct facts, my opinions, and your inferences
- Use readable Markdown
- Add useful links between related notes, but do not create links only to make the graph look busy
- Reuse and update an existing note when it already covers the same subject
- Keep file names short and clear
- Use ISO dates in the form YYYY-MM-DD where dates are needed
- Do not move private files into a cloud service
- Do not process passwords, API keys, ID documents, bank information, or other secrets

Create a README.md that explains how to add information, process the inbox, search the vault, back it up, and restore it.

Show me the proposed structure before making large changes. After setup, give me a short tour of every file you created.`;

export const INGEST_PROMPT = `Process the unprocessed files inside 00 Inbox.

For each file:
1. Identify the file type and subject
2. Preserve the original file
3. Extract the useful facts, ideas, decisions, questions, and action items
4. Create a new note or update the correct existing note
5. Add the source file path and processing date
6. Link the note to related projects, people, meetings, content, or knowledge notes
7. Mark anything uncertain as uncertain
8. Do not create a fact that is not present in the source
9. Add the work completed to _System/Ingest Log.md
10. Show me a summary before moving the original file to an archive folder

If a file contains sensitive personal information, stop and ask me what to remove before processing it.`;

export const QUERY_PROMPT = `Answer this question using only the information in this vault:

[ADD YOUR QUESTION]

Rules:
- Search the relevant folders before answering
- Cite the file path beside every important claim
- Separate confirmed facts, my previous opinions, your inference, and missing information
- Tell me when two notes disagree
- Do not fill a gap with general knowledge unless I ask you to
- End with the three most relevant source files`;

export const CONTENT_PROMPT = `Use my second brain to help me create a piece of content about:
[TOPIC]

Audience: [AUDIENCE]
Platform: [PLATFORM]
Format: [FORMAT]
Goal: [GOAL]
Length: [LENGTH]

First, find the most relevant notes and show me the source list.
Then give me three original angles based on my own experiences, projects, decisions, or research in the vault.
Do not copy wording from saved articles or other creators.
Do not add a claim unless it is supported by a source in the vault or clearly marked for verification.
Wait for me to choose an angle before writing the final piece.`;

export const MEETING_PROMPT = `Prepare me for my next meeting about [TOPIC OR PROJECT].

Search the vault for related people, previous meetings, decisions, promises, deadlines, risks, and open questions.

Return:
1. A short background summary
2. What was agreed previously
3. Outstanding actions and owners
4. Questions I should ask
5. Decisions I may need to make
6. The source file beside every important point`;

export const MAINTENANCE_PROMPT = `Review this vault for the past seven days.

Check for:
- Files still waiting in 00 Inbox
- Duplicate notes
- Broken internal links
- Notes without sources
- Tasks or promises without owners or dates
- Active projects missing a current summary
- Decisions that were made but not recorded
- Old information that may need verification

Do not delete anything.
Give me a short report, then ask before making structural changes.
Update _System/Home.md and _System/Ingest Log.md only after I approve the changes.`;
