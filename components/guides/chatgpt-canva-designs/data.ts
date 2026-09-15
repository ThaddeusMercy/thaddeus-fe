export const CREATE_PROMPT = `Use the reference images I uploaded as visual direction for a new Instagram carousel.

Create a 7-slide Instagram carousel at 1080 x 1350.

Topic: The 5 AI tools running my content business.

Keep the design editorial, clean and easy to read. Use lots of whitespace, strong typography and one clear visual idea per slide. Keep the same visual system across all seven slides.

Slide 1:
Small eyebrow: Our secret is out
Headline: The 5 AI tools running my content business
Visual: One simple cut-out object that fits the design direction.

Slide 2:
Small eyebrow: It starts with ideas
Headline: ChatGPT does most of the thinking.
Body: I use it to brainstorm ideas, structure posts and turn rough thoughts into scripts.

Slide 3:
Small eyebrow: The writing
Headline: Claude writes the long-form.
Body: I use it when I need to turn an idea into a longer article, guide or detailed draft.

Slide 4:
Small eyebrow: The look
Headline: Canva makes it beautiful.
Body: This is where the ideas become carousels, graphics and visual content.

Slide 5:
Small eyebrow: The edit
Headline: CapCut finishes the video.
Body: I use it for captions, cuts, pacing and final short-form edits.

Slide 6:
Small eyebrow: The schedule
Headline: Metricool gets it published.
Body: I use it to schedule content and keep an eye on performance.

Slide 7:
Small eyebrow: The system
Headline: One workflow. Five tools.
Body: Build a repeatable content system instead of starting from zero every time.
CTA: Save this for your next content day.

Make all text editable in Canva. Keep spacing, typography and visual treatment consistent across every slide.`;

export const EDIT_PROMPT = `Review the carousel you just created and improve it before I open it in Canva.

Make the cover easier to understand at a glance.
Increase whitespace where any slide feels crowded.
Keep body copy short enough to read quickly on a phone.
Make the visual hierarchy consistent across every slide.
Keep one main idea per slide.
Do not add decorative elements unless they support the reference style.
Keep the text editable.
Do not change the approved topic or meaning.`;

export const BATCH_PROMPT = `Use the carousel design we just created as the visual system for the next 20 posts.

Keep the same canvas size, typography style, spacing, hierarchy and overall design language. Change the copy and main visual so each post still feels fresh.

Create 20 new carousel concepts for an AI education and creator brand.

Each carousel should have 7 slides:
1. A strong cover
2. The problem or context
3. The first useful point
4. The second useful point
5. The third useful point
6. A practical example or takeaway
7. A save, share or comment CTA

Use these 20 topics:
1. 5 AI agents everyone should know
2. 5 things ChatGPT can now do for your business
3. 7 prompts that make ChatGPT more useful
4. How I use AI to plan a week of content
5. 5 AI tools I would learn first in 2026
6. How to turn one idea into 10 pieces of content
7. 5 AI mistakes making your content look generic
8. How to use ChatGPT and Canva together
9. 5 ways small businesses can use AI agents
10. The AI workflow behind my content
11. 7 things to automate before hiring another person
12. How to use AI to research content ideas
13. 5 AI tools for people who hate complicated software
14. How to build your first useful AI agent
15. 5 tasks I no longer do manually
16. How to make AI writing sound more like you
17. 5 ways creators can use AI without losing their voice
18. How to batch a month of content with AI
19. 5 AI workflows worth setting up this weekend
20. What I would learn if I were starting with AI today

Write the complete copy for all 20 carousels and create the Canva designs in the same visual system.`;
