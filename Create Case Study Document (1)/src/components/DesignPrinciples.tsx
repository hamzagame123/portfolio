import { Shield, Eye, Sliders, Zap } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every action must be reversible. Users need confidence that they can experiment without risk.',
    designDecisions: [
      'Full undo/redo system',
      'Persistent rename history',
      'File validation before operations',
      'Clear error messages'
    ],
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Show users what the AI is doing and why. No black boxes.',
    designDecisions: [
      'Preview names before applying',
      'Show original and new names side-by-side',
      'Visual feedback during processing',
      'History log with timestamps'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Sliders,
    title: 'User Control',
    description: 'AI suggests, but users decide. Never force automated actions.',
    designDecisions: [
      'Manual approval for each rename',
      'Ability to edit AI suggestions',
      'Option to skip certain files',
      'Customizable AI instructions'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Zap,
    title: 'Simplicity',
    description: 'Complex operations should feel effortless through thoughtful design.',
    designDecisions: [
      'Drag-and-drop interface',
      'Minimal learning curve',
      'Clear visual hierarchy',
      'Focus on core workflow'
    ],
    color: 'text-lime-600',
    bgColor: 'bg-lime-50'
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
