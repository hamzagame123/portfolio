# Portfolio Redesign Plan

## What this redesign is really about

This portfolio should show how I turn an unclear, annoying workflow into something a person can understand and operate.

The important story is not that I used AI tools. The important story is that I noticed a problem, worked out the sequence of actions, decided what deserved a button or screen, built it, used it, and kept changing it as I understood the workflow better.

Smart Image Renamer is the clearest example. The product did not begin as a polished three-panel interface. It began with a practical need: images had useless filenames, manually opening and renaming them was tedious, and image recognition could make that work faster. The UI came later, after the workflow was understood well enough to assign actions, states, and feedback to an interface.

That is the design idea the portfolio should communicate:

> Start with a real workflow. Find the decisions inside it. Give those decisions a clear interface.

AI is part of the material and implementation, but my judgment is the subject.

## Portfolio goals

The redesign should make it easy for a hiring manager to understand, within a minute:

- what kind of designer I am;
- how I make decisions;
- what I personally contributed;
- how each project changed over time;
- which parts are real, exploratory, implemented, or still unvalidated;
- why Smart Image Renamer and Locavore demonstrate different strengths.

The site should feel specific to me: direct, curious, practical, visually controlled, and willing to show the messy route to a working answer.

## Editorial position

### Lead with decisions, not process theatre

Do not force every project into a generic Discover / Define / Develop / Deliver template. Organize the story around consequential moments:

1. What was happening before the product existed?
2. What part of the workflow was painful or unclear?
3. What did I try first?
4. What did using it reveal?
5. What decision changed the product?
6. What exists now?
7. What is still unresolved?

Only show research, sketches, tests, quotes, metrics, or outcomes that actually exist. Never manufacture artifacts to make the process look more conventional.

### Keep AI in proportion

Mention the specific role of AI where it matters:

- Gemini analyzed images and proposed filenames in Smart Image Renamer.
- Cursor, ChatGPT, Claude, Codex, or other assistants may have helped write or revise code where the history supports that claim.
- AI-assisted implementation is not the same thing as product authorship.

The case studies should foreground the choices I made: what problem to pursue, what the workflow should be, what controls belonged in the UI, what information needed to stay visible, what failed, and what I changed.

Avoid AI-first labels such as “AI designer” or breathless language about prompting. Use plain, factual attribution.

## Site-wide direction

### Homepage

The homepage should behave like a strong edit, not a dashboard of everything I have made.

- State the point of view near the top: I turn complicated workflows into usable tools and experiences.
- Add a short supporting sentence that locates me honestly as an Interaction Design graduate with built portfolio projects.
- Make the work visible immediately.
- Give every featured project a distinct reason to open it, not just a category label.
- Use Smart Image Renamer as the strongest product-thinking story.
- Use Locavore as the strongest end-to-end interaction-design and visual-flow story.
- Keep supporting work available, but do not give weaker projects equal narrative weight.
- Include a clear resume link and contact route.

Possible project-card framing:

- **Smart Image Renamer — Turning a repetitive file task into an interface**
- **Locavore — Designing trust and momentum into local food discovery**

The visual design should feel authored and restrained. Avoid oversized gradient headlines, interchangeable dark SaaS cards, excessive glows, decorative pills, and animation that exists only to signal “premium.” Use motion to clarify navigation, state changes, or sequence.

### Shared case-study structure

Each major case study should use the same reading rhythm without having identical visual treatment:

1. One-sentence project premise
2. My role and the honest project context
3. The original situation or workflow
4. A compact timeline of meaningful versions
5. Three to five key decisions
6. The current product or prototype
7. What I learned, what remains uncertain, and what I would do next

Every decision should connect three things:

| Before | Decision | Consequence |
| --- | --- | --- |
| What was confusing, slow, or missing | What I chose and why | How the workflow or interface changed |

Screenshots should function as evidence. Pair them with short annotations that explain what changed and why. Do not use device mockups merely as decoration.

## Smart Image Renamer case study

### Core story

