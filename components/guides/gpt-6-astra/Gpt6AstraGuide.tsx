"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import prompts from "./prompts.json";
import demos from "./demos.json";
import videos from "./videos.json";
import community from "./community.json";
import "../ai-second-brain/ai-second-brain.css";
import "./gpt-6-astra.css";

const sections = [
  ["demos", "Open the builds"], ["video-editing", "My fully edited video"],
  ["community", "18 more creator examples"], ["specs", "The specs that matter"],
  ["access", "How to access Astra"], ["workflow", "How to use these prompts"],
  ["range-rover", "3D Range Rover website"], ["brain", "3D brain explorer"],
  ["anatomy-videos", "Watch the anatomy walkthroughs"],
  ["jerusalem", "Ancient Jerusalem walkthrough"], ["game", "3D shooting game"],
  ["video", "AI clone video prompt"], ["dashboard", "Content dashboard prompt"],
  ["content", "Content ideas & video script"], ["your-work", "Find your own use cases"],
  ["publish", "Test and publish your build"], ["troubleshooting", "Fix common problems"],
];

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [status, setStatus] = useState("Copy");
  async function copy() {
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; }
    catch {
      const field = document.createElement("textarea");
      field.value = text; field.style.position = "fixed"; field.style.opacity = "0";
      document.body.appendChild(field); field.select();
      try { ok = document.execCommand("copy"); } catch { ok = false; }
      field.remove();
    }
    setStatus(ok ? "Copied" : "Select text to copy");
    setTimeout(() => setStatus("Copy"), 2200);
  }
  return <div className="asb-block">
    <div className="asb-block-head"><span className="asb-block-label">{label}</span>
      <button type="button" className={`asb-copy${status === "Copied" ? " asb-done" : ""}`} onClick={copy} aria-label={`Copy ${label}`}><span role="status">{status}</span></button>
    </div>
    <pre>{text.split(/(\[[^\]]+\])/g).map((part, i) => part.startsWith("[") && part.endsWith("]") ? <span key={i} className="asb-fill">{part}</span> : <Fragment key={i}>{part}</Fragment>)}</pre>
  </div>;
}

function DemoLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (!href) return <p className="astra-status">Demo link is being prepared. The prompt is ready to use below.</p>;
  return <a className="astra-demo-link" href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden>↗</span></a>;
}

function WalkthroughVideos({ section, headingLevel = 3 }: { section: string; headingLevel?: 3 | 4 }) {
  const Heading = headingLevel === 4 ? "h4" : "h3";
  return videos.items.filter((video) => video.section === section).map((video) => <figure className="astra-video-card" id={`${video.id}-video`} key={video.id}>
    <figcaption>
      <div className="astra-video-heading"><Heading>{video.title}</Heading><span>{video.duration}</span></div>
      <p>{video.description}</p>
    </figcaption>
    <video controls playsInline preload="none" poster={video.poster} aria-label={video.title} width={video.width} height={video.height} style={{ aspectRatio: `${video.width} / ${video.height}` }}>
      <source src={video.src} type="video/mp4" />
      Your browser does not support this video. <a href={video.src}>Open the MP4</a>.
    </video>
    <a className="astra-video-open" href={video.src} target="_blank" rel="noopener noreferrer">Open {video.title} in a new tab</a>
  </figure>);
}

