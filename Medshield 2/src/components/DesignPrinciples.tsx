import { Shield, Eye, Sliders, Zap } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Healthcare software must feel secure and professional. Every element should communicate reliability.',
    designDecisions: [
      'Clean, professional visual design',
      'Consistent UI patterns',
      'Clear data validation feedback',
      'Secure authentication flow'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Eye,
    title: 'Clarity',
    description: 'Medical data is complex. Present information with clear hierarchy and immediate comprehension.',
    designDecisions: [
      'Cards for content organization',
      'Progressive disclosure of details',
      'Visual separation of sections',
      'Scannable data tables'
    ],
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Sliders,
    title: 'Efficiency',
    description: 'Staff work under time pressure. Every interaction should be optimized for speed.',
    designDecisions: [
      'Instant search functionality',
      'Minimal clicks to complete tasks',
      'Quick action buttons',
      'Keyboard shortcuts support'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Zap,
    title: 'Simplicity',
    description: 'Reduce cognitive load through thoughtful design. Complex operations should feel effortless.',
    designDecisions: [
      'Intuitive navigation structure',
      'Minimal learning curve',
      'Consistent visual language',
      'Focus on core workflows'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

export function DesignPrinciples() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Design Principles</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Core principles that guided every design decision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle) => (
            <div key={principle.title} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${principle.bgColor} rounded-lg flex items-center justify-center`}>
                  <principle.icon className={`w-6 h-6 ${principle.color}`} />
                </div>
                <h3>{principle.title}</h3>
              </div>

              <p className="text-slate-700 mb-6">{principle.description}</p>

              <div>
                <div className="text-slate-900 mb-3">How this informed design:</div>
                <ul className="space-y-2">
                  {principle.designDecisions.map((decision, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-600">
                      <span className={`${principle.color} mt-1`}>→</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
