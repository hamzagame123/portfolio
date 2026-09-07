import { Brain, History, Shield, Zap, Settings2, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Naming',
    description: 'IMPLEMENTED — Gemini interprets the image and proposes a descriptive filename. The model can still be wrong.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Zap,
    title: 'Drag & Drop',
    description: 'IMPLEMENTED — File/folder selection and drag-and-drop bring images into the desktop workflow.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: History,
    title: 'Full History',
    description: 'IMPLEMENTED — Persistent rename history records timestamps and original/new paths for previous operations.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Shield,
    title: 'Preview mode',
    description: 'IMPLEMENTED — Preview allows suggestions to be inspected before renaming. Robust collision handling still needs hardening.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Settings2,
    title: 'Undo/Redo',
    description: 'IMPLEMENTED — Undo reverses a recorded rename; redo reapplies it. Moved, deleted, or conflicting paths can prevent recovery.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: FileCheck,
    title: 'Selective naming',
    description: 'LATER ITERATION — A filename heuristic explores skipping useful names. This is not a validated classifier or a guarantee.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">What the desktop MVP implemented</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            The core build worked with real files. Selective naming and richer controls came through later interface exploration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}