Smart Image Renamer should document the evolution from a personal file-renaming workflow into a product interface.

The recovered project history already establishes the central design story. The evidence set includes:

- the earliest copies under `C:\Users\HAMZA\image_renamer`;
- the later Tkinter app under `C:\Users\HAMZA\smart-image-renamer`;
- relevant files around March 23–24, 2025;
- Git history, file timestamps, Cursor metadata, SpecStory records, logs, and chat exports;
- later rewrites, including `C:\Users\HAMZA\Documents\Codex\2026-09-07\user-avatar-unlikely-rest-4966-10`;
- the current web version inside this portfolio.

The September 19 snapshot is especially important because the complete interface was pasted into Codex with a request to make it run. Codex did not originate that interface. The product structure and most of the important design decisions therefore existed before that repair session.

Do not settle the GPT-versus-Claude question from code style. Attribute tools only when local history provides evidence. Cursor appears to be the environment in which relevant work happened; the underlying model should remain “unknown” unless a record identifies it.

### Recovered design story

- The project began with the technical question: can AI understand an image and generate a useful filename?
- It evolved beyond a single rename action into a review workflow: select images, generate proposals, inspect them, approve or regenerate, apply changes, and retain history.
- AI generation was deliberately separated from modifying real files. The presence of Preview Mode and a distinct Apply Changes action shows that a suggestion was not treated as permission.
- Visual verification became central. The dedicated preview joins the image, timestamp, original filename, proposed filename, tags, Accept, and Regenerate so the user can judge the AI's interpretation in context.
- Reversibility became a product principle. Original and proposed names remain visible together, while searchable history, Undo, Redo, and Clear History help the user understand what changed.
- The product was designed for accumulation and scale, not only one image. Select Folder, Select Files, watched folders, and Downloads/Pictures targets point toward an ongoing desktop workflow.
- “Skip files with normal names” shows a deliberate decision not to use AI where it adds no value. Filename heuristics identify camera-style or machine-generated names while leaving useful names alone.
- Semantic interpretation was separated from formatting. Separators, casing, custom instructions, tags, and tag presets let the same visual understanding fit different filing conventions.
- Complexity was moved into Settings. The main flow stays focused on input, history, preview, and approval while automation and naming rules remain available through progressive disclosure.
- The dark gray and soft-green visual system presents the app as a serious desktop utility. Green communicates actions and state rather than serving as generic AI decoration.

The central problem therefore changed from:

> Can AI give this image a useful filename?

to:

> How can AI act on real files without making the person feel that they have lost control?

That question—not the identity of the coding assistant—is the case study's spine.

The evidence does not always preserve the exact conversation in which every UI choice was first verbalized. The portfolio should distinguish observed interface evidence from reconstructed rationale instead of reopening the entire origin investigation or presenting inference as quotation.

### Presentation approach

Open with the transformation, not a generic problem statement:

`IMG_4821.jpg → a useful name → a repeatable batch workflow → a controllable product`

Then show a real version timeline. Each version needs a screenshot or source artifact, date confidence, and a sentence explaining the design change. A small amount of honest uncertainty is better than a false clean history.

The hero should show the tool doing its job. The body should emphasize workflow decisions such as:

- automatic processing versus manual start;
- single-image understanding versus a batch queue;
- generated suggestions versus user review and editing;
- destructive renaming versus preview/confirmation;
- one-off output versus searchable history;
- exposed settings versus sensible defaults.

End with an honest reflection: the project taught me that interface design can emerge from repeatedly performing a task, identifying its decisions, and deciding which of those decisions the product should expose.

## Locavore case study

### Core story

Locavore should remain a design project, not be cosmetically converted into a generic AI-built startup page.

Its strongest material is the interaction problem: helping people discover local food and markets while making unfamiliar sellers, availability, distance, community activity, and purchasing feel understandable and trustworthy.

### What needs to change

