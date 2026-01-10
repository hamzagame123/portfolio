import { TrendingUp, Target, Award, Lightbulb, ArrowUpRight, Palette } from 'lucide-react';

const outcomes = [
  {
    icon: Target,
    metric: '4 weeks',
    label: 'Concept to Working MVP',
    description: 'Designed and validated core UX patterns in a focused sprint',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Award,
    metric: '40+',
    label: 'UI Components',
    description: 'Complete design system with reusable components',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: TrendingUp,
    metric: '5',
    label: 'Core Features',
    description: 'Dashboard, Patients, Appointments, Settings, Auth',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Palette,
    metric: 'MVP',
    label: 'Complete',
    description: 'Validated patterns ready for production',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

const designLearnings = [
  {
    title: 'Logo-Driven Design Works',
    insight: 'Deriving colors from the existing logo created instant brand cohesion and gave the project strong visual identity from day one. The primary blue (#0066CC) became the foundation of the entire design system.'
  },
  {
    title: 'Desktop-First Can Be Valid',
    insight: 'For B2B applications with known usage patterns, desktop-first is appropriate. Research showed 95% of tasks happen on desktop, so we prioritized that experience instead of forcing mobile-first.'
  },
  {
    title: 'Scope Discipline is Critical',
    insight: 'Intentionally excluding billing and clinical notes allowed focus on core functionality. Better to do less, well, than to build ten half-finished features that frustrate users.'
  },
  {
    title: 'Professional Aesthetics Signal Quality',
    insight: 'In healthcare, trust is paramount. The same functionality in a polished interface is perceived as more trustworthy than in basic UI. Visual design directly impacts perceived reliability.'
  },
  {
    title: 'Mock Data Quality Matters',
    insight: 'Realistic mock data made the app feel complete, improved testing, and helped identify edge cases early. Real-looking patient names and appointments revealed UX issues that placeholder data would have hidden.'
  }
];

const futureEnhancements = [
  {
    title: 'User Testing',
    description: 'Validate assumptions with real clinic staff to identify pain points I missed',
    priority: 'High'
  },
  {
    title: 'Billing Integration',
    description: 'Design billing workflows that integrate seamlessly with appointment completion',
    priority: 'High'
  },
  {
    title: 'Clinical Notes',
    description: 'Add treatment notes and medical history tracking with proper data security',
    priority: 'Medium'
  },
  {
    title: 'Multi-Location Support',
    description: 'Design patterns for clinics with multiple branches and shared patient records',
    priority: 'Medium'
  }
];

export function Results() {
  return (
    <section className="bg-slate-900 text-white py-20 print:bg-white print:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white print:text-slate-900">Results & Learnings</h2>
          <p className="max-w-2xl mx-auto text-slate-300 print:text-slate-600">
            What I accomplished and what I learned as a designer
          </p>
        </div>

        {/* Outcomes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="bg-slate-800 border border-slate-700 rounded-xl p-6 print:bg-white print:border-slate-300">
              <div className={`w-12 h-12 ${outcome.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <outcome.icon className={`w-6 h-6 ${outcome.color}`} />
              </div>
              <div className="text-3xl mb-2 print:text-slate-900">{outcome.metric}</div>
              <div className="text-blue-400 mb-2 print:text-blue-700">{outcome.label}</div>
              <p className="text-slate-300 print:text-slate-600">{outcome.description}</p>
            </div>
          ))}
        </div>

        {/* Design Learnings */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Lightbulb className="w-6 h-6 text-amber-400 print:text-amber-600" />
            <h3 className="text-white print:text-slate-900">Design Learnings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {designLearnings.map((learning, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-6 print:bg-slate-50 print:border-slate-300">
                <h4 className="text-blue-400 mb-3 print:text-blue-700">{learning.title}</h4>
                <p className="text-slate-300 print:text-slate-700">{learning.insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 mb-16 print:bg-slate-50 print:border-slate-300">
          <h3 className="mb-4 text-white print:text-slate-900">Reflection</h3>
          <div className="space-y-4 text-slate-300 print:text-slate-700">
            <p>
              <span className="text-white print:text-slate-900">This project taught me that great healthcare design is about building trust through every detail.</span> From
              the professional blue color palette to the clean card-based layouts, every element signals reliability
              and competence to users handling sensitive patient data.
            </p>
            <p>
              The most surprising insight was how much <span className="text-white print:text-slate-900">scope discipline improved the final product</span>. By
              intentionally excluding complex features like billing and clinical notes, I could focus 100% on making
              patient management and scheduling exceptional. The result is a focused tool that does its core job brilliantly.
            </p>
            <p>
              If I were to start over, I would <span className="text-white print:text-slate-900">involve users earlier in the design process</span>. While I
              iterated based on research and design principles, formal usability testing with actual clinic staff would have
              validated decisions with real evidence instead of assumptions.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <ArrowUpRight className="w-6 h-6 text-blue-400 print:text-blue-600" />
            <h3 className="text-white print:text-slate-900">Next Design Iterations</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {futureEnhancements.map((step, index) => (
              <div key={index} className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 print:bg-blue-50 print:border-blue-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-blue-400 print:text-blue-700">{step.title}</h4>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm print:bg-blue-200 print:text-blue-800">{step.priority}</span>
                </div>
                <p className="text-slate-300 print:text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400 print:text-slate-600">
              The validated MVP provides a foundation for these enhancements. Each addition would be designed
              with the same principles: trust, clarity, efficiency, and simplicity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}