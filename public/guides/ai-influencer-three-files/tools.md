# The tools

Everything below is what the stack looks like as of July 2026. Prices move and models get replaced every few weeks, so check before you commit to anything on an annual plan. The files stay the same regardless of which tool you pick, which is the whole reason the system is files and not a subscription.

You do not need all of these. The minimum to get started is one image model, one voice tool, and one place to keep the files.

## The face

| Tool | What it does | Rough cost |
|------|-------------|-----------|
| Flux (via fal.ai or Replicate) | Base image generation, the standard for photoreal people | Pay per image, cents |
| LoRA training (fal.ai, Replicate, RunPod) | Trains a model on 30 to 50 images of your face so every future image matches | 50 to 100 dollars one time |
| Midjourney | Character reference keeps a face consistent without training | Monthly subscription |
| Higgsfield | Image and video generation with presets, useful for motion and style variety | Monthly, credit based |
| Nano Banana or Seedream | Editing an existing image without losing the face | Pay per edit |

The workflow that holds up: generate 30 to 50 images of the same face, train the LoRA, then generate everything else from the LoRA plus your eight locked descriptors. Skipping the LoRA and relying on prompt wording alone is why most of these accounts drift by month two.

## The voice

| Tool | What it does | Rough cost |
|------|-------------|-----------|
| Fiverr or Voices.com | Buy 90 seconds of clean source audio from a voice actor, with rights | 30 to 60 dollars |
| ElevenLabs | Clones that audio into a usable voice | Free tier to start, cheap monthly |
| HeyGen, Hedra, or Sync | Lip sync, so she can talk on camera | Monthly |

Get the rights in writing when you buy the audio. A voice actor who did not agree to cloning is a legal problem, not a discount.

## The video

| Tool | What it does |
|------|-------------|
| Kling, Hailuo, Veo, Seedance | Image to video, for reels and story clips |
| Runway | Editing and extending clips |
| CapCut or Premiere | Assembly, captions, sound |

Short clips beat long ones here, both because they cost less and because artefacts show up in longer generations.

## The brain

| Tool | What it does |
|------|-------------|
| Claude Code | Reads the three files and runs the interactions, this is the part doing the work |
| Claude Projects | Simpler option if you would rather not touch a terminal |
| n8n or Make | Cron jobs, DM checks, and routing between everything |
| ManyChat | Comment to DM automation, which is how the CTA on a reel turns into a conversation |

## The money

| Tool | What it does |
|------|-------------|
| Gumroad, Lemon Squeezy, Polar | Selling digital products |
| Fanvue or Patreon | Subscriptions |
| Kit or Beehiiv | Email list, the only audience a platform cannot take from you |
| Stripe | Invoicing brands directly |

## The admin

| Tool | What it does |
|------|-------------|
| Metricool or Later | Scheduling and analytics across platforms |
| Notion or Airtable | Brand pipeline, if brain.md gets too long to scan |
| Google Drive | Storing every generated image, because you will need to find one from four months ago |

## What to spend first

If you have a hundred dollars, spend it on the LoRA training. If you have two hundred, add the voice. Everything else has a free tier good enough to start with, and the accounts that fail do not fail because the tools were too cheap.