function CommunityGallery() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const categories = ["All", ...new Set(community.items.map((item) => item.category))];
  const matching = community.items.filter((item) =>
    (category === "All" || item.category === category) &&
    `${item.title} ${item.creator} ${item.handle} ${item.category} ${item.tools} ${item.description}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  const shown = showAll ? matching : matching.slice(0, 6);

  return <section className="asb-section astra-community" id="community">
    <p className="asb-num">CREATOR DEMONSTRATIONS</p>
    <h2>18 more things to watch and try</h2>
    <p>Explore short excerpts from other creators’ published demonstrations, with credits and links to their original posts. Each example includes a fresh starter prompt written for this guide.</p>
    <p className="astra-small">Selected {community.checkedAt}. Model and tool attributions come from the creators’ posts. Open the original source for the full recording and workflow context.</p>
    <label className="astra-search-label" htmlFor="astra-sample-search">Find an example</label>
    <input id="astra-sample-search" className="astra-sample-search" type="search" placeholder="Search games, websites, tools or creators" value={query} onChange={(event) => { setQuery(event.target.value); setShowAll(false); }} />
    <div className="astra-filters" role="group" aria-label="Filter creator examples">
      {categories.map((name) => <button type="button" key={name} aria-pressed={category === name} onClick={() => { setCategory(name); setShowAll(false); }}>{name}<span>{name === "All" ? community.items.length : community.items.filter((item) => item.category === name).length}</span></button>)}
    </div>
    <p className="astra-small" role="status">Showing {shown.length} of {matching.length} matching examples</p>
    <div className="astra-community-grid">
      {shown.map((item) => <article className="astra-community-card" key={item.id}>
        <div className="astra-community-meta"><span>{item.category}</span><span>{item.duration}s excerpt{item.audio ? " · Sound" : ""}</span></div>
        <h3>{item.title}</h3>
        <p className="astra-creator-credit">{item.creator} · @{item.handle}</p>
        <video controls playsInline preload="none" poster={item.poster} aria-label={`${item.title} by ${item.creator}`}>
          <source src={item.src} type="video/mp4" />
          Your browser does not support this video. <a href={item.src}>Open the MP4</a>.
        </video>
        <p>{item.description}</p>
        <p className="astra-community-note">{item.note}</p>
        <p className="astra-community-tools">{item.tools}</p>
        <div className="astra-community-links">
          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{item.sourceLabel}</a>
          <a href={item.src} target="_blank" rel="noopener noreferrer">Open video</a>
          {"demoUrl" in item && item.demoUrl && <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">Try the live demo</a>}
        </div>
        <details className="astra-example-prompt">
          <summary>Try a similar idea</summary>
          <p>Suggested prompt · written for this guide</p>
          <CopyBlock label={`${item.title} starter prompt`} text={item.prompt} />
        </details>
      </article>)}
    </div>
    {matching.length === 0 && <div className="asb-note"><p>No examples match that search.</p><button className="astra-gallery-button" type="button" onClick={() => { setQuery(""); setCategory("All"); setShowAll(false); }}>Clear filters</button></div>}
    {matching.length > 6 && <button className="astra-gallery-button" type="button" aria-expanded={showAll} onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer examples" : `Show all ${matching.length} examples`}</button>}
    <p className="astra-small">Choose one idea, adapt its prompt to your own subject, and check the result against a concrete task. The <a href="#workflow">prompt workflow</a> and <a href="#publish">publishing checklist</a> below explain the next steps.</p>
  </section>;
}

export default function Gpt6AstraGuide() {
  return <article className="asb-guide astra-guide">
    <Link href="/guide" className="asb-back"><ArrowLeft className="h-4 w-4" aria-hidden />All guides</Link>
    <header className="asb-hero">
      <p className="asb-eyebrow">GPT-6 Astra · Builds, prompts & practical steps</p>
      <h1>I spent 48 hours building with GPT-6 Astra. Here’s what to try.</h1>
      <p className="asb-lede">3D websites, games, anatomy models and a fully edited video. Watch my builds and 18 credited creator examples, then use the prompts and step-by-step instructions to try ideas for your own work.</p>
      <p className="asb-meta">By Mercy Thaddeus · Updated 12 September 2026</p>
    </header>

    <section className="asb-section" id="demos">
      <h2>Start with the builds</h2>
      <p>Open an experience, try its controls, then come back for the prompt. The 3D demos are easiest to explore on a laptop with a mouse or trackpad. Give the models a moment to load.</p>
      <div className="astra-demo-list">
        <DemoLink href={demos.car}>Explore the Range Rover</DemoLink>
        <DemoLink href={demos.brain}>Explore the 3D brain</DemoLink>
        <DemoLink href={videos.page}>Open the full collection of {videos.items.length + community.items.length} videos</DemoLink>
        <DemoLink href={demos.city}>Walk through ancient Jerusalem</DemoLink>
        <DemoLink href={demos.immersive}>Open Jerusalem’s immersive view</DemoLink>
        <DemoLink href={demos.game}>Play Jerusalem: Target Run</DemoLink>
      </div>
      <p className="astra-small">Watch on this page: <a href="#range-rover-video">Range Rover website</a> · <a href="#anatomy-videos">Anatomy models</a> · <a href="#jerusalem-walkthrough-video">Jerusalem fly-through</a> · <a href="#jerusalem-game-video">Target Run gameplay</a>.</p>
      <p className="astra-small"><a href="#video-editing">Watch my fully edited video</a> · <a href="#community">Browse 18 more creator examples</a></p>
      <p className="astra-small">The AI clone video and content dashboard are included as prompts only.</p>
      <nav className="astra-contents" aria-label="Inside this guide"><h2>Inside this guide</h2><ol>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>
    </section>

    <section className="asb-section" id="video-editing">
      <p className="asb-num">MY VIDEO EDIT</p>
      <h2>My fully edited video</h2>
      <p>This is the complete Astra edit from my ChatGPT and Claude video-editing comparison. Watch how the captions, cuts and motion graphics follow what I’m saying.</p>
      <WalkthroughVideos section="video-editing" />
      <p>For the source-file setup, editing brief and review process, follow my <Link href="/guide/edit-videos-chatgpt-claude">detailed video-editing guide</Link>.</p>
      <CopyBlock label="Edit my video" text="Watch my attached video all the way through. Edit it into a polished short with clear cuts, accurate captions, cleaned audio and motion graphics that support what I am actually saying. Preserve my meaning and natural delivery. Use relevant B-roll only where it helps explain the story. Review the complete export, check the ending and deliver the final MP4 plus the editable project." />
    </section>

    <CommunityGallery />

    <section className="asb-section" id="specs">
      <h2>The GPT-6 Astra specs that matter</h2>
      <p>Astra is OpenAI’s model for demanding work across coding, reasoning, research and computer use. For this guide, the interesting part is what happens when you give it a clear brief, a workspace and the tools to build and test something.</p>
      <div className="astra-table-wrap"><table><caption>Published model specifications · checked 8 September 2026</caption><tbody>
        <tr><th scope="row">Model ID</th><td><code>gpt-6-astra</code></td></tr>
        <tr><th scope="row">Context window</th><td>Up to 1,050,000 tokens</td></tr>
        <tr><th scope="row">Maximum output</th><td>Up to 128,000 tokens</td></tr>
        <tr><th scope="row">Reasoning efforts</th><td>low, medium, high, xhigh, max</td></tr>
        <tr><th scope="row">API input / cached input</th><td>$10 / $1 per million tokens</td></tr>
        <tr><th scope="row">API output</th><td>$50 per million tokens</td></tr>
      </tbody></table></div>
      <p className="astra-small">Standard API rates. Requests above 272K input tokens cost 2× the input and cache rates and 1.5× the output rate for the full request. Cache writes and tools can add charges. API pricing is separate from a ChatGPT subscription. <a href="https://developers.openai.com/api/docs/models/gpt-6-astra" target="_blank" rel="noopener noreferrer">OpenAI model specifications and pricing</a>.</p>
      <h3>The benchmark numbers</h3>
      <ul>
        <li><strong>ARC-AGI-3: 99.9%.</strong></li>
        <li><strong>FrontierMath Tier 4 (v2): 97.6%.</strong> Rounded to 98% in the launch headline.</li>
        <li><strong>ExploitBench: 100%.</strong> OpenAI’s cybersecurity assessment says these results reflect Daybreak Blue access.</li>
      </ul>
      <p>These are reported evaluation results, not a promise that every project will work on the first attempt. Tool access, the prompt, your assets and the checks you run still matter. Sources: <a href="https://openai.com/index/gpt-6-astra/" target="_blank" rel="noopener noreferrer">Astra announcement</a> and <a href="https://openai.com/index/path-to-astra/" target="_blank" rel="noopener noreferrer">cybersecurity evaluation context</a>.</p>
      <div className="asb-note"><p>A large context window means room for more instructions and files. It does not mean you should paste your entire drive into every task. Start with the files the project actually needs.</p></div>
    </section>

    <section className="asb-section" id="access">
      <h2>How to access Astra</h2>
      <p>OpenAI announced a staged rollout to ChatGPT Plus, Pro, Business and Enterprise, and the API. Availability can differ by account and workspace. Enterprise administrators may need to enable access. <a href="https://openai.com/index/gpt-6-astra/" target="_blank" rel="noopener noreferrer">Check the rollout details</a>.</p>
      <ol className="asb-steps">
        <li><strong>Open the product you plan to use.</strong>For the website and game prompts, I use Codex with a project folder so the agent can create files, run the app and fix errors. ChatGPT is useful for shaping the brief, reviewing screenshots and working through ideas.</li>
        <li><strong>Check your available models.</strong>Use the current app, sign in to the right account and select GPT-6 Astra if it appears. A model name typed into a chat does not change the model selected for that task.</li>
        <li><strong>Give the task a workspace and references.</strong>Create a separate folder for each new build. Add a screenshot, style reference or model file if you have one, and say which parts of the reference matter.</li>
        <li><strong>Choose the depth of the task.</strong>Start with the default reasoning setting. Increase the effort for difficult architecture, debugging or complex interactions when your product exposes that control.</li>
        <li><strong>For API development, use the exact ID.</strong>Set the request’s model field to <code>gpt-6-astra</code>. Your API project also needs access and billing. An agent application must execute the tools it gives the model.</li>
      </ol>
      <p>If Astra is missing from your picker, check your plan, account and workspace access before spending time changing prompts. The <a href="https://developers.openai.com/api/docs/guides/latest-model" target="_blank" rel="noopener noreferrer">official model guide</a> explains the API workflow.</p>
    </section>

    <section className="asb-section" id="workflow">
      <h2>How to use these prompts</h2>
      <p>The prompts below are starting briefs. The completed demos also include follow-up requests, corrections and testing. Your result may use different assets or a different implementation.</p>
      <ol className="asb-steps">
        <li><strong>Choose one build.</strong>Start with an experience you can test easily. The Range Rover is a useful first example because its main interaction is clear: scroll apart, scroll together.</li>
        <li><strong>Paste the main prompt.</strong>Let the agent inspect the folder and build a first working version. If you provide a reference image, describe its lighting, colors, layout and camera angle.</li>
        <li><strong>Open the actual preview.</strong>Scroll, click the buttons, resize the window and try the controls. A screenshot can look finished while the interactions are broken.</li>
        <li><strong>Give specific feedback.</strong>Describe the trigger and the result: “When I scroll back to the top, the left wheel stays detached.” Attach a screenshot when the problem is visual.</li>
        <li><strong>Ask it to finish and publish.</strong>Use the testing and Vercel prompt near the end of this guide. Open the returned URL in a signed-out browser before sharing it.</li>
      </ol>
      <CopyBlock label="Add a visual reference" text={'Use the attached image as a visual reference. Match its [COLORS], [LIGHTING], [SPACING] and [CAMERA ANGLE]. Build the actual interactive experience described in my brief. Before finishing, open the preview, check the main interaction and correct any visible layout problems.'} />
    </section>

    <section className="asb-section" id="range-rover">
      <p className="asb-num">BUILD 01</p><h2>A 3D Range Rover that comes apart as you scroll</h2>
      <p>I wanted to see whether a simple idea could become a polished 3D experience: a car in the center, its major parts separating as you scroll, and everything coming back together when you reverse direction.</p>
      <DemoLink href={demos.car}>Open the Range Rover website</DemoLink>
      <WalkthroughVideos section="range-rover" />
      <h3>The original prompt</h3><CopyBlock label="Range Rover build prompt" text={prompts.car} />
      <h3>How to build your version</h3>
      <ol className="asb-steps">
        <li><strong>Start with the car and its motion.</strong>Get the assembled view and scroll-controlled separation working before adding more sections. If you supply a model, ask the agent to check that its parts can move separately.</li>
        <li><strong>Make the separation readable.</strong>Ask it to group the bodywork, windows, seats, wheels and mechanical assemblies. Each part should stay inside the camera frame as it moves.</li>
        <li><strong>Test the return journey.</strong>Scroll fully down and back up several times. Every part should return to the same assembled position. Try “Fix the car” halfway through the sequence as well as at the bottom.</li>
        <li><strong>Expand the site.</strong>Once the core interaction works, add the Design Studio, Engineering and project information pages. Then refine color changes, lighting and transitions.</li>
      </ol>
      <CopyBlock label="Range Rover expansion prompt" text={'Keep the working scroll-to-disassemble experience. Expand this into a complete website with a Design Studio, an Engineering page, an About/The Study page, navigation and a full footer. Add selectable paint finishes, smooth color cycling, moving studio lighting and scroll-revealed sections. Include an intensity control and respect reduced-motion preferences. Check every route and keep “Fix the car” working.'} />
      <h3>Try this in the demo</h3><ul><li>Scroll to separate the vehicle; scroll back to rebuild.</li><li>Drag to inspect the model from another angle.</li><li>Choose a finish in the Design Studio and explore the Engineering controls.</li><li>Use the intensity switch to adjust the effects.</li></ul>
      <p className="astra-small">The demo uses a stylized classic Range Rover and conceptual mechanical internals. It is an independent visual study, not a manufacturer’s engineering model.</p>
    </section>

    <section className="asb-section" id="brain">
      <p className="asb-num">BUILD 02</p><h2>An interactive 3D brain explorer</h2>
      <p>The next idea applies the same interaction to anatomy: separate a complex object into sections so you can inspect the relationships between its parts.</p>
      <DemoLink href={demos.brain}>Open the 3D brain explorer</DemoLink>
      <div className="asb-note"><p>The linked Brain Atlas is a brain-only adaptation of Human Atlas, with selectable structures, regional layers, search, presets and a control to separate the visible pieces. It uses viewer controls rather than the exact scroll sequence in the prompt below. It is an educational visualization, not a clinically validated atlas.</p></div>
      <div className="astra-videos" id="anatomy-videos">
        <h3>Watch the builds in action</h3>
        <p>Two short walkthroughs of the Brain Atlas and Female Anatomy models. Press play to watch, or use the player controls to turn on sound and open full screen.</p>
        <WalkthroughVideos section="brain" headingLevel={4} />
      </div>
      <CopyBlock label="Brain build prompt" text={prompts.brain} />
      <h3>How to make the result easier to understand</h3>
      <ol className="asb-steps">
        <li><strong>Ask for named sections.</strong>Give each major modeled part a readable label and a brief description. Ask the agent to distinguish sourced geometry from illustrative additions.</li>
        <li><strong>Keep a consistent orientation.</strong>The camera should help you understand where each section belongs. Avoid a spin or sudden zoom every time you select a label.</li>
        <li><strong>Separate without losing context.</strong>Use enough distance to distinguish sections, then make reassembly return them to their original positions.</li>
        <li><strong>Test labels and reset.</strong>Select several parts, rotate the model and try the reset control after changing the view. Check that text stays readable on a smaller screen.</li>
      </ol>
      <CopyBlock label="Brain clarity follow-up" text={'Add labels for the major brain structures actually present in the model. Selecting a label should highlight the matching structure and show a short plain-language explanation. Keep labels readable while the model separates. Add a clear reset view and “Reassemble brain” control. Cite the anatomy asset sources and distinguish simplified illustrations from validated anatomical detail.'} />
      <h3>Try this in the demo</h3><ul><li>Switch between All, Cortex and Deep brain presets.</li><li>Search for a structure, select it and inspect its source details.</li><li>Toggle regional display layers and change the camera angle.</li><li>Separate visible pieces into an inventory, then reset the view.</li></ul>
    </section>

    <section className="asb-section" id="jerusalem">
      <p className="asb-num">BUILD 03</p><h2>A walk through ancient Jerusalem</h2>
      <p>This test moves from one 3D object to a whole environment. The goal was a city you could explore, with streets, gates, courtyards and landmarks that feel connected.</p>
      <DemoLink href={demos.city}>Open the Jerusalem explorer</DemoLink>
      <DemoLink href={demos.immersive}>Open the clean immersive view</DemoLink>
      <WalkthroughVideos section="jerusalem" />
      <CopyBlock label="Jerusalem walkthrough prompt" text={prompts.city} />
      <h3>Build the environment in stages</h3>
      <ol className="asb-steps">
        <li><strong>Set the period and scope.</strong>Specify late Second Temple Jerusalem and the areas you want to visit. The demo interprets the city around 30 CE.</li>
        <li><strong>Build the connected layout.</strong>Ask for streets, elevation changes, the Temple area, walls and recognizable landmarks before adding decorative detail.</li>
        <li><strong>Add navigation.</strong>Test both the aerial view and walking. Make sure movement works on steps and slopes, and that buildings do not trap the camera.</li>
        <li><strong>Add a guided journey.</strong>Ask for named stops, a smooth camera route and pause, previous and next controls. The demo includes six landmarks and an interactive map.</li>
        <li><strong>Refine the atmosphere.</strong>Add warm stone, paving, market objects, lighting and distant terrain. Review the city from street level as well as from above.</li>
      </ol>
      <CopyBlock label="Jerusalem immersive view prompt" text={'Keep the full explorer website. Add a separate /immersive route that fills the screen with only the 3D city: no text, labels, panels or controls. Preserve camera movement. Let F request full screen and Escape or a double-click restore the explorer interface. Keep the original / route available and test direct loading of both routes.'} />
      <h3>Demo controls</h3><ul><li>Use the explorer’s aerial and walking modes, place list and guided journey.</li><li>Walk with WASD or arrow keys; drag to look around.</li><li>In the immersive view, press F for full screen. Escape or a double-click restores the interface.</li></ul>
      <p className="astra-small">This is a visual interpretation, not an exact archaeological reconstruction. Building placement, dimensions, surfaces and terrain are approximate; the explorer includes its historical sources.</p>
    </section>

    <section className="asb-section" id="game">
      <p className="asb-num">BUILD 04</p><h2>Turn the city into a playable 3D game</h2>
      <p>I reused the Jerusalem environment for a target game. This is a good follow-up because the world is already there: the new work is movement, aiming, hit detection, scoring and the game state.</p>
      <DemoLink href={demos.game}>Play Jerusalem: Target Run</DemoLink>
      <WalkthroughVideos section="game" />
      <p>Use this prompt in the same project as the walkthrough, and tell the agent to preserve the explorer routes.</p>
      <CopyBlock label="Jerusalem shooting game prompt" text={prompts.game} />
      <h3>What the completed game includes</h3><ul><li>21 artificial targets across three ranges.</li><li>A three-minute round with score, ammo and a timer.</li><li>WASD or arrow keys to move, mouse to look, click to shoot and R to reload.</li><li>Keys 1–3 to switch ranges.</li><li>Direct entry into the range, with the first click firing.</li></ul>
      <h3>Check the game, not just the scene</h3>
      <p>Hit a target and check the score. Fire until the ammo runs out, reload, and try again. Aim through a wall to make sure hidden targets do not score. Walk the streets and steps, switch ranges and let the timer finish.</p>
      <CopyBlock label="Game testing follow-up" text={'Test the game end to end. Check that the first click fires, visible targets register hits, walls block shots, ammo decreases correctly, R reloads, the timer ends the round, and restart resets score, ammo, targets and time. Check movement through streets and stairs. Fix any issues you find, then verify /, /immersive and /game still load directly.'} />
      <p className="astra-small">A mouse and keyboard give the intended game controls. Browser mouse capture and full-screen behavior can vary; use the available drag-to-look fallback if needed.</p>
    </section>

    <section className="asb-section" id="video">
      <p className="asb-num">PROMPT ONLY</p><h2>AI clone video prompt</h2>
      <p>Use this prompt with your own reference appearance, voice and a connected video tool.</p>
      <CopyBlock label="AI clone video prompt" text={prompts.video} />
    </section>

    <section className="asb-section" id="dashboard">
      <p className="asb-num">PROMPT ONLY</p><h2>A content dashboard with several AI agents</h2>
      <p>I’m keeping this as a reusable prompt. There is no public dashboard demo in this guide.</p>
      <p>The idea is to enter a topic once, then pass the work through research, ideas, hooks, scripts and captions. Each stage should build on the previous stage’s output.</p>
      <CopyBlock label="Content dashboard build prompt" text={prompts.dashboard} />
      <h3>How to turn it into a useful tool</h3>
      <ol className="asb-steps">
        <li><strong>Define the inputs.</strong>Start with topic, audience, platform, goal, tone and your own examples of good content.</li>
        <li><strong>Give research a real source.</strong>If you want current trends, the system needs search or another live data source. Ask it to return source links and dates with its findings.</li>
        <li><strong>Make the handoffs visible.</strong>Show the research used for each idea, the chosen hook for each script, and the script used for each caption.</li>
        <li><strong>Let a person review the draft.</strong>Add editing, rerun and export controls. A generated hook is a suggestion, not evidence that the content will go viral.</li>
        <li><strong>Connect the real services.</strong>Keep API keys on the server, save project state, and show failed or incomplete stages clearly. Label sample data during development.</li>
      </ol>
      <CopyBlock label="Make the dashboard functional" text={'Turn the dashboard into a working workflow. Accept topic, audience, platform, goal and tone. Save each stage’s inputs and outputs. Research must include source URLs and dates; label unverified ideas clearly. Let me edit, rerun and export each stage. Show progress and errors. Keep API keys on the server and clearly identify any stage still using demo data. Keep publishing manual.'} />
    </section>

    <section className="asb-section" id="content">
      <h2>Content ideas and a short-form video script</h2>
      <p>Once you have real results to show, use them as the material for a video. This was the content prompt from my test:</p>
      <CopyBlock label="Content ideas and creator script" text={prompts.content} />
      <p>Before using the script, replace the project list with what you actually completed. Describe the dashboard as a prompt experiment if you are using this guide’s version. Use your own footage and observations, and only keep the “48 hours” wording if it matches your experience.</p>
      <CopyBlock label="Ground the script in your results" text={'Rewrite the script using only these projects I completed: [PROJECTS AND LINKS]. My actual observations were: [WHAT WORKED, WHAT NEEDED FIXING, WHAT SURPRISED ME]. Do not invent performance results or claim an unfinished experiment is live. Keep the language natural, include a clear visual cue for each demo, and end with [MY CALL TO ACTION].'} />
    </section>

    <section className="asb-section" id="your-work">
      <h2>Find the best Astra use cases for your own work</h2>
      <p>You do not have to build a car, a city or a game. The useful question is which task in your work would benefit from software, research, files and several connected steps.</p>
      <p>Fill in every bracket. Be specific about the work you repeat, the files involved and who uses the output. “I run a business” gives the model less to work with than “I run a small skincare brand and spend four hours every week comparing customer questions, product reviews and content performance.”</p>
      <CopyBlock label="Find my highest-value Astra use cases" text={prompts.useCases} />
      <h3>Choose one idea you can evaluate</h3>
      <p>Look for a result you can recognize and test: a searchable customer-question library, a working quote calculator, a product comparison tool or a review workflow that creates a draft you approve. Treat time and revenue estimates as assumptions until you measure them.</p>
      <CopyBlock label="Scope the first version" text={'Take idea [NUMBER] and define the smallest useful version. My available time is [TIME] and budget is [BUDGET]. List the inputs, the main user action, the finished output, the tools or accounts required, and three clear acceptance checks. Explain which parts need my information. Then write the complete build prompt and include a test with realistic sample data. Keep later features separate from the first version.'} />
      <h3>Use your existing knowledge</h3>
      <p>The second-brain workflow is useful here: collect your briefs, research and approved examples, keep the original sources, then give the build task the relevant subset. See <Link href="/guide/ai-second-brain">the detailed AI second brain setup</Link> for the folder and prompt workflow.</p>
    </section>

    <section className="asb-section" id="publish">
      <h2>Test and publish your own build on Vercel</h2>
      <p>Use this after the preview works. A public demo URL should load for someone who has never signed in to your hosting account.</p>
      <ol className="asb-steps">
        <li><strong>Test the main action.</strong>Complete the action the site promises, then reset it and repeat. Check the empty, loading and error states where they apply.</li>
        <li><strong>Check smaller screens.</strong>Look for clipped text, hidden controls, awkward scrolling and a 3D scene that moves outside the frame.</li>
        <li><strong>Build the production version.</strong>Ask the agent to run the project’s build command and fix any errors before deployment.</li>
        <li><strong>Deploy to the intended Vercel project.</strong>Give the agent access to your account through its supported connection or CLI. Keep secrets in server-side environment settings if the project needs them.</li>
        <li><strong>Verify the public URLs.</strong>Open the main link and every nested route directly in a signed-out browser. Check that models, textures, videos and controls still load.</li>
      </ol>
      <CopyBlock label="Test and deploy to Vercel" text={'Finish this project and deploy it to Vercel as a public demo. Preserve the design and working interactions. Run the production build, fix errors, and test the main flow on desktop and a smaller screen. Check loading, reset and error states. Deploy the correct output with all models, textures and required assets. Keep secrets out of client code. Verify the final HTTPS URL and each nested route without a login. Return the stable .vercel.app link, a short list of what you tested, and any real limitations.'} />
    </section>

    <section className="asb-section" id="troubleshooting">
      <h2>Common problems and what to ask next</h2>
      {[
        ["The 3D scene is blank", "Ask the agent to check the browser console, model URLs, texture paths and WebGL support. Confirm that the assets are present in the deployed output, then try a browser with hardware acceleration enabled."],
        ["It looks like blocks instead of a real environment", "Specify the missing forms: arches, stairs, wall thickness, paving, doors, varied rooflines and terrain. Give a reference view and ask for a street-level review, not just an aerial screenshot."],
        ["The scroll animation jumps or will not reset", "Describe the exact scroll position and affected part. Ask for one shared progress value, stored assembled positions, and a reset check after repeated forward and reverse scrolling."],
        ["The preview works but the live route fails", "Ask the agent to open the failing route directly and inspect the hosting output and route configuration. Include the complete URL and what you see."],
        ["The dashboard looks finished but does not generate anything", "Ask which stages use real services and which use sample data. Request a test that starts with a new topic and produces saved, editable outputs through every stage."],
        ["The agent stops with a question or an error", "Read what it needs: a missing file, access to a service, a design decision or a failed command. Provide that specific input, then ask it to continue from the working project."],
      ].map(([title, text]) => <div className="asb-problem" key={title}><h3>{title}</h3><p>{text}</p></div>)}
      <CopyBlock label="Fix a specific problem" text={'In [PAGE OR FEATURE], when I [EXACT ACTION], [ACTUAL RESULT] happens. I expected [EXPECTED RESULT]. Inspect the current implementation, reproduce the issue, fix the cause and test the same action again. Preserve the parts that already work. Here is my screenshot or error: [ATTACHMENT OR ERROR].'} />
      <p>Start with one prompt, inspect the first result, and keep the feedback specific. The demos are there to give you something concrete to explore before you build your own version.</p>
      <footer className="asb-sig">Mercy Thaddeus · GPT-6 Astra field guide · 8 September 2026</footer>
    </section>
  </article>;
}
