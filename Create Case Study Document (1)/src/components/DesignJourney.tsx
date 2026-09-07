import { Lightbulb, ArrowRight, Layers, Palette, Layout } from 'lucide-react';
import prototypeImage from 'figma:asset/4847f92f944cb602fcc7dbf2d6b475bc5074778c.png';

const designGoals = [
  'Generate descriptions for files that lack useful names',
  'Keep the source image beside the naming decision',
  'Inspect a suggestion before changing a path',
  'Record changes so they can be reversed',
  'Explore how naming rules fit existing folders'
];

const designDecisions = [
  {
    decision: 'Three-Panel Layout',
    rationale: 'Separates past actions (history), current state (preview), and context (image)',
    impact: 'I kept previous operations, the current task, and the image visible together so review had context'
  },
  {
    decision: 'Preview Before Commit',
    rationale: 'A plausible AI description can still be wrong; generating it should be separate from changing a file',
    impact: 'Shows what will change so the person can review it before acting'
  },
  {
    decision: 'Persistent History',
    rationale: 'Renaming changes how a file is found. I retained timestamps and original/new paths',
    impact: 'Undo reverses a recorded rename and redo reapplies it; missing files and occupied paths remain failure cases'
  },
  {
    decision: 'Visual File Preview',
    rationale: 'A proposed description is difficult to judge without the source image',
    impact: 'I placed the image in the review context so the person could compare it with the suggestion'
  },
  {
    decision: 'Selective Naming — Later Iteration',
    rationale: 'IMG_20250324_021115.png and GC6a9XkA3fQ9.jpg are candidates; wedding-first-dance.jpg and team-photo-office.jpg should be preserved',
    impact: 'The prototype heuristic uses filename patterns. Project codes, SKUs, dates, and client IDs can look machine-generated while still being meaningful; these examples express intent, not a measured pass rate'
  }
];

const visualDesign = [
  {
    element: 'Deterministic software',
    purpose: 'File selection, extension preservation, filename sanitization, preview state, history, undo and redo',
    why: 'These operations need predictable rules. A plausible model response is not permission to write to a path.'
  },
  {
    element: 'AI / vision model',
    purpose: 'Interpret image content and propose a concise description; later controls explore regenerating alternatives',
    why: 'Semantic interpretation is where AI adds value. It should not decide whether a file operation succeeded.'
  },
  {
    element: 'Naming conventions — later exploration',
    purpose: 'Separators, casing, custom instructions, and optional tags in settings',
    why: 'The same image description may need different formatting for a client folder, project code, or personal library.'
  }
];

export function DesignJourney() {
  return (
    <section id="build" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="w-6 h-6 text-purple-600" />
            <span className="text-purple-600 uppercase tracking-wider">Design Process</span>
          </div>
          <h2 className="mb-4">From Concept to MVP</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            I connected Gemini naming to real local files, then worked through the decisions around the resulting changes.
          </p>
        </div>

        {/* Design Goals */}
        <div className="mb-16 bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
          <h3 className="mb-6">Design Goals for the MVP</h3>
          <p className="text-slate-700 mb-6">
            I deliberately scoped the MVP to <span className="text-slate-900">explore core UX patterns</span> rather than
            build comprehensive features. The question was: "What should happen between generating a name and changing the file?"
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
                  <h3>First desktop prototype</h3>
                  <span className="px-3 py-1 bg-lime-500 text-white rounded-full">Implemented</span>
                </div>
                <p className="text-slate-700">Python build: history on the left, work area in the centre, image on the right. The visible terminal was development feedback while I debugged model and file operations.</p>
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
                    <span>Original and proposed names</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Processing feedback</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Terminal output during development</span>
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
                    <span className="text-lime-700">Core workflow implemented</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Design Decisions */}
        <div className="mb-16">
          <h3 className="mb-8">Key Design Decisions & Rationale</h3>
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
          <h3 className="mb-8">Where AI ends and software begins</h3>
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
          <h3 className="text-white mb-6 print:text-slate-900">The naming workflow</h3>
          <p className="text-slate-300 mb-6 print:text-slate-700">
            With Preview Mode enabled, the desktop flow separates the suggestion from the rename:
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center py-6">
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">1. Input</div>
              <div className="print:text-slate-900">Select or drop images</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">2. Generate / review</div>
              <div className="print:text-slate-900">Generate, sanitize, preview</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">3. Act</div>
              <div className="print:text-slate-900">Apply the proposed changes</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">4. Recover</div>
              <div className="print:text-slate-900">History → Undo / Redo</div>
            </div>
          </div>
          <p className="text-slate-300 print:text-slate-700">
            <span className="text-lime-400 print:text-lime-700">Preview is a mode, not a guarantee that every rename required approval.</span> The MVP could also process without preview. Later interface work made Accept and Regenerate distinct from Apply Changes: accepting a suggestion is a review decision; applying it is the file operation. I still need to test whether that distinction is clear.
          </p>
        </div>
      </div>
    </section>
  );
}