- Reduce the current long, evenly weighted case-study structure.
- Remove or rewrite claims that are unsupported, overconfident, or sound like generated UX filler.
- Verify every statistic, user quote, validation claim, and result before retaining it.
- Promote the decisions already present in the work instead of surrounding them with more process language.
- Show fewer screens at larger size and explain what each proves.
- Make trust, discovery, and the path from browsing to action the central through-line.
- Improve readability, especially small text, repetitive card sections, and dense mobile mockup galleries.

The visual treatment can remain warmer and more human than Smart Image Renamer. Use food, place, people, and market context where real assets exist. Avoid the familiar AI-generated combination of huge type, green gradients, glass cards, floating metric chips, and invented social proof.

### Useful decision chapters

- From “find local food” to a browsable market system.
- Balancing product discovery with seller and market context.
- How social signals can reduce uncertainty without becoming a social network.
- How distance, timing, availability, and pickup affect the information hierarchy.
- What belongs in the browsing flow versus after commitment.
- Which parts of the concept are demonstrated by the prototype and which still need testing.

## Relationship between the two projects

The portfolio should not make every project prove the same thing.

| Project | What it proves |
| --- | --- |
| Smart Image Renamer | I can observe a workflow, build a functioning tool, and evolve its controls through use. |
| Locavore | I can structure a multi-sided experience around discovery, trust, context, and a longer user journey. |

Together they support a broader point: I design by finding the decisions hidden inside a system and making them legible to the person using it.

## Visual and interaction principles

- Prefer clear hierarchy over decorative density.
- Let project artifacts supply color and personality; keep the portfolio frame quieter.
- Use one strong type system with deliberate scale changes.
- Keep body text comfortably readable and line lengths controlled.
- Use asymmetry only when it strengthens the story.
- Make transitions explain relationships or chronology.
- Preserve visible focus states, keyboard access, reduced-motion behavior, and sufficient contrast.
- Design mobile layouts intentionally rather than stacking the desktop page mechanically.
- Avoid components that could be dropped into any designer portfolio unchanged.

Four working `DESIGN.md` inputs from the library linked in the X post are stored under `design-references/`:

- Wired for editorial hierarchy and long-form case-study pacing;
- Mobbin for image-led project browsing and restrained gallery presentation;
- Superhuman for Smart Image Renamer's dense desktop-tool language;
- Airbnb for Locavore's human marketplace context, photography, and trust cues.

Use these files directly during visual exploration and implementation. Borrow rules that serve the portfolio, combine them deliberately, and record which source influenced each direction. Do not reproduce any single reference site or let its brand replace my own identity.

## Content and evidence audit

Create a source table before rewriting case-study claims:

| Claim or artifact | Source | Confidence | Public wording |
| --- | --- | --- | --- |
| Project date | Git/file/chat evidence | Confirmed / probable / unknown | Match confidence |
| Tool or model used | Editor/chat/config evidence | Confirmed / probable / unknown | Do not overstate |
| Research finding | Original notes or school deliverable | Confirmed / missing | Include or remove |
| User feedback | Original record | Confirmed / missing | Quote only if real |
| Outcome | Working build, test record, or result | Confirmed / qualitative / target | Label accurately |

Private paths, API keys, personal chat details, and irrelevant machine metadata stay out of the public portfolio. They are evidence for reconstruction, not automatically content.

## Implementation phases

### Phase 1 — Organize the recovered evidence

- Consolidate the already recovered Smart Image Renamer findings into a compact source table.
- Preserve the distinction between confirmed history, interface evidence, and reasonable inference.
- Select the screenshots and source artifacts that best demonstrate the review workflow, user control, reversibility, scale, selective automation, and customizable naming.
- Separate the pre-Codex interface from the September 19 repair session and later web rewrites.
- Audit Locavore claims and artifacts against the original project material.
- Compare the downloaded files in `design-references/` against the real portfolio content and assign useful rules to the homepage, Smart Image Renamer, and Locavore.

Deliverable: a private evidence inventory and a shortlist of defensible story beats.

The working inventory is [smart-image-renamer-evidence.md](smart-image-renamer-evidence.md). It records the recovered chronology, confirmed interface decisions, claims to exclude, and the case-study outline.

