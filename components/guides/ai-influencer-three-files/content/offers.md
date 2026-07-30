# offers.md

This is how she earns. Without it she is a pretty account that posts for free.

The file has two jobs. It tells Claude Code what she sells and for how much, so no price is ever invented in a DM, and it tells her how to handle a brand that slides in at 11pm asking for rates.

Every number in here is one you have decided. The model quotes from this file and nowhere else.

---

## 1. The offer ladder

Four rungs. Someone should be able to move from free to paid without a jump that feels absurd.

| Rung | What it is | Price | Where it lives | Who it is for |
|------|-----------|-------|----------------|---------------|
| Free | | 0 | | |
| Entry | | | | |
| Core | | | | |
| Premium | | | | |

*Example: free is a weekly email, entry is a 9 dollar workout plan on Gumroad, core is a 29 dollar a month subscription, premium is a 149 dollar six week programme.*

Rules:

- The free thing has to be genuinely useful on its own.
- Never invent a discount. If there is a promo, it goes in the table with an end date.
- If someone asks for a price that is not in this table, she says she will check and you answer it yourself.

## 2. Digital products

```
### [Product name]
- Price:
- What is inside:
- Link:
- Delivery: [instant download / email / platform]
- Refund policy:
- One line pitch she uses in a DM:
- Common objection and her answer:
```

## 3. Subscriptions

```
### [Platform and tier name]
- Price per month:
- What subscribers get:
- Posting cadence she has committed to:
- What is explicitly not included:
- Link:
- What she says when someone asks for free access:
```

Write the last line out word for word. It comes up constantly and it needs to be the same answer every time.

## 4. Brand deals, inbound

What she does when a brand messages first.

**Rate card**

| Deliverable | Rate |
|-------------|------|
| One in feed reel | |
| One static post | |
| Story set (3 frames) | |
| Reel plus story set | |
| Link in bio, 7 days | |
| Usage rights, 30 days | + |
| Usage rights, 90 days | + |
| Exclusivity, 30 days | + |
| Cross post to another platform | + |

**The inbound reply she sends**

Write it out in full, in her voice, so the model does not improvise a negotiation.

```
[Your template here. It should thank them, ask three questions, and give a rate range or point to a rate kit. Do not agree to anything in the first reply.]
```

**The three questions she always asks**

1. What are the deliverables and the deadline
2. Do you need usage rights or exclusivity, and for how long
3. What is the budget

**What she never does in a DM**

- Agree to a fee before deliverables are confirmed
- Send content before a payment term is agreed
- Accept product only, unless it is on the exception list below
- Give a discount because the brand says it is good exposure

**Product only exceptions:**

## 5. Brand deals, outbound

```
### Target list
| Brand | Why they fit | Contact | Pitched on | Response | Next step |
|-------|--------------|---------|------------|----------|-----------|
```

**The outbound pitch**

Short. Three sentences and a link.

```
[Your template here. Who she is, one number that proves the audience is real, one specific idea for their product, link to the rate kit.]
```

Send five a week. Log every one in brain.md under Brands, including the ones that never reply.

## 6. What she turns down

Write these as hard rules. The model checks this list before it agrees to anything.

- Categories she will not promote:
- Anything that conflicts with an opinion in persona.md:
- Anything requiring a claim she cannot make (a health result, a before and after, having eaten or worn the thing):
- Anything below a floor of:
- Anything that requires her to appear in person:

**The decline she sends:**

```
[One or two lines, polite, no explanation, no apology, leaves the door open.]
```

## 7. Payment terms

- Currency:
- Deposit required:
- Payment window:
- Invoicing method:
- What happens if an invoice goes past due:
- Who signs the contract, since she cannot:

That last line matters. A brand deal is a contract between the brand and you, not her, so decide now whose name and entity goes on the paperwork and write it here.

## 8. Disclosure

- How every paid post is labelled:
- Where the AI disclosure sits on the profile and in captions:
- What she says if a follower asks whether a post was paid:

Advertising rules apply the same way they do to a human account, and platforms are tightening AI labelling. Getting this wrong is the fastest way to lose the account you spent months building.

## 9. Numbers to review monthly

- Revenue by rung:
- Best converting product:
- Conversion rate from free to entry:
- Brand deals booked versus pitched:
- Average deal size, and whether it is going up:
- Rates last raised on:

---

## Prompts

### Prompt 1: build the offer ladder

```
I am building an AI influencer in the [NICHE] niche. Attached is persona.md and an empty offers.md.

Help me build the offer ladder. Ask me what I can actually produce and deliver before you suggest anything, because I am the one making these products, not her.

Then propose four rungs: free, entry, core, premium. For each one give me the price, what is inside, and why someone moves up from the rung below.

Constraints:
- Nothing that requires her to appear on a live call or in person
- Nothing that requires a health, income, or results claim
- The free rung has to be useful on its own, not a teaser

After I approve the ladder, fill in sections 1, 2, and 3 of offers.md.
```

### Prompt 2: set the rate card

```
Read persona.md and offers.md.

Her follower count is [NUMBER], her average reel views are [NUMBER], and her engagement rate is [NUMBER].

Give me a rate card for the deliverables in section 4, with a range for each, and tell me which comparable human creator tier you are basing it on. Then tell me the floor I should never go below and why.

Do not pad the numbers to flatter me.
```

### Prompt 3: handle an inbound brand DM

```
Read persona.md, brain.md, and offers.md.

A brand just sent this: [PASTE THE MESSAGE]

Tell me first:
1. Is this brand already in brain.md, and what is the history
2. Does this conflict with anything in section 6, what she turns down
3. Which rate card line or lines this maps to

Then write her reply using the inbound template in section 4. Do not quote a price that is not in offers.md, do not agree to deliverables, and ask the three questions.

Then give me the brain.md entry.
```

### Prompt 4: write the outbound pitch

```
Read persona.md and offers.md.

Target brand: [BRAND]
Their product: [PRODUCT]

Write the outbound pitch using the template in section 5. Three sentences and a link. One of the three has to be a specific content idea for their product, not a generic offer to collaborate.

Then give me four more brands that fit her niche the same way, and why each one fits.
```
