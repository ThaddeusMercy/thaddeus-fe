# brain.md

This is the memory. persona.md decides who she is, brain.md decides whether she stays that person over months. Everything she has said, promised, posted, and been told goes in here, and Claude Code reads it before it writes a single reply.

Without this file she will tell the same follower the same story twice, forget a brand she is mid negotiation with, and answer a question she already answered last Tuesday. That is what makes an account read as automated.

---

## How to use this file

1. Claude Code reads persona.md, brain.md, and offers.md before every interaction.
2. After every interaction it appends to the relevant log below.
3. Never delete an entry. Archive to the bottom if the file gets long.
4. Run a cron job to check DMs and comments on a schedule you set, so entries go in the same day.
5. Once a week, read the open threads section yourself. That is where things get dropped.

Suggested cron: every four hours during your posting hours, not overnight, because a reply at 3am from someone whose persona says she is asleep is a tell.

---

## People

One entry per person she has talked to more than once. Keep it short and factual.

```
### @handle
- First talked: [date]
- Last talked: [date]
- What they want from her: [fan / friendly / asking for advice / trying to sell something]
- Facts they told her: [name, job, city, anything personal they shared]
- What she told them: [any story or detail she gave, so she does not contradict it]
- Open thread: [anything she said she would do or answer]
- Tone to use: [warm / short / polite but distant]
- Flags: [pushy, rude, has asked if she is real, sends money]
```

The two lines that do the most work are "what she told them" and "open thread". The first stops her contradicting a story she already gave. The second stops her forgetting something she offered.

## Brands

Every brand that has touched the account, whether it went anywhere or not.

```
### [Brand name]
- Contact and handle:
- First contact: [date, and who reached out]
- Status: [inbound / pitched / negotiating / booked / delivered / paid / declined / ghosted]
- What they want:
- Fee discussed:
- Deliverables agreed:
- Usage rights and exclusivity agreed:
- Deadlines:
- What was actually sent and when:
- Notes: [how they negotiate, whether they paid on time, whether to work with them again]
```

Keep declined brands in here too. They come back six months later and you want the history.

## Content log

Every post, so she does not repeat a hook, a story, or a joke.

```
| Date | Format | Hook or topic | Angle used | Performance | Comments worth noting |
|------|--------|---------------|------------|-------------|----------------------|
```

Also track:

- Stories she has told publicly (so she never tells a different version)
- Opinions she has stated publicly (so she never reverses one without acknowledging it)
- Anything she promised in a caption or a comment

## Open threads

The list that actually matters. Anything she said she would do and has not done yet.

```
- [ ] [date] promised @handle the mobility list
- [ ] [date] told [brand] she would send rates by Friday
- [ ] [date] said in a story she would do a Q and A this week
```

Clear these weekly. An unanswered promise is worse than never offering.

## Continuity rules

Write the hard rules here so the model checks them before replying.

- Never claim to have done something that is not in the content log or persona.md.
- Never give a date, price, or number that is not written in offers.md.
- If a follower references something she cannot find in this file, she says she is not sure rather than inventing it.
- If two entries contradict each other, the older one wins and the newer one gets corrected.
- Never mention another follower by name to a different follower.
- If someone asks whether she is real, use the exact wording in persona.md section 10.

## Weekly review

Once a week, answer these four:

1. What did she promise that has not been delivered
2. Which brand conversation has gone quiet and needs a follow up
3. Which hook or story is she at risk of repeating
4. Did anything she said this week contradict what is written in persona.md

## Archive

Move entries older than six months here rather than deleting them.

---

## Prompts

### Prompt 1: set up the file

```
I am building an AI influencer. Attached is my persona.md and an empty brain.md.

Set brain.md up for me. Create the People, Brands, Content log, and Open threads sections, and write the continuity rules based on what is actually in persona.md, so if she avoids a topic or has a locked answer for something, the rules reference it directly.

Do not invent any followers, brands, or posts. The logs start empty.
```

### Prompt 2: log an interaction

Run this after every DM, comment thread, or brand conversation. This is the one that has to become a habit, and it is the reason the cron job exists.

```
Read brain.md.

Here is an interaction that just happened: [PASTE IT]

Output only the lines to append to brain.md, formatted to match the existing entries. If this person already has an entry, output the updated version of that entry rather than a new one.

Flag for me if anything in this interaction contradicts something already in the file.
```

### Prompt 3: reply with memory

```
Read persona.md and brain.md.

[HANDLE] just sent this: [PASTE MESSAGE]

Before you write anything, tell me what brain.md already says about this person, including anything she promised them and any story she has already told them.

Then write the reply in her typing style.

Then give me the brain.md update.
```

### Prompt 4: the weekly review

```
Read brain.md.

Give me:
1. Every open thread that is still unchecked, oldest first
2. Every brand conversation with no activity in 7 days, and a one line follow up for each
3. Any hook, story, or opinion in the content log that has been used more than once
4. Anything in the logs that contradicts persona.md

Be blunt. Do not tell me things are fine if they are not.
```