### Phase 2 — Edit the narrative

- Rewrite the homepage positioning and project-card summaries.
- Outline Smart Image Renamer around its version history and decisions.
- Outline Locavore around trust, discovery, and interaction choices.
- Remove unsupported claims and generic process filler.
- Decide which existing artifacts genuinely help each story.

Deliverable: approved page outlines and final copy before visual rebuilding.

### Phase 3 — Establish the visual direction

- Explore two or three genuinely different homepage compositions.
- Create a shared editorial system for type, spacing, captions, timelines, and decision callouts.
- Give each project its own visual character without rebuilding the entire site language.
- Test one representative desktop section and one mobile section before scaling the system.

Deliverable: a chosen direction demonstrated on real portfolio content.

### Phase 4 — Build the vertical slice

- Implement the homepage and Smart Image Renamer case study first.
- Use real content and real assets from the start.
- Check responsive behavior, keyboard navigation, motion settings, image loading, and link integrity.
- Review the result in a browser at common desktop and phone widths.

Deliverable: one complete path from homepage to the end of the strongest case study.

### Phase 5 — Apply the system to Locavore

- Re-edit Locavore rather than merely restyling its existing long page.
- Replace weak or repetitive presentation patterns with decision-led chapters.
- Preserve the strongest actual screens and project-specific character.
- Verify all retained evidence one more time.

Deliverable: a distinct, credible Locavore case study that no longer reads as AI-generated filler.

### Phase 6 — Final portfolio pass

- Check the About/contact/resume journey.
- Remove dead, duplicated, or weaker material.
- Test every public route and interactive element.
- Review the site as a recruiter: 30 seconds, 2 minutes, and a full case-study read.
- Confirm analytics or notification code does not expose secrets or interrupt visitors.
- Publish only after the local and remote Git state is verified.

## Version-control plan

The redesign should remain easy to inspect and reverse.

1. Confirm the current branch is clean and synchronized before starting implementation.
2. Create a dedicated redesign branch from the verified base.
3. Keep evidence gathering and planning separate from production code changes.
4. Commit in coherent slices, for example:
   - `docs: add evidence-backed portfolio redesign plan`
   - `content: rewrite homepage positioning`
   - `content: restructure Smart Image Renamer story`
   - `design: establish portfolio editorial system`
   - `feat: rebuild Smart Image Renamer case study`
   - `feat: rebuild Locavore case study`
   - `fix: accessibility and responsive QA`
5. Do not mix generated assets, content rewrites, and structural code changes into one opaque commit.
6. Tag or preserve the current published version before replacement.
7. Verify the deployed commit matches the intended local commit after publishing.

## Tooling and skill cleanup

The existing frontend-design guidance should not dictate the redesign if it pushes the work toward recognizable AI defaults. Before implementation:

- compare the installed `frontend-design` and `design-taste-frontend` skills with the newer design-planning material from the referenced X post;
- keep only guidance that improves hierarchy, accessibility, responsiveness, and implementation discipline;
- remove or replace outdated local skills only after their paths, ownership, and dependencies are confirmed;
- do not let any skill overrule the evidence, voice, or project-specific decisions in this plan.

## Definition of done

The redesign is finished when:

- the homepage states a clear, believable design point of view;
- Smart Image Renamer shows a defensible evolution from workflow to interface;
- Locavore feels specific, human, and visibly less like an AI-generated template;
- the projects emphasize my decisions without hiding the tools that helped implement them;
- unsupported claims and invented process artifacts are gone;
- the strongest work can be understood quickly and rewards a deeper read;
- desktop and mobile versions are accessible and visually intentional;
- the complete site has been tested in the browser;
- the Git history is clean, reviewable, and verified against the deployed version.

## Immediate next action

Do not redesign the pages yet. First turn the recovered Smart Image Renamer history into the source table and case-study outline, then use the downloaded files in `design-references/` to develop two or three concrete visual directions. Those inputs will make the content architecture and implementation brief substantially more informed without repeating the investigation that is already complete.
