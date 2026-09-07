import { Shield, Eye, Sliders, Zap } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Recovery is part of the workflow',
    description: 'I kept previous names available so a bad suggestion would not have to become a permanent decision. Recovery still depends on the files being available.',
    designDecisions: [
      'Desktop MVP: undo and redo',
      'Persistent rename history',
      'Original and new paths retained',
      'Collision and missing-file handling need hardening'
    ],
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Eye,
    title: 'Review before action',
    description: 'The image and proposed name belong together. Preview provides a chance to inspect the result before a real rename.',
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
    title: 'Selective automation',
    description: 'Later interaction work asked whether AI should intervene at all. A useful existing name should be left alone.',
    designDecisions: [
      'Later iteration: skip-normal-names setting',
      'Later iteration: Accept / Regenerate controls',
      'Prototype filename-pattern heuristic',
      'Heuristic accuracy remains untested'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Zap,
    title: 'Fit existing naming habits',
    description: 'Later settings explored formatting the same description to fit a person’s filing system. These controls are not all part of the desktop MVP.',
    designDecisions: [
      'Separator and casing choices',
      'Custom naming instructions',
      'Optional tags and presets',
      'Folder watching remains a future direction'
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
            How the working MVP and later interface explorations approached control
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
