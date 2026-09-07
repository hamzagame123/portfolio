import { Shield, Eye, Sliders, Zap } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Preserve the previous state and make recovery visible when a rename changes a file.',
    designDecisions: [
      'Visible undo/redo controls',
      'Persistent rename history',
      'Original names retained for reference',
      'A distinct Apply Changes action'
    ],
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Show the proposed result in context so a person can judge it.',
    designDecisions: [
      'Preview names before applying',
      'Show original and new names side-by-side',
      'Image beside the proposed name',
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
      'Accept or regenerate suggestions',
      'Option to skip certain files',
      'Customizable AI instructions'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Zap,
    title: 'Simplicity',
    description: 'Keep the main view focused on the naming decision; put advanced rules in Settings.',
    designDecisions: [
      'Drag-and-drop interface',
      'Naming conventions in Settings',
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
            The priorities I used to shape the review workflow.
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
