# Smart Image Renamer — Phase 1 evidence inventory

This is the source-of-truth sheet for rewriting the Smart Image Renamer case study. It separates observed artifacts from interpretation and keeps authorship claims conservative.

## Chronology

| Period / artifact | What it establishes | Confidence | Portfolio use |
| --- | --- | --- | --- |
| March 23–24, 2025 material and Git context | A working Python image renamer existed and was later backed up as a project. The original source is not present in the currently inspected `C:\Users\HAMZA\image_renamer` folder. | Probable / partially confirmed | Describe as the earliest known functional stage; do not imply the exact UI-making conversation has been recovered. |
| `C:\Users\HAMZA\image_renamer\.specstory\.what-is-this.md` | The folder was captured by Cursor's SpecStory workflow. Its history folder is empty except for documentation. | Confirmed | “The project history was captured through Cursor.” Do not name GPT or Claude without a direct record. |
| `C:\Users\HAMZA\smart-image-renamer` (September 2025) | A later Next.js/Cursor artifact containing `BarebonesRenamerUI.tsx` and two SpecStory sessions. | Confirmed | Treat as a later interface snapshot, not proof of the March implementation. |
| `2025-09-19_22-01-48Z-fix-everything-so-i.md` | The complete interface was supplied to Codex/GPT-5 to make it run. The structure therefore predates that repair session. | Confirmed | Use this as evidence that Codex repaired a pre-existing interface rather than inventing its product model. |
| `2025-09-21_11-30-47Z-run-this.md` | A later run session for the Next.js version; no Tkinter/Python origin evidence. | Confirmed | Keep separate from the desktop/Tkinter origin question. |
| Portfolio web version under `Create Case Study Document (1)\smartrenamer-web` | Browser implementation using Gemini for image analysis and downloading renamed copies. | Confirmed for web version | Present as a later web direction and distinguish it from editing originals in place. |

## Confirmed interface decisions

| Decision / behavior | Evidence | Safe public wording |
| --- | --- | --- |
| Renaming became a review workflow | History list with original name, proposed name, tags, timestamp, and thumbnail | “I shaped renaming as a review step: inspect a proposal, accept or regenerate it, then apply changes.” |
| AI generation is separate from filesystem action | `Preview Mode`, disabled `Apply Changes`, and explicit Accept/Regenerate controls | “AI suggestions are not treated as permission to modify files; the user reviews before applying.” |
| Visual verification matters | Dedicated preview area with image context, timestamp, original/proposed names, and tags | “The proposal is judged beside the image, rather than as an isolated string.” Do not claim validated accuracy. |
| The previous state stays visible | Original and proposed names are shown together | “The old and proposed names remain visible so the change can be checked in context.” |
| Recoverability is part of the product | History list, search, Undo, Redo, and Clear History | “I designed for recoverability with visible history and reversal controls.” Do not claim user-tested success. |
| AI should be selective | `isGibberish()` heuristic and “skip files with normal names” setting | “The prototype targets likely camera-code or otherwise unhelpful names while leaving descriptive names alone.” The heuristic was not validated. |
| Naming needs to fit the user's filing habits | Separator, casing, custom instruction, tagging, and tag-preset controls | “I separated semantic interpretation from filename formatting so the result could fit an existing convention.” |
| Complexity is progressive | Main view focuses on input/history/preview; automation and rules live in Settings | “The core flow stays focused while automation, naming rules, and tagging remain available in Settings.” |
| The workflow was conceived beyond one file | Select Folder, Select Files, and explored watched-folder settings | “I explored both one-off selection and an ongoing folder workflow.” Say explored—not implemented—for folder watching. |
| Desktop utility, not consumer AI spectacle | Dense toolbar, dark charcoal panes, compact controls, soft-green action/state emphasis | “The visual system follows a practical desktop utility organized around action and state.” |

## Claims to exclude or qualify

- Do not say the original March UI was written by GPT or Claude. The current evidence supports Cursor/SpecStory capture, but not the underlying model.
- Do not describe the September Next.js artifact as the origin of the Tkinter interface.
- Do not claim tested performance at hundreds or thousands of files. The product was conceived for batches, but no benchmark was recovered.
- Do not turn the “3 interviews,” “5 tests,” “92% task completion,” percentages, or user quotes into findings. The portfolio source itself marks testing as unfinished, and the later metrics were added as enhancement material without underlying records.
- Do not imply folder watching or filename heuristics were validated in use.
- Keep “Gemini analyzed images” separate from “Gemini/GPT/Claude wrote the product.”

## Case-study outline

### 1. The technical question

Can an image model understand a picture well enough to suggest a useful filename?

Show the earliest known working stage carefully, with an explicit note when the exact source or date is uncertain.

### 2. The product question

Once a model can suggest a name, how can it act on real files without making the user feel that control has disappeared?

This is the pivot from a rename action to a review workflow.

### 3. The workflow I shaped

`select files → generate proposals → inspect image + names → accept/regenerate → apply changes → retain history → undo if needed`

Use the September UI as evidence of the interaction model, while labelling it as a later snapshot.

### 4. Decisions that made the workflow trustworthy

- separate proposal from application;
- put visual context beside the filename decision;
- keep original and proposed states visible;
- make changes recoverable;
- skip AI where a filename is already useful;
- let naming output fit existing conventions;
- keep advanced automation behind Settings.

### 5. Expansion and limits

Explain the move toward folders, watched locations, tags, and batch thinking as explored product direction. Be clear about what was implemented, what was a concept, and what was not validated.

### 6. Later web direction

Show how the browser version translated the workflow and used Gemini for image analysis. Explain that it downloads renamed copies rather than silently editing originals in place.

### 7. Reflection

The strongest reflection is not “I used AI to build an AI tool.” It is:

> I learned that the difficult design problem was not generating a plausible answer. It was making the answer inspectable, controllable, convention-aware, and reversible when it touched a person's files.

## Phase 1 status

- Evidence inventory: complete.
- Confirmed versus inferred claims: separated.
- Case-study outline: complete.
- Exact original Tkinter-making conversation: not recovered in the inspected folders.
- External DESIGN.md reference set: downloaded under `design-references/`.
- Next phase: use this inventory and the downloaded references to develop two concrete visual directions before editing the live case-study pages.

