import { Lightbulb, ArrowRight, Layers, Palette, Layout } from 'lucide-react';
import prototypeImage from 'figma:asset/4847f92f944cb602fcc7dbf2d6b475bc5074778c.png';

const designGoals = [
  'Make AI automation feel trustworthy, not unpredictable',
  'Provide complete control while minimizing manual effort',
  'Create immediate value with minimal learning curve',
  'Build safety into every interaction',
  'Design for real user workflows, not hypothetical ones'
];

const designDecisions = [
  {
    decision: 'Three-Panel Layout',
    rationale: 'Separates past actions (history), current state (preview), and context (image)',
    impact: 'Users can see what happened, what will happen, and verify accuracy, all at once'
  },
  {
    decision: 'Preview Before Commit',
    rationale: 'Users fear automated tools breaking their files',
    impact: 'Builds trust by showing exactly what will change before any action occurs'
  },
  {
    decision: 'Persistent History',
    rationale: 'Users need to track what changed and when, especially days later',
    impact: 'Creates accountability and enables learning from AI suggestions over time'
  },
  {
    decision: 'Visual File Preview',
    rationale: 'Filenames are meaningless without seeing the actual image',
    impact: 'Users can verify AI accuracy instantly: "Is this actually a sunset beach photo?"'
  },
  {
    decision: 'Dark Theme',
    rationale: 'Photographers work long hours editing and organizing files',
    impact: 'Reduces eye strain and signals professional tool quality'
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
    why: 'Reduces cognitive load when scanning rename history'
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
          <h2 className="mb-4">From Concept to MVP</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            How I translated user needs and design principles into a working interface
          </p>
        </div>

        {/* Design Goals */}
        <div className="mb-16 bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
          <h3 className="mb-6">Design Goals for the MVP</h3>
          <p className="text-slate-700 mb-6">
            I deliberately scoped the MVP to <span className="text-slate-900">validate core UX patterns</span> rather than 
            build comprehensive features. The goal was to answer: "Can I design an interface that makes AI file management 
            feel safe and effortless?"
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
                  <h3>Final MVP Design</h3>
                  <span className="px-3 py-1 bg-lime-500 text-white rounded-full">Functional</span>
                </div>
                <p className="text-slate-700">A working prototype that validates core interaction patterns</p>
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
                    <span>Dark UI for long sessions</span>
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
                    <span className="text-lime-700">Core workflow validated</span>
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
                    <div className="text-lime-900 mb-1">Impact on users</div>
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
            The MVP focuses on validating this simple, safe workflow:
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center py-6">
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">1. Input</div>
              <div className="print:text-slate-900">Drag files in</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">2. Review</div>
              <div className="print:text-slate-900">Preview AI suggestions</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">3. Act</div>
              <div className="print:text-slate-900">Apply renames safely</div>
            </div>
            <ArrowRight className="text-lime-400 print:text-lime-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-lime-400 mb-1 print:text-lime-700">4. Verify</div>
              <div className="print:text-slate-900">Undo if needed</div>
            </div>
          </div>
          <p className="text-slate-300 print:text-slate-700">
            <span className="text-lime-400 print:text-lime-700">Every design decision supports this flow.</span> Rather than building 
            10 half-finished features, I focused on making these four steps feel natural, safe, and trustworthy.
          </p>
        </div>
      </div>
    </section>
  );
}