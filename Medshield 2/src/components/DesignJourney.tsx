import { Palette, Layout, ArrowRight } from 'lucide-react';

const designGoals = [
  'Create a professional, trustworthy healthcare aesthetic',
  'Minimize clicks for common tasks like patient lookup',
  'Build clear information hierarchy for complex data',
  'Design for desktop-first workflow (95% usage)',
  'Ensure minimal training required for new staff'
];

const designDecisions = [
  {
    decision: 'Dashboard-Centric Layout',
    rationale: 'Staff need an at-a-glance overview of daily operations',
    impact: 'Today\'s appointments, recent patients, and key stats visible immediately'
  },
  {
    decision: 'Card-Based UI',
    rationale: 'Medical data needs visual separation to reduce cognitive load',
    impact: 'Clear content organization with consistent patterns throughout'
  },
  {
    decision: 'Logo-Driven Color System',
    rationale: 'Build instant brand recognition and professional trust',
    impact: 'Primary blue (#0066CC) derived from Medshield logo creates cohesion'
  },
  {
    decision: 'Sidebar Navigation',
    rationale: 'Desktop users benefit from always-visible navigation',
    impact: 'Quick access to all sections without hunting through menus'
  },
  {
    decision: 'Light Theme',
    rationale: 'Healthcare environments require clear readability',
    impact: 'Clean, professional look with excellent contrast for data'
  }
];

const visualDesign = [
  {
    element: 'Color Coding',
    purpose: 'Blue for primary actions, red for destructive, green for success',
    why: 'Clear visual hierarchy guides users through safe operations'
  },
  {
    element: 'Typography',
    purpose: 'System fonts for performance, clear hierarchy for headings',
    why: 'Fast loading and familiar reading experience'
  },
  {
    element: 'Spacing',
    purpose: 'Generous padding, card separation, clean layouts',
    why: 'Reduces cognitive load when scanning patient data'
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
            build comprehensive features. The goal was to answer: "Can I design an interface that makes clinic management
            feel effortless and professional?"
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {designGoals.map((goal) => (
              <div key={goal} className="flex items-start gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The MVP */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3>Final MVP Design</h3>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full">Functional</span>
                </div>
                <p className="text-slate-700">A working prototype that validates core interaction patterns</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-blue-700 mb-3">Core Features</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Dashboard with daily overview</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Patient search and profiles</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Visual appointment calendar</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Secure login system</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-purple-700 mb-3">Design Patterns</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-purple-600">→</span>
                    <span>Sidebar navigation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">→</span>
                    <span>Card-based content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">→</span>
                    <span>Status badges and colors</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">→</span>
                    <span>Consistent form patterns</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-orange-700 mb-3">Scope Decisions</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-orange-600">✗</span>
                    <span>Billing (future)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600">✗</span>
                    <span>Clinical notes (future)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600">✗</span>
                    <span>Multi-location (future)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-blue-700">Core workflow validated</span>
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
                  <div className="bg-teal-50 border-l-4 border-teal-400 rounded-r p-3">
                    <div className="text-teal-900 mb-1">Impact on users</div>
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
            The MVP focuses on validating this simple, efficient workflow:
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center py-6">
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-blue-400 mb-1 print:text-blue-700">1. Login</div>
              <div className="print:text-slate-900">Secure access</div>
            </div>
            <ArrowRight className="text-blue-400 print:text-blue-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-blue-400 mb-1 print:text-blue-700">2. Dashboard</div>
              <div className="print:text-slate-900">Daily overview</div>
            </div>
            <ArrowRight className="text-blue-400 print:text-blue-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-blue-400 mb-1 print:text-blue-700">3. Patient</div>
              <div className="print:text-slate-900">Find or add</div>
            </div>
            <ArrowRight className="text-blue-400 print:text-blue-600" />
            <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg print:bg-white print:border-slate-300">
              <div className="text-blue-400 mb-1 print:text-blue-700">4. Schedule</div>
              <div className="print:text-slate-900">Book appointment</div>
            </div>
          </div>
          <p className="text-slate-300 print:text-slate-700">
            <span className="text-blue-400 print:text-blue-700">Every design decision supports this flow.</span> Rather than building
            10 half-finished features, I focused on making these core steps feel natural, fast, and professional.
          </p>
        </div>
      </div>
    </section>
  );
}