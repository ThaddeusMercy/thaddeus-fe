# Start here

Three files, built in order, because each one depends on the last. persona.md decides who she is. brain.md remembers what she has said. offers.md decides what she sells. Filling offers.md before you know who she is gives you a rate card for nobody.

Set aside about two hours for the first pass. The interview below is the slow part and it is the part that decides whether she reads as a person or as a bot with a nice face.

## Step 1: the master prompt

Paste this into Claude with all three empty files attached. It will not stop asking questions until the files are actually finished, which is the point.

```
You are helping me build an AI influencer from scratch. I have attached three empty files: persona.md, brain.md, and offers.md.

Her niche is [NICHE]. Her audience is [WHO THEY ARE]. I want her to earn from [DIGITAL PRODUCTS / SUBSCRIPTIONS / BRAND DEALS].

Work through the files in order, persona first, then brain, then offers. Do not write any file until we have finished talking about it.

How to interview me:
- One question at a time. Wait for my answer before the next one.
- If my answer is vague, ask again with an example of what specific would look like.
- If my answer is flattering, ask me for the unflattering version.
- If I contradict something I said earlier, stop and make me choose.
- If I say "you decide", give me three options and make me pick. Never invent a detail and move on.
- Every 10 questions, tell me which sections are still empty.

Stopping conditions, do not skip these:
1. persona.md is done when I can answer all twenty questions in section 11 without hesitating. Ask me all twenty. Send me back to the relevant section for any I fumble.
2. brain.md is done when the continuity rules reference specific things from persona.md, not generic ones.
3. offers.md is done when every price, rate, and floor is a number I gave you, and the inbound reply and the decline are written out word for word.

When all three pass, output the three finished files in full, one after the other. Then tell me in one list what is still weak and what I should decide before I post anything.
```

## Step 2: check your own work

A day later, come back and run this. You will have forgotten what you wrote, which is exactly the state your audience is in.

```
Read persona.md, brain.md, and offers.md as if you were a follower who has been in her DMs for three months.

Tell me:
1. Which details are so generic they could describe any account in this niche
2. Where she would contradict herself if two different people asked her the same thing a week apart
3. Which of her opinions is too safe to ever get a comment
4. What a brand would ask for that offers.md has no answer to
5. The one thing most likely to make someone say "this is AI"

Be blunt. Do not soften it.
```

## Step 3: point your agent at the files

Put the three files in one folder and add a CLAUDE.md next to them so Claude Code loads them before it does anything.

```
# CLAUDE.md

Read persona.md, brain.md, and offers.md in full before every task.

Rules:
- Never write in her voice without checking section 5 of persona.md for how she types.
- Never state a price that is not in offers.md.
- Never claim she did something that is not in the content log in brain.md.
- Never reply to a person without first checking whether they already have an entry in brain.md.
- After every interaction, output the lines to append to brain.md.
- If a fact is missing, say so and ask me. Do not fill the gap.
```

Folder layout that works:

```
/influencer
  CLAUDE.md
  persona.md
  brain.md
  offers.md
  /images
    lookllock.txt        the 8 descriptors, pasted into every image prompt
    /posted              every image you have published
  /content
    captions.md
    posted-log.md
```

## Step 4: the daily loop

- Morning: generate the day's images using the look lock, never from memory
- Check DMs and comments, reply using the memory prompt in brain.md
- Log every interaction to brain.md the same day
- Once a week: run the weekly review prompt in brain.md
- Once a month: run the numbers review in offers.md and decide whether rates go up

A cron job every four hours during your posting window handles the checking. Leave the overnight hours alone, because a reply at 3am from someone whose persona says she is asleep is a tell.
