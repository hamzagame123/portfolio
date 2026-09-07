import { Lightbulb, ArrowRight, Layers, Palette, Layout } from 'lucide-react';
import prototypeImage from 'figma:asset/4847f92f944cb602fcc7dbf2d6b475bc5074778c.png';

const designGoals = [
  'Make a suggestion inspectable before it changes a file',
  'Keep approval and recovery visible in the main workflow',
  'Use AI selectively, where a filename gives little information',
  'Let naming output fit an existing filing convention',
  'Keep advanced rules outside the main review step'
];

const designDecisions = [
  {
    decision: 'Three-Panel Layout',
    rationale: 'The desktop capture separates history, file input, and the image. The later exploration refines this into history, preview, and queue.',
    impact: 'Keeps the current naming decision visible without losing the surrounding file workflow'
  },
  {
    decision: 'Preview Before Commit',
    rationale: 'A generated description can be plausible and still be wrong. I separated Preview Mode and Apply Changes, with Accept / Regenerate controls in the later source.',
    impact: 'A model’s suggestion becomes something to approve, rather than permission to change a file'
  },
  {
    decision: 'Persistent History',
    rationale: 'Once a filename changes, the old name can disappear from view. I kept original and proposed names together and designed history with Undo / Redo.',
    impact: 'Makes a change inspectable after the action and provides a visible route toward reversal'
  },
  {
    decision: 'Visual File Preview',
    rationale: 'Judging a filename in isolation means opening the image again. I placed the preview beside the naming information.',
    impact: 'The image, original name, proposal, and tags can be checked in the same context'
  },
  {
    decision: 'Skip Names That Already Work',
    rationale: 'Running every file through AI creates unnecessary changes. I added a setting to skip normal names and a heuristic for likely camera-code or unhelpful filenames.',
    impact: 'Targets the files most likely to need a new name. The heuristic still needs testing for false matches.'
  },
  {
    decision: 'Separate Meaning from Formatting',
    rationale: 'An image can have the same meaning but need a different filename in another filing system. I exposed separators, casing, custom instructions, and tag presets.',
    impact: 'The proposed description can fit an existing convention instead of imposing a new one.'
  },
  {
    decision: 'Move Advanced Rules into Settings',
    rationale: 'Naming rules and watched-folder options matter beyond a single rename, but compete with the immediate decision. I moved them into Settings.',
    impact: 'The main view stays focused on input, history, preview, and approval. Folder watching remains an explored direction.'
  }
];

const visualDesign = [
  {
    element: 'Color Coding',
    purpose: 'Lime green for actions, red for warnings, neutral grays for content',
    why: 'Clear visual hierarchy guides users through safe operations'
  },
  {
    element: 'Typography',
    purpose: 'Monospace for filenames, sans-serif for UI text',
    why: 'Differentiates code/filenames from human-readable content'
  },
  {
    element: 'Spacing',
    purpose: 'Generous padding, clear panel separation',
    why: 'Groups related controls and separates records for scanning'
  }
];

export function DesignJourney() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="w-6 h-6 text-purple-600" />
            <span className="text-purple-600 uppercase tracking-wider">Design Process</span>
          </div>
          <h2 className="mb-4">How I Shaped the Review Workflow</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            The interface decisions that turned a generated filename into something a person could inspect and act on
          </p>
        </div>

        {/* Design Goals */}
        <div className="mb-16 bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
          <h3 className="mb-6">From the Task to the Interface</h3>
          <p className="text-slate-700 mb-6">
            The tool began with a practical sequence: look at an image, decide on a name, and change the file. I used those <span className="text-slate-900">decisions inside the task</span> to shape the interface. Generating a name became one step within a workflow, with inspection before it and a record after it.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {designGoals.map((goal) => (
              <div key={goal} className="flex items-start gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The MVP */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-xl p-8 border-2 border-lime-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3>Desktop Prototype</h3>
                  <span className="px-3 py-1 bg-lime-500 text-white rounded-full">Functional</span>
                </div>
                <p className="text-slate-700">Existing desktop capture, with a November 2025 history entry; not a screenshot of the original March version</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6 border-2 border-lime-300">
              <img
                src={prototypeImage}
                alt="MVP interface showing three-panel layout with rename history, file controls, and image preview"
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lime-700 mb-3">UX Features</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-lime-600">✓</span>
                    <span>Drag-and-drop workflow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-600">✓</span>
                    <span>Visual preview before action</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-600">✓</span>
                    <span>Complete rename history</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-600">✓</span>
                    <span>Undo/redo functionality</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-blue-700 mb-3">Design Patterns</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Three-panel information hierarchy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Progressive disclosure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Immediate visual feedback</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Subdued canvas around images</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-purple-700 mb-3">Scope Decisions</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-purple-600">✗</span>
                    <span>Folder watching (future)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">✗</span>
                    <span>Tag system (future)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">✗</span>
                    <span>Batch operations UI (future)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-600">✓</span>
                    <span className="text-lime-700">Core workflow prototyped</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Design Decisions */}
        <div className="mb-16">
          <h3 className="mb-8">The Decisions Behind the Controls</h3>
          <p className="text-slate-600 mb-6">These explanations connect the recovered controls to the workflow I was shaping. They are a retrospective account of design decisions, not user-research findings.</p>
          <div className="space-y-6">
            {designDecisions.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-slate-900 mb-4">{item.decision}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r p-3">
                    <div className="text-blue-900 mb-1">Why this decision?</div>
                    <p className="text-slate-700">{item.rationale}</p>
                  </div>
                  <div className="bg-lime-50 border-l-4 border-lime-400 rounded-r p-3">
                    <div className="text-lime-900 mb-1">Intended effect</div>
                    <p className="text-slate-700">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Design System */}
        <div className="mb-12">
          <h3 className="mb-8">Visual Design Decisions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {visualDesign.map((item) => (
              <div key={item.element} className="bg-white border-2 border-slate-200 rounded-xl p-6">
                <h4 className="mb-3 text-purple-700">{item.element}</h4>
                <div className="mb-3">
                  <div className="text-slate-600 mb-1">What:</div>
                  <p className="text-slate-700">{item.purpose}</p>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Why:</div>
                  <p className="text-slate-700">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core User Flow */}
        <div className="bg-slate-900 border-2 border-slate-800 rounded-xl p-8 text-white print:bg-slate-50 print:border-slate-300 print:text-slate-900">
          <h3 className="text-white mb-6 print:text-slate-900">The Core User Flow</h3>
          <p className="text-slate-300 mb-6 print:text-slate-700">
            The intended review sequence connects selection, generation, approval, and recovery:
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center py-6">
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">1. Input</div>
              <div className="print:text-slate-900">Select files</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">2. Review</div>
              <div className="print:text-slate-900">Generate, inspect, accept / regenerate</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">3. Act</div>
              <div className="print:text-slate-900">Apply reviewed changes</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">4. Verify</div>
              <div className="print:text-slate-900">Retain history; undo if needed</div>
            </div>
          </div>
          <p className="text-slate-300 print:text-slate-700">
            <span className="text-lime-400 print:text-lime-700">Every design decision supports this flow.</span> The important handoffs stay explicit: a file enters the workflow, a suggestion is reviewed, a change is applied, and its previous state stays available.
          </p>
        </div>
      </div>
    </section>
  );
}
